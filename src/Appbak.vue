<template>
	<div id="app">
		<h1>591SvgIcon</h1>

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
		</ul>
		<p class="tips">注：点击该图标即可可复制组件名称</p>
		<h3>iconPark库字体图标</h3>
		<iconPark />

		<hr />
		<h3>阿里巴巴字体图标库的使用</h3>
		<aliIconFont />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import iconCategory from './iconCom/iconCategory.vue'
import iconCircleClose from './iconCom/iconCircleClose.vue'
import iconClose from './iconCom/iconClose.vue'
import close from './components/close.vue'
import leftArrow from './components/leftArrow.vue'
import camera from './components/camera.vue'
import iconPark from './components/iconPark.vue'
import aliIconFont from './components/aliIconFont.vue'

//字体图标库

export default {
	name: 'App',
	components: {
		HelloWorld,
		iconClose,
		iconPark,
		aliIconFont,
		camera,
		leftArrow,
		iconCategory,
		iconCircleClose,
		iconClose,
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
			alert('成功复制' + value + '到剪切板！')
		}
		var li = document.getElementsByTagName('li')
		for (var i = 0; i < li.length; i++) {
			li[i].onclick = function () {
				console.log(this.lastElementChild.innerHTML)
				var iconName = this.lastElementChild.innerHTML
				copyToClipboard(iconName)
			}
		}
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.icon {
	width: 40px;
	height: 40px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}

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
