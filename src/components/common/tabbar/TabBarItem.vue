<template>
    <div class="tab-bar-item" @click="itemClick">
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TarBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                /*如果没有参数 则这个为默认的颜色*/
                default: '#48decc'
            }
        },
        data() {
           return {
               // isActive: true
           }
        },
        computed: {
          isActive() {
              /*动态决定颜色是否改变*/
              return this.$route.path.indexOf(this.path) !== -1
          },
            activeStyle() {
              return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 69px;
    }

    .tab-bar-item img {

    }
</style>