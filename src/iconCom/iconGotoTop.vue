 <template>
  <span class="i-icon">
        <svg :width='size' :height='size' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :fill='fill' d="M900.8 131.2H123.2c-12.8 0-24-11.2-24-24s11.2-24 24-24h777.6c12.8 0 24 11.2 24 24s-11.2 24-24 24z m-406.4 52.8c9.6-9.6 25.6-9.6 33.6 0L872 528c9.6 9.6 9.6 25.6 0 33.6-9.6 9.6-25.6 9.6-33.6 0L536 259.2v673.6c0 12.8-11.2 24-24 24s-24-11.2-24-24V259.2L185.6 561.6c-9.6 9.6-25.6 9.6-33.6 0-9.6-9.6-9.6-25.6 0-33.6l342.4-344z"  /></svg>
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