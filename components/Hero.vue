<script setup>
import { AutoPlay, Pagination, Arrow } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";
const { locale } = useI18n()

// FLICKING carousel
const carouselOptions = {
    circular: true,
    align: 'center',
    panelsPerView: 1.2,
    preventClickOnDrag: true,
    duration: 300,
    threshold: 0,
    renderOnlyVisible: true,
}

const largeCarouselOptions = {
    circular: true,
    align: 'center',
    panelsPerView: 1,
    preventClickOnDrag: true,
    duration: 300,
    threshold: 0,
    renderOnlyVisible: true,
}

const categoriesCarousel = {
    moveType: 'freeScroll',
    bound: true,
    preventClickOnDrag: true,
    bounce: '10%',
    align: 'prev',
}
const plugins = [new AutoPlay({ duration: 5000, stopOnHover: true, delayAfterHover: 2000 })]
const pluginsLarge = [
    new AutoPlay({ duration: 5000, stopOnHover: true, delayAfterHover: 2000 }),
    new Pagination({ type: 'bullet' }),
    new Arrow()
]
const flicking = ref(null)

// categories
const { data: categoriesData } = await useMyFetch(`/api/announcements/categories/?format=json`)

const categories = ref([])
if (categoriesData.value) {
    categories.value = categoriesData.value
}
const isCategories = useState('isCategoriesOpen');

const isTouchDevice = ref(false)
const isScrolling = ref(false)
const hoveredCategory = ref(null)

onMounted(() => {
    isTouchDevice.value = isTouchScreen()
    window.addEventListener('resize', () => {
        if (flicking.value) {
            if (window.innerWidth >= 1280) {
                flicking.value.destroy();
            } else {
                flicking.value.init();
            }
        }
    })
})

</script>

