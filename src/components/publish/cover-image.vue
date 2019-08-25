<template>
  <div class='cover-image'>
      <!-- 循环生成封面 -->
     <div class='cover-item' v-for="(item,index) in images" :key="index">
         <img :src="item?item:defaultImg" alt="" />
     </div>
  </div>
</template>

<script>
// images 会根据type的变化而变化吗 [] ['']  ['','','']
export default {
  props: ['type', 'images'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png')
    }
  }
}
</script>

<style lang='less' scoped>
.cover-image {
    display: flex;
    .cover-item {
        width:200px;
        height:200px;
        border: 1px solid #ccc;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            width:100%;
            height:100%;
        }
    }
}
</style>
