<template>
  <div class="login">
    <van-nav-bar class="logtin-title" title="登录" />
    <form>
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          clearable
          label="手机号"
          placeholder="请输入手机号"
          v-validate="'required'"
          name="mobile"
          :error-message="errors.first('mobile')"
        />
        <van-field
          v-model="user.code"
          type="password"
          label="密码"
          placeholder="请输入密码"
          v-validate="'required'"
          name="code"
          :error-message="errors.first('code')"
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
      myErrors: {
        mobile: '',
        code: ''
      }
    }
  },
  created () {
    this.configFormErrorMessages()
  },
  methods: {
    async hangdeLogin () {
      try {
        const valid = await this.$validator.validate()
        //
        if (!valid) {
          return
        }
        // 表单验证通过，发送请求，loading 加载
        this.LoginLoading = true
        const data = await login(this.user)
        this.$store.commit('setUser', data)

        // 跳转到首页
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
      this.LoginLoading = false
    },
    configFormErrorMessages () {
      const dict = {
        custom: {
          mobile: {
            required: '手机号不能为空'
          },
          code: {
            required: '验证码不能为空'
          }
        }
      }
      this.$validator.localize('zh_CN', dict)
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
