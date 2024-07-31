<script setup>
const localePath = useLocalePath();

const isTutor = false;

// const username = useRoute().params.user[0];
const username = 'users';
const tabs = [
    {
        title: "Описание",
        count: 19,
        link: `/${username}/about`,
    },
    {
        title: "Объявления",
        count: 19,
        link: `/${username}/announcements`,
    },
    {
        title: "Галерея",
        count: 19,
        link: `/${username}/gallery`,
    },
    {
        title: "Филиалы",
        count: 19,
        link: `/${username}/branches`,
    },
];
const selectedTab = ref(0);
const tabUrl = useRoute().path.split(`${username}/`)[1];
switch (tabUrl) {
    case 'ads':
        selectedTab.value = 1
        break;
    case 'gallery':
        selectedTab.value = 2
        break;
    case 'branches':
        selectedTab.value = 3
        break;

    default:
        selectedTab.value = 0
        break;
}

const breadCrumb = [
    {
        name: isTutor ? "Репетиторы" : "Учебные заведения",
        link: "/category/search",
    },
    {
        name: "INTER NATION SCHOOL",
        link: null,
    },
]

const handleSelected = () => {
    var widthOfNav = 0;
    var leftOfNav = 0;
    setTimeout(() => {
        const el = document.getElementById("stick");
        const activeEl = document.getElementsByClassName("group/tab selected")[0]
        if (activeEl && el) {
            widthOfNav = activeEl.offsetWidth
            leftOfNav = activeEl.offsetLeft
            el.style.width = `${widthOfNav}px`
            el.style.left = `${leftOfNav}px`
        }
    }, 1);
}

watch(selectedTab, () => handleSelected());

onMounted(() => {
    handleSelected();
    window.addEventListener('resize', () => { handleSelected() }, true);
})
// TODO delete show number
</script>

