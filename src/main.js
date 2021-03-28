import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

const configOptions = {
  apiKey: "AIzaSyCg9KV8hsPe4fQZB5qAeFGjWqb8NyO5Xdg",
  authDomain: "appli-ecole.firebaseapp.com",
  projectId: "appli-ecole",
  storageBucket: "appli-ecole.appspot.com",
  messagingSenderId: "95967543424",
  appId: "1:95967543424:web:230dbffa5658f06f786665",
  measurementId: "G-3TXCLZVK3S"
};

firebase.initializeApp(configOptions);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


