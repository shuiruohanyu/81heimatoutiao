<template>
  <el-card>
      <bread-crumb slot='header'>
       <template slot='title'>async/await异步解决方案</template>
      </bread-crumb>
      <el-row>
          <el-tag>{{name}}</el-tag>
      </el-row>
      <el-button @click="setName" type="primary">测试Promise链式调用</el-button>
      <el-button @click="setName2" type="primary">测试async调用</el-button>
      <el-button @click="setName3" type="primary">测试async调用2</el-button>

  </el-card>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      name: '张三'
    }
  },
  methods: {
    setName () {
      this.func().then(result => {
        console.log(result)
        this.name = result
        return result + '是好样的'
      }).then(result => {
        console.log(result)
      }) // 带回调
    },
    func () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('李四')
        }, 3000)
      })
    },
    async setName2 () {
      let result = await this.func() // 获取数据 并读取数据
      this.name = result
    },
    func2 () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(1)
        }, 30000)
      })
    },
    async setName3 () {
      this.func().then(result => {
        console.log(result)
      })
      let result = await this.func2()

      console.log(result)
      console.log(2)
    //   await标记 会强制的阻塞当前的执行代码
    // await标记谁 就阻塞谁  阻塞就相当于 停止执行后面的代码  等到该代码的promise reslove为之
    // async 异步 async标记的函数就是一个异步函数
    // await是阻塞 但是必须放置在异步函数里 所以await必须和async配合使用
    }
  }
}
</script>

<style>

</style>
