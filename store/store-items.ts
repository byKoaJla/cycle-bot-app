import { defineStore } from "pinia";

export interface LotCategory {
    id: number,
    title: string,
    image: string,
    color: string,
};

export interface Lot {
    id: number,
    title: string,
    category: LotCategory,
    image: string,
    desciption: string,
    price: number,
};

const lotCategories: LotCategory[] = [
    { id: 1, title: 'Велосипеды', image: "🚴",color: "#FBC02D" },
    { id: 2, title: 'Снаряжение для кемпинга', image: "⛺", color: "#9CCC65" },
    { id: 3, title: 'Снаряжение для скалолазания', image: "⛰️", color: "#795548" },
    { id: 4, title: 'Снаряжение для водных видов спорта', image: "🏊", color: "#26C6DA" },
    { id: 5, title: 'Электровелосипеды', image: "🛴", color: "#0288D1" },
];


export const useItemsStore = defineStore('itemsStore', () => {
    const lots = ref([
        {
          id: 1,
          title: 'Горный велосипед',
          category: lotCategories[0],
          image: '01.png',
          description: 'Высококачественный горный велосипед для экстремального катания.',
          price: 1200 // Добавлена цена
        },
        {
          id: 2,
          title: 'Палатка для кемпинга',
          category: lotCategories[1],
          image: '02.png',
          description: 'Просторная палатка для комфортного кемпинга на природе.',
          price: 200 // Добавлена цена
        },
        {
          id: 3,
          title: 'Снаряжение для скалолазания',
          category: lotCategories[2],
          image: '03.png',
          description: 'Комплект профессионального снаряжения для скалолазания.',
          price: 300 // Добавлена цена
        },
        {
          id: 4,
          title: 'Каяк',
          category: lotCategories[3],
          image: '04.png',
          description: 'Легкий и маневренный каяк для водных приключений.',
          price: 500 // Добавлена цена
        },
        {
          id: 5,
          title: 'Электровелосипед',
          category: lotCategories[4],
          image: '09.png',
          description: 'Электрический велосипед для удобных и быстрых поездок.',
          price: 1500 // Добавлена цена
        },
        {
          id: 6,
          title: 'Рюкзак для кемпинга',
          category: lotCategories[1],
          image: '06.png',
          description: 'Вместительный рюкзак для комфортного кемпинга.',
          price: 100 // Добавлена цена
        },
        {
          id: 7,
          title: 'Лыжи для скалолазания',
          category: lotCategories[2],
          image: '07.png',
          description: 'Специальные лыжи для альпинизма.',
          price: 450 // Добавлена цена
        },
        {
          id: 8,
          title: 'Сапборд',
          category: lotCategories[3],
          image: '08.png',
          description: 'Удобный и устойчивый сапборд для водных прогулок.',
          price: 650 // Добавлена цена
        },
        {
          id: 9,
          title: 'Электрический самокат',
          category: lotCategories[4],
          image: '05.png',
          description: 'Электрический самокат для комфортных городских поездок.',
          price: 800 // Добавлена цена
        },
        {
          id: 10,
          title: 'Велосипедный шлем',
          category: lotCategories[0],
          image: '10.png',
          description: 'Надежный и стильный шлем для защиты головы.',
          price: 75 // Добавлена цена
        }
      ])      
    return {
        lots,
    }
});

