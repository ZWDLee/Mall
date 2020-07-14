import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  // mutations: {
    // addCart(state, payload) {
      // 方式一
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // if (oldProduct) {
      //   oldProduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }
            // 方式一
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // if (oldProduct) {
      //   oldProduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }

      // 方式二
      // let index = state.cartList.indexOf(payload)
      // if (index === -1) {
      //   let oldProduct = state.cartList[index]
      //   oldProduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }

      // 方式三
    //   let oldProduct = state.cartList.find((item) => item.iid === payload.iid)
    //   if (oldProduct) {
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
    // 重构
    // addCounter(state, payload) {
    //   payload.count++
    // },
    // addToCart(state, payload) {
    //   state.cartList.push(payload)
    // }
  // },
  getters,
  mutations,
  actions
  // actions: {
  //   addCart(context, payload) {
  //     let oldProduct = context.state.cartList.find((item) => item.iid === payload.iid)
  //     if (oldProduct) {
  //       context.commit('addCounter', oldProduct)
  //     } else {
  //       payload.count = 1
  //       // context.state.cartList.push(payload)
  //       context.commit('addToCart', payload)
  //     }
  //   }
  // }
})

export default store
