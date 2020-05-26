import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyLoad from 'vue-lazyload';
import VueCookie from 'vue-cookie';
import App from './App.vue';
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index';
import router from './router';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import env from './env';

const mock = true;
if (mock) {
    require('./mock/api');
}

// Need to be configured based on CORS: /api/a/b => /a/b
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;
// API error handle (temp)
axios.interceptors.response.use(function(response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login';
        }
        window.location.href = '/#/login';
    } else {
        Message.warning(res.msg);
        return Promise.reject(res);
    }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
// Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg',
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
