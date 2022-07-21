<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input prefix-icon="el-icon-search" placeholder="课程名称" v-model="filter.course_name" clearable>
                </el-input>
            </el-col>
            <el-col :span="1">
                <el-button type="primary" @click="search">点击查询</el-button>
            </el-col>
        </el-row>

        <el-table :data="courseList" style="width: 100%" v-loading="loading" element-loading-text="加载中...">
            <el-table-column prop="id" label="ID">
            </el-table-column>
            <el-table-column prop="course_name" label="课程名称">
            </el-table-column>
            <el-table-column prop="price" label="价格">
            </el-table-column>
            <el-table-column prop="sort_num" label="排序">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            input: "",
            loading: true,
            courseList: [{
                id: 1,
                course_name: '王小虎',
                price: 99,
                sort_num: 0,
                status: 0
            }],
            filter: {
                course_name: ""
            }
        }
    },
    // DOM生成之前执行
    created() {

        this.loadCourse();
        this.loading = false;
    },
    methods: {
        // 获取课程信息
        loadCourse() {
            const url = "http://localhost:8080/lagou_edu_home/course";
            return this.axios.get(url, {
                params: {
                    methodName: "findCourseList"
                }
            }).then((resp) => {
                console.log(resp.data);
                this.courseList = resp.data;

                this.loading = false;
            }).catch((error) => {
                this.$message.error("获取数据失败");
            });
        },
        // 根据课程名查询课程
        search() {
            this.loading = true;
            const url = "http://localhost:8080/lagou_edu_home/course";

            return axios.get(url, {
                params: {
                    methodName: "findByCourseNameAndStatus",
                    course_name: this.filter.course_name
                }
            }).then((resp) => {
                console.log(resp.data);
                this.courseList = resp.data;

                this.loading = false;
            }).catch((error) => {
                this.$message.error("获取数据失败");
            });
        }
    }
}
</script>

<style>
</style>
