<template>
  <el-card v-loading="loading">
      <bread-crumb slot='header'>
       <template slot='title'>账户信息</template>
      </bread-crumb>
      <el-form ref="userForm" :model="formData" :rules="rules" label-width="100px">
          <!-- 用户名 -->
          <el-form-item prop='name' label='用户名称'>
              <el-input v-model="formData.name" style='width:300px'></el-input>
          </el-form-item>
           <!-- 简介 -->
          <el-form-item label='用户简介'>
                <el-input v-model="formData.intro" style='width:300px'></el-input>
          </el-form-item>
          <!-- 邮箱 -->
          <el-form-item prop='email' label='用户邮箱'>
                <el-input v-model="formData.email" style='width:300px'></el-input>
          </el-form-item>
          <!-- 手机号 -->
          <el-form-item label='用户手机号'>
                <el-input v-model="formData.mobile" style='width:300px' disabled></el-input>
          </el-form-item>
         <!-- 保存按钮 -->
         <el-form-item>
             <el-button @click="saveUserInfo" type='primary'>保存信息</el-button>
         </el-form-item>
      </el-form>
      <el-upload class='head-img' action="" :show-file-list="false" :http-request="uploadImg">
        <img  :src="formData.photo ? formData.photo : imgUrl  " alt="">
      </el-upload>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      imgUrl: require('../../assets/img/404.png'),
      formData: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      rules: {
        name: [{ required: true, message: '用户名称不能为空' },
          { min: 2, max: 10, message: '用户名称必须控制在2到10个字符' }],
        email: [{ required: true, message: '邮箱不能为空' },
          { pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/, message: '邮箱格式不正确' }]

      }
    }
  },
  methods: {
    uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('photo', params.file)
      this.$axios({
        method: 'patch',
        url: '/user/photo',
        data // 参数
      }).then(result => {
        // 获取到新地址之后 赋值给当前页面
        this.formData.photo = result.data.photo
        this.loading = false
      })
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.formData = result.data
      })
    },
    saveUserInfo () {
      this.$refs.userForm.validate((isOK) => {
        if (isOK) {
          // 保存数据
          this.$axios({
            method: 'patch',
            url: '/user/profile',
            data: this.formData
          }).then(() => {
            this.$message({ message: '保存成功', type: 'success' })
          })
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
 .head-img {
     position: absolute;
     left: 700px;
     top:150px;
     img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
     }
 }
</style>
