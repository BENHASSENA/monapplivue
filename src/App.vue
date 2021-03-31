<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <template v-if="!isConnected">  
        <router-link class="my-link" to="/">Accueil</router-link> 
        <router-link class="my-link" to="/aide">Aide</router-link>
        <router-link class="my-link" to="/inscription">Inscription</router-link>
        <router-link class="my-link" to="/connexion">Connexion</router-link>
      </template>

      <template v-if="isConnected">    
        <router-link class="my-link" to="/moncompte">{{getUser.displayName}}</router-link>
        <router-link class="my-link" to="/reglages">Réglages</router-link>
        <router-link class="my-link" to="/deconnexion">Deconnexion</router-link>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCg9KV8hsPe4fQZB5qAeFGjWqb8NyO5Xdg",
    authDomain: "appli-ecole.firebaseapp.com",
    projectId: "appli-ecole",
    storageBucket: "appli-ecole.appspot.com",
    messagingSenderId: "95967543424",
    appId: "1:95967543424:web:230dbffa5658f06f786665",
    measurementId: "G-3TXCLZVK3S"
}

firebase.initializeApp(firebaseConfig);

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters([
      'isConnected',
      'getUser'
    ]),
  },
 
}

</script>

<style lang="scss">

.my-link {
  color: #fff!important;
  padding: 0 10px;
  text-decoration: none;
  font-size: 16px;
}


</style>
