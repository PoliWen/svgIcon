/**
 * @desc:   根据模板构建vue组件
 * @author: wenxiaoli<10800>
 * @create: 2021-03-05 13:54:55
 */
const { src, dest , series} = require('gulp');
const fs = require('fs-extra');
const path = require('path');
const replace = require('gulp-replace')
const rename = require('gulp-rename')

const srcDir = path.join(__dirname, '../src/font');
const vueComDir = path.join(__dirname, '../src/com');
const svgDir = path.join(__dirname, '../svgSource');

console.log(svgDir);
const template = path.join(__dirname, 'template.tpl');
console.log(template)
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const formats = ['ttf', 'woff', 'woff2'];
const fontName = '591SvgIcon'

//https://blog.csdn.net/qq20004604/article/details/78398859
function copyReplace() {
  return src([`${svgDir}/*.svg`])
    .pipe(replace('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg',"<svg :width='size' :height='size'"))
    .pipe(replace('<path',"<path :fill='fill'"))
    .pipe(ejs())
    .pipe(rename({
        extname:'.vue'
    }))
    .pipe(dest(vueComDir))
    .pipe(dest(vueComDir))
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

// 创建vue组件
function createVueCom(){

}

exports.default = series(font,copyReplace);
