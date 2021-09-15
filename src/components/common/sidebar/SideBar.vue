<template>
    <div class="app" >
        <!-- 导航 -->
        <div class="nav" id="box_action_translateYOut">
            <div  class="nav_box" v-for="(item,index) in product" :class="{'navActive':currentIndex === index}" >
                <a :href="'#'+item">{{item}}</a>
            </div>
        </div>
        <div class="nav-t">
            <div id="出行" class="one" ref="scrollOne">
                出行
            </div>
            <div id="女装" class="two" ref="scrollTwo">
                女装
            </div>
            <div id="家电"  class="three" ref="scrollThree">
                家电
            </div>
            <div id="鞋类" class="four" ref="scrollFour">
                鞋类
            </div>
            <div id="潮服" class="five" ref="scrollFive">
                潮服
            </div>
            <div id="美妆" class="six" ref="scrollSix">
                美妆
            </div>
            <div id="艺术" class="seven" ref="scrollSeven">
                艺术
            </div>
            <div id="箱包" class="eight" ref="scrollEight">
                箱包
            </div>
            <div id="手表" class="nine" ref="scrollNine">
                手表
            </div>
            <div id="生活" class="ten" ref="scrollTen">
                生活
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shop",
        components: {

        },
        data() {
            return {
                currentIndex: 0,
                product: ["出行", "女装", "家电", "鞋类", "潮服", "美妆", "艺术", "箱包", "手表", "生活"]
            };
        },
        methods: {
            handleScroll() {
                //获取滚动时的高度
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollTop);
                this.navShow = scrollTop;
                let oneHeight = this.$refs.scrollOne.offsetHeight;
                // console.log("oneHeight", oneHeight);
                let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight;
                let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight;
                let fourHeight = this.$refs.scrollThree.offsetHeight + threeHeight;
                let fiveHeight = this.$refs.scrollThree.offsetHeight + fourHeight;
                let sixHeight = this.$refs.scrollThree.offsetHeight + fiveHeight;
                let sevenHeight = this.$refs.scrollThree.offsetHeight + sixHeight;
                let eightHeight = this.$refs.scrollThree.offsetHeight + sevenHeight;
                let nineHeight = this.$refs.scrollThree.offsetHeight + eightHeight;

                //需求不一样可以修改，只要内容在底部出现一点，我的导航对应的内容就高亮
                if (scrollTop > 0) {
                    this.currentIndex = 0;
                }
                if (scrollTop > oneHeight) {
                    this.currentIndex = 1;
                }
                if (scrollTop > twoHeight) {
                    this.currentIndex = 2;
                }
                if (scrollTop > threeHeight) {
                    this.currentIndex = 3;
                }
                if (scrollTop > fourHeight) {
                    this.currentIndex = 4;
                }
                if (scrollTop > fiveHeight) {
                    this.currentIndex = 5;
                }
                if (scrollTop > sixHeight) {
                    this.currentIndex = 6;
                }
                if (scrollTop > sevenHeight) {
                    this.currentIndex = 7;
                }
                if (scrollTop > eightHeight) {
                    this.currentIndex = 8;
                }
                if (scrollTop > nineHeight) {
                    this.currentIndex = 9;
                }
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
    .nav {
        background: #d1dbe5;
        width: 60px;
        height: 400px;
        position: fixed;
        top: 15%;
        right: 5%;
        z-index: 1;
        border-radius: 20px;
        /*transition: all 1s ease;*/
    }
    .nav_box {
        display: flex;
        margin-bottom: 20px;
        position: relative;
        cursor: pointer;
    }
    a {
        font-size: 14px;
        color: #2c3e50;
        text-decoration: none;
        position: relative;
        left: 15px;
        top: 15px;
    }
    .navActive {
        display: flex;
        font-weight: bold;
        cursor: pointer;
    }
    .one {
        height: 900px;
        background-color: orange;
    }
    .two {
        height: 100px;
        background-color: pink;
    }
    .three {
        height: 900px;
        background-color: skyblue;
    }
    .four {
        height: 900px;
        background-color: orange;
    }
    .five {
        height: 900px;
        background-color: #a3a3a5;
    }
    .six {
        height: 900px;
        background-color: #e6a23c;
    }
    .seven {
        height: 900px;
        background-color: black;
    }
    .eight {
        height: 900px;
        background-color: cyan;
    }
    .nine {
        height: 900px;
        background-color: aliceblue;
    }
    .ten {
        height: 900px;
        background-color: darkgray;
    }
    #box_action_translateYOut {
        animation: box_action_translateYOut 1s;
    }
    @keyframes box_action_translateYOut {
        0% {
            transform: translateY(0px);
            opacity: 0;
        }
        50% {
            transform: translateY(0px);
            opacity: 0.5;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

</style>