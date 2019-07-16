<template>
  <div class="search-result">
    <!-- 顶置导航 -->
    <van-nav-bar
      title="搜索结果"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <!-- /顶置导航 -->

    <!-- 文章列表 -->
    <van-list
      class="article-list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in articles"
        :key="item.art_id.toString()"
        :title="item.title"
      />
    </van-list>
    <!-- /文章列表 -->
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
export default {
  name: 'SearchResult',
  props: {

  },
  data () {
    return {
      loading: false,
      finished: false,
      page: 1,
      perPage: 10,
      articles: []
    }
  },
  computed: {
    q () {
      return this.$route.params.q
    }
  },
  async created () {
    const data = await getSearch({
      q: this.$route.params.q
    })
    console.log(data)
  },
  methods: {
    async onLoad () {
      await this.$sleep(800)
      const data = await this.getSearchResult()
      // 如果请求结果数组为空，则设置 List 组件已加载结束
      if (!data.results.length) {
        this.loading = false
        this.finished = true
        return
      }
      // 如果有数据 则将本次加载的数据 push 到数组中
      this.articles.push(...data.results)
      // 数据加载完毕，更新当前页码为下一页，用于下一次下载更多
      this.page += 1
      // 结束当前加载的 loading; List 列表组件每次 onloading 会自动将 loading 设置为 true
      // 如果不设置 就不会触发下一次的 onloading
      this.loading = false
    },
    getSearchResult () {
      return getSearch({
        page: this.page,
        perPage: this.perPage,
        q: this.q
      })
    }
  }
}
</script>

<style scoped lang="less">
.search-result {
  .article-list {
    margin-top: 92px;
  }
}
</style>
