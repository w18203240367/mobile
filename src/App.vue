<template>
  <div id='app'>
    <!--
        路由组件是动态的，默认情况下切换都会销毁重建，状态丢失
        如果想要在切换的时候保留状态，不需要销毁的情况则使用 keep-alive
     -->
     <keep-alive>
      <router-view></router-view>
     </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {

  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
