<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
    <el-form ref="myForm" :model="formData" :rules="rules" label-width="80px" class="publish-form">
      <el-form-item prop='title'  label="标题">
        <el-input v-model="formData.title" style="width:400px;"></el-input>
      </el-form-item>
      <el-form-item prop='content' label="内容">
        <el-input v-model="formData.content"  type="textarea" :rows="4" placeholder="请输入内容" ></el-input>
      </el-form-item>
      <el-form-item label="封面">
          <el-radio-group v-model='formData.cover'>
              <el-radio :label='1'>单图</el-radio>
              <el-radio :label="3">三图</el-radio>
              <el-radio :label='0'>无图</el-radio>
              <el-radio :label="-1">自动</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop='channel_id'>
          <el-select v-model='formData.channel_id'>
              <el-option :label="item.name" :value="item.id" v-for="item in channels" :key="item.id"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="publish" type="primary">发布</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        channel_id: null,
        cover: 0 // 默认给个无图
      },
      rules: {
        title: [{ required: true, message: '标题内容不能为空' }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    // 发布内容
    publish () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 发布文章
        }
      })
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels() // 获取频道
  }
}
</script>

<style lang='less' scoped>
.publish-form {
  margin-left: 50px;
}
</style>
