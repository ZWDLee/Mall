<template>
  <div class="cart-botton-bar">
    <div class="check-content">
      <check-button class="check-button" :isChecked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      总计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calculateClick">
      结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false
      return this.cartList.every(item => item.checked)
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calculateClick() {
      if(!this.checkLength) {
        this.$toast.show('请选择要购买的商品')
      }
    }
  }
}
</script>

<style>
  .cart-botton-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 20%;
  }
  .check-button {
    width: 20px;
    line-height: 15px;
    margin-right: 8px;
  }
  .total-price {
    margin-left: 20px;
    flex: 1;
  }
  .calculate {
    width: 25%;
    background-color: red;
    color: #fff;
    text-align: center;
  }
</style>