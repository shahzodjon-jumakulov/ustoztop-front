<script setup>
const localePath = useLocalePath();
const search = ref(null);
const searched = ref(false);
const sort = ref(0);
const isSortOpen = ref(false);
const isFilterOpen = ref(false);
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

// filter inputs
const selectedCategory1 = ref(null);
const selectedCategory2 = ref(null);
const selectedCategory3 = ref(null);
const gte = ref(null);
const lte = ref(null);
const forWhom = ref(0);
const role = ref(0); // 0-both; 1-tutor; 2-LC;
const tutorGender = ref(0);
const lessonFormat = ref(0);
const groupFormat = ref(0);
const lang = ref(0);

watch(search, () => { searched.value = search.value ? false : true; });

watch(isFilterOpen, newVal => {
    if (newVal) {
        disableScroll();
        initRoleTab();
    } else enableScroll();
})

watch(role, () => initRoleTab());

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
const forWhomOptions = [
    'all-ages',
    'for-kids',
    'for-school',
    'for-abiturient',
    'for-students',
    'for-adults',
]
const tutorGenderOptions = [
    'all-genders',
    'males',
    'females',
]
const lessonFormatOptions = [
    'all-lesson-formats',
    'students',
    'teachers',
    'online',
]
const groupFormatOptions = [
    'all-group-formats',
    'group',
    'individual',
]
const langOptions = [
    'all-langs',
    'uzbek',
    'russion',
    'english',
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

function onInputPrice(isGte) {
    if (isGte) {
        const inputVal = gte.value.toString().replace(/\D/g, '');
        gte.value = numberWithSpaces(inputVal);
    } else {
        const inputVal = lte.value.toString().replace(/\D/g, '');
        lte.value = numberWithSpaces(inputVal);
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}

function initRoleTab() {
    setTimeout(() => {
        const switcher = document.getElementById("stick")
        const tabs = document.querySelectorAll(`#tab > div`)
        if (!switcher || !tabs) return;

        const selectedTab = tabs[role.value]
        if (!selectedTab) return;

        switcher.style.left = `${selectedTab.offsetLeft}px`;
        switcher.style.width = `${selectedTab.offsetWidth}px`;
    }, 1);
}

onMounted(() => {
    console.log(categories.value)
})

</script>

<template>
    <div class="flex flex-col gap-2.5 md:gap-5">
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
                <div @click="isFilterOpen = true"
                    class="px-5 flex gap-2.5 items-center h-[34px] text-sm text-blue rounded-[200px] hover:bg-bg2 active:bg-[#D2D7E5] cursor-pointer lg:hidden">
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
                <div class="max-lg:fixed inset-0 w-full h-full lg:block lg:w-1/3 bg-white rounded-3xl max-lg:overflow-y-auto max-lg:z-20 relative"
                    :class="{ 'max-lg:hidden max-lg:-z-10': !isFilterOpen }">
                    <span
                        class="text-blue text-xs hover:text-pressed active:text-doublePressed cursor-pointer absolute right-4 top-5 sm:right-5 sm:top-6 lg:top-5">
                        Сбросить
                    </span>
                    <!-- filter -->
                    <div class="flex items-center p-4 gap-[5px] sm:p-5 lg:hidden">
                        <BaseBack @click="isFilterOpen = false" class="absolute left-4 sm:left-5" />
                        <span class="text-xl font-bold text-center flex-grow">Фильтры</span>
                    </div>
                    <div class="p-4 sm:p-5 flex flex-col gap-8 sm:gap-10">
                        <!-- categories -->
                        <div class="flex flex-col gap-[15px]">
                            <div class="flex justify-between">
                                <p class="text-base font-bold">Категории</p>
                            </div>
                            <div class="flex flex-col">
                                <div v-if="selectedCategory1"
                                    @click="selectedCategory1 = null, selectedCategory2 = null, selectedCategory3 = null"
                                    class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                    <div class="flex items-center">
                                        <BaseCategoryBack />
                                        <span class="text-sm text-gray">{{ categories[0].name }}</span>
                                    </div>
                                    <BaseCount count="19" />
                                </div>
                                <div class="">
                                    <div v-if="!selectedCategory1" v-for="item in categories[0].subcategories"
                                        :key="item.key" @click="selectedCategory1 = item"
                                        class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <span class="text-sm text-black">{{ item.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                    <div v-else @click="selectedCategory2 = null, selectedCategory3 = null"
                                        :class="{ 'parent bg-white cursor-pointer hover:bg-bg active:bg-bg2': selectedCategory2 }"
                                        class="group flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer bg-bg">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4" v-if="!selectedCategory2"></div>
                                            <BaseCategoryBack v-else />
                                            <span
                                                class="text-sm text-blue font-bold group-[.parent]:text-gray group-[.parent]:font-normal">
                                                {{ selectedCategory1.name }}
                                            </span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                </div>
                                <div class="" v-if="selectedCategory1">
                                    <div v-if="!selectedCategory2" v-for="item in selectedCategory1.subcategories"
                                        :key="item.key" @click="selectedCategory2 = item"
                                        class="group flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4"></div>
                                            <span class="text-sm text-black">{{ item.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                    <div v-else @click="selectedCategory3 = null"
                                        :class="{ 'parent bg-white cursor-pointer hover:bg-bg active:bg-bg2': selectedCategory3 }"
                                        class="group flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer bg-bg">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4" v-if="!selectedCategory3"></div>
                                            <BaseCategoryBack v-else />
                                            <span
                                                class="text-sm text-blue font-bold group-[.parent]:text-gray group-[.parent]:font-normal">
                                                {{ selectedCategory2.name }}
                                            </span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                </div>
                                <div class="" v-if="selectedCategory2">
                                    <div v-if="!selectedCategory3 || (selectedCategory3 && !selectedCategory3.subcategories)"
                                        v-for="item in selectedCategory2.subcategories" :key="item.key"
                                        @click="selectedCategory3 = item"
                                        :class="{ 'selected bg-bg': selectedCategory3 && selectedCategory3.id == item.id }"
                                        class="group flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer hover:bg-bg active:bg-bg2">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4"></div>
                                            <span
                                                class="text-sm text-black group-[.selected]:text-blue group-[.selected]:font-bold">
                                                {{ item.name }}
                                            </span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                    <div v-else
                                        class="flex gap-2.5 items-center rounded-[100px] px-2.5 py-[15px] h-[34px] cursor-pointer bg-bg">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4"></div>
                                            <span class="text-sm text-blue font-bold">{{ selectedCategory3.name }}</span>
                                        </div>
                                        <BaseCount count="19" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- price -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">Цена (сум)</p>
                            <div class="flex gap-2.5">
                                <div class="relative flex-grow-0">
                                    <label class="text-xs text-gray absolute left-5 top-[9px]" for="gte">от</label>
                                    <input
                                        class="w-full px-5 pr-3 pl-9 rounded-[200px] h-[34px] text-sm font-bold text-black border border-[rgba(0,0,0,0)] caret-yellow bg-bg hover:bg-bg2 active:bg-[#D2D7E5] focus-within:border-blue focus-within:!bg-white focus-within:outline-none"
                                        id="gte" type="tel" :placeholder="numberWithSpaces('200000')"
                                        @input="onInputPrice(true)" @keypress="isNumber($event)" v-model="gte">
                                </div>
                                <div class="relative flex-grow-0">
                                    <label class="text-xs text-gray absolute left-5 top-[9px]" for="lte">до</label>
                                    <input
                                        class="w-full px-5 pr-3 pl-9 rounded-[200px] h-[34px] text-sm font-bold text-black border border-[rgba(0,0,0,0)] caret-yellow bg-bg hover:bg-bg2 active:bg-[#D2D7E5] focus-within:border-blue focus-within:!bg-white focus-within:outline-none"
                                        id="lte" type="tel" :placeholder="numberWithSpaces('3000000')"
                                        @input="onInputPrice(false)" @keypress="isNumber($event)" v-model="lte">
                                </div>
                            </div>
                        </div>
                        <!-- Для кого -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">{{ $t("filter.for.title") }}</p>
                            <div class="flex flex-col gap-2.5 select-none">
                                <label
                                    class="group/radio radio flex gap-[5px] items-center h-[18px] cursor-pointer relative pl-6 w-fit"
                                    v-for="item, index in forWhomOptions" :key="item.key" :for="item">
                                    <input class="peer absolute opacity-0 cursor-pointer" :id="item" type="radio"
                                        name="forWhom" v-model="forWhom" :value="index">
                                    <span
                                        class="label text-sm text-black group-hover/radio:text-blue group-active/radio:text-pressed">
                                        {{ $t(`filter.for.options[${index}]`) }}
                                    </span>
                                    <span
                                        class="absolute checkmark top-0 left-0 w-[18px] h-[18px] rounded-full peer-checked:checked">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            class="fill-none group-active/radio:fill-[#E8F1FE]">
                                            <g clip-path="url(#clip0_509_7581)">
                                                <path
                                                    class="stroke-gray group-hover/radio:stroke-blue group-active/radio:stroke-blue"
                                                    d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                                    stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                                <circle cx="9" cy="9" r="5" class="fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_509_7581">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <!-- TUTOR or LC -->
                        <div id="tab" class="bg-bg rounded-[70px] p-[5px] w-full flex relative select-none justify-around">
                            <span id="stick" class="h-6 rounded-[70px] bg-white absolute transition-all duration-300 ease-in-out"></span>
                            <div class="group/icon flex-auto cursor-pointer z-[1] h-6 flex items-center justify-center hover:bg-bg2 active:bg-[#D2D7E5] rounded-full text-xs text-gray"
                                @click="role = 0" :class="{ 'selected !text-blue !bg-white': role == 0 }">Все</div>
                            <div class="group/icon flex-auto cursor-pointer z-[1] h-6 flex items-center justify-center gap-[5px] hover:bg-bg2 active:bg-[#D2D7E5] rounded-full text-xs text-gray"
                                @click="role = 1" :class="{ 'selected !text-blue !bg-white': role == 1 }">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z"
                                        class="fill-icon group-[.selected]/icon:fill-blue" />
                                </svg>
                                Репетиторы
                            </div>
                            <div class="group/icon flex-auto cursor-pointer z-[1] h-6 flex items-center justify-center gap-[5px] hover:bg-bg2 active:bg-[#D2D7E5] rounded-full text-xs text-gray"
                                @click="role = 2" :class="{ 'selected !text-blue !bg-white': role == 2 }">
                                <span class="w-[18px] h-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M15.2287 14.4157H13.7828V3.39165C13.7828 1.79467 12.4881 0.5 10.8913 0.5H5.10804C3.51106 0.5 2.21659 1.79467 2.21659 3.39165V14.4157H0.770662C0.47128 14.4157 0.228516 14.6585 0.228516 14.9579C0.228516 15.2572 0.47128 15.5 0.770662 15.5H15.2287C15.5281 15.5 15.7709 15.2572 15.7709 14.9579C15.7709 14.6585 15.5281 14.4157 15.2287 14.4157ZM4.53163 2.82736C4.62982 2.72938 4.76541 2.66858 4.91521 2.66858H7.01798C7.31736 2.66858 7.56012 2.91135 7.56012 3.21073C7.56012 3.36053 7.49954 3.49611 7.40135 3.59431C7.30315 3.6925 7.16777 3.75309 7.01798 3.75309H4.91521C4.61561 3.75309 4.37285 3.51032 4.37285 3.21073C4.37285 3.06114 4.43344 2.92556 4.53163 2.82736ZM4.53163 4.69761C4.62982 4.59963 4.76541 4.53883 4.91521 4.53883H7.01798C7.31736 4.53883 7.56012 4.7816 7.56012 5.08098C7.56012 5.23056 7.49954 5.36615 7.40135 5.46434C7.30315 5.56233 7.16777 5.62312 7.01798 5.62312H4.91521C4.61561 5.62312 4.37285 5.38036 4.37285 5.08098C4.37285 4.93139 4.43344 4.7958 4.53163 4.69761ZM4.37285 6.95102C4.37285 6.80122 4.43344 6.66584 4.53163 6.56765C4.62982 6.46946 4.76541 6.40887 4.91521 6.40887H7.01798C7.31736 6.40887 7.56012 6.65163 7.56012 6.95102C7.56012 7.10081 7.49954 7.2364 7.40135 7.33438C7.30315 7.43258 7.16777 7.49316 7.01798 7.49316H4.91521C4.61561 7.49316 4.37285 7.25061 4.37285 6.95102ZM10.1683 14.4157H5.8309V11.3433C5.8309 10.1456 6.80196 9.17475 7.99969 9.17475C9.19743 9.17475 10.1683 10.1456 10.1683 11.3433V14.4157ZM11.4675 7.33438C11.3696 7.43258 11.234 7.49316 11.0842 7.49316H8.9814C8.68181 7.49316 8.43926 7.25061 8.43926 6.95102C8.43926 6.80122 8.49984 6.66584 8.59804 6.56765C8.69602 6.46946 8.83161 6.40887 8.9814 6.40887H11.0842C11.3838 6.40887 11.6263 6.65163 11.6263 6.95102C11.6263 7.10081 11.5657 7.2364 11.4675 7.33438ZM11.4675 5.46434C11.3696 5.56233 11.234 5.62312 11.0842 5.62312H8.9814C8.68181 5.62312 8.43926 5.38036 8.43926 5.08098C8.43926 4.93139 8.49984 4.7958 8.59804 4.69761C8.69623 4.59942 8.83161 4.53883 8.9814 4.53883H11.0842C11.3838 4.53883 11.6263 4.7816 11.6263 5.08098C11.6263 5.23056 11.5657 5.36615 11.4675 5.46434ZM11.4675 3.59431C11.3696 3.6925 11.234 3.75309 11.0842 3.75309H8.9814C8.68181 3.75309 8.43926 3.51032 8.43926 3.21073C8.43926 3.06114 8.49984 2.92556 8.59804 2.82736C8.69602 2.72938 8.83161 2.66858 8.9814 2.66858H11.0842C11.3838 2.66858 11.6263 2.91135 11.6263 3.21073C11.6263 3.36053 11.5657 3.49611 11.4675 3.59431Z"
                                            class="fill-icon group-[.selected]/icon:fill-blue" />
                                    </svg>
                                </span>
                                Учебные заведения
                            </div>
                        </div>
                        <!-- Кто преподает -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">{{ $t("filter.tutor.title") }}</p>
                            <div class="flex flex-col gap-2.5 select-none">
                                <label
                                    class="group/radio radio flex gap-[5px] items-center h-[18px] cursor-pointer relative pl-6 w-fit"
                                    v-for="item, index in tutorGenderOptions" :key="item.key" :for="item">
                                    <input class="peer absolute opacity-0 cursor-pointer" :id="item" type="radio"
                                        name="tutorGender" v-model="tutorGender" :value="index">
                                    <span
                                        class="label text-sm text-black group-hover/radio:text-blue group-active/radio:text-pressed">
                                        {{ $t(`filter.tutor.options[${index}]`) }}
                                    </span>
                                    <span
                                        class="absolute checkmark top-0 left-0 w-[18px] h-[18px] rounded-full peer-checked:checked">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            class="fill-none group-active/radio:fill-[#E8F1FE]">
                                            <g clip-path="url(#clip0_509_7581)">
                                                <path
                                                    class="stroke-gray group-hover/radio:stroke-blue group-active/radio:stroke-blue"
                                                    d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                                    stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                                <circle cx="9" cy="9" r="5" class="fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_509_7581">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <!-- Место занятий -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">{{ $t("filter.format.title") }}</p>
                            <div class="flex flex-col gap-2.5 select-none">
                                <label
                                    class="group/radio radio flex gap-[5px] items-center h-[18px] cursor-pointer relative pl-6 w-fit"
                                    v-for="item, index in lessonFormatOptions" :key="item.key" :for="item">
                                    <input class="peer absolute opacity-0 cursor-pointer" :id="item" type="radio"
                                        name="lessonFormat" v-model="lessonFormat" :value="index">
                                    <span
                                        class="label text-sm text-black group-hover/radio:text-blue group-active/radio:text-pressed">
                                        {{ $t(`filter.format.options[${index}]`) }}
                                    </span>
                                    <span
                                        class="absolute checkmark top-0 left-0 w-[18px] h-[18px] rounded-full peer-checked:checked">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            class="fill-none group-active/radio:fill-[#E8F1FE]">
                                            <g clip-path="url(#clip0_509_7581)">
                                                <path
                                                    class="stroke-gray group-hover/radio:stroke-blue group-active/radio:stroke-blue"
                                                    d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                                    stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                                <circle cx="9" cy="9" r="5" class="fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_509_7581">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <!-- Тип занятий -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">{{ $t("filter.group.title") }}</p>
                            <div class="flex flex-col gap-2.5 select-none">
                                <label
                                    class="group/radio radio flex gap-[5px] items-center h-[18px] cursor-pointer relative pl-6 w-fit"
                                    v-for="item, index in groupFormatOptions" :key="item.key" :for="item">
                                    <input class="peer absolute opacity-0 cursor-pointer" :id="item" type="radio"
                                        name="groupFormat" v-model="groupFormat" :value="index">
                                    <span
                                        class="label text-sm text-black group-hover/radio:text-blue group-active/radio:text-pressed">
                                        {{ $t(`filter.group.options[${index}]`) }}
                                    </span>
                                    <span
                                        class="absolute checkmark top-0 left-0 w-[18px] h-[18px] rounded-full peer-checked:checked">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            class="fill-none group-active/radio:fill-[#E8F1FE]">
                                            <g clip-path="url(#clip0_509_7581)">
                                                <path
                                                    class="stroke-gray group-hover/radio:stroke-blue group-active/radio:stroke-blue"
                                                    d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                                    stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                                <circle cx="9" cy="9" r="5" class="fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_509_7581">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <!-- Язык занятий -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">{{ $t("filter.lang.title") }}</p>
                            <div class="flex flex-col gap-2.5 select-none">
                                <label
                                    class="group/radio radio flex gap-[5px] items-center h-[18px] cursor-pointer relative pl-6 w-fit"
                                    v-for="item, index in langOptions" :key="item.key" :for="item">
                                    <input class="peer absolute opacity-0 cursor-pointer" :id="item" type="radio"
                                        name="lang" v-model="lang" :value="index">
                                    <span
                                        class="label text-sm text-black group-hover/radio:text-blue group-active/radio:text-pressed">
                                        {{ $t(`filter.lang.options[${index}]`) }}
                                    </span>
                                    <span
                                        class="absolute checkmark top-0 left-0 w-[18px] h-[18px] rounded-full peer-checked:checked">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            class="fill-none group-active/radio:fill-[#E8F1FE]">
                                            <g clip-path="url(#clip0_509_7581)">
                                                <path
                                                    class="stroke-gray group-hover/radio:stroke-blue group-active/radio:stroke-blue"
                                                    d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                                    stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                                <circle cx="9" cy="9" r="5" class="fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_509_7581">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <!-- map -->
                        <div class="flex flex-col gap-[15px]">
                            <p class="text-base font-bold">Локация</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
label.radio input~.checkmark svg g circle {
    display: none;
}

label.radio input:checked~.checkmark svg g circle {
    display: block;
}

label.radio:hover input:checked~.checkmark svg {
    fill: none;
}

label.radio input:checked~.checkmark svg g path {
    stroke: #1977F1;
}

label.radio:active input:checked~.checkmark svg g path {
    stroke: #166BD9;
}

label.radio:hover input:checked~.label {
    color: #1977F1;
}

label.radio:active input:checked~.label {
    color: #166BD9;
}
</style>