<template>
    <div class="flex flex-col gap-4 sm:gap-5">
        <div class="flex flex-col bg-white">
            <div class="p-4 sm:p-5 flex justify-between lg:hidden">
                <BaseBack />
                <div class="flex items-center gap-4 sm:gap-5">
                    <div class="group/icon cursor-pointer w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.249 9.50781C17.249 13.788 13.7792 17.2578 9.49902 17.2578C5.21882 17.2578 1.74902 13.788 1.74902 9.50781C1.74902 5.22761 5.21882 1.75781 9.49902 1.75781C13.7792 1.75781 17.249 5.22761 17.249 9.50781ZM9.49902 18.7578C14.6077 18.7578 18.749 14.6164 18.749 9.50781C18.749 4.39918 14.6077 0.257812 9.49902 0.257812C4.39039 0.257812 0.249023 4.39918 0.249023 9.50781C0.249023 14.6164 4.39039 18.7578 9.49902 18.7578ZM20.4202 20.4348C19.6491 21.206 18.3989 21.206 17.6278 20.4348L15.7549 18.562C16.845 17.8068 17.7921 16.8597 18.5473 15.7695L20.4202 17.6424C21.1913 18.4135 21.1913 19.6637 20.4202 20.4348Z"
                                class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                        </svg>
                    </div>
                    <div class="group/icon cursor-pointer w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4 7.75V18C4 19.6481 5.88153 20.5889 7.2 19.6L10.8 16.9C11.5111 16.3667 12.4889 16.3667 13.2 16.9L16.8 19.6C18.1185 20.5889 20 19.6481 20 18V7.75H4ZM4 6.25H20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V6.25Z"
                                class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                        </svg>
                    </div>
                    <icon-share />
                </div>
            </div>
            <div class="flex flex-col md:gap-5">
                <div class="-mb-[50px] md:mb-0" v-if="!isTutor">
                    <nuxt-img :preload="true"
                        class="w-full object-cover aspect-[3.2] sm:aspect-[3.42] md:aspect-[3.84] lg:aspect-[4.17] xl:aspect-[4.57] 2xl:aspect-[6]"
                        format="webp" src="https://i.imgur.com/dwgi0UM.jpeg" width="4096" height="2731" provider="ipx"
                        sizes="480px sm:768px md:1000px lg:1280px xl:1440px 2xl:4096px" />
                </div>
                <div class="px-4 sm:px-5 xl:px-8 flex flex-col gap-5 max-w-[1280px] xl:mx-auto xl:w-full">
                    <BreadCrumb class="max-lg:hidden" :navs="breadCrumb" />
                    <div class="flex flex-col">
                        <div class="flex">
                            <div class="flex flex-col gap-2.5 items-center md:flex-row md:gap-5 flex-grow">
                                <div class="rounded-full border-2 border-bg p-0.5">
                                    <img draggable="false" class="rounded-full" width="92" height="92"
                                        src="~/assets/images/ava.png" alt="avatar">
                                </div>
                                <div class="flex flex-col gap-2.5 items-center md:items-start">
                                    <div class="flex gap-[5px] items-center">
                                        <p class="text-lg font-bold text-black lheight-normal">Рустам Абдуллаев</p>
                                        <img draggable="false" width="18" height="18" src="~/assets/images/verified.png"
                                            alt="verified">
                                        <img draggable="false" width="18" height="18" src="~/assets/images/crown.png"
                                            alt="crown">
                                    </div>
                                    <div
                                        class="flex gap-[5px] items-center flex-wrap justify-center text-sm text-gray lheight-normal md:justify-start">
                                        <div v-if="isTutor" class="flex gap-[5px] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                                viewBox="0 0 19 18" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.5 8.25C11.1569 8.25 12.5 6.90685 12.5 5.25C12.5 3.59315 11.1569 2.25 9.5 2.25C7.84315 2.25 6.5 3.59315 6.5 5.25C6.5 6.90685 7.84315 8.25 9.5 8.25ZM9.5 15.75C12.3995 15.75 14.75 14.4069 14.75 12.75C14.75 11.0931 12.3995 9.75 9.5 9.75C6.60051 9.75 4.25 11.0931 4.25 12.75C4.25 14.4069 6.60051 15.75 9.5 15.75Z"
                                                    fill="#787B8D" />
                                            </svg>
                                            <span>Репетитор</span>
                                        </div>
                                        <div v-else class="flex gap-[5px] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16.2287 15.4157H14.7828V4.39165C14.7828 2.79467 13.4881 1.5 11.8913 1.5H6.10804C4.51106 1.5 3.21659 2.79467 3.21659 4.39165V15.4157H1.77066C1.47128 15.4157 1.22852 15.6585 1.22852 15.9579C1.22852 16.2572 1.47128 16.5 1.77066 16.5H16.2287C16.5281 16.5 16.7709 16.2572 16.7709 15.9579C16.7709 15.6585 16.5281 15.4157 16.2287 15.4157ZM5.53163 3.82736C5.62982 3.72938 5.76541 3.66858 5.91521 3.66858H8.01798C8.31736 3.66858 8.56012 3.91135 8.56012 4.21073C8.56012 4.36053 8.49954 4.49611 8.40135 4.59431C8.30315 4.6925 8.16777 4.75309 8.01798 4.75309H5.91521C5.61561 4.75309 5.37285 4.51032 5.37285 4.21073C5.37285 4.06114 5.43344 3.92556 5.53163 3.82736ZM5.53163 5.69761C5.62982 5.59963 5.76541 5.53883 5.91521 5.53883H8.01798C8.31736 5.53883 8.56012 5.7816 8.56012 6.08098C8.56012 6.23056 8.49954 6.36615 8.40135 6.46434C8.30315 6.56233 8.16777 6.62312 8.01798 6.62312H5.91521C5.61561 6.62312 5.37285 6.38036 5.37285 6.08098C5.37285 5.93139 5.43344 5.7958 5.53163 5.69761ZM5.37285 7.95102C5.37285 7.80122 5.43344 7.66584 5.53163 7.56765C5.62982 7.46946 5.76541 7.40887 5.91521 7.40887H8.01798C8.31736 7.40887 8.56012 7.65163 8.56012 7.95102C8.56012 8.10081 8.49954 8.2364 8.40135 8.33438C8.30315 8.43258 8.16777 8.49316 8.01798 8.49316H5.91521C5.61561 8.49316 5.37285 8.25061 5.37285 7.95102ZM11.1683 15.4157H6.8309V12.3433C6.8309 11.1456 7.80196 10.1748 8.99969 10.1748C10.1974 10.1748 11.1683 11.1456 11.1683 12.3433V15.4157ZM12.4675 8.33438C12.3696 8.43258 12.234 8.49316 12.0842 8.49316H9.9814C9.68181 8.49316 9.43926 8.25061 9.43926 7.95102C9.43926 7.80122 9.49984 7.66584 9.59804 7.56765C9.69602 7.46946 9.83161 7.40887 9.9814 7.40887H12.0842C12.3838 7.40887 12.6263 7.65163 12.6263 7.95102C12.6263 8.10081 12.5657 8.2364 12.4675 8.33438ZM12.4675 6.46434C12.3696 6.56233 12.234 6.62312 12.0842 6.62312H9.9814C9.68181 6.62312 9.43926 6.38036 9.43926 6.08098C9.43926 5.93139 9.49984 5.7958 9.59804 5.69761C9.69623 5.59942 9.83161 5.53883 9.9814 5.53883H12.0842C12.3838 5.53883 12.6263 5.7816 12.6263 6.08098C12.6263 6.23056 12.5657 6.36615 12.4675 6.46434ZM12.4675 4.59431C12.3696 4.6925 12.234 4.75309 12.0842 4.75309H9.9814C9.68181 4.75309 9.43926 4.51032 9.43926 4.21073C9.43926 4.06114 9.49984 3.92556 9.59804 3.82736C9.69602 3.72938 9.83161 3.66858 9.9814 3.66858H12.0842C12.3838 3.66858 12.6263 3.91135 12.6263 4.21073C12.6263 4.36053 12.5657 4.49611 12.4675 4.59431Z"
                                                    fill="#787B8D" />
                                            </svg>
                                            <span>Учебное заведение</span>
                                        </div>
                                        <span v-if="!isTutor" class="whitespace-nowrap flex gap-[5px] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="2" viewBox="0 0 3 2"
                                                fill="none">
                                                <circle cx="1.5" cy="1" r="1" fill="#787B8D" />
                                            </svg>
                                            <p>Основано в 22.07.2013</p>
                                        </span>
                                        <span class="whitespace-nowrap flex gap-[5px] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="2" viewBox="0 0 3 2"
                                                fill="none">
                                                <circle cx="1.5" cy="1" r="1" fill="#787B8D" />
                                            </svg>
                                            <p>На Ustoztop.uz с июня 2022</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <icon-share class="max-lg:hidden" />
                        </div>
                        <div class="flex relative select-none overflow-x-auto no-scrollbar">
                            <div id="stick"
                                class="h-[3px] bg-blue rounded-full absolute bottom-0 transition-all duration-300 ease-in-out">
                            </div>
                            <NuxtLink :to="localePath(item.link)"
                                class="group/tab h-[60px] p-5 flex gap-[5px] items-center cursor-pointer"
                                v-for="item, index in tabs" :class="{ 'selected': selectedTab == index }"
                                @click="selectedTab = index">
                                <span
                                    class="text-base text-gray group-hover/tab:text-blue group-active/tab:text-[#1565CD] group-[.selected]/tab:text-black group-[.selected]/tab:font-bold">
                                    {{ item.title }}
                                </span>
                                <BaseCount :count="item.count" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NuxtPage />
    </div>
</template>