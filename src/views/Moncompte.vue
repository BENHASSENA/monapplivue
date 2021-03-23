<template>
  <div class="moncompte">
    <h1>Bienvenue sur la page mon compte</h1>

    <div class="box-btn">

    <v-btn class="my-btn"
      elevation="4"
      large
      x-large
    >
    <div >Me connecter</div>
 
    </v-btn>

    <v-btn class="my-btn"
      disabled
      elevation="4"
      large
      x-large
    >
      <div > Me déconnecter</div>
    </v-btn>
    

    </div>

  </div>
</template>

<script>




export default {
  name: 'Moncompte',
  components: {

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
  animation: 3s ease-in-out 2s slidein;
  color: rgb(23, 21, 74);
}
@keyframes slidein {
  from { transform: scaleX(-1); }
  to   { transform: scaleX(1); }
}

.box-btn, h1{
  display: flex;
  justify-content: center;
}

.theme--light.v-btn.v-btn--has-bg{
  background-color:#51a96c;
}

</style>