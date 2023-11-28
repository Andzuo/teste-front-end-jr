<script >

export default {
  props: {
    text: String,
    date: String,
  },
  setup(props) {
    const formatDate = (inputDate) => {
      const dateObject = new Date(inputDate);
        console.log(dateObject);
    };

    return {
      formattedDate: formatDate(props.date),
    };
  },
};

</script>

<template>
<div class="flex flex-row lg:flex-row">
  <img src="./../../public/Avatar.png" alt="" class="flex-shrink-0 w-11 h-11 mr-4 lg:mr-8">
  <div class="flex-1 w-full lg:w-96 bg-secondary max-w-96 shadow-md flex flex-col rounded-lg items-end">
    <div class="w-full p-4">
      <div class="mb-2">
        <p class="p-2 w-full text-sm text-white border-none rounded-lg border border--300 opacity-60 focus:border-none">{{ text }}</p>
      </div>
    </div>
  </div>
  <div>
    <span> {{ formattedDate }}</span>
  </div>
</div>
</template>