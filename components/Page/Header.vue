<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
const isCategories = useState("isCategoriesOpen", () => false)
const signup = useState("isSignupOpen", () => false);
const login = useState("isLoginOpen", () => false);


// search input
const search = ref(null);
const searched = ref(false);
const searchMobile = ref(false);
const searchFocused = ref(false);
const input = ref(null)
const requests = ref([])

watch(search, () => {
    if (search.value) {
        searched.value = false;
        var temp = []
        searchPopular.map(o => {
            if (o.name.toLowerCase().includes(search.value.toLowerCase())) {
                temp.push(o)
            }
        })
        requests.value = temp
    } else {
        searched.value = true;
        requests.value = []
    }
});

watch(searchFocused, () => {
    if (searchFocused.value) {
        useState('isCategoriesOpen').value = false;
        disableScroll();
    } else {
        enableScroll();
    }
})

function cons(val) {
    console.log(val);
}

function toggleSearch(val) {
    if (val) {
        searchMobile.value = true
        setTimeout(() => {
            document.getElementById("searchMobile").focus()
        }, 500);
    }
}

function matchingText(word) {
    const searchWord = search.value.toLowerCase()
    const matched = word.toLowerCase().match(new RegExp(searchWord, "g"))
    const regex = new RegExp(searchWord, 'gi')
    const highlightedText = word.replace(regex, `<span class="font-bold">$&</span>`);
    // console.log(highlightedText)
    return highlightedText
    // `<span class="font-bold"></span>`
}

// dummy data
const searchPopular = [
    {
        name: "IELTS за месяц"
    },
    {
        name: "Математика на английском"
    },
    {
        name: "Ментальная арифметика"
    },
    {
        name: "Курсы по вождению"
    },
    {
        name: "Веб-дизайн"
    },
]

function toggleSearchFocused() {
    searchFocused.value = true;
    const searchBar = document.getElementById("searchbar")
    searchBar.focus();
}
</script>

