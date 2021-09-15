<template>
    <div class="bigger">
        <div class="font-style"><p>热门动态</p></div>
        <div class="bigger-box">
            <transition appear name="one">
                <div class="box1" v-show="isShow"><img src="../../../src/assets/img/com/com-1.jpg" alt=""></div>
            </transition>
            <transition appear name="two">
                <div class="box2" v-show="isShow"><img src="../../../src/assets/img/com/com-2.jpg" alt=""></div>
            </transition>
            <transition appear name="three">
                <div class="box3" v-show="isShow"><img src="../../../src/assets/img/com/com-3.jpg" alt=""></div>
            </transition>
        </div>
        <div class="bigger-box1">
            <transition appear name="four">
                <div class="box4" v-show="isShow"><img src="../../../src/assets/img/com/com-4.jpg" alt=""></div>
            </transition>
            <transition appear name="five">
                <div class="box5" v-show="isShow"><img src="../../../src/assets/img/com/com-5.jpg" alt=""></div>
            </transition>
            <transition appear name="six">
                <div class="box6" v-show="isShow"><img src="../../../src/assets/img/com/com-6.jpg" alt=""></div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Community",
        data() {
            return {
                isShow:true
            }
        },
        methods:{
            // toggle(){
            //     this.isShow = !this.isShow
            // }
        },
    }
</script>

<style scoped>
    .font-style {
        font-size: 23px;
        margin-left: 70px;
        margin-top: 50px;
    }
    .bigger img {
        width: 320px;
        height: 320px;
    }
    .box1{
        width: 320px;
        height: 320px;
        position: relative;
        right: -70px;
    }
    .box2{
        width: 320px;
        height: 320px;
        position: relative;
        right: -160px;
    }
    .box3{
        width: 320px;
        height: 320px;
        position: relative;
        right: -250px;
    }
    .one-enter{
        opacity: 1;
    }
    .one-enter-to{
        opacity: 0;
        margin-top: -20px;
    }
    .one-enter-active {
        transition: all 1.2s;
    }

    .two-enter{
        opacity: 1;
    }
    .two-enter-to{
        opacity: 0;
        margin-top: -20px;
    }
    .two-enter-active {
        transition: all 1.2s;
    }

    .three-enter{
        opacity: 1;
    }
    .three-enter-to{
        opacity: 0;
        margin-top: -20px;
    }
    .three-enter-active {
        transition: all 1.2s;
    }

    .bigger-box {
        margin-top: 30px;
    }
    .bigger-box div{
        display: inline-block;
    }


    .box4{
        width: 320px;
        height: 320px;
        position: relative;
        right: -70px;
    }
    .box5{
        width: 320px;
        height: 320px;
        position: relative;
        right: -160px;
    }
    .box6{
        width: 320px;
        height: 320px;
        position: relative;
        right: -250px;
    }
    .four-enter{
        opacity: 1;
    }
    .four-enter-to{
        opacity: 0;
        margin-top: 20px;
    }
    .four-enter-active {
        transition: all 1.2s;
    }

    .five-enter{
        opacity: 1;
    }
    .five-enter-to{
        opacity: 0;
        margin-top: 20px;
    }
    .five-enter-active {
        transition: all 1.2s;
    }

    .six-enter{
        opacity: 1;
    }
    .six-enter-to{
        opacity: 0;
        margin-top: 20px;
    }
    .six-enter-active {
        transition: all 1.2s;
    }

    .bigger-box1 {
        margin-top: 70px;
    }
    .bigger-box1 div{
        display: inline-block;
    }
</style>