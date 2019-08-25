import Vue from 'vue'
export default new Vue()
// new Vue 实例化了一个Vue实例
// a  引入了这个实例
// a.$emit("自定义事件",参数)
// b 引入了这个实例  是同一个实例 因为是同一个文件
// b 监听事件  因为a和b用eventBus就是同一个Vue实例
