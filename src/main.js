import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import * as fd from 'firebase'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {    
    fb.initializeApp({
      apiKey: "AIzaSyAeXNUa1SKo8xcTowm3aeEl02OE4lH9GWo",
      authDomain: "todolist-vue-9dd5c.firebaseapp.com",
      databaseURL: "https://todolist-vue-9dd5c.firebaseio.com",
      projectId: "todolist-vue-9dd5c",
      storageBucket: "todolist-vue-9dd5c.appspot.com",
      messagingSenderId: "362475699509"
    })
  },
}).$mount('#app')
