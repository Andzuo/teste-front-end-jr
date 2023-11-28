<script>
import { ref } from 'vue';

export default {
  props: {
    onSend: Function
  },
  setup(props) {
    const textValue = ref('');

    const postCard = () => {
      props.onSend(textValue.value);
      console.log('mensagem postada:' + textValue.value);
    };
    return {
      textValue,
      postCard
    }
  },
};
</script>

<template>
<div class="flex flex-row lg:flex-row">
  <img src="./../../public/Avatar.png" alt="" class="flex-shrink-0 w-11 h-11 mr-4 lg:mr-8">
  <div class="flex-1 w-full lg:w-96 bg-secondary max-w-96 shadow-md flex flex-col rounded-lg items-end">
    <div class="w-full p-4">
      <div class="mb-2">
        <textarea v-model="textValue" rows="4" class="p-2 w-full text-sm text-white bg-secondary border-none rounded-lg border border--300 focus:border-none" placeholder="Insira sua mensagem..."></textarea>
      </div>
      <div class="w-full border-t border-line">
        <button @click="postCard" class="flex lg:float-right mx-auto mt-5 px-6 lg:px-16 py-2 text-sm text-blue-100 bg-green-500 rounded lg:justify-items-end lg:items-end">Postar</button>
      </div>
    </div>
  </div>
</div>

</template>