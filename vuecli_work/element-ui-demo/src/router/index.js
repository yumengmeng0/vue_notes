import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/components/Login";
import Index from "@/components/Index";
import Course from "@/components/Course";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login", // 重定向到login
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    // 添加子路由，使用children
    children: [
      // 课程信息子路由
      {
        path: "/course",
        name: "course",
        component: Course,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
