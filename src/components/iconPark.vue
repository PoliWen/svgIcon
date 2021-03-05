/**
 * @desc:   Enter title
 * @author: wenxiaoli<10800>
 * @create: 2021-02-20 18:51:17
 */
 <template>
  <div class="vuex-state p">
    <home theme="outline" size="30"/>
    <bug theme="outline" size="30" fill="#333"/>
    <close theme="outline" size="30" fill="#333"/>
    <close theme="filled" size="30" fill="#333"/>
    <camera theme="outline" size="32"/>
  </div>
</template>
<script>
import {Home,Bug,Close,Camera} from '@icon-park/vue';
export default {
  name: "iconPark",
  components: {
      Home,
      Bug,
      Close,
      Camera
  }
};
</script>
<style lang='less' scoped>
.vuex-state {
  line-height: 1.5;
}
</style>
