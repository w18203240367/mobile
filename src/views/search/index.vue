<template>
  <div>
    <van-search
      placeholder="请输入搜索关键词"
      v-model="searchText"
      show-action
    />
    <!-- 联想建议 -->
    <van-cell-group>
      <van-cell title="hello" icon="search" />
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
export default {
  name: 'Search',
  props: {

  },
  data () {
    return {
      searchText: ''
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
