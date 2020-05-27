<template>
  <div>
    <div class="zoo-column">
      <div class="column_title">
        动物分析
      </div>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell>
        <template slot="default">
          <div class="fall">
            <div @click="handleMessage(item.id)" class="image-box" v-for="item in img" :key="item.id">
              <img :src="item.src" alt="">
              <p>
                <span> {{ item.title }} </span>
              </p>
            </div>
          </div>
        </template>

      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getList } from '@/api'
export default {
  name: '',
  data() {
   return {
     list: [],
     imgSrcArr:[],
     loading: false,
     finished: false,
     img:[],
     colNumbers:null,
     colWidth:170
   }
  },
  mounted() {
    this.getData()
  },
  methods: {
    handleMessage(id) {
      var params = {
        id:id
      }
      this.$router.push(
        {
          path:`/test2/${params}`,
        }
      )
    },
    // 获取数据
    getData() {
      var params = {
        count:30
      }
      getList(params).then(res => {
        this.img = res.data.data
      })
    },
    onLoad() {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/base.scss';
@import '@/styles/main.scss';
</style>

