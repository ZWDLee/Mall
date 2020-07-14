<template>
  <div>
    {{comment}}
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    // console.log(this.comment);
    
  }
}
</script>

<style>
  
</style>