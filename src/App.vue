<script >
    import loginScreen from './components/loginScreen.vue'
    import CardSend from './components/CardSend.vue'
    import Cards from './components/Cards.vue'
    import { ref } from 'vue'

    export default {
    components: {
      loginScreen,
      CardSend,
      Cards,
    },
    setup () {
    const list = ref([])

    const postCard = (text) => {
      list.value.push({
        text
      })
      console.log(text,list)
    };
      return {
        list,
        postCard
      }
    }
  }
</script>
<template>
<div class="mx-auto bg-custom-image bg-cover bg-center h-screen flex-col flex items-center overflow-auto">
    <img class="mt-28 w-50 h-10" src="../public/Logo.png" alt="">
    <h1 class="mt-14 mb-14 text-5xl text-white">Social Feed</h1>

  <!-- <loginScreen></loginScreen> -->
  
  <CardSend :onSend= postCard />
  <Cards :list = list />

 </div>
</template>