<template>
    <div class="home-top">
        <img class="home-top-image" src="../../../src/assets/img/home/background.png" alt="">
        <div class="home-middle"><p class="text-style">-like明-</p></div>
        <carousel-map/>
        <back-top/>
    </div>
</template>

<script>
    import CarouselMap from "@c/content/CarouselMap";
    import BackTop from "@c/common/backtop/BackTop";
    export default {
        name: "Home",
        components: {
            CarouselMap,
            BackTop
        }
    }
</script>

<style scoped>
    .home-top {
        position: absolute;
        top: -50px;
        /*filter: blur(0.1px);*/
    }
    .home-top-image {
        width: 1280px;
    }
    .home-middle {
        position: absolute;
        right: 45%;
        top: 45%;
    }
    .text-style {
        font-weight: bold;
        font-size: 43px;
        color: white;
        opacity: 0.8;
    }
</style>