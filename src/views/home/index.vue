<template>
<!-- 最外层容器 -->
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside style='width:200px;height:100vh;background-color:#323745'>
      <!-- 左侧菜单 -->
     <layout-aside></layout-aside>
    </el-aside>
    <!-- 嵌套大容器 -->
   <el-container>
     <!-- 头部内容 -->
     <el-header>
       <layout-header></layout-header>
     </el-header>
     <!-- 中间区域 -->
     <el-main style='padding:0 0'>
       <!-- 二级路由的容器 -->
       <router-view></router-view>
     </el-main>
   </el-container>
  </el-container>
</template>

<script>

export default {
}
</script>

<style>

</style>
