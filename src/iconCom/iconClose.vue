 <template>
  <span class="i-icon">
        <svg :width='size' :height='size' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :fill='fill' d="M197.768249 824.856427c-11.987009-11.990079-11.984962-31.42778 0.005117-43.414788l584.727394-584.589249c11.990079-11.987009 31.42778-11.984962 43.414789 0.005117 11.987009 11.990079 11.984962 31.42778-0.005116 43.414788l-584.727395 584.589249c-11.990079 11.987009-31.42778 11.984962-43.414789-0.005117z"  /></svg>
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