<script lang="ts" setup>
import { storeToRefs } from 'pinia';

const route = useRoute();
const itemsStore = useItemsStore();
const originItems = storeToRefs(itemsStore);
const category = route.params.id;
const items = originItems.lots.value.filter((f) => f.category.title == category);

</script>

<template>
    <div class="p-4 flex flex-col gap-4">
        <nuxt-link :to="`/items/${item.id}`" class="flex flex-col w-full p-4 border rounded-lg justify-center content-center text-center" v-for="item in items" :key="item.id">
            <img 
            :src="`/img/${item.image}`" class="w-52 h-52 object-cover mx-auto" alt="no-content" />
            <div class="">
              <h1>{{ item.title }}</h1>
                <p>💲{{  item.price  }}</p>
            </div>
          
        </nuxt-link>
    </div>
</template>