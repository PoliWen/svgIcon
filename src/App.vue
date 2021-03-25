<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="svg字体图标" />
		<hr />
		<h3>tw591字体图标</h3>
		<iconCategory size='2rem'/>
		<iconCircleClose size="2rem"/>
		<iconClose size="2rem"/>
		<question/>
		<hr />

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
import question from './iconCom/question.vue'
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
		close,
		iconPark,
		aliIconFont,
		camera,
		leftArrow,
		iconCategory,
		iconCircleClose,
		iconClose,
		question
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
	margin-top: 60px;
}

.icon {
	width: 40px;
	height: 40px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
