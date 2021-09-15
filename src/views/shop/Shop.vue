<template>
    <div>
        <side-bar></side-bar>
        <back-top></back-top>
    </div>
</template>

<script>
    import SideBar from "@c/common/sidebar/SideBar";
    import BackTop from "@c//common/backtop/BackTop";
    // import SideBar from "../../../../likeming/src/components/common/sidebar/SideBar";
    export default {
        name: "Shop",
        components: {
            SideBar,
            BackTop,
        }
    }
</script>

<style scoped>

</style>

