<template>
  <div>
    <nav-bar class="comment">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">评论</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  },
  data() {
    return {}
  },
  methods: {
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style>
  .comment {
    background-color: var(--color-high-text);
    color: #fff;
  }
</style>