<template>
  <div>
    <tab-bar v-slot:tabbar >
      <tab-bar-item path='/home' activeColor='#ff8198'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/9navbar_主页.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/10navbar_主页_选中.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>主页</div>
        </template>
      </tab-bar-item>

       <tab-bar-item path='/category' activeColor='#ff8198'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/7navbar_展品.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/8navbar_展品_选中.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

       <tab-bar-item path='/cart' activeColor='#ff8198'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/84show_购买.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/85show_购买_fill.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

       <tab-bar-item path='/profile' activeColor='#ff8198'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/1navbar_我的.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/2navbar_我的_选中.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>