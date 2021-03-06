// Vue Components and external libraries.
import Vue from 'vue';
import App from './App';
import store from './store/index';
import VueMoment from 'vue-moment';
import router from './router/index';
import moment from 'moment-timezone';
import VeeValidate from 'vee-validate';
import VueClipboards from 'vue-clipboards';

// Import global styles
import './assets/scss/main.scss';

// Config options.
Vue.config.productionTip = false;

// Inject the moment & moment timezone JS libs.
Vue.use(VueMoment, { moment });

// Inject the copy clipboard JS lib.
Vue.use(VueClipboards);

// Inject the vee form validation JS lib.
Vue.use(VeeValidate);

if (!process.env.IS_WEB) {
    Vue.use(require('vue-electron'));
}

/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app');
