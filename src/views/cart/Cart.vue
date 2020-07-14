<template>
  <div class="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  },
}
</script>

<style>
  .cart-nav {
    background-color: var(--color-tint);
    /* font-weight: 700; */
    color: #fff;
    position: relative;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    */
    z-index: 9;
  }
</style>