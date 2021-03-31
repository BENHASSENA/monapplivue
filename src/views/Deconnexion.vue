<template>
  <div>
    <h1>Déconnexion</h1>
    <div class="box-btn">
    <v-btn class="my-btn"
      elevation="4"
      large
      x-large
      @click="signOut"
    >
    deconnexion
    </v-btn>
    </div>

  </div>
</template>



<script>

import firebase from "firebase";
import { mapMutations } from 'vuex'


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
    ...mapMutations([
      'setUser'
    ]),
    signOut(){
      firebase.auth().signOut()
        .then(() => {
          // Sign-out successful.
          this.setUser(null);
            console.log('coucou');
          // sert pour faire la redirection une fois le setUser à null
          this.$router.push({
            name:'Home',
          })
        })
        .catch((error) => {
          console.log(error);
          // An error happened.
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


.box-btn, h1{
  display: flex;
  justify-content: center;
}

.theme--light.v-btn.v-btn--has-bg{
  background-color:#51a96c;
}

</style>