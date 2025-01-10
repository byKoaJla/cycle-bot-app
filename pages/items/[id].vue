<script lang="ts" setup>
import { storeToRefs } from 'pinia';

const route = useRoute();
const useItems = useItemsStore();
const itemId = route.params.id;
const item = storeToRefs(useItems).lots.value.find(f => f.id.toString() == itemId);

const text = ref("");

</script>

<template>
    <div class="flex flex-col w-full p-4">
        <img :src="`/img/${item?.image}`" alt="">
        <div class="flex flex-col">
            <h1 class="text-2xl font-bold text-center">{{ item?.title }}</h1>
            <p class="text-lg text-center"> 💲{{ item?.price }}</p>
        </div>
        <div class="flex w-full mt-4">
            <p class="text-center">{{ item?.description }}</p>
        </div>
        <nuxt-link :to="`/categories/${item?.category.title}`" class="bg-black text-white text-center p-2 w-full mt-3 rounded-lg focus:ring-4 focus:ring-[#EEEEEE]">
            <p>Назад</p>
        </nuxt-link>
    </div>
</template>