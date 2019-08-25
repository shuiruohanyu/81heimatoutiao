<template>
  <!-- 用el-row 和el-col布局 -->
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="16" class="left-header">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="layout-right" :span="3">
      <img :src="user.photo ? user.photo : defaultImg" alt />
      <!-- 两个插槽  匿名插槽  具名插槽 -->
      <!-- @command绑定菜单项点击事件 -->
      <el-dropdown trigger="click" @command="commandAction">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          {{ user.name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 dropdown-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command='git'>git地址</el-dropdown-item>
          <el-dropdown-item command='out'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      user: {

      },
      defaultImg: require('../../assets/img/avatar.jpg') // require的图片就变成了base64
    }
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.user = result.data // 获取到用户的最新个人资料 赋值给data中的数据
      })
    },
    // 点击菜单项会触发的事件
    // command是点击的菜单项中的command属性值
    commandAction (command) {
      if (command === 'account') {
        // 账户信息
        this.$router.push('/home/account') // 跳转到账户信息
      } else if (command === 'git') {
        // 跳转到git地址
        window.location.href = 'https://github.com/shuiruohanyu/81heimatoutiao'
      } else {
        // 退出
        window.localStorage.clear() // 擦除本项目在浏览器上所有前端缓存
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo() // 获取用户信息
    eventBus.$on('updateUserInfoSuccess', () => {
      // 监听到了别人更新数据的消息
      this.getUserInfo() // 获取用户信息
    })
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  padding: 12px 0;
  .left-header {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      margin-right: 4px;
    }
  }
  .layout-right {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
