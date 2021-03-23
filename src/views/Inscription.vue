<template>

    <div>

    <h1>Bienvenue sur la page d'inscription</h1>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>

    </div>
</template>


<script>

export default {
  name: 'Formulaire',
  components: {

  }
}

</script>

<style lang="scss">

form{
  margin: 0 30vw;
}


h1{
  margin:100px;
  font-size: 50px;
  animation: 3s ease-in-out 2s slidein;
  color: rgb(23, 21, 74);
}
@keyframes slidein {
  from { transform: scaleX(-1); }
  to   { transform: scaleX(1); }
}

 h1{
  display: flex;
  justify-content: center;
}

</style>