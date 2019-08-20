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
     <el-main>中间区域</el-main>
   </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style>

</style>
