<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
const isCategories = useState("isCategoriesOpen", () => false)
const signup = useState("isSignupOpen", () => false);
const login = useState("isLoginOpen", () => false);
const isLogout = ref(false);
const isAuthenticated = useAuthenticated();
const userInfo = useUserInfo();
const token = useCookie("token")
if (token.value && !userInfo.value) {
    await usePersonalData(locale.value);
}


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
    setTimeout(() => {
        searchBar.focus();
    }, 1);
}

function handleLogout() {
    isLogout.value = false;
    useLogOut();
    userInfo.value = null;
    navigateTo(localePath("/"))
}

function onSearch() {
    searched.value = true
    searchFocused.value = false;
    navigateTo(localePath('/category/search'))
}
</script>

<template>
    <div class="">
        <div class="flex gap-5 lg:gap-2.5 bg-white p-4 sm:p-5 min-w-full text-base justify-between items-center relative">
            <!-- LOGO -->
            <NuxtLink :to="localePath('/')" class="flex cursor-pointer h-6 sm:h-8 md:h-10">
                <PageLogo class="hidden md:flex" color="blue" :isAnimated="true" />
                <PageLogo class="flex md:hidden" color="blue" :isAnimated="false" />
            </NuxtLink>
            <!-- CATEGORIES -->
            <BaseButton class="hidden lg:flex w-max" state="tertiary" size="large" @click="isCategories = !isCategories">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.08301 0C0.978438 0 0.0830078 0.895431 0.0830078 2V6C0.0830078 7.10457 0.978438 8 2.08301 8H6.08301C7.18758 8 8.08301 7.10457 8.08301 6V2C8.08301 0.895431 7.18758 0 6.08301 0H2.08301ZM14.083 0C12.9784 0 12.083 0.895431 12.083 2V6C12.083 7.10457 12.9784 8 14.083 8H18.083C19.1876 8 20.083 7.10457 20.083 6V2C20.083 0.895431 19.1876 0 18.083 0H14.083ZM0.0830078 14C0.0830078 12.8954 0.978438 12 2.08301 12H6.08301C7.18758 12 8.08301 12.8954 8.08301 14V18C8.08301 19.1046 7.18758 20 6.08301 20H2.08301C0.978438 20 0.0830078 19.1046 0.0830078 18V14ZM14.083 12C12.9784 12 12.083 12.8954 12.083 14V18C12.083 19.1046 12.9784 20 14.083 20H18.083C19.1876 20 20.083 19.1046 20.083 18V14C20.083 12.8954 19.1876 12 18.083 12H14.083Z"
                        fill="#787B8D" />
                </svg>
                <span>{{ $t("sticky.category") }}</span>
            </BaseButton>
            <!-- SEARCH icon on mobile -->
            <div class="search group md:hidden" @click="toggleSearch(true)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.249 10.5078C18.249 14.788 14.7792 18.2578 10.499 18.2578C6.21882 18.2578 2.74902 14.788 2.74902 10.5078C2.74902 6.22761 6.21882 2.75781 10.499 2.75781C14.7792 2.75781 18.249 6.22761 18.249 10.5078ZM10.499 19.7578C15.6077 19.7578 19.749 15.6164 19.749 10.5078C19.749 5.39918 15.6077 1.25781 10.499 1.25781C5.39039 1.25781 1.24902 5.39918 1.24902 10.5078C1.24902 15.6164 5.39039 19.7578 10.499 19.7578ZM21.4202 21.4348C20.6491 22.206 19.3989 22.206 18.6278 21.4348L16.7549 19.562C17.845 18.8068 18.7921 17.8597 19.5473 16.7695L21.4202 18.6424C22.1913 19.4135 22.1913 20.6637 21.4202 21.4348Z"
                        fill="#A7AABC" class="group-active:fill-blue" />
                </svg>
            </div>
            <!-- SEARCH modal -->
            <div class="search-mobile z-[2] fixed inset-0 bg-white flex flex-col gap-4 pt-4 sm:pt-5" v-show="searchMobile">
                <div class="flex items-center px-4 gap-[5px]">
                    <BaseBack @click="searchMobile = false" />
                    <div class="search-bar w-full overflow-hidden relative rounded-3xl">
                        <input type="text" id="searchMobile" v-model="search"
                            class="rounded-3xl bg-bg hover:bg-bg2 w-full h-[34px] sm:h-[50px] px-2.5 outline-none caret-yellow placeholder:text-gray placeholder:text-sm text-sm text-black"
                            placeholder="Поиск объявлений" autocomplete="off" :class="searched ? 'pr-7' : 'pr-[85px]'" />
                        <div class="btn-group absolute right-2.5 top-0 my-[7px] flex gap-[5px] items-center"
                            :class="{ active: search, searched: searched }">
                            <BaseClose @click="search = null" />
                            <BaseButton state="primary" class="px-[11px] py-[7px] text-[10px] h-5" @click="searched = true">
                                Найти
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
                        <div v-for="item in requests" :key="item.key" @click="toggleSearch(true)"
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
            <!-- SEARCH input NOT-mobile -->
            <div class="hidden md:block search-bar w-full min-[1600px]:relative rounded-3xl">
                <div class="overflow-hidden h-[50px] w-full relative">
                    <input type="text" id="search" v-model="search" @click="toggleSearchFocused()"
                        class="rounded-3xl bg-bg hover:bg-bg2 w-full h-full pl-5 outline-none caret-yellow placeholder:text-gray placeholder:text-base"
                        placeholder="Поиск объявлений" autocomplete="off" :class="searched ? 'pr-10' : 'pr-[135px]'" />
                    <div class="btn-group absolute right-2.5 top-0 my-2 flex gap-2.5 items-center"
                        :class="{ active: search, searched: searched }">
                        <BaseClose @click="search = null" />
                        <BaseButton state="primary" size="medium" @click="searched = true">Найти</BaseButton>
                    </div>
                </div>
                <div class="absolute w-[calc(100%-40px)] h-10 top-5 left-5 min-[1600px]:top-0 min-[1600px]:left-0 min-[1600px]:w-full"
                    :class="searchFocused ? 'block' : 'hidden'">
                    <div @click="searchFocused = false" class="bg-black bg-opacity-60 w-full fixed inset-0 z-20 md:h-full">
                    </div>
                    <div class="bg-white z-[21] absolute pt-[50px] w-full rounded-3xl">
                        <div class="p-2.5">
                            <form @submit.prevent class="w-full overflow-hidden absolute top-0 left-0 rounded-3xl">
                                <input type="text" id="searchbar" v-model="search"
                                    class="rounded-3xl bg-bg hover:bg-bg2 w-full px-5 outline-none caret-yellow placeholder:text-gray placeholder:text-base h-[34px] sm:h-[50px]"
                                    placeholder="Поиск объявлений" autocomplete="off"
                                    :class="searched ? 'pr-7' : 'pr-[85px]'" />
                                <div class="btn-group absolute right-2.5 top-0 my-2 flex gap-2.5 items-center"
                                    :class="{ active: search, searched: searched }">
                                    <BaseClose @click="search = null" />
                                    <BaseButton type="submit" state="primary" size="medium" @click="onSearch()">
                                        Найти
                                    </BaseButton>
                                </div>
                            </form>
                            <div v-if="!requests.length" class="popular flex flex-col gap-[5px]">
                                <div class="text-xs text-gray pl-4">ТОП-5 популярных запросов</div>
                                <div class="flex flex-col">
                                    <div v-for="item in searchPopular.slice(0, 5)" :key="item.key"
                                        class="group h-[34px] px-4 flex items-center gap-2.5 hover:bg-bg rounded-full">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
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
            <!-- LANG and auth (profile) -->
            <div class="navbar hidden lg:flex items-center">
                <NuxtLink v-if="locale == 'ru'" :to="switchLocalePath('uz')"
                    class="hidden lg:flex lg:items-center lang px-2.5 w-max gap-[5px]">
                    <img src="~/assets/images/ru.svg" alt="ru" />
                    <span class="hidden 2xl:block">Рус</span>
                </NuxtLink>
                <NuxtLink v-else :to="switchLocalePath('ru')" class="hidden lg:flex lg:items-center lang px-2.5 w-max gap-[5px]">
                    <img src="~/assets/images/uz.svg" alt="uz" />
                    <span class="hidden 2xl:block">O‘zb</span>
                </NuxtLink>
                <!-- saved -->
                <NuxtLink :to="localePath('/saved')" class="group saved px-2.5 flex items-center w-max gap-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4 8.75V19C4 20.6481 5.88153 21.5889 7.2 20.6L10.8 17.9C11.5111 17.3667 12.4889 17.3667 13.2 17.9L16.8 20.6C18.1185 21.5889 20 20.6481 20 19V8.75H4ZM4 7.25H20V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V7.25Z"
                            class="fill-icon group-hover:fill-blue group-active:fill-pressed" />
                    </svg>
                    <span class="hidden 2xl:block group-hover:text-blue group-active:text-pressed">
                        {{ $t("sticky.saved") }}
                    </span>
                </NuxtLink>
                <!-- auth -->
                <div v-if="!isAuthenticated" class="auth px-2.5 flex w-max gap-[5px]">
                    <span @click="login = true" class="hover:text-blue active:text-pressed cursor-pointer">
                        {{ $t("login.title") }}
                    </span>
                    <span>/</span>
                    <span @click="signup = true" class="hover:text-blue active:text-pressed cursor-pointer">
                        {{ $t("signup.title") }}
                    </span>
                </div>
                <!-- profile -->
                <div v-else
                    class="group/avatar relative p-[1px] border border-bg rounded-full hover:border-blue active:border-pressed w-[50px] h-[50px] select-none">
                    <NuxtLink :to="localePath('/profile')" class="group/icon">
                        <svg v-if="userInfo && userInfo.profile_pic" xmlns="http://www.w3.org/2000/svg" width="46" height="46"
                            viewBox="0 0 46 46" fill="none">
                            <rect width="46" height="46" rx="23" fill="#F4F6FF"
                                class="group-hover/icon:fill-bg2 group-active/icon:fill-[#D2D7E5]" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M23 21.5625C26.1756 21.5625 28.75 18.9881 28.75 15.8125C28.75 12.6369 26.1756 10.0625 23 10.0625C19.8244 10.0625 17.25 12.6369 17.25 15.8125C17.25 18.9881 19.8244 21.5625 23 21.5625ZM23 35.9375C28.5574 35.9375 33.0625 33.3631 33.0625 30.1875C33.0625 27.0119 28.5574 24.4375 23 24.4375C17.4426 24.4375 12.9375 27.0119 12.9375 30.1875C12.9375 33.3631 17.4426 35.9375 23 35.9375Z"
                                fill="#787B8D"
                                class="fill-icon group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                        </svg>
                        <div class="rounded-full overflow-hidden" v-else>
                            <img width="46" height="46" draggable="false" src="~/assets/images/ava.png" alt="avatar">
                            <div
                                class="absolute w-full h-full bg-black bg-opacity-0 group-hover/icon:bg-opacity-[15%] group-active/icon:bg-opacity-[30%] top-0 left-0 rounded-full transition-opacity duration-300 ease-in-out">
                            </div>
                        </div>
                    </NuxtLink>
                    <div class="absolute w-[46px] h-[10px] bg-opacity-0"></div>
                    <div
                        class="absolute mt-[5px] top-full right-0 xl:right-1/2 xl:left-1/2 xl:-translate-x-1/2 w-max -z-[1] opacity-0 group-hover/avatar:z-[15] group-hover/avatar:opacity-100">
                        <div
                            class="flex flex-col bg-white p-2.5 rounded-3xl border border-bg2 shadow-[0px_8px_24px_-4px_rgba(24,39,75,0.08),_0px_6px_12px_-6px_rgba(24,39,75,0.12)]">
                            <div class="flex gap-2.5 items-center p-2.5">
                                <div class="rounded-full overflow-hidden">
                                    <svg v-if="userInfo && userInfo.profile_pic" xmlns="http://www.w3.org/2000/svg" width="46"
                                        height="46" viewBox="0 0 46 46" fill="none">
                                        <rect width="46" height="46" rx="23" fill="#F4F6FF"
                                            class="group-hover/avatar:fill-bg2 group-active/avatar:fill-[#D2D7E5]" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M23 21.5625C26.1756 21.5625 28.75 18.9881 28.75 15.8125C28.75 12.6369 26.1756 10.0625 23 10.0625C19.8244 10.0625 17.25 12.6369 17.25 15.8125C17.25 18.9881 19.8244 21.5625 23 21.5625ZM23 35.9375C28.5574 35.9375 33.0625 33.3631 33.0625 30.1875C33.0625 27.0119 28.5574 24.4375 23 24.4375C17.4426 24.4375 12.9375 27.0119 12.9375 30.1875C12.9375 33.3631 17.4426 35.9375 23 35.9375Z"
                                            fill="#787B8D"
                                            class="fill-icon group-hover/avatar:fill-blue group-active/avatar:fill-pressed" />
                                    </svg>
                                    <img width="46" height="46" v-else draggable="false" src="~/assets/images/ava.png" alt="avatar">
                                </div>
                                <div class="flex flex-col gap-[5px]">
                                    <p class="text-base font-bold">ustoz1234</p>
                                    <div v-if="userInfo.role == 'TUTOR'"
                                        class="flex gap-0.5 items-center text-xs text-gray">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z"
                                                fill="#787B8D" />
                                        </svg>
                                        Репетитор
                                    </div>
                                    <div v-else-if="userInfo.role == 'COURCE_CENTER'"
                                        class="flex gap-0.5 items-center text-xs text-gray">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.638 20.5543H19.7101V5.85554C19.7101 3.72623 17.9838 2 15.8548 2H8.14372C6.01442 2 4.28847 3.72623 4.28847 5.85554V20.5543H2.36056C1.96138 20.5543 1.6377 20.878 1.6377 21.2771C1.6377 21.6763 1.96138 22 2.36056 22H21.638C22.0371 22 22.3608 21.6763 22.3608 21.2771C22.3608 20.878 22.0371 20.5543 21.638 20.5543ZM7.37518 5.10315C7.5061 4.97251 7.68689 4.89145 7.88661 4.89145H10.6903C11.0895 4.89145 11.4132 5.21513 11.4132 5.61431C11.4132 5.81403 11.3324 5.99482 11.2015 6.12574C11.0705 6.25666 10.89 6.33745 10.6903 6.33745H7.88661C7.48716 6.33745 7.16347 6.01376 7.16347 5.61431C7.16347 5.41486 7.24426 5.23407 7.37518 5.10315ZM7.37518 7.59681C7.5061 7.46617 7.68689 7.38511 7.88661 7.38511H10.6903C11.0895 7.38511 11.4132 7.70879 11.4132 8.10797C11.4132 8.30742 11.3324 8.4882 11.2015 8.61913C11.0705 8.74977 10.89 8.83083 10.6903 8.83083H7.88661C7.48716 8.83083 7.16347 8.50714 7.16347 8.10797C7.16347 7.90852 7.24426 7.72774 7.37518 7.59681ZM7.16347 10.6014C7.16347 10.4016 7.24426 10.2211 7.37518 10.0902C7.5061 9.95927 7.68689 9.87849 7.88661 9.87849H10.6903C11.0895 9.87849 11.4132 10.2022 11.4132 10.6014C11.4132 10.8011 11.3324 10.9819 11.2015 11.1125C11.0705 11.2434 10.89 11.3242 10.6903 11.3242H7.88661C7.48716 11.3242 7.16347 11.0008 7.16347 10.6014ZM14.8907 20.5543H9.10754V16.4578C9.10754 14.8608 10.4023 13.5663 11.9993 13.5663C13.5962 13.5663 14.8907 14.8608 14.8907 16.4578V20.5543ZM16.6231 11.1125C16.4924 11.2434 16.3116 11.3242 16.1119 11.3242H13.3082C12.9088 11.3242 12.5854 11.0008 12.5854 10.6014C12.5854 10.4016 12.6661 10.2211 12.7971 10.0902C12.9277 9.95927 13.1085 9.87849 13.3082 9.87849H16.1119C16.5114 9.87849 16.8348 10.2022 16.8348 10.6014C16.8348 10.8011 16.754 10.9819 16.6231 11.1125ZM16.6231 8.61913C16.4924 8.74977 16.3116 8.83083 16.1119 8.83083H13.3082C12.9088 8.83083 12.5854 8.50714 12.5854 8.10797C12.5854 7.90852 12.6661 7.72774 12.7971 7.59681C12.928 7.46589 13.1085 7.38511 13.3082 7.38511H16.1119C16.5114 7.38511 16.8348 7.70879 16.8348 8.10797C16.8348 8.30742 16.754 8.4882 16.6231 8.61913ZM16.6231 6.12574C16.4924 6.25666 16.3116 6.33745 16.1119 6.33745H13.3082C12.9088 6.33745 12.5854 6.01376 12.5854 5.61431C12.5854 5.41486 12.6661 5.23407 12.7971 5.10315C12.9277 4.97251 13.1085 4.89145 13.3082 4.89145H16.1119C16.5114 4.89145 16.8348 5.21513 16.8348 5.61431C16.8348 5.81403 16.754 5.99482 16.6231 6.12574Z"
                                                fill="#787B8D" />
                                        </svg>
                                        Учебное заведение
                                    </div>
                                </div>
                            </div>
                            <NuxtLink :to="localePath('/profile/my-ads')"
                                class="group/icon px-2.5 flex gap-2.5 items-center hover:bg-bg active:bg-bg2 rounded-[200px] h-[34px] cursor-pointer">
                                <div class="w-[18px] h-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0087 0.0583688C14.3087 0.138774 14.4868 0.447213 14.4064 0.747288L14.1319 1.77181C14.0515 2.07188 13.743 2.24996 13.443 2.16955C13.1429 2.08915 12.9648 1.78071 13.0452 1.48064L13.3197 0.456116C13.4001 0.156042 13.7086 -0.0220359 14.0087 0.0583688ZM10.9007 1.32757C10.3961 0.453573 9.18971 0.317223 8.50276 1.05654L3.66636 6.26162C3.83509 6.41466 3.98326 6.59613 4.10327 6.804L5.97827 10.0516C6.09829 10.2595 6.18137 10.4785 6.22954 10.7012L13.1555 9.11531C14.1392 8.89005 14.6243 7.77715 14.1197 6.90315L10.9007 1.32757ZM4.88365 10.5474L3.00865 7.29978C2.69799 6.7617 2.00995 6.57734 1.47187 6.888C0.933788 7.19866 0.749429 7.8867 1.06009 8.42478L2.93509 11.6724C3.24575 12.2105 3.93379 12.3948 4.47187 12.0842C5.00995 11.7735 5.19431 11.0855 4.88365 10.5474ZM9.28043 13.8645L7.85288 11.392L10.1476 10.8665L11.229 12.7396C11.5397 13.2776 11.3553 13.9657 10.8172 14.2763C10.2791 14.587 9.59109 14.4026 9.28043 13.8645ZM15.2341 3.67946C14.9341 3.59906 14.6256 3.77714 14.5452 4.07721C14.4648 4.37728 14.6429 4.68572 14.943 4.76613L15.9675 5.04065C16.2676 5.12105 16.576 4.94298 16.6564 4.6429C16.7368 4.34283 16.5587 4.03439 16.2587 3.95398L15.2341 3.67946Z"
                                            class="fill-icon group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                    </svg>
                                </div>
                                <span class="text-sm">Мои объявления</span>
                                <BaseCount count="19" />
                            </NuxtLink>
                            <NuxtLink :to="localePath('/profile/wallet')"
                                class="group/icon px-2.5 flex gap-2.5 items-center hover:bg-bg active:bg-bg2 rounded-[200px] h-[34px] cursor-pointer">
                                <div class="w-[18px] h-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.00019 0.5H3.50019C2.24118 0.5 1.1633 1.27556 0.718262 2.375H10.7821C10.3371 1.27556 9.25921 0.5 8.00019 0.5ZM15.5 11H12.5C11.6716 11 11 10.3284 11 9.5C11 8.67157 11.6716 8 12.5 8H15.5V11ZM0.5 3.5H12.5C14.1569 3.5 15.5 4.84315 15.5 6.5V6.875L12.5 6.875C11.0503 6.875 9.875 8.05025 9.875 9.5C9.875 10.9497 11.0503 12.125 12.5 12.125H15.5V12.5C15.5 14.1569 14.1569 15.5 12.5 15.5H3.5C1.84315 15.5 0.5 14.1569 0.5 12.5V3.5Z"
                                            class="fill-icon group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                    </svg>
                                </div>
                                <span class="text-sm">Кошелёк: 0 сум</span>
                            </NuxtLink>
                            <div
                                class="group/icon px-2.5 flex gap-2.5 items-center hover:bg-bg active:bg-bg2 rounded-[200px] h-[34px] cursor-pointer">
                                <div class="w-[18px] h-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.28409 2.25H9.71591C10.5067 2.25 11.1477 2.85442 11.1477 3.6C11.1477 4.45321 12.0606 4.99566 12.81 4.58773L12.8861 4.5463C13.5709 4.17351 14.4466 4.39474 14.842 5.04044L15.5579 6.20957C15.9533 6.85527 15.7187 7.68091 15.0338 8.05371C14.2841 8.46182 14.2841 9.53818 15.0338 9.94629C15.7187 10.3191 15.9533 11.1447 15.5579 11.7904L14.842 12.9596C14.4466 13.6053 13.5709 13.8265 12.8861 13.4537L12.81 13.4123C12.0606 13.0043 11.1477 13.5468 11.1477 14.4C11.1477 15.1456 10.5067 15.75 9.71591 15.75H8.28409C7.49331 15.75 6.85226 15.1456 6.85226 14.4C6.85226 13.5468 5.93937 13.0043 5.19 13.4123L5.11389 13.4537C4.42906 13.8265 3.55337 13.6053 3.15798 12.9596L2.44207 11.7904C2.04668 11.1447 2.28132 10.3191 2.96615 9.9463C3.71588 9.53818 3.71588 8.46182 2.96615 8.0537C2.28132 7.6809 2.04668 6.85526 2.44207 6.20956L3.15798 5.04043C3.55337 4.39473 4.42906 4.1735 5.11389 4.54629L5.19 4.58773C5.93937 4.99565 6.85226 4.45321 6.85226 3.6C6.85226 2.85442 7.49331 2.25 8.28409 2.25ZM9.00001 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9.00001 6.75C7.75737 6.75 6.75001 7.75736 6.75001 9C6.75001 10.2426 7.75737 11.25 9.00001 11.25Z"
                                            class="fill-icon group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                    </svg>
                                </div>
                                <span class="text-sm">Настройки профиля</span>
                            </div>
                            <div @click="isLogout = true"
                                class="group/icon px-2.5 flex gap-2.5 items-center hover:bg-[#FCEBEF] active:bg-[#FAD6DF] rounded-[200px] h-[34px] cursor-pointer">
                                <div class="w-[18px] h-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.85593 1.03736C4.12189 0.193393 5.78476 0.967129 6.03139 2.38819H8.5C9.63909 2.38819 10.5625 3.31161 10.5625 4.45069C10.5625 4.76135 10.3107 5.01319 10 5.01319C9.68934 5.01319 9.4375 4.76135 9.4375 4.45069C9.4375 3.93293 9.01777 3.51319 8.5 3.51319H6.0625V12.8882H8.5C9.01777 12.8882 9.4375 12.4685 9.4375 11.9507C9.4375 11.64 9.68934 11.3882 10 11.3882C10.3107 11.3882 10.5625 11.64 10.5625 11.9507C10.5625 13.0898 9.63909 14.0132 8.5 14.0132H6.03139C5.78476 15.4343 4.12189 16.208 2.85593 15.364L1.35593 14.364C0.782146 13.9815 0.4375 13.3375 0.4375 12.6479V3.75347C0.4375 3.06386 0.782146 2.41989 1.35593 2.03736L2.85593 1.03736ZM11.1023 9.89775C10.8826 9.67808 10.8826 9.32192 11.1023 9.10225L11.642 8.5625L7.75 8.5625C7.43934 8.5625 7.1875 8.31066 7.1875 8C7.1875 7.68934 7.43934 7.4375 7.75 7.4375L11.642 7.4375L11.1023 6.89775C10.8826 6.67808 10.8826 6.32192 11.1023 6.10225C11.3219 5.88258 11.6781 5.88258 11.8977 6.10225L12.8674 7.07192C13.38 7.58449 13.38 8.41551 12.8674 8.92808L11.8977 9.89775C11.6781 10.1174 11.3219 10.1174 11.1023 9.89775Z"
                                            fill="#E4335D" />
                                    </svg>
                                </div>
                                <span class="text-sm">Выйти</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BaseButton class="hidden xl:block w-max" state="primary" size="large">Разместить объявление</BaseButton>
        </div>
        <!-- LOGOUT modal -->
        <div class="">
            <div @click="isLogout = false"
                class="bg-black bg-opacity-60 w-full fixed top-0 left-0 h-full transition-all duration-300 ease-in-out"
                :class="isLogout ? 'z-[99] opacity-100' : '-z-[1] opacity-0'"></div>
            <div :class="isLogout ? 'z-[99] opacity-100' : '-z-[1] opacity-0'"
                class="flex flex-col gap-2.5 p-5 bg-white rounded-3xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[500px] transition-all duration-300 ease-in-out">
                <div class="group/icon self-end cursor-pointer" @click="isLogout = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.3588 15.3587C15.0659 15.6516 14.591 15.6516 14.2981 15.3587L12 13.0606L9.7019 15.3587C9.40901 15.6516 8.93413 15.6516 8.64124 15.3587C8.34835 15.0658 8.34835 14.5909 8.64124 14.298L10.9393 11.9999L8.64125 9.70184C8.34836 9.40895 8.34836 8.93408 8.64125 8.64118C8.93415 8.34829 9.40902 8.34829 9.70191 8.64118L12 10.9393L14.2981 8.64119C14.591 8.3483 15.0659 8.3483 15.3588 8.64119C15.6516 8.93409 15.6516 9.40896 15.3588 9.70185L13.0607 11.9999L15.3588 14.298C15.6517 14.5909 15.6517 15.0658 15.3588 15.3587Z"
                            class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                    </svg>
                </div>
                <div class="flex flex-col gap-5">
                    <div class="text-2xl text-black font-bold text-center">Вы уверены, что хотите выйти?</div>
                    <img class="self-center" width="140" height="140" src="~/assets/images/logout.png" alt="logout">
                    <div class="flex gap-2.5">
                        <BaseButton state="tertiary" size="large" @click="isLogout = false">Отмена</BaseButton>
                        <BaseButton state="primary" size="large" @click="handleLogout()">Выйти</BaseButton>
                    </div>
                </div>
            </div>
        </div>
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
