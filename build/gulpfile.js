/**
 * @desc:   根据模板构建vue组件
 * @author: wenxiaoli<10800>
 * @create: 2021-03-05 13:54:55
 */
const {task,src,series,parallel,dest} = require('gulp');
const path = require('path');
const fs = require('fs')
const rename = require('gulp-rename')
const through = require('through2')
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const beautifyjs = require('gulp-beautify')
let { iconCon } = require('./config')

const fontDir = path.join(__dirname, '../src/font');
const vueComDir = path.join(__dirname, '../src/iconCom'); //字体组件库路径
const svgDir = path.join(__dirname, '../svgSource/'); //svg
const iconFontTpl = path.join(__dirname, 'iconFont.tpl');
const fontLessTpl = path.join(__dirname, 'fontLess.tpl');

const formats = ['ttf', 'woff', 'woff2'];
const fontName = '591SvgIcon'

//首字母大小
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 创建vue组件
task('buildVueCom', done => {
    iconCon.forEach(item => {
        src(iconFontTpl)
            .pipe(through.obj(function (file, encode, cb) {
                let result = file.contents.toString()

                let svgTpl = fs.readFileSync(`${svgDir}${item}.svg`)
                svgTpl = svgTpl.toString()
                svgTpl = cleanSvgTpl(svgTpl)

                result = result.replace('<%= svgTpl %>', svgTpl)
                file.contents = new Buffer(result)
                this.push(file)
                cb()
            }))
            .pipe(rename(`icon${capitalize(item)}.vue`))
            .pipe(dest(vueComDir))
            .pipe(dest(vueComDir))
    })
    done()
})


//更新npm 安装包js installjs
task('updateInstallJs',done=>{
    src('./index.tpl')
    .pipe(through.obj(function (file, encode, cb) {
        let result = file.contents.toString()
        let importCom = ''
        
        let iconComCon = iconCon.map(item => {
            return `icon${capitalize(item)}`
        })

        iconComCon.forEach(item=>{
            importCom+=`import ${item} from './src/iconCom/${item}.vue'\n`
        })

        let tw591SVGIcon=`
            const tw591SVGIcon = {
                ${iconComCon}
            }
        `
        result = importCom + tw591SVGIcon + result
        file.contents = new Buffer(result)
        this.push(file)
        cb()
    }))
    .pipe(rename('index.js'))
    .pipe(beautifyjs())
    .pipe(dest('../'))
    done()
})

/**
 * 清洗svg模板
 */
function cleanSvgTpl(svgTpl) {
    let str = svgTpl.replace(/^(<\?.*)px"/g, "<svg :width='size' :height='size'")
    str = str.replace(/fill.*d/, ":fill='fill' d")
    return str
}

// generate font from svg && build index.less
function font() {
    return src([`${svgDir}/*.svg`])
        .pipe(
            iconfontCss({
                fontName: fontName,
                path: fontLessTpl,
                targetPath: path.join(__dirname, '../src/font/index.css'),
                normalize: true,
                firstGlyph: 0xf000,
                cssClass: fontName // this is a trick to pass fontName to template
            })
        )
        .pipe(
            iconfont({
                fontName,
                formats
            })
        )
        .pipe(dest(fontDir));
}

task('default', series(parallel('buildVueCom','updateInstallJs'), font));