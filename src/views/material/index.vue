<template>
  <el-card>
    <bread-crumb slot="header">
      <!-- 具名插槽 -->
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 放置了一个上传组件 -->
    <el-upload :show-file-list="false" action='' :http-request="uploadImg" class='upload-material'>
      <el-button type='primary'>上传图片</el-button>
    </el-upload>
    <!--el-tabs中 v-model属性绑定是当前子标签页的name -->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部图片" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row align="middle" class="operate" type="flex" justify="space-around">
              <!-- 收藏图标 注册取消收藏和收藏事件 -->
              <i :style="{color: item.is_collected ? 'red': ''}" @click="collectOrCancel(item)" class="el-icon-star-on"></i>
              <!-- 删除图标 注册删除事件-->
              <i @click="delMaterial(item)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
           <el-row type='flex' justify="center">
            <el-pagination
              :current-page="page.currentPage"
              :page-size="page.pageSize"
              :total="page.total"
              @current-change="changePage"
              background
              layout="prev, pager, next"
            ></el-pagination>
          </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
         <el-row type='flex' justify="center">
            <el-pagination
              :current-page="page.currentPage"
              :page-size="page.pageSize"
              :total="page.total"
              @current-change="changePage"
              background
              layout="prev, pager, next"
            ></el-pagination>
          </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        currentPage: 1,
        pageSize: 15,
        total: 0
      }
    }
  },
  methods: {
    // 自定义上传方法
    uploadImg (params) {
      // formdata参数
      // formData添加参数 用append方法
      let formData = new FormData()
      formData.append('image', params.file)
      this.$axios({
        method: 'post',
        url: '/user/images',
        data: formData
      }).then(result => {
        this.getMaterial() // 重新获取数据
      })
    },
    // 收藏或者取消收藏
    async collectOrCancel (item) {
      // is_collected  是否是收藏 如果is_collected为true  则表示已经收藏 这时点击时  应该取消
      // 如果is_collected为false  则表示没有收藏 这时点击时  应该收藏\
      let mess = item.is_collected ? '取消收藏' : '收藏'
      await this.$confirm(`您是否要${mess}此图片?`, '提示')
      await this.$axios({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: { collect: !item.is_collected } // 取相反的状态
      })
      this.getMaterial() // 重新获取数据
    },
    // 删除素材方法
    delMaterial (item) {
      this.$confirm('您确定删除此图片吗', '提示').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${item.id}`
        }).then(result => {
          this.getMaterial() // 重新获取数据
        })
      })
    },
    // 切换页码
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 切换页签
    changeTab () {
      this.page.currentPage = 1 // 因为每次切换标签 都从第一页开始
      this.getMaterial()
    },
    getMaterial () {
      let pageParams = {
        page: this.page.currentPage,
        per_page: this.page.pageSize
      }
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect', ...pageParams }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial() // 第一次进入 activeName === "all"  加载第一页的全部数据
  }
}
</script>

<style lang='less' scoped>
.upload-material {
  position: absolute;
  right:20px;
  margin-top: -10px;
}
.img-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .img-card {
    width: 200px;
    height: 200px;
    margin: 20px 10px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .operate {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 30px;
      width: 100%;
      background-color: #f4f5f6;
      i {
        font-size: 22px;
      }
    }
  }
}
</style>
