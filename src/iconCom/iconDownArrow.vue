 <template>
  <span class="i-icon">
        <svg :width='size' :height='size' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :fill='fill' d="M79.547924 326.565605a24.8 24.8 0 1 0 35.071885-35.073108 24.8 24.8 0 1 0-35.071885 35.073108Z"  /></svg>
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
      default:'#333'
    }
  }
};
</script>