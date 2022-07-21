// 1. 项目运行会加载入口文件main.js

// 在Vue项目中使用import 变量名 from 文件路径
import Vue from "vue";
import App from "./App.vue"; // 主组件
import router from "./router"; // 路由

// 关闭启动提示
Vue.config.productionTip = false;

// 创建Vue实例
new Vue({
  router, // 为整个项目添加路由
  render: (h) => h(App), // 生成模版 App = App.vue
}).$mount("#app"); // 挂载了App.vue中id为app的区域

// 2.App.vue是整个项目的主组件，整个项目其他页面都是在主组件中切换
