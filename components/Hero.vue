<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const { locale } = useI18n()

const isTouchDevice = ref(false)
const isScrolling = ref(false)

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

onMounted(() => {
    isTouchDevice.value = isTouchScreen()
})

</script>

<template>
    <div class="flex flex-col xl:flex-row gap-4 sm:gap-5 select-none xl:mx-auto">
        <div class="flex xl:flex-col gap-2.5 xl:gap-0 overflow-x-scroll no-scrollbar px-4 sm:px-5 xl:bg-white xl:rounded-3xl xl:p-5 xl:w-[392px]"
            v-dragscroll="!isTouchDevice" @dragscrollstart="isScrolling = true" @dragscrollend="isScrolling = false">
            <div class="hidden xl:block text-2xl font-bold text-black mb-2.5">{{ $t("categories.select") }}</div>
            <div
                class="xl:hidden flex items-center gap-2.5 whitespace-nowrap py-[5px] px-2.5 bg-white hover:bg-bg2 pressed-bg font-bold text-sm text-black rounded-[80px]">
                <div class="w-[24px] h-[24px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.0119 0.736679C18.412 0.843886 18.6494 1.25514 18.5422 1.65524L18.1762 3.02126C18.069 3.42136 17.6577 3.6588 17.2576 3.55159C16.8575 3.44439 16.6201 3.03313 16.7273 2.63303L17.0933 1.26701C17.2005 0.86691 17.6118 0.629473 18.0119 0.736679ZM13.8679 2.43292C13.1951 1.26759 11.5866 1.08579 10.6707 2.07155L4.22214 9.01165C4.44711 9.21571 4.64467 9.45767 4.80468 9.73482L7.30468 14.0649C7.46471 14.3421 7.57548 14.6342 7.63971 14.9311L16.8743 12.8166C18.186 12.5162 18.8328 11.0324 18.16 9.86702L13.8679 2.43292ZM5.84519 14.7242L3.34519 10.3941C2.93097 9.67665 2.01359 9.43084 1.29615 9.84505C0.57871 10.2593 0.332897 11.1767 0.747111 11.8941L3.24711 16.2242C3.66132 16.9417 4.57871 17.1875 5.29615 16.7733C6.01359 16.359 6.2594 15.4417 5.84519 14.7242ZM11.7076 19.1439L9.80417 15.8471L12.8638 15.1465L14.3057 17.6439C14.7199 18.3613 14.474 19.2787 13.7566 19.6929C13.0392 20.1071 12.1218 19.8613 11.7076 19.1439ZM19.6459 5.56682C19.2458 5.45961 18.8345 5.69705 18.7273 6.09715C18.6201 6.49725 18.8575 6.9085 19.2576 7.01571L20.6236 7.38173C21.0237 7.48894 21.435 7.2515 21.5422 6.8514C21.6494 6.4513 21.412 6.04005 21.0119 5.93284L19.6459 5.56682Z"
                            fill="#1977F1" />
                    </svg>
                </div>
                <div class="flex items-center gap-[5px]">
                    {{ $t("categories.allAnnouncements") }}
                    <span class="bg-bg2 rounded-3xl text-xs font-normal flex items-center justify-center px-2 h-6">19</span>
                </div>
            </div>
            <NuxtLink :to="!isScrolling ? '#' : null" v-for="item in categories[locale]" :key="item.key"
                class="flex items-center gap-2.5 whitespace-nowrap py-[5px] px-2.5 xl:py-2.5 bg-white hover:bg-bg2 pressed-bg font-bold text-sm xl:text-base text-black rounded-[80px] xl:[&:nth-of-type(n+8)]:hidden">
                <div class="w-6 h-6 xl:w-[30px] xl:h-[30px] bg-bg2 rounded-full overflow-hidden">
                    <img class="ml-[3px]" src="~/assets/images/category.svg" alt="icon">
                </div>
                <div class="flex items-center gap-[5px]">
                    {{ item.name }}
                    <span class="bg-bg2 rounded-3xl text-xs font-normal flex items-center justify-center px-2 h-6">
                        {{ item.count }}
                    </span>
                </div>
            </NuxtLink>
            <BaseButton class="hidden xl:block mt-2.5" type="primary" size="large">{{ $t("categories.all") }}</BaseButton>
        </div>
        <carousel class="lg:hidden" :items-to-show="1.2" :wrap-around="true" :autoplay="5000" :transition="1000" :pauseAutoplayOnHover="true">
            <slide class="rounded-2xl overflow-hidden sm:rounded-3xl" v-for="slide in 3" :key="slide">
                <img src="~/assets/images/carousel.png" alt="carousel">
            </slide>
        </carousel>
        <div class="mx-5 xl:mx-0 xl:w-[804px] hidden lg:block">
            <img class="w-full rounded-3xl" src="~/assets/images/carousel.png" alt="carousel">
        </div>
    </div>
</template>

<style scoped>
.carousel__slide {
    padding: 0 5px;
}

.pressed-bg:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #E9EFFF;
}
</style>