<template>
    <div class="flex flex-col xl:flex-row gap-4 sm:gap-5 select-none xl:mx-auto" @mouseleave="hoveredCategory = null">
        <div class="hidden flex-col gap-0 px-4 bg-white rounded-3xl p-5 w-[392px] min-h-[488px] xl:flex">
            <div class="text-2xl font-bold text-black mb-2.5">{{ $t("categories.select") }}</div>
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
                    <BaseCount count="19" />
                </div>
            </div>
            <NuxtLink :to="!isScrolling ? '#' : null" v-for="item, index in categories.slice(0, 7)" :key="item.key"
                @mouseover="hoveredCategory = index"
                class="flex items-center gap-2.5 whitespace-nowrap py-[5px] px-2.5 xl:py-2.5 bg-white hover:bg-bg2 pressed-bg font-bold text-base text-black rounded-[80px]">
                <div class="w-6 h-6 xl:w-[30px] xl:h-[30px] bg-bg2 rounded-full overflow-hidden">
                    <img class="ml-[3px]" src="~/assets/images/category.svg" alt="icon">
                </div>
                <div class="flex items-center gap-[5px]">
                    {{ item.name }}
                    <BaseCount class="font-normal" v-if="item.subcategories" :count="item.subcategories.length" />
                </div>
            </NuxtLink>
            <BaseButton class="hidden xl:block mt-2.5" state="primary" size="large" @click="isCategories = true">{{
                $t("categories.all") }}
            </BaseButton>
        </div>
        <!-- categories -->
        <div class="xl:hidden">
            <Flicking :options="categoriesCarousel" :hide-before-init="true" class="px-4 sm:px-5" ref="flicking">
                <div
                    class="flex items-center gap-2.5 whitespace-nowrap py-[5px] px-2.5 bg-white hover:bg-bg2 pressed-bg font-bold text-sm text-black rounded-[80px] mx-[5px]">
                    <div class="w-[24px] h-[24px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.0119 0.736679C18.412 0.843886 18.6494 1.25514 18.5422 1.65524L18.1762 3.02126C18.069 3.42136 17.6577 3.6588 17.2576 3.55159C16.8575 3.44439 16.6201 3.03313 16.7273 2.63303L17.0933 1.26701C17.2005 0.86691 17.6118 0.629473 18.0119 0.736679ZM13.8679 2.43292C13.1951 1.26759 11.5866 1.08579 10.6707 2.07155L4.22214 9.01165C4.44711 9.21571 4.64467 9.45767 4.80468 9.73482L7.30468 14.0649C7.46471 14.3421 7.57548 14.6342 7.63971 14.9311L16.8743 12.8166C18.186 12.5162 18.8328 11.0324 18.16 9.86702L13.8679 2.43292ZM5.84519 14.7242L3.34519 10.3941C2.93097 9.67665 2.01359 9.43084 1.29615 9.84505C0.57871 10.2593 0.332897 11.1767 0.747111 11.8941L3.24711 16.2242C3.66132 16.9417 4.57871 17.1875 5.29615 16.7733C6.01359 16.359 6.2594 15.4417 5.84519 14.7242ZM11.7076 19.1439L9.80417 15.8471L12.8638 15.1465L14.3057 17.6439C14.7199 18.3613 14.474 19.2787 13.7566 19.6929C13.0392 20.1071 12.1218 19.8613 11.7076 19.1439ZM19.6459 5.56682C19.2458 5.45961 18.8345 5.69705 18.7273 6.09715C18.6201 6.49725 18.8575 6.9085 19.2576 7.01571L20.6236 7.38173C21.0237 7.48894 21.435 7.2515 21.5422 6.8514C21.6494 6.4513 21.412 6.04005 21.0119 5.93284L19.6459 5.56682Z"
                                fill="#1977F1" />
                        </svg>
                    </div>
                    <div class="flex items-center gap-[5px]">
                        {{ $t("categories.allAnnouncements") }}
                        <BaseCount class="font-normal" count="19" />
                    </div>
                </div>
                <NuxtLink to="#" v-for="item in categories" :key="item"
                    class="flex items-center gap-2.5 whitespace-nowrap py-[5px] px-2.5 bg-white hover:bg-bg2 pressed-bg font-bold text-base text-black rounded-[80px] mx-[5px]">
                    <div class="w-6 h-6 bg-bg2 rounded-full overflow-hidden">
                        <img class="ml-[3px]" src="~/assets/images/category.svg" alt="icon">
                    </div>
                    <div class="flex items-center gap-[5px]">
                        {{ item.name }}
                        <BaseCount class="font-normal" v-if="item.subcategories" :count="item.subcategories.length" />
                    </div>
                </NuxtLink>
            </Flicking>
        </div>
        <!-- carousel -->
        <Flicking :hide-before-init="true" class="lg:hidden" :options="carouselOptions" :plugins="plugins">
            <div class="rounded-2xl overflow-hidden sm:rounded-3xl px-[5px] w-4/5" v-for="slide in 3" :key="slide">
                <img src="~/assets/images/carousel.png" alt="carousel">
            </div>
        </Flicking>
        <div class="mx-5 xl:mx-0 xl:w-[804px] hidden lg:block relative rounded-3xl overflow-hidden">
            <Flicking :hide-before-init="true" :options="largeCarouselOptions" :plugins="pluginsLarge"
                v-if="hoveredCategory == null">
                <div class="overflow-hidden rounded-3xl px-[5px] w-full" v-for="slide in 3" :key="slide">
                    <img class="w-full" src="~/assets/images/carousel.png" alt="carousel">
                </div>
                <template #viewport>
                    <span class="group/icon flicking-arrow flicking-arrow-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.44684 0.688022C9.98592 1.11928 10.0733 1.9059 9.64206 2.44498L3.60008 9.99744L9.64205 17.5499C10.0733 18.089 9.98592 18.8756 9.44684 19.3069C8.90776 19.7381 8.12114 19.6507 7.68988 19.1116L1.02322 10.7783C0.657998 10.3218 0.657998 9.6731 1.02322 9.21657L7.68988 0.88324C8.12115 0.344162 8.90776 0.256761 9.44684 0.688022Z"
                                class="fill-white group-active/icon:fill-blue" />
                        </svg>
                    </span>
                    <span class="group/icon flicking-arrow flicking-arrow-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.553162 0.688022C0.0140842 1.11928 -0.0733174 1.9059 0.357944 2.44498L6.39992 9.99744L0.357945 17.5499C-0.0733167 18.089 0.014085 18.8756 0.553162 19.3069C1.09224 19.7381 1.87886 19.6507 2.31012 19.1116L8.97678 10.7783C9.342 10.3218 9.342 9.6731 8.97678 9.21657L2.31012 0.88324C1.87885 0.344162 1.09224 0.256761 0.553162 0.688022Z"
                                class="fill-white group-active/icon:fill-blue" />
                        </svg>
                    </span>
                    <div class="flicking-pagination"></div>
                </template>
            </Flicking>
            <div class="overflow-y-auto flex flex-col gap-5 bg-white absolute top-0 left-0 p-5 h-full w-full" v-else>
                <div class="flex text-2xl font-bold items-center">
                    {{ categories[hoveredCategory].name }}
                    <div class="w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
                <div class="gap-5 columns-4">
                    <div class="flex flex-col gap-2.5 pb-5 text-black"
                        v-for="(item, index) in categories[hoveredCategory].subcategories" :key="item.key"
                        :class="{ 'inline-flex': item.subcategories }">
                        <NuxtLink to="#" class="text-base font-bold hover:text-blue active:text-pressed break-inside-avoid">
                            {{ item.name }}
                        </NuxtLink>
                        <div class="flex flex-col gap-[5px]" v-if="item.subcategories">
                            <NuxtLink to="#" class="text-sm text-left hover:text-blue active:text-pressed"
                                v-for="sub in item.subcategories" :key="sub.key">
                                {{ sub.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pressed-bg:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #E9EFFF;
}
</style>

<style>
.flicking-arrow {
    border-radius: 83.333px;
    background: rgba(25, 119, 241, 0.60);
    backdrop-filter: blur(8.33);
    display: flex;
    justify-content: center;
    align-items: center;
}

.flicking-arrow:hover,
.flicking-arrow:active {
    background: rgba(25, 119, 241, 0.80);
}

.flicking-arrow-prev {
    left: 20px;
}

.flicking-arrow-prev svg {
    margin-right: 2px;
}

.flicking-arrow-next {
    right: 20px;
}

.flicking-arrow-next svg {
    margin-left: 2px;
}

.flicking-arrow-prev,
.flicking-arrow-next {
    width: 40px!important;
    height: 40px!important;
}

.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
    display: none;
}

.flicking-pagination {
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 200px;
    background: rgba(25, 119, 241, 0.60);
    backdrop-filter: blur(10px);
    padding: 10px;
    height: 24px;
    display: flex;
    align-items: center;
}

.flicking-pagination-bullet {
    width: 5px;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.50);
    transition: all 100ms ease-in-out;
}

.flicking-pagination-bullet:hover {
    background-color: rgba(255, 255, 255, 0.70);
}

.flicking-pagination-bullet-active {
    width: 10px;
    height: 10px;
    background-color: #fff;
}
</style>