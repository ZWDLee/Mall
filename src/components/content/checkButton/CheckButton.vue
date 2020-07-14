<template>
  <div class="check-buttom" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .check-buttom {
    border: 1px solid #aaa;
  }
  .check {
    background-color: var(--color-tint);
    border: 1px solid var(--color-tint);
  }
</style>