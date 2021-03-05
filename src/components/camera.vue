 <template>
  <span class="i-icon"><svg id="icon-pictrue" :width="size" :height="size" viewBox="0 0 1064 1024"><path d="M806.2976 204.8c56.1152 0 101.45792 45.4656 104.8576 102.23616l0.2048 6.84032v416.72704c0 57.58976-43.13088 105.2672-98.38592 108.87168l-6.67648 0.2048H258.6624c-56.1152 0-101.45792-45.4656-104.8576-102.23616l-0.2048-6.84032V313.87648c0-57.58976 43.13088-105.2672 98.38592-108.87168L258.6624 204.8h547.6352z m0 61.44H258.6624c-22.1184 0-40.96 18.26816-43.37664 42.3936l-0.24576 5.24288v416.72704c0 24.86272 17.32608 44.81024 38.912 47.34976l4.7104 0.28672h547.6352c22.1184 0 40.96-18.26816 43.37664-42.3936l0.24576-5.24288V313.87648c0-24.86272-17.32608-44.81024-38.912-47.34976l-4.7104-0.28672z" :stroke="fill" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" :fill="fill"></path><path d="M658.06336 509.5424c27.48416-24.53504 66.56-23.7568 94.8224 2.62144l4.9152 4.9152 138.4448 183.25504a30.72 30.72 0 0 1-45.99808 40.46848l-2.99008-3.44064-136.51968-180.92032c-3.31776-3.60448-6.5536-4.38272-9.8304-2.4576l-1.92512 1.4336-205.4144 183.54176a30.72 30.72 0 0 1-35.84 3.6864l-4.096-2.82624L352.256 656.7936c-1.39264-1.14688-2.37568-1.4336-3.35872-1.024l-0.98304 0.6144-131.4816 114.31936a30.72 30.72 0 0 1-43.45856-43.13088l3.19488-3.23584 131.97312-114.81088a64.14336 64.14336 0 0 1 77.94688-4.05504l5.07904 3.76832 81.01888 66.39616 185.87648-166.05184zM409.6 368.64a92.16 92.16 0 1 1 0 184.32A92.16 92.16 0 0 1 409.6 368.64z m0 61.44a30.72 30.72 0 1 0 0 61.44 30.72 30.72 0 0 0 0-61.44z" :stroke="fill" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" :fill="fill"></path></svg></span>
</template>
<script>
export default {
  name: "camera",
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
</script></span>
</template>
<script>
export default {
  name: "iconClose",
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
<style lang="less">
    #icon-camera{
        color:red
    }
</style>