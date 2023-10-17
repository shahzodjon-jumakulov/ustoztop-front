<script setup>
const search = ref(null);
const searched = ref(false);
const sort = ref(0);
const isSortOpen = ref(false);
const categories = useCategories();

const breadCrumb = [
    {
        name: "Все категории",
        link: '/category/search',
    },
    {
        name: "Школьные предметы",
        link: '/category/search',
    },
    {
        name: "Математика",
        link: null,
    },
]

const selectedCategory1 = ref(null);
const selectedCategory2 = ref(null);

watch(search, () => { searched.value = search.value ? false : true; });

const sortOptions = [
    {
        name: "Сначала новые",
    },
    {
        name: "Сначала популярные",
    },
    {
        name: "Сначала дешевые",
    },
    {
        name: "Сначала дорогие",
    },
]

// dummy data
const results = [
    {
        top: true,
    },
    {
        top: true,
    },
    {
        top: true,
    },
    {
        top: true,
    },
    {
        top: false,
    },
    {
        top: false,
    },
    {
        top: false,
    },
    {
        top: false,
    },
    {
        top: false,
    },
]

onMounted(() => {
    console.log(categories.value)
})
</script>

<template>
    <div class="flex flex-col gap-2.5">
        <div class="bg-white py-4 sm:py-5 lg:pt-0">
            <div class="container flex flex-col gap-4 sm:gap-5">
                <div class="flex items-center gap-5 lg:hidden">
                    <NuxtLink :to="localePath('/')" class="h-10 max-md:hidden">
                        <PageLogo color="blue" :isAnimated="true" />
                    </NuxtLink>
                    <div class="flex gap-[5px] items-center flex-grow">
                        <BaseBack class="md:hidden" />
                        <div class="search-bar w-full overflow-hidden relative rounded-3xl">
                            <input type="text" id="searchMobile" v-model="search"
                                class="rounded-3xl bg-bg hover:bg-bg2 w-full h-[34px] sm:h-[50px] px-2.5 sm:px-5 outline-none caret-yellow placeholder:text-gray placeholder:text-sm text-sm text-black"
                                placeholder="Поиск объявлений" autocomplete="off"
                                :class="searched ? 'pr-7' : 'pr-[85px]'" />
                            <div class="absolute right-2.5 top-0 my-[7px] flex gap-[5px] sm:gap-2.5 items-center transition-transform duration-300 ease-[cubic-bezier(0.68,0,0.265,1.55)]"
                                :class="{ 'translate-x-0': search, '!translate-x-[calc(100%-12px)] sm:!translate-x-[calc(100%-24px)]': searched }">
                                <BaseClose class="max-sm:w-[18px] max-sm:h-[18px]" @click="search = null" />
                                <BaseButton state="primary"
                                    class="px-[11px] py-[7px] text-[10px] h-5 sm:h-[34px] sm:px-5 sm:py-3 sm:text-sm"
                                    @click="searched = true">
                                    Найти
                                </BaseButton>
                            </div>
                        </div>
                    </div>
                </div>
                <BreadCrumb class="max-md:hidden" :navs="breadCrumb" />
                <div class="flex flex-col gap-2.5">
                    <div class="text-2xl font-bold text-black">
                        Объявления по запросу
                        <span class="text-blue">«математика»</span>
                    </div>
                    <div class="flex max-sm:justify-between sm:gap-5 items-center">
                        <span>Найдено 136 объявлений</span>
                        <div class="flex gap-[5px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 14.6615C10.25 14.6615 14 10.5268 14 7.25405C14 3.98125 11.3137 1.32812 8 1.32812C4.68629 1.32812 2 3.98125 2 7.25405C2 10.5268 5.75 14.6615 8 14.6615ZM8 9.32812C9.10457 9.32812 10 8.43269 10 7.32812C10 6.22356 9.10457 5.32812 8 5.32812C6.89543 5.32812 6 6.22356 6 7.32812C6 8.43269 6.89543 9.32812 8 9.32812Z"
                                    fill="#1977F1" />
                            </svg>
                            <span class="text-xs text-blue">Показать на карте</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex flex-col gap-2.5 md:gap-5 max-sm:px-1 sm:px-5">
            <div class="flex justify-between items-center select-none flex-wrap lg:w-2/3">
                <div class="relative">
                    <div class="px-4 sm:px-5 flex gap-2.5 items-center h-[34px] rounded-3xl bg-bg hover:bg-bg2 cursor-pointer whitespace-nowrap"
                        @click="isSortOpen = !isSortOpen">
                        {{ sortOptions[sort].name }}
                        <div class="w-[18px] h-[18px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.18922 1.14863C8.99515 0.906045 8.64117 0.866714 8.39859 1.06078L4.99998 3.77967L1.60137 1.06078C1.35878 0.866713 1.00481 0.906044 0.810739 1.14863C0.616672 1.39121 0.656003 1.74519 0.898588 1.93926L4.64859 4.93926C4.85402 5.10361 5.14593 5.10361 5.35137 4.93926L9.10137 1.93926C9.34396 1.74519 9.38329 1.39121 9.18922 1.14863Z"
                                    fill="#787B8D" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="isSortOpen" v-click-outside="() => isSortOpen = false"
                        class="absolute top-full mt-[5px] bg-white p-2.5 rounded-3xl border border-bg2 shadow-[0px_8px_24px_-4px_rgba(24,39,75,0.08),0px_6px_12px_-6px_rgba(24,39,75,0.12)] w-[200px]">
                        <div class="text-sm h-[34px] px-2.5 flex items-center rounded-[100px] cursor-pointer hover:bg-bg active:bg-bg2"
                            :class="{ 'bg-bg text-blue font-bold': sort == index }" v-for="option, index in sortOptions"
                            :key="option.key" @click="sort = index, isSortOpen = false">
                            {{ option.name }}
                        </div>
                    </div>
                </div>
                <div
                    class="px-5 flex gap-2.5 items-center h-[34px] text-sm text-blue rounded-[200px] hover:bg-bg active:bg-bg2 cursor-pointer lg:hidden">
                    <div class="w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7 6C8.65685 6 10 4.65685 10 3C10 1.34315 8.65685 0 7 0C5.60212 0 4.42755 0.95608 4.09451 2.25H1C0.585786 2.25 0.25 2.58579 0.25 3C0.25 3.41421 0.585786 3.75 1 3.75H4.09451C4.42755 5.04392 5.60212 6 7 6ZM12.25 3C12.25 2.58579 12.5858 2.25 13 2.25H19C19.4142 2.25 19.75 2.58579 19.75 3C19.75 3.41421 19.4142 3.75 19 3.75H13C12.5858 3.75 12.25 3.41421 12.25 3ZM15.9055 11.75C15.5725 13.0439 14.3979 14 13 14C11.3431 14 10 12.6569 10 11C10 9.34315 11.3431 8 13 8C14.3979 8 15.5725 8.95608 15.9055 10.25H19C19.4142 10.25 19.75 10.5858 19.75 11C19.75 11.4142 19.4142 11.75 19 11.75H15.9055ZM0.25 11C0.25 10.5858 0.585786 10.25 1 10.25H7C7.41421 10.25 7.75 10.5858 7.75 11C7.75 11.4142 7.41421 11.75 7 11.75H1C0.585786 11.75 0.25 11.4142 0.25 11Z"
                                fill="#1977F1" />
                        </svg>
                    </div>
                    Фильтры
                </div>
            </div>
            <div class="flex gap-5">
                <div class="flex flex-col gap-4 sm:gap-5 lg:w-2/3">
                    <CardSaved v-for="card in results" :key="card.key" :is-top="card.top" />
                </div>
                <div class="max-lg:hidden w-1/3">
                    <div class="bg-white p-5 rounded-3xl flex flex-col gap-10">
                        <div class="flex flex-col gap-[15px]">
                            <div class="flex justify-between">
                                <p class="text-base font-bold">Категории</p>
                                <p class="text-blue text-xs hover:text-pressed active:text-doublePressed cursor-pointer">
                                    Сбросить
                                </p>
                            </div>
                            <div class="flex flex-col">
                                <div v-if="selectedCategory2" @click="selectedCategory1 = null"
                                    class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                    <div class="flex items-center">
                                        <div class="w-4 h-4 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8"
                                                fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M3.64534 0.273646C3.86097 0.446151 3.89593 0.760797 3.72342 0.976428L1.30664 3.99741L3.72342 7.0184C3.89593 7.23403 3.86097 7.54868 3.64534 7.72118C3.42971 7.89369 3.11506 7.85873 2.94256 7.6431L0.275889 4.30976C0.129801 4.12715 0.129801 3.86768 0.275889 3.68507L2.94256 0.351733C3.11506 0.136102 3.42971 0.101142 3.64534 0.273646Z"
                                                    fill="#787B8D" />
                                            </svg>
                                        </div>
                                        <span class="text-sm text-gray">{{ categories[0].name }}</span>
                                    </div>
                                    <BaseCount count="19" />
                                </div>
                                <div class="">
                                    <div v-if="selectedCategory1" @click="selectedCategory1 = null"
                                        class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8"
                                                    viewBox="0 0 4 8" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M3.64534 0.273646C3.86097 0.446151 3.89593 0.760797 3.72342 0.976428L1.30664 3.99741L3.72342 7.0184C3.89593 7.23403 3.86097 7.54868 3.64534 7.72118C3.42971 7.89369 3.11506 7.85873 2.94256 7.6431L0.275889 4.30976C0.129801 4.12715 0.129801 3.86768 0.275889 3.68507L2.94256 0.351733C3.11506 0.136102 3.42971 0.101142 3.64534 0.273646Z"
                                                        fill="#787B8D" />
                                                </svg>
                                            </div>
                                            <span class="text-sm text-gray">{{ selectedCategory1.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                    <div v-else v-for="item in categories[0].subcategories" :key="item.key"
                                        @click="selectedCategory1 = item"
                                        class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4"></div>
                                            <span class="text-sm text-black">{{ item.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                </div>
                                <div class="">
                                    <!-- <div v-if="selectedCategory1" @click="selectedCategory1 = null"
                                        class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8"
                                                    viewBox="0 0 4 8" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M3.64534 0.273646C3.86097 0.446151 3.89593 0.760797 3.72342 0.976428L1.30664 3.99741L3.72342 7.0184C3.89593 7.23403 3.86097 7.54868 3.64534 7.72118C3.42971 7.89369 3.11506 7.85873 2.94256 7.6431L0.275889 4.30976C0.129801 4.12715 0.129801 3.86768 0.275889 3.68507L2.94256 0.351733C3.11506 0.136102 3.42971 0.101142 3.64534 0.273646Z"
                                                        fill="#787B8D" />
                                                </svg>
                                            </div>
                                            <span class="text-sm text-gray">{{ selectedCategory1.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div> -->
                                    <div v-if="selectedCategory1" v-for="item in selectedCategory1.subcategories"
                                        :key="item.key" @click="selectedCategory2 = item"
                                        class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4"></div>
                                            <span class="text-sm text-black">{{ item.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>