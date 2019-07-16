<template>
  <div>
    <form action="/">
      <van-search
        placeholder="请输入搜索关键词"
        v-model="searchText"
        show-action
        @search='handleSearch(searchText)'
      />
    </form>
    <!-- 联想建议 -->
    <van-cell-group>
      <van-cell v-for="item in suggestion" :key='item' :title="item" icon="search" @click="handleSearch(item)" >
        <!-- 设置搜索高亮 -->
        <!--
          {{}} 无法输入 html 字符串内容
          v-html 才会解析字符串中的 html 去渲染
          过滤器只能用在 {{}}  和 v-bind 中
         -->
         <div slot="title" v-html="hightlight(item, searchText)"></div>
      </van-cell>
    </van-cell-group>
    <!-- /联想建议-->

    <!-- 历史记录-->
    <van-cell-group>
      <van-cell title="历史记录" >
        <van-icon
          slot="right-icon"
          name="delete"
          style="line-height: inherit;"
        />
      </van-cell>
    </van-cell-group>
    <!-- /历史记录-->
  </div>
</template>

<script>
import { getSuggestion } from '@/api/search'
import { debounce } from 'lodash'
// import _ from 'lodash'

export default {
  name: 'Search',
  props: {

  },
  data () {
    return {
      searchText: '',
      suggestion: []
    }
  },
  watch: {
    // debounce 接收两个参数
    // 第一个： 执行你的业务逻辑的参数函数
    // 第二个：防抖时间 当你同一时间过滤过快的时候，只有停下来经过指定的时间才会来调用
    // searchText: _.debounce(async function (newVal) {
    //   newVal = newVal.trim() // 去除收尾空格
    //   // 如果数据为空 什么都不做
    //   if (!newVal) {
    //     return
    //   }
    //   // 如果数据不为空，则请求联想建议自动补全
    //   const data = await getSuggestion(newVal)
    //   this.suggestion = data.options
    // }, 500)
    searchText: debounce(async function (newVal) {
      newVal = newVal.trim() // 去除收尾空格
      // 如果数据为空 什么都不做
      if (!newVal) {
        return
      }
      // 如果数据不为空，则请求联想建议自动补全
      const data = await getSuggestion(newVal)
      this.suggestion = data.options
    }, 500)
  },
  created () {

  },
  methods: {
    hightlight (text, keyword) {
      return text.toLowerCase().split(keyword).join(`<span style="color: red;">${keyword}</span>`)
    },
    handleSearch (q) {
      // console.log(q)
      this.$router.push({
        name: 'search-result',
        params: {
          q
        }
      })
    }
  }
}

</script>

<style scoped lang="less">

</style>
