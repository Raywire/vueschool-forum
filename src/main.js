// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase/app'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxnpK0P-eRpQsoc3DGjS5Ys67n4X9q6XM',
  authDomain: 'vue-school-forum-e2557.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-e2557.firebaseio.com',
  projectId: 'vue-school-forum-e2557',
  storageBucket: '',
  messagingSenderId: '143885409337',
  appId: '1:143885409337:web:f36166147f8bfd74'
}
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
