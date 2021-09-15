//注册element-ui组件
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SideBar from "../components/common/sidebar/SideBar";

Vue.component('ymShortcutKey', SideBar);
Vue.use(ElementUI);
