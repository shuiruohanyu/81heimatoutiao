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
        <quill-editor style='width:800px;height:400px;margin-bottom:100px' v-model="formData.content"  type="textarea" :rows="4" placeholder="请输入内容" ></quill-editor>
      </el-form-item>
      <el-form-item label="封面">
          <el-radio-group @change="changeType" v-model='formData.cover.type'>
              <el-radio :label='1'>单图</el-radio>
              <el-radio :label="3">三图</el-radio>
              <el-radio :label='0'>无图</el-radio>
              <el-radio :label="-1">自动</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item>
        <!-- 父组件给子组件传值  props 封面类型 封面图片 -->
        <cover-image @updateImages="updateImages" :type="formData.cover.type" :images="formData.cover.images"></cover-image>
      </el-form-item>
      <el-form-item label="频道" prop='channel_id'>
          <el-select v-model='formData.channel_id'>
              <el-option :label="item.name" :value="item.id" v-for="item in channels" :key="item.id"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="publish(false)" type="primary">发布</el-button>
        <el-button @click="publish(true)">存入草稿</el-button>
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
        cover: {
          type: 0, // 类型
          images: [] // 图片数组 随着 type变化而变化 type =>  image 变化 type  == 1 images ['']  type = 3 images ['','',''] 否则images为 []
        } // 默认给个无图
      },
      rules: {
        title: [{ required: true, message: '标题内容不能为空' },
          {
            min: 5,
            max: 30,
            message: '标题内容必须在5到30个字符之间'
          }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    // 接收封面组件传过来的 参数 url index
    updateImages (url, index) {
      // vue中数组不能通过 this.list[i] = 新值得方式赋值 不是响应式的
      // this.formData.cover.images[]
      // 下面的方式是响应式 => 数据变化  => 视图变化
      this.formData.cover.images = this.formData.cover.images.map((item, i) => {
        // if (i === index) {
        //   // 更新某条数据
        //   return url
        // }
        // return item
        return i === index ? url : item
      })
      // this.formData.cover.images.map((item, i) => i === index ? url : item) 炫技模式
    },
    changeType () {
      // 可以获取到最新的封面类型
      // 去改变当前的images类型
      if (this.formData.cover.type === 1) {
        this.formData.cover.images = [''] // 当类型为单图时 这时要为数组生成一个地址
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', ''] // 当类型为3图时 这时要为数组生成3个地址
      } else {
        this.formData.cover.images = []
      }
    },
    // 发布内容
    publish (draft) {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          let { articleId } = this.$route.params
          let method = articleId ? 'put' : 'post' // 根据文章id确定 是编辑还是新增
          let url = articleId ? `/articles/${articleId}` : '/articles' // 根据id确定 当前的请求地址
          this.$axios({
            method,
            url,
            params: { draft }, // 是否为草稿
            data: this.formData
          }).then(() => {
            // 如果发布成功 就会跳转到内容列表
            this.$router.push('/home/articles')
          })
        }
      })
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    // 通过文章id获取文章信息
    getArticleById () {
      let { articleId } = this.$route.params
      this.$axios({
        url: `/articles/${articleId}`
      }).then(result => {
        this.formData = result.data // 将文章数据给页面数据 进行绑定
      })
    }
  },
  created () {
    let { articleId } = this.$route.params
    // 加载数据 如果id存在 就认为是编辑 如果不存在 认为是新增
    articleId && this.getArticleById()
    this.getChannels() // 获取频道
  }
}
</script>

<style lang='less' scoped>
.publish-form {
  margin-left: 50px;
}
</style>
