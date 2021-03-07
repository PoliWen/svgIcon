 <template>
  <span class="i-icon">
        <%= svgTpl %>
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
</script>