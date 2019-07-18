<template>
  <div class="auth-info">
    <div class="base-info">
      <img  class="avatar" :src="article.aut_photo">
      <div>
        <p>{{ article.aut_name }}</p>
        <p>{{ article.pubdate | relativeTime }}</p>
      </div>
    </div>
    <div>
      <van-button
      :type="article.is_followed ? 'default' : 'danger'"
      size="small"
      :loading="isFollowLoading"
      @click="handleFollowed"
      >{{ article.is_followed ? '已关注' : '关注' }}</van-button>
    </div>
  </div>
</template>

<script>
import { followUser, unFollowUser } from '@/api/user'
export default {
  name: 'AuthInfo',
  props: {
    article: {
      type: Object,
      default: () => {
      }
    }
  },
  data () {
    return {
      isFollowLoading: false
    }
  },
  created () {
  },
  methods: {
    async handleFollowed () {
      if (!this.$checkLogin()) {
        return
      }
      try {
        this.isFollowLoading = true
        const authID = this.article.aut_id
        // 校验是否登录
        // 如果登录了，执行关注|取消关注
        // 如果没有登录则提示去登录，登录成功，还得回到这个页面
        if (this.article.is_followed) {
          // 取消关注
          await unFollowUser(authID)
          // 将客户端关注状态设置为 false
          this.article.is_followed = false
        } else {
          // 关注
          await followUser(authID)
          // 将客户端关注状态设置为 true
          this.article.is_followed = true
        }
      } catch (err) {
        this.$toast.fail('操作失败')
      }
      this.isFollowLoading = false
    }
  }
}
</script>

<style scoped lang="less">
.auth-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  .base-info {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
}
</style>
