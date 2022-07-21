<template>
    <div>
        <el-container>
            <el-header>后台管理</el-header>
            <el-container>
                <!-- 侧边栏 -->
                <el-aside width="200px">
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#D3DCE6" router>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航菜单</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/course"><i class="el-icon-menu"></i>后台管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.el-container {
    height: 720px;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
}
</style>
