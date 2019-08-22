<template>
  <el-card>
    <!-- el-card 具名插槽 header -->
    <bread-crumb slot='header'>
    <!-- 面包屑的插槽 具名插槽  title-->
      <template slot='title'>评论列表</template>
   </bread-crumb>
   <!-- 表格组件 -->
   <!-- <el-table :data="list">
      <el-table-column label="标识" prop="id"></el-table-column>
     <el-table-column label="姓名" prop="name"></el-table-column>
   </el-table> -->
   <el-table>
     <el-table-column width='500' label='标题'></el-table-column>
     <el-table-column label='评论状态'></el-table-column>
     <el-table-column label='总评论数'></el-table-column>
     <el-table-column label='粉丝评论数'></el-table-column>
     <el-table-column label='操作'></el-table-column>
   </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
