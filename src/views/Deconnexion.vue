//////////////////////////  HTML  ////////////////////////

<template>
  <div>
    <h1>Déconnexion</h1>
    <div class="box-btn">
    <v-btn class="my-btn"
      elevation="4"
      large
      x-large
    >
    <router-link class="my-link" to="/">Déconnexion</router-link> 
    </v-btn>
    </div>

  </div>
</template>

//////////////////////////  SCRIPT  ////////////////////////

<script>

// import firebase from "firebase";


export default {
  name: 'Deconnexion',
  components: {

  },
  data: () => ({
      name: '',
      email: '',
      password: '',
    }),
  methods: {
      // signOut(){
      // firebase.auth().signOut().then(() => {
      //         // Sign-out successful.
      //       }).catch((error) => {
      //         // An error happened.
      //       });
      //  }
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


.box-btn, h1{
  display: flex;
  justify-content: center;
}

.theme--light.v-btn.v-btn--has-bg{
  background-color:#51a96c;
}

</style>