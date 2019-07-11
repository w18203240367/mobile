<template>
  <div class="login">
    <van-nav-bar class="logtin-title" title="登录" />
    <form>
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="errors.mobile"

        />
        <van-field
          v-model="user.code"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :error-message="errors.code"
        />
      </van-cell-group>
      <div class="login-btn">
        <van-button
        type="info"
        class="loginBtn"
        @click.prevent="hangdeLogin"
        :loading='LoginLoading'
        loading-text="登录中..."
        >登录</van-button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  props: {

  },
  data () {
    return {
      user: {
        mobile: '18203240367',
        code: '246810'
      },
      LoginLoading: false,
      errors: {
        mobile: '',
        code: ''
      }
    }
  },
  created () {

  },
  methods: {
    async hangdeLogin () {
      try {
        // 表单验证通过loading 发送请求 loading 加载
        this.LoginLoading = true
        const data = await login(this.user)
        // console.log(data)
        // 将token 存储到 Vuex 容器中以备后续使用
        this.$store.commit('setUser', data)

        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
      this.LoginLoading = false
    }
  }
}
</script>

<style scoped lang="less">
.logtin-title {
  background-color: #3296fa;
}
.login-btn {
  padding: 10px;
  .loginBtn {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
