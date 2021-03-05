import close from './src/components/close'
import leftArrow from './src/components/leftArrow'
import camera from './src/components/camera'
const tw591SVGIcon = {
  'close':close,
  'leftArrow':leftArrow,
  'camera':camera
}

const install = function(Vue) {
  if (install.installed) return
  Object.keys(tw591SVGIcon).forEach(key => {
    Vue.component(key, tw591SVGIcon[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // 通过use方式全部引入
}

const API = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,

  // 以下是具体的组件列表
  close,
  leftArrow
}

export default API // 通过插件单独引入
