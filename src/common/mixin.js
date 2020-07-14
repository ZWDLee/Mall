import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

export const imageListenerMixin = {
  data() {
    return {
      imageListener: null
    }
  },
  mounted() {
    // 监听图片加载完成事件
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.imageListener = () => {
      refresh()
    }
    this.$bus.$on('imageLoad', this.imageListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}