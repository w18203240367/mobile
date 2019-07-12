<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="首页" fixed/>
    <!-- /头部 -->

    <!-- 频道标签 -->
    <van-tabs class="channel-tabs" v-model="activeChannelIndex">
      <van-tab
      v-for="channelItem in channels"
      :key="channelItem.id"
      :title="channelItem.name"
      >
        <!--
          下拉刷新组件
          isLoading 控制下拉的 loading 状态
          refresh 下拉之后触发的事件
         -->
        <van-pull-refresh
        v-model="channelItem.downPullLoading"
        @refresh="onRefresh"
        :success-text='channelItem.downPullSuccessText'
        :success-duration='1000'
        >
          <!--
            loading 控制加载更多的 loading 状态
            finished 控制是否已加载结束
            onLoad 事件会在滚动到底部区域的时候自动调用，每次 onLoad 它会自动让 loading 为 true
          -->
          <van-list
            v-model="channelItem.upPullLoading"
            :finished="channelItem.upPullFinished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <!--
              列表中的内容
            -->
            <van-cell
              v-for="articleItem in channelItem.articles"
              :key="articleItem.art_id"
              :title="articleItem.title"
            />
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <!-- /频道标签 -->

    <!-- 底部导航 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/channel'
import { getArticles } from '@/api/article'
export default {
  name: 'HomeIndex',
  data () {
    return {
      activeChannelIndex: 0,
      list: [],
      loading: false,
      finished: false,
      pullRefreshLoading: false,
      channels: [] // 存储频道列表
    }
  },
  // 添加计算属性
  computed: {
    // 当前激活的频道
    // activeChannelIndex 激活频道的索引
    activeChannel () {
      return this.channels[this.activeChannelIndex]
    }
  },
  created () {
    this.loadingChannels()
  },
  methods: {
    async loadingChannels () {
      const { user } = this.$store.state
      let channels = []
      if (user) {
      // 已登录
        const data = await getUserChannels()
        // console.log(data)
        channels = data.channels
      } else {
        // 没有登录
        // 如果有本地存储数据则使用本地存储中的频道列表
        const localChannels = JSON.parse(window.localStorage.getItem('channels')) // 拿到本地存储的数据
        if (localChannels) {
          channels = localChannels
        } else {
          // 如果没有本地存储列表数据则会请求获取默认推荐的频道列表
          const data = await getUserChannels()
          // console.log(data)
          channels = data.channels
        }
      }
      // 修改 channels 将这个数据结构修改为满足我们使用的需求
      channels.forEach(item => {
        item.articles = [] // 用来存储当前文章的列表
        item.timestamp = Date.now() // 存储下一页的时间戳
        item.downPullloading = false // 控制当前频道的下拉刷新 loading 状态
        item.upPullLoading = false // 控制当前频道的上拉加载更多的 loading 状态
        item.upPullFinished = false // 控制当前频道数据是否加载完毕
      })
      this.channels = channels
    },
    // 上拉加载更多， push 数据
    async onLoad () {
      await this.$sleep(800)
      let data = []
      data = await this.loadArticles()
      // 如果没有pre_timestamp 并且数组是空的则意味着没有数据了
      if (!data.pre_timestamp && !data.results.length) {
        // 设置改频道数据加载完毕，组件会自动给出提示并且不在onloading
        this.artiveChannel.upPullFinished = true
        // 取消loading
        this.artiveChannel.upPullLoading = false
        // 代码不要继续执行
        return
      }
      // pre_timestamp 下一页的（时间戳）页码  （上次时间点推荐的数据）
      // results 就是文章列表
      // 解决初始化的时候没有最新数据推荐，（没有最新数据推荐，就加载上一次推荐的数据）
      if (data.pre_timestamp && !data.results.length) {
        this.activeChannel.timestamp = data.pre_timestamp

        // 加载下一页数据
        data = await this.loadArticles()
      }
      // 下一页数据加载好以后，将pre_timestamp 更新到当前频道中 用于加载下下页数据
      this.activeChannel.timestamp = data.pre_timestamp

      // 将文章数据更新到文章中
      this.activeChannel.articles.push(...data.results)

      // 数据加载完毕  取消上拉loading 状态
      this.activeChannel.upPullLoading = false
    },
    // 下拉刷新  如果有新数据 就重置列表数据
    async onRefresh () {
      const { activeChannel } = this
      // 备份加载下一页数据的时间戳
      // const timestamp = this.activeChannel.timestamp

      activeChannel.timestamp = Date.now()
      const data = await this.loadArticles()

      // 如果有最新数据，将这个数据更新到频道的文章列表中
      if (data.results.length) {
        // 将当前最新的推荐内容重置到频道文章中
        activeChannel.articles = data.results

        // 由于你重置了文章列表，那么当前数据中的 pre_timestamp 就是上拉加载更多的下一页数据的时间戳
        activeChannel.timestamp = data.pre_timestamp
        activeChannel.downPullSuccessText = '更新成功'

        // 当下拉刷新有最新数据，并重置以后数据无法满足一屏。所以我们使用onLoad 再多加载一页数据
        this.onLoad()
      } else {
        // 如果没有最新数据，提示已是最新内容
        activeChannel.downPullSuccessText = '已是最新数据'
      }
      // 下拉刷新结束，取消loading 状态
      activeChannel.downPullLoading = false
    },
    async loadArticles () {
      const { id: channelId, timestamp } = this.activeChannel
      // console.log(this.activeChannel)
      const data = await getArticles({
        channelId, // 当前激活的频道id
        timestamp, // 当前频道下一页的时间戳
        withTop: 1 // 是否包含了置顶数据
      })
      return data
    }
  }
}
</script>

<style lang="less" scoped>
.channel-tabs {
  margin-bottom: 100px;
}
// /deep/ 的作用（深度作用选择器）
// 参考文档：https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8
// 注意：你在页面上测量的是设备像素，我们的样式规则转换是基于 75 进行转换的，所以在这里写的时候都 * 2
.channel-tabs /deep/ .van-tabs__wrap {
  position: fixed;
  top: 92px;
}
.channel-tabs /deep/ .van-tabs__content {
  margin-top: 92px;
}
</style>
