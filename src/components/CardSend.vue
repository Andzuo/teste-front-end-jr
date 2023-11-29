<script>
import { ref } from 'vue';

export default {
  props: {
    onSend: Function
  },
  setup(props) {
    const textValue = ref('');

    const postCard = () => {
      if (textValue.value === '') {
        alert('Inisira um texto valido')
      } else {
      props.onSend(textValue.value);
      textValue.value = ''
    }
  };
    return {
      textValue,
      postCard
    }
  },
};
</script>

<template>
  <h1 class="font-body font-semibold mt-14 mb-14 text-5xl text-white">Social Feed</h1>
<div class="flex flex-row lg:flex-row min-w-96">
  <img src="./../../public/Avatar.png" alt="" class="flex-shrink-0 w-11 h-11 mr-4 lg:mr-8">
  <div class="flex-1 min-w-96 bg-secondary shadow-md flex flex-col rounded-lg items-end">
    <div class="w-full p-4">
      <div class="mb-2">
        <textarea v-model="textValue" rows="4" class="p-2 w-full text-sm text-white bg-secondary border-none rounded-lg border border--300 outline-0 focus:border-none" placeholder="Insira sua mensagem..."></textarea>
      </div>
      <div class="w-full border-t border-line">
        <button @click="postCard" class="flex lg:float-right mx-auto mt-5 px-6 lg:px-16 py-2 text-sm text-blue-100 bg-green-500 rounded lg:justify-items-end lg:items-end">Postar</button>
      </div>
    </div>
  </div>
</div>
</template>

