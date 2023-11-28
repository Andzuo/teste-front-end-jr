<script >
// import { ref, watchEffect } from 'vue';
// import CardSend from './CardSend.vue'
// import { watch } from 'fs';

export default {
     props: {
        text: String,
    },
    // setup () {
    // const ceateTime = ref('');

    // const hours = () => {
    //   const dataAtual = new Date();
    //   const formatoData = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    //   ceateTime.value = new Intl.DateTimeFormat('pt-BR', formatoData).format(dataAtual);

    //   watchEffect(() => {
    //     hours();
    //   })
    // };
    }

</script>

<template>
    <div class="flex-1 w-full lg:w-96 bg-secondary max-w-96 shadow-md flex flex-col rounded-lg items-end">
    <img src="./../../public/Avatar.png" alt="" class="flex-shrink-0 w-11 h-11 mr-4 lg:mr-8">
        <p>{{text}}</p>
    </div>
    <div>
        <input type="checkbox">
    </div>
</template>