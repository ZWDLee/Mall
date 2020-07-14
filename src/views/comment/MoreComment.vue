<template>
   <div>
     <comment-nav-bar/>
     <!-- <comment-list :comment="comment"/> -->
   </div>
</template>

<script>
import CommentNavBar from './childComps/CommentNavBar'
import CommentList from './childComps/CommentList'

import {getDetail} from 'network/deail'

export default {
  components: {
    CommentNavBar,
    CommentList
  },
  data() {
    return {
      comment: {}
    }
  },
  created() {
    getDetail().then(res => {
      this.comment = res
      
    })
  }
}
</script>

<style>
.comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title {
    float: left;
    font-size: 15px;
  }

  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }

</style>