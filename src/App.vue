<script >
    import CardSend from './components/CardSend.vue'
    import Cards from './components/Cards.vue'
    import { ref } from 'vue'
    import { subMinutes, subDays, subMonths } from 'date-fns'


    export default {
    components: {
      CardSend,
      Cards,
    },
    setup () {
      const list = ref([{
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
        date: subMinutes(new Date(), 5)
      },
      {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
        date: subDays(new Date(), 3)
      },
      {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
        date: subMonths(new Date(), 6)
      },
      ])

    const postCard = (text) => {
      list.value.unshift({
        text, 
        date: new Date()
      })
    };
    console.log(list.value)
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
    

  <CardSend :onSend= postCard />
  <Cards :list = list />

 </div>
</template>
