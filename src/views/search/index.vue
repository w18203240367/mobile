<template>
  <div>
    <van-search
      placeholder="请输入搜索关键词"
      v-model="searchText"
      show-action

    />
    <!-- 联想建议 -->
    <van-cell-group>
      <van-cell v-for="item in suggestion" :key='item' :title="item" icon="search" />
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

  }
}
</script>

<style scoped lang="less">

</style>
