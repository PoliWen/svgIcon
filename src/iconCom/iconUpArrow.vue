 <template>
  <span class="i-icon">
        <svg :width='size' :height='size' viewBox="0 0 1024 1024" version="1.1" ><path :fill='fill' d="M894.97107 741.905482a24.8 24.8 0 1 0 35.071884-35.073108 24.8 24.8 0 1 0-35.071884 35.073108Z"  /><path :fill='fill' d="M502.9 349.8l388.4 388.5h7.8l30.6-30.6L502.1 280 79.6 702.5l35.3 35.3z"  /><path :fill='fill' d="M79.572209 737.652232a24.8 24.8 0 1 0 35.071884-35.073108 24.8 24.8 0 1 0-35.071884 35.073108Z"  /></svg>
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