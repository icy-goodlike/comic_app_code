<template>
  <div class="container" ref="ref_div">
      <slot>
        <div>1111111111</div>
      </slot>
      <slot>
        <div>22222222</div>
      </slot>
  </div>
</template>

<script>

export default {
  name: 'IconCell',
  props: {
    card: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toCardStyle() {
      console.log(this.$refs.ref_div)
      this.$refs.ref_div.style.borderRadius = '2px'
    }
  },
  mounted() {
    this.toCardStyle()
  }
}
</script>

<style lang='less' scoped>
.container {
  width: 98%;
  height: 50px;
  margin: 10px auto;
  border: transparent 1px solid;
  box-shadow: -1px 1px 1px 1px #eee;
}
</style>
