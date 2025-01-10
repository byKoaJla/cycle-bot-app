<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { BackButton, MainButton, useWebAppPopup, useWebApp } from 'vue-tg'

const route = useRoute();
const useItems = useItemsStore();
const itemId = route.params.id;
const item = storeToRefs(useItems).lots.value.find(f => f.id.toString() == itemId);

const text = ref("");

const {showAlert} = useWebAppPopup();
const { initDataUnsafe } = useWebApp();
const goBack = () => {
    navigateTo(`/castegories/${item?.category.title}`);
}

</script>

<template>
    <div class="flex flex-col w-full p-4">
        <img :src="`/img/${item?.image}`" alt="">
        <div class="flex flex-col">
            <h1 class="text-2xl font-bold text-center dark:text-white">{{ item?.title }}</h1>
            <p class="text-lg text-center dark:text-white"> 💲{{ item?.price }}</p>
        </div>
        <div class="flex w-full mt-4 ">
            <p class="text-center dark:text-white">{{ item?.description }}</p>
        </div>
        <BackButton class="w-full" @click="goBack"/>
        <MainButton class="w-full" text="Купить" @click="() => showAlert(`${initDataUnsafe.user?.username} стал владельцем`)"/>
    </div>
</template>