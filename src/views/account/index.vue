<template>
  <el-card >
      <bread-crumb slot='header'>
       <template slot='title'>账户信息</template>
      </bread-crumb>
      <el-form label-width="100px">
          <!-- 用户名 -->
          <el-form-item label='用户名称'>
              <el-input style='width:300px'></el-input>
          </el-form-item>
           <!-- 简介 -->
          <el-form-item label='用户简介'>
                <el-input style='width:300px'></el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item label='用户邮箱'>
                <el-input style='width:300px'></el-input>
          </el-form-item>
          <!-- 手机号 -->
          <el-form-item label='用户手机号'>
                <el-input style='width:300px' disabled></el-input>
          </el-form-item>
         <!-- 保存按钮 -->
         <el-form-item>
             <el-button type='primary'>保存信息</el-button>
         </el-form-item>
      </el-form>
      <img class='head-img' src="../../assets/img/404.png" alt="">
  </el-card>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
 .head-img {
     position: absolute;
     left: 700px;
     top:150px;
     height: 200px;
     width: 200px;
     border-radius: 50%;
 }
</style>
