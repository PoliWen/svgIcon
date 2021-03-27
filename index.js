import iconCategory from './src/iconCom/iconCategory.vue'
import iconCircleClose from './src/iconCom/iconCircleClose.vue'
import iconClose from './src/iconCom/iconClose.vue'
import iconDownArrow from './src/iconCom/iconDownArrow.vue'
import iconGotoTop from './src/iconCom/iconGotoTop.vue'
import iconHeart from './src/iconCom/iconHeart.vue'
import iconIconPhone from './src/iconCom/iconIconPhone.vue'
import iconLeftArrow from './src/iconCom/iconLeftArrow.vue'
import iconRightArrow from './src/iconCom/iconRightArrow.vue'
import iconSearch from './src/iconCom/iconSearch.vue'
import iconFilter from './src/iconCom/iconFilter.vue'
import iconShare from './src/iconCom/iconShare.vue'
import iconSort from './src/iconCom/iconSort.vue'
import iconUpArrow from './src/iconCom/iconUpArrow.vue'
import iconUserCenter from './src/iconCom/iconUserCenter.vue'

const tw591SVGIcon = {
    iconCategory,
    iconCircleClose,
    iconClose,
    iconDownArrow,
    iconGotoTop,
    iconHeart,
    iconIconPhone,
    iconLeftArrow,
    iconRightArrow,
    iconSearch,
    iconFilter,
    iconShare,
    iconSort,
    iconUpArrow,
    iconUserCenter
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
    ...tw591SVGIcon
}

export default API // 通过插件单独引入