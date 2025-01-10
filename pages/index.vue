<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useItemsStore } from '~/store/store-items';

const lotsStore = useItemsStore();
const { lots } = storeToRefs(lotsStore);
const categories = Array.from(new Set(
    lots.value.map(lot => lot.category)
));
const searchText = ref('');
const filteredItems = computed(() => {
    return lots.value.filter(item => item.title.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase()));
});
const showResults = ref(false);

const showSearchResults = () => {
    showResults.value = true
}

const hideSearchResults = () => {
    setTimeout(() => {
        showResults.value = false;
    }, 2000);
};

</script>
<template>
    <div class="static p-5">
        <div class="flex flex-col w-full mt-4 mb-4">
            <input type="text" placeholder="Введите текст для поиска" class="border rounded-lg w-full text-lg p-2"
                v-model="searchText"
                @focus="showSearchResults"
                @blur="hideSearchResults"
                >
            <div v-if="showResults && searchText"
                class="absolute top-20 left-0 w-full p-2 bg-white border rounded-lg mt-2 shadow-lg">
                <div class="flex flex-col gap-2 max-h-60 overflow-auto">
                    <nuxt-link :to="`/items/${item.id}`" v-for="item in filteredItems" :key="item.id" class="p-2 hover:bg-gray-200 cursor-pointer" > 
                        {{ item.title }}
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-2 gap-4">
            <nuxt-link :to="`/categories/${category.title}`"
                class="flex flex-col justify-center items-center border rounded-lg p-4 text-center min-h-36"
                :class="`hover:bg-[${category.color}] focus:ring-4 focus:ring-[${category.color}]/50`"
                v-for="category in categories" :key="category.id" @click="">
                <span class="text-6xl mb-4">{{ category.image }}</span>
                <h1 class="text-pretty text-lg break-all">{{ category.title }}</h1>
            </nuxt-link>
        </div>
    </div>
</template>