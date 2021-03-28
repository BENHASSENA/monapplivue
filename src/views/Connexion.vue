//////////////////////////  HTML  ////////////////////////
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

//////////////////////////  SCRIPT  ////////////////////////

<script>

import firebase from "firebase";

export default {
  name: 'Connexion',
  components: {

  },
  data: () => ({
      name: '',
      email: '',
      password: '',
    }),
  // methods réunit toutes les fonctions
  methods: {
    signInWithEmailAndPassword(){
      console.log('hello')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          //sert pour faire la redirection vers la page mon compte
          this.$router.push({
            name:'Moncompte',
          })
          // ...
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

//////////////////////////  CSS  ////////////////////////

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