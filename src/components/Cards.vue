<script>
import CardContent from './CardContent.vue';

    export default {
        components: {
            CardContent
        },
        props: {
            list: Array,
        },
        setup(props) {
            return {
               list: props.list,
            }
            
        },
    }
</script>

<template>

<h1 class="font-body font-semibold mt-14 mb-14 text-5xl text-white">Últimos posts</h1>
<div v-for="card in list">
    <CardContent :text= card.text :date=card.date />
</div>
</template>