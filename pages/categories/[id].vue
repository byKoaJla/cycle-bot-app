<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { BackButton } from 'vue-tg'


const route = useRoute();
const itemsStore = useItemsStore();
const originItems = storeToRefs(itemsStore);
const category = route.params.id;
const items = originItems.lots.value.filter((f) => f.category.title == category);

const goBack = () => {
    navigateTo("/")
}

</script>

<template>
    <div class="p-4 flex flex-col gap-4">
        <BackButton class="w-full" @click="goBack"/>
        <nuxt-link :to="`/items/${item.id}`" class="flex flex-col w-full p-4 border rounded-lg justify-center content-center text-center" v-for="item in items" :key="item.id">
            <img 
            :src="`/img/${item.image}`" class="w-52 h-52 object-cover mx-auto" alt="no-content" />
            <div class="">
              <h1 class="dark:text-white">{{ item.title }}</h1>
                <p class="dark:text-white">💲{{  item.price  }}</p>
            </div>
        </nuxt-link>
    </div>
</template>