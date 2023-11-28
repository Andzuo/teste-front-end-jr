<script >
    import CardSend from './components/CardSend.vue'
    import Cards from './components/Cards.vue'
    import { ref } from 'vue'
    import CardContent from './components/CardContent.vue'

    export default {
    components: {
      CardSend,
      Cards,
      CardContent,
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

  <CardSend :onSend= postCard />
  <Cards :list = list />
  <CardContent text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto" date="há 5 minutos" />
  <CardContent text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto" date="há 3 dias" />
  <CardContent text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoo" date="há 6 meses" />

 </div>
</template>