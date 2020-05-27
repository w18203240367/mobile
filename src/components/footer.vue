<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to='/' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/test2' icon="search">栏目</van-tabbar-item>
      <van-tabbar-item to='/test3' icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item to='/test4' icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
   return {
     active: 0
   }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
