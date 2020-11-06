import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import firebase from './plugins/firebase.js';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  firebase,
  render: (h) => h(App),
}).$mount('#app');
