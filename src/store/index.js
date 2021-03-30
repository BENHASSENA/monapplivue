import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    // Récuperer l'utilisateur connecté
    // get sert pour récupèrer l'utilisateur
    getUser(state){
      return state.user
    },
    // Vérifier si l'utilisateur est connecté
    // isConnected = Si l'utilisateur est différent de null alors ça me retourne true 
    isConnected(state){
      return state.user != null
    }
  },
  mutations: {
    // set sert pour initialiser l'utilisateur lors de la connexion
    // Je récupère le user que je passe en parametre
    setUser(state, user){
      // Je stock user dans ma variable state.user
      state.user = user
    }
  },
  actions: {

  },
  modules: {
  }
})
