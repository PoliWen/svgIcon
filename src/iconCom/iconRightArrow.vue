 <template>
  <span class="i-icon">
        <svg :width='size' :height='size' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :fill='fill' d="M711.6 488.624L355.2 152.976a29.36 29.36 0 0 0-42.352 0 31.408 31.408 0 0 0 0 43.552L647.76 512 312.848 827.36a31.408 31.408 0 0 0 0 43.552 29.36 29.36 0 0 0 42.352 0l356.4-335.648a36.32 36.32 0 0 0 0-46.64z" /></svg>
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