<template>
    <div
        class="flex gap-5 lg:gap-2.5 bg-white p-4 sm:p-5 min-w-full text-base justify-between items-center mb-4 sm:mb-5 relative">
        <NuxtLink to="/" class="flex cursor-pointer h-6 sm:h-8 md:h-10">
            <PageLogo class="hidden md:flex" color="blue" :isAnimated="true" />
            <PageLogo class="flex md:hidden" color="blue" :isAnimated="false" />
        </NuxtLink>
        <BaseButton class="hidden lg:flex w-max" type="tertiary" size="large" @click="isCategories = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.08301 0C0.978438 0 0.0830078 0.895431 0.0830078 2V6C0.0830078 7.10457 0.978438 8 2.08301 8H6.08301C7.18758 8 8.08301 7.10457 8.08301 6V2C8.08301 0.895431 7.18758 0 6.08301 0H2.08301ZM14.083 0C12.9784 0 12.083 0.895431 12.083 2V6C12.083 7.10457 12.9784 8 14.083 8H18.083C19.1876 8 20.083 7.10457 20.083 6V2C20.083 0.895431 19.1876 0 18.083 0H14.083ZM0.0830078 14C0.0830078 12.8954 0.978438 12 2.08301 12H6.08301C7.18758 12 8.08301 12.8954 8.08301 14V18C8.08301 19.1046 7.18758 20 6.08301 20H2.08301C0.978438 20 0.0830078 19.1046 0.0830078 18V14ZM14.083 12C12.9784 12 12.083 12.8954 12.083 14V18C12.083 19.1046 12.9784 20 14.083 20H18.083C19.1876 20 20.083 19.1046 20.083 18V14C20.083 12.8954 19.1876 12 18.083 12H14.083Z"
                    fill="#787B8D" />
            </svg>
            <span>{{ $t("sticky.category") }}</span>
        </BaseButton>
        <div class="search group md:hidden" @click="toggleSearch(true)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.249 10.5078C18.249 14.788 14.7792 18.2578 10.499 18.2578C6.21882 18.2578 2.74902 14.788 2.74902 10.5078C2.74902 6.22761 6.21882 2.75781 10.499 2.75781C14.7792 2.75781 18.249 6.22761 18.249 10.5078ZM10.499 19.7578C15.6077 19.7578 19.749 15.6164 19.749 10.5078C19.749 5.39918 15.6077 1.25781 10.499 1.25781C5.39039 1.25781 1.24902 5.39918 1.24902 10.5078C1.24902 15.6164 5.39039 19.7578 10.499 19.7578ZM21.4202 21.4348C20.6491 22.206 19.3989 22.206 18.6278 21.4348L16.7549 19.562C17.845 18.8068 18.7921 17.8597 19.5473 16.7695L21.4202 18.6424C22.1913 19.4135 22.1913 20.6637 21.4202 21.4348Z"
                    fill="#A7AABC" class="group-active:fill-blue" />
            </svg>
        </div>
        <div class="search-mobile z-[2] fixed inset-0 bg-white flex flex-col gap-4 pt-4 sm:pt-5" v-show="searchMobile">
            <div class="flex items-center px-4 gap-[5px]">
                <div class="group p-0.5" @click="searchMobile = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                            fill="#A7AABC" class="group-active:fill-pressed" />
                    </svg>
                </div>
                <div class="search-bar w-full overflow-hidden relative rounded-3xl">
                    <input type="text" id="searchMobile" v-model="search"
                        class="rounded-3xl bg-bg hover:bg-bg2 w-full h-[34px] sm:h-[50px] px-2.5 outline-none caret-yellow placeholder:text-gray placeholder:text-sm text-sm text-black"
                        placeholder="Поиск объявлений" autocomplete="off" :class="searched ? 'pr-7' : 'pr-[85px]'" />
                    <div class="btn-group absolute right-2.5 top-0 my-[7px] flex gap-[5px] items-center"
                        :class="{ active: search, searched: searched }">
                        <div class="clear cursor-pointer" @click="search = null">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                    fill="#A7AABC" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                    class="pressed" />
                            </svg>
                        </div>
                        <BaseButton type="primary" class="px-[11px] py-[7px] text-[10px] h-5" @click="searched = true">Найти
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div v-if="!requests.length" class="popular flex flex-col gap-[5px]">
                <div class="text-xs text-gray pl-4">ТОП-5 популярных запросов</div>
                <div class="flex flex-col">
                    <div v-for="item in searchPopular.slice(0, 5)" :key="item.key" @click="toggleSearch(true)"
                        class="group h-[34px] px-4 flex items-center gap-2.5 hover:bg-bg rounded-full">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_1877_31382)">
                                    <path
                                        d="M11.7901 13.4928L14.4494 16.1519C12.9351 17.3152 11.0448 18 9.00197 18C4.03564 18 0 13.9607 0 9H3.70569C3.70569 11.9181 6.08238 14.2946 9.00066 14.2946C10.0247 14.2946 10.979 14.0028 11.7901 13.4928Z"
                                        fill="#787B8D" class="group-hover:fill-blue" />
                                    <path
                                        d="M17.9988 9.00131C17.9988 11.0492 17.3086 12.9433 16.1505 14.4576L13.4912 11.7985C14.0013 10.9874 14.2931 10.0292 14.2931 9H17.9988V9.00131Z"
                                        fill="#787B8D" class="group-hover:fill-blue" />
                                    <path
                                        d="M9.00005 11.8981C10.5965 11.8981 11.8907 10.604 11.8907 9.00765C11.8907 7.41129 10.5965 6.11719 9.00005 6.11719C7.40357 6.11719 6.10938 7.41129 6.10938 9.00765C6.10938 10.604 7.40357 11.8981 9.00005 11.8981Z"
                                        fill="#787B8D" class="group-hover:fill-yellow" />
                                    <path
                                        d="M18 9H14.2943C14.2943 6.08062 11.9189 3.70673 9.00066 3.70673C6.08238 3.70673 3.707 6.08193 3.707 9H0C0 4.03666 4.03695 0 9.00066 0C13.9644 0 18.0013 4.03666 18.0013 9H18Z"
                                        fill="#787B8D" class="group-hover:fill-blue" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1877_31382">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-sm text-black ">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div v-else class="requests flex flex-col gap-[5px]">
                <div class="text-xs text-gray pl-4">Запросы</div>
                <div class="flex flex-col">
                    <div v-for="item in requests" :key="item.key" @click="toggleSearch(true)"
                        class="group h-[34px] px-4 flex items-center gap-2.5 hover:bg-bg rounded-full">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_1877_31382)">
                                    <path
                                        d="M11.7901 13.4928L14.4494 16.1519C12.9351 17.3152 11.0448 18 9.00197 18C4.03564 18 0 13.9607 0 9H3.70569C3.70569 11.9181 6.08238 14.2946 9.00066 14.2946C10.0247 14.2946 10.979 14.0028 11.7901 13.4928Z"
                                        fill="#787B8D" class="group-hover:fill-blue" />
                                    <path
                                        d="M17.9988 9.00131C17.9988 11.0492 17.3086 12.9433 16.1505 14.4576L13.4912 11.7985C14.0013 10.9874 14.2931 10.0292 14.2931 9H17.9988V9.00131Z"
                                        fill="#787B8D" class="group-hover:fill-blue" />
                                    <path
                                        d="M9.00005 11.8981C10.5965 11.8981 11.8907 10.604 11.8907 9.00765C11.8907 7.41129 10.5965 6.11719 9.00005 6.11719C7.40357 6.11719 6.10938 7.41129 6.10938 9.00765C6.10938 10.604 7.40357 11.8981 9.00005 11.8981Z"
                                        fill="#787B8D" class="group-hover:fill-yellow" />
                                    <path
                                        d="M18 9H14.2943C14.2943 6.08062 11.9189 3.70673 9.00066 3.70673C6.08238 3.70673 3.707 6.08193 3.707 9H0C0 4.03666 4.03695 0 9.00066 0C13.9644 0 18.0013 4.03666 18.0013 9H18Z"
                                        fill="#787B8D" class="group-hover:fill-blue" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1877_31382">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="text-sm text-black" v-html="matchingText(item.name)"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden md:block search-bar w-full min-[1600px]:relative rounded-3xl">
            <div class="overflow-hidden h-[50px] w-full relative">
                <input type="text" id="search" v-model="search" @click="toggleSearchFocused()"
                    class="rounded-3xl bg-bg hover:bg-bg2 w-full h-full pl-5 outline-none caret-yellow placeholder:text-gray placeholder:text-base"
                    placeholder="Поиск объявлений" autocomplete="off" :class="searched ? 'pr-10' : 'pr-[135px]'" />
                <div class="btn-group absolute right-2.5 top-0 my-2 flex gap-2.5 items-center"
                    :class="{ active: search, searched: searched }">
                    <div class="clear cursor-pointer" @click="search = null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                fill="#A7AABC" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                class="pressed" />
                        </svg>
                    </div>
                    <BaseButton type="primary" size="medium" @click="searched = true">Найти</BaseButton>
                </div>
            </div>
            <div class="absolute w-[calc(100%-40px)] h-10 top-5 left-5 min-[1600px]:top-0 min-[1600px]:left-0 min-[1600px]:w-full"
                :class="searchFocused ? 'block' : 'hidden'">
                <div @click="searchFocused = false" class="bg-black bg-opacity-60 w-full fixed inset-0 z-20 md:h-full">
                </div>
                <div class="bg-white z-[21] absolute pt-[50px] w-full rounded-3xl">
                    <div class="p-2.5">
                        <div class="w-full overflow-hidden absolute top-0 left-0 rounded-3xl">
                            <input type="text" id="searchbar" v-model="search"
                                class="rounded-3xl bg-bg hover:bg-bg2 w-full px-5 outline-none caret-yellow placeholder:text-gray placeholder:text-base h-[34px] sm:h-[50px]"
                                placeholder="Поиск объявлений" autocomplete="off"
                                :class="searched ? 'pr-7' : 'pr-[85px]'" />
                            <div class="btn-group absolute right-2.5 top-0 my-2 flex gap-2.5 items-center"
                                :class="{ active: search, searched: searched }">
                                <div class="clear cursor-pointer" @click="search = null">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                            fill="#A7AABC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                            class="pressed" />
                                    </svg>
                                </div>
                                <BaseButton type="primary" size="medium" @click="searched = true">Найти</BaseButton>
                            </div>
                        </div>
                        <div v-if="!requests.length" class="popular flex flex-col gap-[5px]">
                            <div class="text-xs text-gray pl-4">ТОП-5 популярных запросов</div>
                            <div class="flex flex-col">
                                <div v-for="item in searchPopular.slice(0, 5)" :key="item.key"
                                    class="group h-[34px] px-4 flex items-center gap-2.5 hover:bg-bg rounded-full">
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <g clip-path="url(#clip0_1877_31382)">
                                                <path
                                                    d="M11.7901 13.4928L14.4494 16.1519C12.9351 17.3152 11.0448 18 9.00197 18C4.03564 18 0 13.9607 0 9H3.70569C3.70569 11.9181 6.08238 14.2946 9.00066 14.2946C10.0247 14.2946 10.979 14.0028 11.7901 13.4928Z"
                                                    fill="#787B8D" class="group-hover:fill-blue" />
                                                <path
                                                    d="M17.9988 9.00131C17.9988 11.0492 17.3086 12.9433 16.1505 14.4576L13.4912 11.7985C14.0013 10.9874 14.2931 10.0292 14.2931 9H17.9988V9.00131Z"
                                                    fill="#787B8D" class="group-hover:fill-blue" />
                                                <path
                                                    d="M9.00005 11.8981C10.5965 11.8981 11.8907 10.604 11.8907 9.00765C11.8907 7.41129 10.5965 6.11719 9.00005 6.11719C7.40357 6.11719 6.10938 7.41129 6.10938 9.00765C6.10938 10.604 7.40357 11.8981 9.00005 11.8981Z"
                                                    fill="#787B8D" class="group-hover:fill-yellow" />
                                                <path
                                                    d="M18 9H14.2943C14.2943 6.08062 11.9189 3.70673 9.00066 3.70673C6.08238 3.70673 3.707 6.08193 3.707 9H0C0 4.03666 4.03695 0 9.00066 0C13.9644 0 18.0013 4.03666 18.0013 9H18Z"
                                                    fill="#787B8D" class="group-hover:fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1877_31382">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="text-sm text-black ">{{ item.name }}</div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="requests flex flex-col gap-[5px]">
                            <div class="text-xs text-gray pl-4">Запросы</div>
                            <div class="flex flex-col">
                                <div v-for="item in requests" :key="item.key"
                                    class="group h-[34px] px-4 flex items-center gap-2.5 hover:bg-bg rounded-full">
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <g clip-path="url(#clip0_1877_31382)">
                                                <path
                                                    d="M11.7901 13.4928L14.4494 16.1519C12.9351 17.3152 11.0448 18 9.00197 18C4.03564 18 0 13.9607 0 9H3.70569C3.70569 11.9181 6.08238 14.2946 9.00066 14.2946C10.0247 14.2946 10.979 14.0028 11.7901 13.4928Z"
                                                    fill="#787B8D" class="group-hover:fill-blue" />
                                                <path
                                                    d="M17.9988 9.00131C17.9988 11.0492 17.3086 12.9433 16.1505 14.4576L13.4912 11.7985C14.0013 10.9874 14.2931 10.0292 14.2931 9H17.9988V9.00131Z"
                                                    fill="#787B8D" class="group-hover:fill-blue" />
                                                <path
                                                    d="M9.00005 11.8981C10.5965 11.8981 11.8907 10.604 11.8907 9.00765C11.8907 7.41129 10.5965 6.11719 9.00005 6.11719C7.40357 6.11719 6.10938 7.41129 6.10938 9.00765C6.10938 10.604 7.40357 11.8981 9.00005 11.8981Z"
                                                    fill="#787B8D" class="group-hover:fill-yellow" />
                                                <path
                                                    d="M18 9H14.2943C14.2943 6.08062 11.9189 3.70673 9.00066 3.70673C6.08238 3.70673 3.707 6.08193 3.707 9H0C0 4.03666 4.03695 0 9.00066 0C13.9644 0 18.0013 4.03666 18.0013 9H18Z"
                                                    fill="#787B8D" class="group-hover:fill-blue" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1877_31382">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="text-sm text-black" v-html="matchingText(item.name)"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar hidden lg:flex items-center">
            <NuxtLink v-if="locale == 'ru'" :to="switchLocalePath('uz')" class="hidden lg:flex lang px-2.5 w-max gap-[5px]">
                <img src="~/assets/images/ru.svg" alt="ru" />
                <span class="hidden 2xl:block">Рус</span>
            </NuxtLink>
            <NuxtLink v-else :to="switchLocalePath('ru')" class="hidden lg:flex lang px-2.5 w-max gap-[5px]">
                <img src="~/assets/images/uz.svg" alt="uz" />
                <span class="hidden 2xl:block">O‘zb</span>
            </NuxtLink>
            <NuxtLink :to="localePath('/saved')" class="group saved px-2.5 flex w-max gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4 8.75V19C4 20.6481 5.88153 21.5889 7.2 20.6L10.8 17.9C11.5111 17.3667 12.4889 17.3667 13.2 17.9L16.8 20.6C18.1185 21.5889 20 20.6481 20 19V8.75H4ZM4 7.25H20V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V7.25Z"
                        class="fill-icon group-hover:fill-blue group-active:fill-pressed" />
                </svg>
                <span class="hidden 2xl:block group-hover:text-blue group-active:text-pressed">{{ $t("sticky.saved")
                }}</span>
            </NuxtLink>
            <div class="auth px-2.5 flex w-max gap-[5px]">
                <span @click="login = true" class="hover:text-blue active:text-pressed cursor-pointer">
                    {{ $t("login.title") }}
                </span>
                <span>/</span>
                <span @click="signup = true" class="hover:text-blue active:text-pressed cursor-pointer">
                    {{ $t("signup.title") }}
                </span>
            </div>
        </div>
        <BaseButton class="hidden xl:block w-max" type="primary" size="large">Разместить объявление</BaseButton>
    </div>
</template>

<style scoped>
.btn-group {
    transform: translateX(calc(100% + 10px));
    transition: transform 300ms cubic-bezier(0.68, 0, 0.265, 1.55);
}

.btn-group.active {
    transform: translateX(0);
}

.btn-group.active.searched {
    transform: translateX(calc(100% - 23px));
}

.search-mobile .btn-group.active.searched {
    transform: translateX(calc(100% - 12px));
}

input:active {
    background: linear-gradient(0deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.1) 100%),
        #e9efff;
}

.visible {
    opacity: 1;
}

.clear {
    -webkit-tap-highlight-color: transparent;
}

.clear:hover path {
    fill: #1977f1;
}

.clear:active path {
    fill: #166BD9;
}

.clear path.pressed {
    display: none;
}

.clear:active path.pressed {
    display: block;
    fill: black;
    fill-opacity: 0.1;
}
</style>


<!-- <div class="peer-focus:block hidden fixed inset-0 z-20 bg-black bg-opacity-60 w-full h-full"></div> -->
