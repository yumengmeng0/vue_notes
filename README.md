# vue_notes

# Vue

# 常用指令

    v-text
    v-html
    v-on
    v-show
    v-if：操纵DOM
    v-bind
    v-for

    v-model：双向数据绑定

# axios（ajax 异步请求）

# 计算属性

        computed 的作用: 减少运算次数, 缓存运算结果。运用于重复相同的计算。
        计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。

# 过滤器 filter

    过滤器是对即将显示的数据做进一步的筛选处理，然后进行显示，值得注意的是过滤器并没有改变原来的数据，只是在原数据的基础上产生新的数据

## 过滤器用途

    语法 msg | filterA （|是管道）

    1. 处理文本格式化
    2. 过滤器的两个位置：差值表达式和v-bind指令

```html
<body>
  <div id="app">
    <h2>价格：{{price | addIcon}}</h2>
    <h2>姓名{{user.name}}开头大写：{{user.name | changeName}}</h2>
  </div>
</body>
<script>
  // 在创建Vue实例之前创建全局过滤器
  Vue.filter("changeName", function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  var VM = new Vue({
    el: "#app",
    data: {
      message: "hello world",
      price: 200,
      user: { name: "tom" },
    },
    // 局部过滤器
    filters: {
      addIcon(value) {
        return "￥" + value;
      },
    },
  });
</script>
```

# 侦听器 watch

```javascript
var VM = new Vue({
  el: "#app",
  data: {
    message: "hello world",
    count: 1,
    firstName: "",
    lastName: "",
    fullName: "",
  },
  // 监听器
  watch: {
    // 检测属性值的变化
    // count必须是model中定义的变量
    count: function (newValue, oldValue) {
      alert("count+1" + "旧值=" + oldValue + "，新值=" + newValue);
    },
    firstName: function (newValue, oldValue) {
      this.fullName = newValue + " " + this.lastName;
    },
    lastName: function (newValue, oldValue) {
      this.fullName = this.firstName + " " + newValue;
    },
  },
});
```

# 组件（Component ）

    全局组件
    局部组件

# 声明周期

    钩子函数：
    beforeCreate：在Vue实例化之前执行
    created： 组件实例化完成，DOM 还未生成
    beforeMount：模版已经在内存中编辑完成（data数据就绪），未被渲染到页面"
    mounted：模版已经被渲染到页面，执行完就会显示
    beforeUpdate：内存数据已经更新，未渲染到页面
    updated：内存数据已经更新，此方法执行完显示页面
    beforeDestroy：
    destroyed：

# 路由 router

    在Web开发中，路由是指根据URL分配到对应的处理程序。 路由允许我们通过不同的 URL 访问不同的内容。
    通过 Vue.js 可以实现多视图单页面web应用（single page web application，SPA）

## 路由相关概念

    router：Vue官方的路由管理器，管理路由。
    route：路由，Home按钮=>home内容
    routes：一组路由，[{Home按钮=>Home内容}, {About按钮=>About内容}]
    router-link组件：是对<a>标签的一个封装，该组件用于设置导航连接，切换不同HTML内容。to属性为目标地址
    router-view组件：路由导航到指定组件后进行渲染显示页面。

```html
<body>
  <div id="app">
    <!-- 添加超链接，router-link组件进行导航，to属性指定连接 -->
    <p>
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
    </p>
    <!-- 路由的出口，路由匹配到组件后渲染到这里。 -->
    <router-view></router-view>
  </div>
</body>
<script>
  // 路由所需组件
  const home = { template: "<div>首页</div>" };
  const news = { template: "<div>新闻</div></div></div>" };

  // 路由
  const routes = [
    { path: "/home", component: home },
    { path: "/news", component: news },
  ];

  // 路由管理器实例
  const router = new VueRouter({
    routes: routes,
  });

  // 将router注入到vue实例中，让整个应用都用于路由
  var VM = new Vue({
    router,
  }).$mount("#app"); // 代替el
</script>
```
