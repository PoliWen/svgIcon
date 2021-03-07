 <template>
  <span class="i-icon">
        <svg :width='size' :height='size' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :fill='fill' d="M710.4 838.4 358.4 492.8c-12.8-12.8-32-12.8-44.8 0l0 0c-12.8 12.8-12.8 32 0 44.8l352 352c12.8 12.8 32 12.8 44.8 0l0 0C723.2 876.8 723.2 851.2 710.4 838.4zM358.4 531.2l352-352c12.8-12.8 12.8-32 0-44.8l0 0c-12.8-12.8-32-12.8-44.8 0L313.6 486.4c-12.8 12.8-12.8 32 0 44.8l0 0C326.4 544 345.6 544 358.4 531.2z" /></svg>
  </span>
</template>
<script>
export default {
  props:{
    size:{
      type:String, 
      default:'1em'
    },
    fill:{
      type:String,
      default:'red'
    }
  }
};
</script>cnmb