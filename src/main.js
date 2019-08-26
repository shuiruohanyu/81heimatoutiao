import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import Component from './components' // 引入我们自己定义的插件
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 引文重置的基础样式
import axios from './utils/axios.config' // 把axios插件给了Vue对象的原型属性
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  DatePicker,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Icon,
  Row,
  Col,
  Upload,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  Message,
  MessageBox,
  Image
} from 'element-ui' // 引入自定义的axios
Vue.prototype.$axios = axios
Vue.use(Image)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Card)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Image)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.use(Component) // 注册全局的自定义组件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
