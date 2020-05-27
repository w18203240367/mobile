<template>
  <div class="head">
      <!-- 头部 -->
      <div class="top">
          <div class="top_left">
            <div class="top_left_box"></div>
          </div>
          <div class="title">标题</div>
          <div class="top_right">
            <div @click="show = true" class="top_right_box">
              <van-icon name="wap-nav" />
            </div>
          </div>
      </div>
      <!-- /头部 -->
      <!-- 轮播 -->
      <van-swipe class="swipe" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in swipeImg" :key="index">
          <img :src="item">
        </van-swipe-item>

      </van-swipe>
      <!-- /轮播 -->
      <!-- 分类 -->
      <van-grid>
        <van-grid-item v-for="item in gridListt" :key="item.id">
          <template slot="default">
            <div class="type">
              <!-- bgc  -->
              <div :style="item.color != '' ? `background:${item.color}` : ''" class="type_icon">
                <van-icon :name="item.icon ?item.icon: 'warn-o'" />
              </div>
              <div class="type_text">
                {{ item.text }}
              </div>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
      <!-- /分类 -->
      <!-- 弹出层 -->
      <van-popup
        v-model="show"
        position="top"
        :style="{ height: '30%' }"
      >
        <div>
          
        </div>
      </van-popup>
      <!-- /弹出层 -->
  </div>
</template>

<script>
import '@/styles/head.scss'
export default {
  name: 'Head',
  data() {
   return {
     gridListt:[
       { id:1,
         text:'喜爱',
         color:'#f26765',
         icon:'like-o'
       },
       { id:2,
         text:'收藏',
         color:'#fe9700',
         icon:'star-o'
       },
       { id:3,
         text:'火热',
         color:'#6f68df',
         icon:'fire-o'
       },
       { id:4,
         text:'写真',
         color:'#fd7a49',
         icon:'photo-o'
       },
       { id:5,
         text:'类型',
         color:'#19cf8a'
       },
       { id:6,
         text:'类型',
         color:'#4493f7'
       },
       { id:7,
         text:'类型',
         color:'#f26765'
       },
       { id:8,
         text:'更多',
         color:'#7fd02b',
         icon:'apps-o'
       }
     ],
     swipeImg:[
       'https://raw.githubusercontent.com/w18203240367/image/master/animal1.jpg',
       'https://raw.githubusercontent.com/w18203240367/image/master/animal29.jpg',
       'https://raw.githubusercontent.com/w18203240367/image/master/animal30.jpg',
     ],
     show:false
   }
  },
  computed:{
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.swipe {
  img {
    width: 100%;
  }
}
</style>
