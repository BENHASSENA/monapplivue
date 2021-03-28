//////////////////////////  HTML  ////////////////////////

<template>
  <div>
  <h1>Inscription</h1>
  <form>
    <v-text-field
      v-model="name"
      label="Pseudo"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      type="password"
      label="Mot de passe"
      required
    ></v-text-field>
    <v-btn
      class="mr-4"
      @click="submit"
    >
      M'inscrire
    </v-btn>
  </form>
  </div>
</template>

//////////////////////////  SCRIPT  ////////////////////////

<script>

import firebase from "firebase";

 export default {
  name: 'Inscription',
  components: {

  },
  data: () => ({
      name: '',
      email: '',
      password: '',
    }),
     methods: {
      submit() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(data => {
            console.log(data.user);
            data.user
              .updateProfile({
                displayName: this.name
              })
              .then(() => {});
          })
          .catch(err => {
            this.error = err.message;
          });
      },      
     }
}


</script>

//////////////////////////  CSS  ////////////////////////

<style lang="scss">

form{
  margin: 0 30vw;
}


h1{
  margin:100px;
  font-size: 50px;
  color: rgb(23, 21, 74);
}


 h1{
  display: flex;
  justify-content: center;
}

</style>