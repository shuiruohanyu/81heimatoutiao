<template>
  <el-card>
      <bread-crumb slot='header'>
        <!-- 具名插槽 -->
        <template slot='title'>素材管理</template>
      </bread-crumb>
      <!--el-tabs中 v-model属性绑定是当前子标签页的name -->
       <el-tabs v-model="activeName" >
        <el-tab-pane label="全部图片" name="first">

        </el-tab-pane>
        <el-tab-pane label="收藏图片" name="second">

        </el-tab-pane>
  </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style>

</style>
