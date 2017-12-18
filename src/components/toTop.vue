<template>
  <div class="toTop"  @click='back'>
      top
  </div>
</template>
<script>
export default {
  name: 'toTop',
  methods: {
      back(){
          this.$emit('toTop')
      }
  }
}
</script>
<style>
    .toTop{
        width: .9rem;
        height: .9rem;
        border: 1px solid #ccc;
        color: red;
        background: #ccc;
        text-align: center;
        line-height: .9rem;
        border-radius: 50%;
        position: fixed;
        right: .4rem;
        bottom: 1.4rem;
    }
</style>
