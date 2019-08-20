<template>
  <div class='layout-aside'>
      <div class='title'>
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <el-menu
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b">
      <el-menu-item>
          <i class='el-icon-s-home'></i>
          <span>首页</span>
          </el-menu-item>
      <!-- 折叠菜单 -->
      <el-submenu>
        <!-- 具名插槽 传入内容 -->
        <template slot='title'>
         <i class='el-icon-menu' ></i>
         <span>内容管理</span>
        </template>
         <!-- 匿名插槽 -->
          <el-menu-item>发表文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
          <el-menu-item>评论列表</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot='title'>
         <i class='el-icon-user-solid' ></i>
         <span>粉丝管理</span>
        </template>
         <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
          <i class='el-icon-s-tools'></i>
          <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-aside {
    .title {
        padding: 15px 0;
        text-align: center;
        background-color: #2e2f32;
        img {
            width:120px;
            height:30px;
        }
    }
}

</style>
