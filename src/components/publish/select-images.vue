<template>
  <el-card>
      <el-tabs v-model='activeName'>
          <el-tab-pane label='素材库' name='material'>
              <div class='material-list'>
                   <el-card  class='material-item' v-for="item in list" :key="item.id">
                       <img @click="selectOneImg(item)" :src="item.url" alt="">
                   </el-card>
              </div>
              <el-row style='margin:10px 0' type='flex' justify="center">
                  <el-pagination  background layout="prev, pager, next"
                  :total="page.total"
                  :current-page="page.currentPage"
                  :page-size="page.pageSize"
                  @current-change="changePage"
                  > </el-pagination>
              </el-row>
          </el-tab-pane>
          <el-tab-pane label='上传图片' name='upload'>上传图片</el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'material',
      list: [], // 要循环的素材数据
      page: {
        currentPage: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  methods: {
    // 选择一张图片
    selectOneImg (item) {
      // 拿到地址要干什么 => 封面组件让组件显示图片 =>封面组件 => 上层发布页面的 images
      // 子组件 =>父组件 $emit  prop传参
      this.$emit('selectOneImg', item.url) // 相当于在当前的select-images 的实例中触发了一个事件selectOneImg,传出了一个参数 地址
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    getMaterial () {
      let pageParams = { page: this.page.currentPage, per_page: this.page.pageSize }
      this.$axios({
        url: '/user/images',
        params: { collect: false, ...pageParams }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
   .material-list {
       display:flex;
       flex-wrap: wrap;
       justify-content: space-around;
       .material-item {
           margin:5px 0;
           width: 150px;
           height: 150px;
           border-radius: 4px;
           img {
               width: 100%;
               height:100%;
           }
       }
   }
</style>
