<template>
	<div id="app">
		<h1>{{ title }}</h1>

		<ul class="icon-wrap">
			<%= svgDemoHtml =%>
		</ul>
		<p class="tips">注：点击该图标即可复制组件名称</p>
	</div>
</template>

<script>
<%= importSvgCom =%>

//字体图标库

export default {
	name: 'App',
	data: function () {
		return {
			title: 'tw591svgicon',
		}
	},
	components: {
		<%= svgComConfig =%>
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
