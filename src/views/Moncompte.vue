<template>
  <div >
    <h1>Bienvenue {{getUser.displayName}}</h1>
    <v-text-field class="content"
    v-model="valueA"
    type="number"
    >

    </v-text-field>
    <v-text-field class="content"
    v-model="valueB"
    type="number"
    > 
       
    </v-text-field>

    <div class="content">
      <v-btn class="my-btn"
      elevation="4"
      large
      x-large
      @click="calculer"
      >
      Calculer
      </v-btn>
    </div>
    

    <v-card>
        <v-card-title>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
        :search="search"
        :headers="headers"
        :items="activities"
        ></v-data-table>
    </v-card>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Moncompte',
  data () {
    return {
      valueA: '',
      valueB: '',
      search: '',
      headers: [
          { 
            text: 'Activités',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Jour (h)', value: 'timeinday' },
          { text: 'Semaine (h)', value: 'timeinsemaine' },
          { text: 'Mois (h)', value: 'timeinmonth' },
          { text: 'Année (h)', value: 'timeinyear' },
      ],
      activities: [
          {
            name: 'Sport',
            timeinday: 1,
            timeinsemaine: 7,
            timeinmonth: 720,
            timeinyear: 8760,
          },
          {
            name: 'Famille',
            timeinday: 1,
            timeinsemaine: 7,
            timeinmonth: 720,
            timeinyear: 8760,
          },
          {
            name: 'Etudes',
            timeinday: 7,
            timeinsemaine: 35,
            timeinmonth: 154,
            timeinyear: 1848,
          },
          {
            name: 'Sommeil',
            timeinday: 7,
            timeinsemaine: 49,
            timeinmonth: 210,
            timeinyear: 2555,
          },
          {
            name: 'Amis',
            timeinday: 1,
            timeinsemaine: 7,
            timeinmonth: 720,
            timeinyear: 8760,
          },
      ],
    }
  }, 
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods:{
    calculer(){
      console.log("coucou");
      console.log(parseInt(this.valueA)+parseInt(this.valueB));
    },
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