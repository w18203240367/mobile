<template>
  <div class="article-wrap">
    <van-nav-bar
      title="黑马头条"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <h2 class="article-title">{{ article.title }}</h2>
    <AuthInfo class="auth-info" :article='article'/>
    <div class="ariticle-content" v-html="article.content"></div>
    <CommentList/>
    <MoreAction/>
    <RecommendArticle/>
    <RecommendSearch/>
    <ReplyList/>
    <WriteComment/>
  </div>
</template>

<script>
import AuthInfo from './components/auth-info'
import CommentList from './components/comment-list'
import MoreAction from './components/more-action'
import RecommendArticle from './components/recommend-article'
import RecommendSearch from './components/recommend-search'
import ReplyList from './components/reply-list'
import WriteComment from './components/write-comment'
import { getArticleDetail } from '@/api/article'
export default {
  name: '',
  props: {

  },
  data () {
    return {
      article: {}
    }
  },
  components: {
    AuthInfo,
    CommentList,
    MoreAction,
    RecommendArticle,
    RecommendSearch,
    ReplyList,
    WriteComment
  },
  created () {
    this.loadArticleDetail()
  },
  deactivated () {
    this.$destroy()
  },
  methods: {
    async loadArticleDetail () {
      try {
        const data = await getArticleDetail(this.$route.params.articleId)
        console.log(data)
        this.article = data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.article-wrap {
  padding: 20px;
  .article-title {
    font-size: 50px;
    font-weight: 400;
  }
  .ariticle-content {
    font-size: 24px;
  }
  .auth-info {
    position: sticky;
    top: 0;
    background: #fff;
  }
}
</style>
