<template>
    <div id="app">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

export default {
    name: 'Header',
    // data() {
    //     return {
    //         msg: "Header组件"
    //     }
    // },
    // 组件中的属性，可以接收参数
    // props: ['msg']
    props: {
        msg: Number
    }
};

</script>

<!-- scoped 表示当前样式只作用于当前template的视图 -->
<style scoped>
</style>