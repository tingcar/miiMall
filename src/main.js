import Vue from 'vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import VueLazyLoad from 'vue-lazyload';
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
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg',
});
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
