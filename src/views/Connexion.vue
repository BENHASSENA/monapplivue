<template>
  <div>
    <h1>Connexion</h1>
    <div class="content">
      <div class="box-content"> 
        <v-text-field 
          v-model="email"
          label="E-mail ou pseudo"
          required
        ></v-text-field>
      </div>
      <div class="box-content">
        <v-text-field
          v-model="password"
          type="password"
          label="Mot de passe"
          required
        ></v-text-field>
      </div>
    </div>
    <div class="box-btn">
      <v-btn
        class="mr-4"
        @click="signInWithEmailAndPassword"
      >
        Me connecter
      </v-btn>
    </div>
  </div>
</template>



<script>

import firebase from "firebase";
import { mapMutations } from 'vuex';

export default {
  name: 'Connexion',
  data: () => ({
      name: '',
      email: '',
      password: '',
      todos: [],
    }),
  // methods réunit toutes les fonctions
  methods: {
    // Récupere toutes les fonctions du store et dans mutations
    ...mapMutations([
      // Ici je permet d'utiliser setUser à la ligne 66
      'setUser'
    ]),
    signInWithEmailAndPassword(){
      console.log('hello')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Je créé la variable user dans laquelle se trouve l'utilisateur
          var user = userCredential.user;
          console.log(user);
          // J'utilise la fonction setUser (qui se situe dans le store, dans mutation ) 
          // grace au mapMutation placé au début des methods et à l'import de {mapMutation}
          // Et je passe en parametre la variable user situé à la ligne 62
          this.setUser(user);

          console.log(db);
          //sert pour faire la redirection vers la page mon compte
          this.$router.push({
            name:'Moncompte',
          })

        })
        .catch((error) => {
          var errorCode = error.code;
              console.log(errorCode);
          var errorMessage = error.message;
              console.log(errorMessage);
        });
    }

  }
}


</script>



<style lang="scss">
.theme--light.v-application{
  background-color: #dce3eb;
}
.my-btn {
  color: rgb(255, 255, 255)!important;
  margin: 0;
  margin-left: 50px;
}

h1{
  margin: 100px;
  font-size: 80px;
  color: rgb(23, 21, 74);
}

.content{
  display: flex;
  justify-content: center;
  margin: 0 35vw;
  flex-direction: column;

}

.box-content{
  display: flex;
}

.box-btn, h1{
  text-align: center;
}

.theme--light.v-btn.v-btn--has-bg{
  background-color:#51a96c;
}

</style>