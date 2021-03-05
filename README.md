# tw591svgicon


## Installation / 下载

### npm

```
npm install tw591svgicon

```

### yarn

```
yarn add tw591svgicon
```

### Register the plugin as a global component / 全局注册组件

```
import Vue from 'vue'
import tw591svgicon from 'tw591svgicon'

Vue.use(tw591svgicon)
```

### Add a component / 局部注册组件

```
<template>
 <close fill="red"></close>
</template>

<script>
  import { close } from 'tw591svgicon';

  export default {
    name: 'close',
    components: {
      close
    },
    data () {
     return {
      value
     }
    }
  };
</script>
```
## Props / 参数

| Property | Type | Default value | Description |
| -------- | ---- | ------------- | ----------- |
| `fill` | `String` | #333  | svg填充的颜色
| `size` | `String` | 1em   | svg的大小
