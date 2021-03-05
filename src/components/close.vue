 <template>
  <span class="i-icon"><svg :width="size" :height="size" viewBox="0 0 48 48" fill="none"><path d="M8 8L40 40" :stroke="fill" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" fill="red"></path><path d="M8 40L40 8" :stroke="fill" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" fill="red"></path></svg></span>
</template>
<script>
export default {
  name: "close",
  props:{
    size:{
      type:String, 
      default:'1em'
    },
    fill:{
      type:String,
      default:'red'
    },
    strokeLinecap:{
      type:String,
      default:'round'
    },
    strokeLinejoin:{
      type:String,
      default:'round'
    },
    strokeWidth:{
      type:Number,
      default:4
    }
  }
};
</script>