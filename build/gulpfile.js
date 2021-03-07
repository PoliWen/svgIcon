/**
 * @desc:   根据模板构建vue组件
 * @author: wenxiaoli<10800>
 * @create: 2021-03-05 13:54:55
 */
const {
    task,
    src,
    series,
    parallel,
    dest
} = require('gulp');
const path = require('path');
const fs = require('fs')
const rename = require('gulp-rename')
const through = require('through2')
const {
    iconCon
} = require('./config')


const srcDir = path.join(__dirname, '../src/font');
const vueComDir = path.join(__dirname, '../src/com');
const svgDir = path.join(__dirname, '../svgSource/');
const iconFontTpl = path.join(__dirname, 'iconFont.tpl');

const template = path.join(__dirname, 'template.tpl');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const formats = ['ttf', 'woff', 'woff2'];
const fontName = '591SvgIcon'

// 创建vue组件
task('buildVueCom', done => {
    console.log(iconCon);

    iconCon.forEach(item => {
        console.log(item);
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
            .pipe(rename(item + '.vue'))
            .pipe(dest(vueComDir))
            .pipe(dest(vueComDir))
    })
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
                path: template,
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
        .pipe(dest(srcDir));
}

task('default', series(parallel('buildVueCom'), font));