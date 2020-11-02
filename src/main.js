import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/app';

Vue.config.productionTip = false;

  var firebaseConfig = {
    apiKey: "AIzaSyBykRxI__UMa43UFW3Io35SQS3-mNlTrdE",
    authDomain: "chat-f1709.firebaseapp.com",
    databaseURL: "https://chat-f1709.firebaseio.com",
    projectId: "chat-f1709",
    storageBucket: "chat-f1709.appspot.com",
    messagingSenderId: "220091852643",
    appId: "1:220091852643:web:45bf3449160ae5fb521556"
  };
firebase.initializeApp(firebaseConfig);
  
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
