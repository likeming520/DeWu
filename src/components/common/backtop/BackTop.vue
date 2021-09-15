<template>
    <el-backtop :bottom="60">
        <div
                style="{
        /*height: 100%;*/
        /*width: 100%;*/
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        /*line-height: 40px;*/
        opacity: 0.8;
        color: #4E655D;
      }"
        >
            ↑
        </div>
    </el-backtop>
</template>

<script>
    export default {
        name: "BackTop",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
</style>