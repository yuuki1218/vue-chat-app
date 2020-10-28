import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/chat-app-f9987/databases/(default)/documents";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
