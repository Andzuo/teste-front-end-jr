<script >
    import loginScreen from './components/loginScreen.vue'
    import CardSend from './components/CardSend.vue'
    export default {
    components: {
      loginScreen,
      CardSend,
    },
    setup () {
      return {}
    }
  }
</script>
<template>
<div class="mx-auto bg-custom-image bg-cover bg-center h-screen flex-col flex items-center">
    <img class="mt-28 w-50 h-10" src="../public/Logo.png" alt="">
    <h1 class="mt-14 mb-14 text-5xl text-white">Social Feed</h1>
  <!-- <loginScreen></loginScreen> -->
  
  <CardSend></CardSend>

  <h1 class="mt-14 mb-14 text-5xl text-white">Últimos posts</h1>
 </div>
</template>