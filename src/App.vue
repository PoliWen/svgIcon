<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="svg字体图标" />
    <hr>
    <h3>自定义字体图标</h3>
    <close fill='#333' size='10rem' strokeLinecap="butt"/>
    <close fill='red' size='10rem' strokeLinecap="round"/>
    <close fill='blue' size='10rem' strokeLinecap="square" strokeLinejoin="square"/>
    <camera fill='red' size='10rem' strokeLinecap="butt" strokeLinejoin="butt"/>
    <leftArrow fill='#333' size='12rem' strokeLinecap="butt" strokeLinejoin="butt"/>
    <hr>
    <h3>iconPark库字体图标</h3>
    <iconPark/>
    <hr>
    <h3>阿里巴巴字体图标库的使用</h3>
    <aliIconFont/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import close from "./components/close.vue"
import leftArrow from "./components/leftArrow.vue"
import camera from "./components/camera.vue"
import iconPark from "./components/iconPark.vue"
import aliIconFont from "./components/aliIconFont.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    close,
    iconPark,
    aliIconFont,
    camera,
    leftArrow
  }
};
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
