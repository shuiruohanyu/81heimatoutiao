<template>
  <el-card>
    <el-row>
      <el-col :span="12">当前是第{{currentPage}}页,每页{{pageSize}}条,共{{total}}条</el-col>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="changePage"
        :page-size="pageSize"
        :current-page="currentPage"
        background
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页多少条
      total: 100 // 总条数
    }
  },
  methods: {
    changePage (newPage) {
      /// alert(newPage)
      this.currentPage = newPage
      this.getList()
    },
    getList () {
      this.$axios({
        url: '/test',
        params: { page: this.currentPage, per_page: this.pageSize }
      })
    }
  },
  created () {
    // 第一次进入到页面中需要查询第一页的数据 每页按照规定的条数
    // this.getList()
  }
}
</script>

<style>
</style>
