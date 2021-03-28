<template>
	<div id="app">
		<h1>{{ title }}</h1>

		<ul class="icon-wrap">
			<li>
                    <span class="tw591-icon">
                        <iconCategory />
                    </span>
                    <span class="icon-name">iconCategory</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconCircleClose />
                    </span>
                    <span class="icon-name">iconCircleClose</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconClose />
                    </span>
                    <span class="icon-name">iconClose</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconDownArrow />
                    </span>
                    <span class="icon-name">iconDownArrow</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconGotoTop />
                    </span>
                    <span class="icon-name">iconGotoTop</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconHeart />
                    </span>
                    <span class="icon-name">iconHeart</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconIconPhone />
                    </span>
                    <span class="icon-name">iconIconPhone</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconLeftArrow />
                    </span>
                    <span class="icon-name">iconLeftArrow</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconRightArrow />
                    </span>
                    <span class="icon-name">iconRightArrow</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconSearch />
                    </span>
                    <span class="icon-name">iconSearch</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconFilter />
                    </span>
                    <span class="icon-name">iconFilter</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconShare />
                    </span>
                    <span class="icon-name">iconShare</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconSort />
                    </span>
                    <span class="icon-name">iconSort</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconUpArrow />
                    </span>
                    <span class="icon-name">iconUpArrow</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconUserCenter />
                    </span>
                    <span class="icon-name">iconUserCenter</span>
                </li>
<li>
                    <span class="tw591-icon">
                        <iconQuestion />
                    </span>
                    <span class="icon-name">iconQuestion</span>
                </li>

		</ul>
		<p class="tips">注：点击该图标即可复制组件名称</p>
	</div>
</template>

<script>
import iconCategory from './iconCom/iconCategory.vue'
import iconCircleClose from './iconCom/iconCircleClose.vue'
import iconClose from './iconCom/iconClose.vue'
import iconDownArrow from './iconCom/iconDownArrow.vue'
import iconGotoTop from './iconCom/iconGotoTop.vue'
import iconHeart from './iconCom/iconHeart.vue'
import iconIconPhone from './iconCom/iconIconPhone.vue'
import iconLeftArrow from './iconCom/iconLeftArrow.vue'
import iconRightArrow from './iconCom/iconRightArrow.vue'
import iconSearch from './iconCom/iconSearch.vue'
import iconFilter from './iconCom/iconFilter.vue'
import iconShare from './iconCom/iconShare.vue'
import iconSort from './iconCom/iconSort.vue'
import iconUpArrow from './iconCom/iconUpArrow.vue'
import iconUserCenter from './iconCom/iconUserCenter.vue'
import iconQuestion from './iconCom/iconQuestion.vue'


//字体图标库

export default {
	name: 'App',
	data: function () {
		return {
			title: 'tw591svgicon',
		}
	},
	components: {
		iconCategory,iconCircleClose,iconClose,iconDownArrow,iconGotoTop,iconHeart,iconIconPhone,iconLeftArrow,iconRightArrow,iconSearch,iconFilter,iconShare,iconSort,iconUpArrow,iconUserCenter,iconQuestion
	},
	mounted() {
		/**
		 *复制文案到剪切板
		 */
		const copyToClipboard = (value) => {
			const textarea = document.createElement('textarea')
			textarea.value = value
			document.body.appendChild(textarea)
			textarea.select()
			document.execCommand('copy')
			document.body.removeChild(textarea)
			alert(`成功复制${value}到剪切板！`)
		}
		let li = document.getElementsByTagName('li')
		for (let i = 0; i < li.length; i++) {
			li[i].onclick = function () {
				console.log(this.lastElementChild.innerHTML)
				let iconName = this.lastElementChild.innerHTML
				copyToClipboard(iconName)
			}
		}
	},
}
</script>

<style>
body {
	font-family: Gill Sans;
	text-align: center;
	background: #f7f7f7;
}
body > h1 {
	color: #333;
	margin: 1em 0;
}
.icon-wrap {
	padding: 0;
	text-align: left;
}
.icon-wrap > li {
	display: inline-block;
	margin: 0.3em 0.2em;
	width: 6.8em;
	background: #fff;
	border-radius: 0.5em;
	position: relative;
	padding: 15px;
	text-align: center;
	vertical-align: middle;
}
.icon-wrap > li:hover .tw591-icon {
	transform: scale(1.2);
}
.tw591-icon {
	font-size: 42px;
	color: #333;
	transition: all 0.2s;
}
.icon-name {
	color: #333;
	display: block;
}
.tips {
	color: red;
	text-align: left;
	padding-left: 5px;
}
</style>
