<template>
 
        <el-dialog title="用户登录" :visible.sync="dialogFormVisible" :show-close="false">
            <el-form>
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input autocomplete="off" v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item label="密  码" :label-width="formLabelWidth">
                    <el-input autocomplete="off" v-model="user.password"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="login">登 录</el-button>
            </div>
        </el-dialog>

</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            dialogFormVisible: true,
            formLabelWidth: '120px',
            user: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            const url = "https://f89ca4ea-0cc9-486f-9236-b41f3354d10d.mock.pstmn.io/login";

            // var that = this;
            // axios.get(url, {
            //     params: {
            //         username: this.user.username,
            //         password: this.user.password
            //     }
            // }).then(function (resp) {
            //     console.log(resp);
            //     that.dialogFormVisible = false; // 关闭对话框
            // }).catch(function (err) {
            //     alert("登录失败！");
            // });

            axios.get(url, {
                params: {
                    username: this.user.username,
                    password: this.user.password
                }
            }).then((resp) => {
                console.log(resp);
                this.dialogFormVisible = false; // 关闭对话框
                // 跳转到首页，在前端页面跳转必须使用路由
                this.$router.push("index");
            }).catch((err) => {
                this.$message.error("用户名或密码错误，请重新输入")
            });
        },
    }
};
</script>

<style  scoped>
</style>