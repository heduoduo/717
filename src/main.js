import './common/js/fontSize';
import '../src/http/axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vue from 'vue';
import App from './App.vue';
import {store} from './store/store.js';
import router from './router/config.js';
import './common/css/reset.css';
import './common/css/style.css';
import './common/font/iconfont.css';
import './common/css/swiper.min.css';
import message from './plugins/message/index';
Vue.use(message);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
