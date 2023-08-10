<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const { locale } = useI18n()

// dummy data
const categories = {
    uz: [
        {
            name: "Til kurslari",
            count: 19,
        },
        {
            name: "Maktab fanlari",
            count: 9,
        },
        {
            name: "Bolalar uchun",
            count: 14,
        },
        {
            name: "Kompyuter va IT",
            count: 15,
        },
        {
            name: "Professional",
            count: 26,
        },
        {
            name: "Biznes",
            count: 24,
        },
        {
            name: "San’at",
            count: 13,
        },
    ],
    ru: [
        {
            name: "Языковые",
            count: 19,
        },
        {
            name: "Школьные предметы",
            count: 9,
        },
        {
            name: "Для детей",
            count: 14,
        },
        {
            name: "Компьютер и IT",
            count: 15,
        },
        {
            name: "Профессиональные",
            count: 26,
        },
        {
            name: "Бизнес",
            count: 24,
        },
        {
            name: "Искусство",
            count: 13,
        },
    ],
}

</script>

<template>
    <div class="flex flex-col gap-4 sm:gap-5">
        <div class="flex flex-col gap-2.5">
            <div class="container text-2xl font-bold text-black">{{ $t("categories.select") }}</div>
            <div class="flex gap-2.5 overflow-x-scroll no-scrollbar px-4 sm:px-5">
                <div v-for="item in categories[locale]" :key="item.key"
                    class="flex gap-2.5 whitespace-nowrap p-2.5 bg-white hover:bg-white active:bg-bg2 font-bold text-base text-black rounded-[80px]">
                    <div class="w-[30px] h-[30px] bg-bg2 rounded-full overflow-hidden">
                        <img class="ml-[3px]" src="~/assets/images/category.svg" alt="icon">
                    </div>
                    <div class="flex items-center gap-[5px]">
                        {{ item.name }}
                        <span class="bg-bg2 rounded-3xl text-xs font-normal flex items-center justify-center px-2 h-6">
                            {{ item.count }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <carousel :items-to-show="1.2" :wrap-around="true">
                <slide class="rounded-2xl" v-for="slide in 3" :key="slide">
                    <img src="~/assets/images/carousel.png" alt="carousel">
                </slide>
            </carousel>
        </div>
    </div>
</template>

<style scoped>
.carousel__slide {
    padding: 0 5px;
}
</style>