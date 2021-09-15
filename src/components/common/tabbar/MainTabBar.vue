<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <template v-slot:item-icon><img class="logo-image" src="@a/img/logo2.png" alt=""></template>
            <template v-slot:item-icon-active><img class="logo-image" src="@a/img/logo2.png" alt=""></template>
        </tab-bar-item>
        <tab-bar-item path="/home" activeColor="mediumturquoise">
            <template v-slot:item-text><div class="title-style">首页</div></template>
            <template v-slot:item-icon><img src="" alt=""></template>
            <template v-slot:item-icon-active><img class="hengxian" src="@a/img/hengxian.png" alt=""></template>
        </tab-bar-item>
        <tab-bar-item path="/shop" activeColor="mediumturquoise">
            <template v-slot:item-text><div class="title-style">购物精选</div></template>
            <template v-slot:item-icon><img src="" alt=""></template>
            <template v-slot:item-icon-active><img class="hengxian" src="@a/img/hengxian.png" alt=""></template>
        </tab-bar-item>
        <tab-bar-item path="/community" activeColor="mediumturquoise">
            <template v-slot:item-text><div class="title-style">社区精选</div></template>
            <template v-slot:item-icon><img src="" alt=""></template>
            <template v-slot:item-icon-active><img class="hengxian" src="@a/img/hengxian.png" alt=""></template>
        </tab-bar-item>
        <tab-bar-item path="/store" activeColor="mediumturquoise">
            <template v-slot:item-text><div class="title-style">商家入住</div></template>
            <template v-slot:item-icon><img src="" alt=""></template>
            <template v-slot:item-icon-active><img class="hengxian" src="@a/img/hengxian.png" alt=""></template>
        </tab-bar-item>
        <tab-bar-item path="/create" activeColor="mediumturquoise">
            <template v-slot:item-text><div class="title-style">创作者服务</div></template>
            <template v-slot:item-icon><img src="" alt=""></template>
            <template v-slot:item-icon-active><img class="hengxian" src="@a/img/hengxian.png" alt=""></template>
        </tab-bar-item>
        <tab-bar-item path="/about" activeColor="mediumturquoise">
            <template v-slot:item-text><div class="title-style">关于我们</div></template>
            <template v-slot:item-icon><img src="" alt=""></template>
            <template v-slot:item-icon-active><img class="hengxian" src="@a/img/hengxian.png" alt=""></template>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
    .title-style {
        font-weight: bold;
        position: relative;
        top: 20px;
        cursor: pointer;
    }
    .title-style:hover {
        color: #48decc;
    }

    .logo-image {
        width: 100px;
        position: relative;
        top: 20px;
    }

    .hengxian {
        position: relative;
        top: 23px;
        width: 50px;
        height: 15px;
    }
</style>