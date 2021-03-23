<template>
  <div class="moncompte">
    <HelloWorld msg="Mon compte"/>

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

import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Moncompte',
  components: {
    HelloWorld
  }
}

</script>

<style lang="scss">

.my-btn {
  color: rgb(255, 255, 255)!important;
  margin: 0;
  margin-left: 50px;
  text-align:center;
  justify-content: center;
  align-items: center;
   display: flex;

}

.box-btn{
  display: flex;
}

.theme--light.v-btn.v-btn--has-bg{
  background-color:#51a96c;
}

</style>