<script>
import { ref } from 'vue';
import { formatDistance, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default {
  props: {
    text: String,
    date: Date,
  },
  setup() {
    const isLiked = ref(false);
    const timeFormated = (date) => {
      return formatDistance(date, new Date(), { addSuffix: true, locale: ptBR })
      
    }
      

    const toggleLike = () => {
      isLiked.value = !isLiked.value;
    };

    return { isLiked, toggleLike, timeFormated };
  },
};

</script>

<template>

  <div class="flex-col p-4">
    <div class="flex flex-1">
      <img src="./../../public/Avatar.png" alt="" class="flex-shrink-0 w-11 h-11 mr-3 lg:mr-3">
      <div class="flex-1 bg-secondary max-w-96 shadow-md flex flex-col rounded-lg  ">
        <div class="w-full p-4">
          <div class="mb-2">
            <p class="p-2 w-full text-sm text-white border-none rounded-lg border border--300 opacity-60 focus:border-none">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full">
        <div class="w-full ml-14 lg:mr-10 justify-between">
            <span class="text-white h-11 text-xs font-normal"> {{ timeFormated(date) }} </span>
        </div>
        <div class=" text-white flex justify-end items-end">
            <button class='text-xs text-fav bg-secondary rounded p-1 mt-1 mb-10' @click="toggleLike">
                <div class="flex items-center gap-3">
                    Favoritar
                    <svg :class="{ 'fill-yellow': isLiked }"  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.50371 1.23957C6.53143 1.16871 6.57863 1.1081 6.63931 1.06544C6.69999 1.02278 6.77141 1 6.84448 1C6.91755 1 6.98897 1.02278 7.04966 1.06544C7.11034 1.1081 7.15754 1.16871 7.18526 1.23957L8.57783 4.74977C8.6039 4.81546 8.64675 4.87233 8.70167 4.91413C8.75659 4.95594 8.82145 4.98105 8.88912 4.98672L12.5052 5.29028C12.8322 5.31775 12.9646 5.74563 12.7156 5.96883L9.96058 8.44267C9.90911 8.48881 9.87075 8.54892 9.84972 8.61639C9.82868 8.68387 9.82577 8.75611 9.84131 8.82521L10.6834 12.5236C10.7003 12.5978 10.6959 12.6756 10.6707 12.7471C10.6454 12.8187 10.6005 12.8808 10.5416 12.9257C10.4827 12.9705 10.4125 12.996 10.3397 12.999C10.267 13.002 10.195 12.9824 10.1329 12.9425L7.0365 10.9611C6.97865 10.9242 6.91222 10.9046 6.84448 10.9046C6.77675 10.9046 6.71031 10.9242 6.65247 10.9611L3.55603 12.9432C3.49395 12.9831 3.42199 13.0027 3.34925 12.9997C3.27651 12.9967 3.20625 12.9712 3.14735 12.9263C3.08844 12.8815 3.04354 12.8194 3.0183 12.7478C2.99307 12.6763 2.98863 12.5985 3.00556 12.5243L3.84766 8.82521C3.86327 8.75612 3.8604 8.68385 3.83936 8.61636C3.81832 8.54886 3.77992 8.48876 3.72839 8.44267L0.973374 5.96883C0.918203 5.91912 0.878292 5.85341 0.858657 5.77999C0.839023 5.70656 0.840543 5.62869 0.863026 5.55617C0.885509 5.48365 0.927952 5.41971 0.985016 5.3724C1.04208 5.32509 1.11122 5.29652 1.18373 5.29028L4.79985 4.98672C4.86751 4.98105 4.93237 4.95594 4.98729 4.91413C5.04221 4.87233 5.08507 4.81546 5.11113 4.74977L6.50371 1.23957Z" stroke="#FFC909" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</div>
</template>

<style scoped>
button:hover svg {
    fill: yellow
}
.fill-yellow {
    animation: transitionLike 1s ease-in;
    fill: yellow;
}
@keyframes transitionLike {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
}
</style>