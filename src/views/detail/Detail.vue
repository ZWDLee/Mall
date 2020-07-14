<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="navIndex"/>
    <scroll class="detail-content" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast :message="message" :isShow="isShow"/> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// import Toast from 'components/common/toast/Toast'


import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/deail'
import {imageListenerMixin, backTopMixin} from 'common/mixin'
import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  components : {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    // Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      // message: '',
      // isShow: false
    }
  },
  mixins: [imageListenerMixin, backTopMixin],
  mounted() {
  },
  updated(){
  },
  destroyed() {
    this.$bus.$off('imageLoad', this.imageListener)
  },
  created() {
    this.iid = this.$route.params.iid
    // 请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
      // console.log(res);
      // 轮播图数据
      this.topImages = data.itemInfo.topImages
      // 商品商品描述数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 店铺信息数据
      this.shop = new Shop(data.shopInfo)
      // 商品展示数据
      this.detailInfo = data.detailInfo
      // 商品参数数据
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      //   console.log(this.themeTopYs);
      
      // })
    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -(this.themeTopYs[index]), 200)
    },
    scroll(position) {
      let positionY = -position.y;
      let len = this.themeTopYs.length - 1
      for (let i = 0; i < len; i++) {
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i;
          this.$refs.navIndex.currentIndex = this.currentIndex;
        }
      }
      // backtop
      this.listenShowBackTop(position)
      // for (let i = 0; i < len; i++) {
      //   // console.log();
      //   if (this.currentIndex !== i && ((i < len - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === len -1 && positionY >= this.themeTopYs[i]))) {
      //     this.currentIndex = i;
      //     this.$refs.navIndex.currentIndex = this.currentIndex;
      //   }
      // }
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // this.$store.commit('addCart', product)
      this.addCart(product).then(res => {
        // console.log(res);
        // 简单封装toast
        // this.isShow = true
        // this.message = res

        // setTimeout(() => {
        //   this.isShow = false
        //   this.message = ''
        // }, 1500)
        // 插件的形式封装toast
        this.$toast.show(res, 1500)
      })
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-content {
    /* overflow: hidden; */
    height: calc(100% - 44px - 58px);
  }
</style>