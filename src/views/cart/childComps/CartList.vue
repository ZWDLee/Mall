<template>
  <div class="cart-list">
    <scroll class="cart-content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :itemInfo="item"/>
    </scroll> 
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
    
  },
}
</script>

<style>
  .cart-list {
    height: calc(100vh - 49px - 44px - 40px);
  }
  .cart-content {
    
    height: 100%;
  }
</style>