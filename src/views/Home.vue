<template>
  <div class="home">
 
    <HelloWorld :msg="toto"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
      toto: "bienvenue sur mon site"
      
    }),
}
</script>
