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
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const iconfontCss = require('gulp-iconfont-css');
const beautifyjs = require('gulp-beautify');
const svgSprite = require('gulp-svg-sprite');

const svgmin = require('gulp-svgmin');

let {
    iconCon
} = require('./config');

const fontDir = path.join(__dirname, '../font/fonts');
const vueComDir = path.join(__dirname, '../src/iconCom'); //字体组件库路径
const svgDir = path.join(__dirname, '../svgMin/'); //svg
const vueComTpl = path.join(__dirname, './template/vueCom.tpl');
const fontLessTpl = path.join(__dirname, './template/fontLess.tpl');

const formats = ['ttf', 'woff', 'woff2'];
const fontName = '591SvgIcon'

//首字母大小
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 创建vue组件
task('buildVueCom', done => {
    iconCon.forEach(item => {
        src(vueComTpl)
            .pipe(through.obj(function (file, encode, cb) {
                let result = file.contents.toString()

                let svgTpl = fs.readFileSync(`${svgDir}${item}.svg`)
                svgTpl = svgTpl.toString()
                svgTpl = cleanSvgTpl(svgTpl)

                result = result.replace('<%= svgTpl %>', svgTpl)
                file.contents = Buffer.from(result)
                this.push(file)
                cb()
            }))
            .pipe(rename(`icon${capitalize(item)}.vue`))
            .pipe(dest(vueComDir))
    })
    done()
})


/**
 * 压缩svg
 */
task('svgClean', done => {
    return src('../svgSource/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(dest('../svgMin'));
    done()
})

/**
 * 清洗svg模板
 */
function cleanSvgTpl(svgTpl) {
    let str = svgTpl.replace(/<\?xml.*.dtd">/g, "")
    str = str.replace(/(width=".*?")/g, ":width='size'")
    str = str.replace(/(height=".*?")/g, ":height='size'")
    str = str.replace(/(xmlns.*svg")/g, '')
    str = str.replace(/fill="#.{0,6}"/g, ':fill="fill"')
    return str
}

//更新npm 安装包js installjs
task('updateInstallJs', done => {
    src('./template/entryIndexjs.tpl')
        .pipe(through.obj(function (file, encode, cb) {
            let result = file.contents.toString()
            let importCom = ''

            let iconComCon = iconCon.map(item => {
                return `icon${capitalize(item)}`
            })
            console.log(iconComCon)

            iconComCon.forEach(item => {
                importCom += `import ${item} from './src/iconCom/${item}.vue'\n`
            })

            let tw591SVGIcon = `
                const tw591SVGIcon = {
                    ${iconComCon}
                }
            `
            result = importCom + tw591SVGIcon + result
            file.contents = Buffer.from(result)
            this.push(file)
            cb()
        }))
        .pipe(rename('index.js'))
        .pipe(beautifyjs())
        .pipe(dest('../'))
    done()
})

//更新App.vue 生成demo演示文件
task('buildDemo', done => {
    src('./template/appDemo.tpl')
        .pipe(through.obj(function (file, encode, cb) {
            let result = file.contents.toString()

            let iconComCon = iconCon.map(item => {
                return `icon${capitalize(item)}`
            })
            console.log(iconComCon)

            let importCom = ''
            iconComCon.forEach(item => {
                importCom += `import ${item} from './iconCom/${item}.vue'\n`
            })

            let demoHtml = ''
            iconComCon.forEach(item => {
                demoHtml += `<li>
                    <span class="tw591-icon">
                        <${item} />
                    </span>
                    <span class="icon-name">${item}</span>
                </li>\n`
            })

            result = result.replace('<%= svgDemoHtml =%>', demoHtml)
            result = result.replace('<%= importSvgCom =%>', importCom)
            result = result.replace('<%= svgComConfig =%>', iconComCon)
            file.contents = Buffer.from(result)
            this.push(file)
            cb()
        }))
        .pipe(rename('App.vue'))
        .pipe(dest('../src/'))
    done()
})

/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs(glyph) {
    return {
        name: glyph.name,
        codepoint: glyph.unicode[0].charCodeAt(0)
    }
}


// generate font from svg && build iconFont.less
function font() {
    return src([`${svgDir}/*.svg`])
        .pipe(
            iconfontCss({
                fontName: fontName,
                path: fontLessTpl,
                targetPath: path.join(__dirname, '../font/css/iconFont.css'),
                normalize: true,
                firstGlyph: 0xf000,
                cssClass: fontName // this is a trick to pass fontName to template
            })
        )
        .pipe(
            iconfont({
                fontName,
                formats,
            })
        )
        .on('glyphs', (glyphs) => {
            const options = {
                className: 'icon',
                fontCssName: 'iconFont',
                fontName,
                glyphs: glyphs.map(mapGlyphs)
            }
            src(`./template/fontDemo.tpl`)
                .pipe(consolidate('lodash', options))
                .pipe(rename('index.html'))
                .pipe(dest('../font/'))
        })
        .pipe(dest(fontDir))
}

//generate svgSprite
const SvgConfig = {
    mode: {
        symbol: true // Activate the «symbol» mode
    }
}

function genSvgSprite() {
    return src(`${svgDir}/*.svg`)
        .pipe(svgSprite(SvgConfig))
        .pipe(dest(fontDir));
}


task('sketch', done => {
    src('../src/assets/*.sketch')
        .pipe(sketch({
            export: 'slices',
            formats: 'png'
        }))
        .pipe(dest('../src/font/sketchSvg/'));
    done()
});

//gulp.series 是串行，gulp.parallel是并行
task('default', series('svgClean', 'buildVueCom',
    parallel('updateInstallJs', 'buildDemo'),
    font,
    genSvgSprite
))