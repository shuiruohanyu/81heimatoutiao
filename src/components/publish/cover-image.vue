<template>
  <div class='cover-image'>
      <!-- 循环生成封面 -->
     <div @click="clickImg(index)" class='cover-item' v-for="(item,index) in images" :key="index">
         <img :src="item?item:defaultImg" alt="" />
     </div>
    <el-dialog :visible="showDialog" @close="showDialog=false">
        <!-- 监听事件 -->
        <select-images @selectOneImg="selectImg"></select-images>
    </el-dialog>
  </div>
</template>

<script>
// images 会根据type的变化而变化吗 [] ['']  ['','','']
export default {
  props: ['images'],
  data () {
    return {
      selectIndex: -1,
      showDialog: false,
      defaultImg: require('../../assets/img/pic_bg.png') // 图片的base64
    }
  },
  methods: {
    clickImg (index) {
      this.showDialog = true
      this.selectIndex = index // 赋值当前点击的索引
    },
    selectImg (url) {
      // 显示图片  => 图片来源 =>上层 => props只能读取 不能更改 只能上层去改
      // 显示图片 => 获取图片 => 通过 再次传递 传给上层组件 => 只传图片 => 因为images是个数组 只传一个值 不足以修改
    // url  index
      this.$emit('updateImages', url, this.selectIndex) // 再次抛出事件
      this.showDialog = false
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
