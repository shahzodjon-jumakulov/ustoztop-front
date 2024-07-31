<script setup>
const localePath = useLocalePath();

const breadCrumb = [
    {
        name: "Все категории",
        link: "/category/search",
    },
    {
        name: "Школьные предметы",
        link: "/category/search",
    },
    {
        name: "Математика",
        link: "/category/search",
    },
    {
        name: "Репетитор по математике ",
        link: null,
    },
]
const showMore = ref(false)

const isTutor = ref(false)
</script>

<template>
    <div class="flex flex-col gap-4 sm:gap-5 lg:mt-5 xl:px-8 xl:max-w-[1280px] xl:mx-auto">
        <BreadCrumb class="px-5 max-lg:hidden xl:px-0" :navs="breadCrumb" />
        <div class="p-4 sm:p-5 bg-white flex justify-between lg:hidden">
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
                <div class="group/icon cursor-pointer w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 3.5C20 5.433 18.433 7 16.5 7C15.3988 7 14.4163 6.49142 13.7747 5.69632C13.7522 5.71078 13.7287 5.72417 13.7042 5.73641L6.96659 9.10523C6.94233 9.11736 6.91773 9.12805 6.89289 9.13733C6.96283 9.41328 7 9.7023 7 10C7 10.2977 6.96283 10.5867 6.89288 10.8627C6.91773 10.872 6.94233 10.8826 6.96659 10.8948L13.7042 14.2636C13.7287 14.2758 13.7522 14.2892 13.7747 14.3037C14.4163 13.5086 15.3988 13 16.5 13C18.433 13 20 14.567 20 16.5C20 18.433 18.433 20 16.5 20C14.567 20 13 18.433 13 16.5C13 16.2023 13.0372 15.9133 13.1071 15.6373C13.0823 15.6281 13.0577 15.6174 13.0334 15.6052L6.29577 12.2364C6.27129 12.2242 6.24777 12.2108 6.22525 12.1963C5.58366 12.9914 4.60122 13.5 3.5 13.5C1.567 13.5 0 11.933 0 10C0 8.067 1.567 6.5 3.5 6.5C4.60123 6.5 5.58367 7.00858 6.22526 7.80368C6.24778 7.78923 6.27129 7.77583 6.29577 7.76359L13.0334 4.39477C13.0577 4.38264 13.0823 4.37196 13.1071 4.36267C13.0372 4.08672 13 3.7977 13 3.5C13 1.567 14.567 0 16.5 0C18.433 0 20 1.567 20 3.5Z"
                            class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4 sm:gap-5 xl:flex-row">
            <!-- info -->
            <div class="sm:px-5 xl:px-0 flex flex-col gap-5 xl:w-[804px]">
                <div class="bg-white rounded-3xl flex flex-col gap-5 p-4 sm:p-5">
                    <div class="flex items-center">
                        <h1 class="text-xl font-bold text-black flex-grow">Репетитор по математике</h1>
                        <div class="flex items-center gap-4 sm:gap-5 max-lg:hidden">
                            <div class="group/icon cursor-pointer w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M4 7.75V18C4 19.6481 5.88153 20.5889 7.2 19.6L10.8 16.9C11.5111 16.3667 12.4889 16.3667 13.2 16.9L16.8 19.6C18.1185 20.5889 20 19.6481 20 18V7.75H4ZM4 6.25H20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V6.25Z"
                                        class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                </svg>
                            </div>
                            <div class="group/icon cursor-pointer w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M20 3.5C20 5.433 18.433 7 16.5 7C15.3988 7 14.4163 6.49142 13.7747 5.69632C13.7522 5.71078 13.7287 5.72417 13.7042 5.73641L6.96659 9.10523C6.94233 9.11736 6.91773 9.12805 6.89289 9.13733C6.96283 9.41328 7 9.7023 7 10C7 10.2977 6.96283 10.5867 6.89288 10.8627C6.91773 10.872 6.94233 10.8826 6.96659 10.8948L13.7042 14.2636C13.7287 14.2758 13.7522 14.2892 13.7747 14.3037C14.4163 13.5086 15.3988 13 16.5 13C18.433 13 20 14.567 20 16.5C20 18.433 18.433 20 16.5 20C14.567 20 13 18.433 13 16.5C13 16.2023 13.0372 15.9133 13.1071 15.6373C13.0823 15.6281 13.0577 15.6174 13.0334 15.6052L6.29577 12.2364C6.27129 12.2242 6.24777 12.2108 6.22525 12.1963C5.58366 12.9914 4.60122 13.5 3.5 13.5C1.567 13.5 0 11.933 0 10C0 8.067 1.567 6.5 3.5 6.5C4.60123 6.5 5.58367 7.00858 6.22526 7.80368C6.24778 7.78923 6.27129 7.77583 6.29577 7.76359L13.0334 4.39477C13.0577 4.38264 13.0823 4.37196 13.1071 4.36267C13.0372 4.08672 13 3.7977 13 3.5C13 1.567 14.567 0 16.5 0C18.433 0 20 1.567 20 3.5Z"
                                        class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-x-10 gap-y-5 items-center">
                        <div class="flex flex-col gap-5px">
                            <p class="text-sm text-gray">Место занятий</p>
                            <p class="text-base font-bold text-blue">Онлайн</p>
                        </div>
                        <div class="flex flex-col gap-5px">
                            <p class="text-sm text-gray">Тип занятий</p>
                            <p class="text-base font-bold text-blue">Индивидуальные</p>
                        </div>
                        <div class="flex flex-col gap-5px">
                            <p class="text-sm text-gray">Язык обучения</p>
                            <p class="text-base font-bold text-blue">Узбекский</p>
                        </div>
                        <div class="flex flex-col gap-5px">
                            <p class="text-sm text-gray">Цена/в месяц</p>
                            <p class="text-base font-bold text-blue">{{ numberWithSpaces("700000") }} сум</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[15px]">
                        <div class="">
                            <p class="text-sm font-bold">Привет, меня зовут Рустам Абдуллаев! Я преподаватель по математике
                            </p>
                            <p class="text-sm">Я помогаю ученикам 8-9 классов успешно подготовиться и сдать ОГЭ на высокий
                                балл!
                                После занятия Вы сможете оценить качество моей работы и как ученик усваивает материал. А
                                дальше
                                мы
                                совместно определим дальнейший формат и стоимость занятий.</p>
                        </div>
                        <div class="flex flex-col gap-[5px]">
                            <p class="text-base font-bold">КОРОТКО ОБО МНЕ И КАК ПРОХОДИТ ПОДГОТОВКА:</p>
                            <p class="text-sm" :class="{ 'line-clamp-[13]': !showMore }">
                                🎓 Я имею опыт работы в сфере репетиторства более 8 лет. <br>
                                💯 Окончил МГТУ им. Баумана. <br>
                                📊 65% моих учеников сдают ОГЭ на «5» и 31% на «4» <br>
                                ⭐️ Веду свой YouTube канал, посвященный подготовке к экзаменам, на котором более 8 млн
                                просмотров
                                обучающих роликов <br>
                                📚 Мои занятия проводятся онлайн, что позволяет заниматься в удобное время и комфортном
                                месте.
                                <br>
                                🏫 Я использую индивидуальный подход и адаптирую программу занятий под <br>
                                🎓 Я имею опыт работы в сфере репетиторства более 8 лет. <br>
                                💯 Окончил МГТУ им. Баумана. <br>
                                📊 65% моих учеников сдают ОГЭ на «5» и 31% на «4» <br>
                                ⭐️ Веду свой YouTube канал, посвященный подготовке к экзаменам, на котором более 8 млн
                                просмотров
                                обучающих роликов <br>
                                📚 Мои занятия проводятся онлайн, что позволяет заниматься в удобное время и комфортном
                                месте.
                                <br>
                                🏫 Я использую индивидуальный подход и адаптирую программу занятий под
                            </p>
                            <div class="group/more flex items-center cursor-pointer" @click="showMore = true"
                                v-if="!showMore">
                                <span
                                    class="text-sm text-blue group-hover/more:text-pressed group-active/more:text-doublePressed">Ещё</span>
                                <div class="w-[18px] h-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.18922 1.14863C8.99515 0.906045 8.64117 0.866714 8.39859 1.06078L4.99998 3.77967L1.60137 1.06078C1.35878 0.866713 1.00481 0.906044 0.810739 1.14863C0.616672 1.39121 0.656003 1.74519 0.898588 1.93926L4.64859 4.93926C4.85402 5.10361 5.14593 5.10361 5.35137 4.93926L9.10137 1.93926C9.34396 1.74519 9.38329 1.39121 9.18922 1.14863Z"
                                            fill="#1977F1"
                                            class="fill-blue group-hover/more:fill-pressed group-active/more:fill-doublePressed" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-5 items-center">
                        <div class="flex items-center gap-[5px]">
                            <div class="w-[18px] h-[18px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9 16.5C11.5312 16.5 15.75 11.8486 15.75 8.16667C15.75 4.48477 12.7279 1.5 9 1.5C5.27208 1.5 2.25 4.48477 2.25 8.16667C2.25 11.8486 6.46875 16.5 9 16.5ZM9 10.5C10.2426 10.5 11.25 9.49264 11.25 8.25C11.25 7.00736 10.2426 6 9 6C7.75736 6 6.75 7.00736 6.75 8.25C6.75 9.49264 7.75736 10.5 9 10.5Z"
                                        fill="#787B8D" />
                                </svg>
                            </div>
                            <span class="text-xs lheight-normal text-gray">Ташкент</span>
                        </div>
                        <div class="flex items-center gap-[5px]">
                            <div class="w-[18px] h-[18px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.8477 10.6102C16.7174 9.69512 16.7174 8.30488 15.8477 7.38982C14.3809 5.8465 11.8616 3.75 9 3.75C6.13836 3.75 3.61912 5.8465 2.15228 7.38982C1.28257 8.30488 1.28257 9.69512 2.15228 10.6102C3.61912 12.1535 6.13836 14.25 9 14.25C11.8616 14.25 14.3809 12.1535 15.8477 10.6102ZM9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                                        fill="#787B8D" />
                                </svg>
                            </div>
                            <span class="text-xs lheight-normal text-gray">{{ numberWithSpaces("2517") }}</span>
                        </div>
                        <div class="flex items-center gap-[5px]">
                            <div class="w-[18px] h-[18px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M4 0.9375C4.31066 0.9375 4.5625 1.18934 4.5625 1.5V2.625H9.4375V1.5C9.4375 1.18934 9.68934 0.9375 10 0.9375C10.3107 0.9375 10.5625 1.18934 10.5625 1.5V2.625H10.75C12.4069 2.625 13.75 3.96815 13.75 5.625V6.1875H0.25V5.625C0.25 3.96815 1.59315 2.625 3.25 2.625H3.4375V1.5C3.4375 1.18934 3.68934 0.9375 4 0.9375ZM0.25 7.3125H13.75V13.5C13.75 15.1569 12.4069 16.5 10.75 16.5H3.25C1.59315 16.5 0.25 15.1569 0.25 13.5V7.3125Z"
                                        fill="#787B8D" />
                                </svg>
                            </div>
                            <span class="text-xs lheight-normal text-gray">17.07.2023</span>
                        </div>
                    </div>
                </div>
                <BaseCarousel class="max-xl:hidden" source="announcements" :images="3" :is-mobile="false" />
            </div>
            <BaseCarousel class="lg:hidden" source="announcements" :images="3" :is-mobile="true" />
            <BaseCarousel class="max-lg:hidden xl:hidden mx-5" source="announcements" :images="3" :is-mobile="false" />
            <div class="xl:w-1/3">
                <div class="sm:px-5 xl:px-0 flex flex-col gap-5 md:flex-row xl:flex-col xl:sticky xl:top-5">
                    <div class="bg-white p-4 sm:p-5 rounded-3xl flex flex-col gap-[15px] md:w-1/2 xl:w-full">
                        <div class="flex flex-col gap-[5px]">
                            <NuxtLink :to="localePath('/ustoztop123')"
                                class="p-2.5 flex gap-[15px] rounded-full hover:bg-bg active:bg-bg2 cursor-pointer select-none">
                                <div class="w-[64px] h-[64px] border border-bg2 rounded-full overflow-hidden">
                                    <img draggable="false" src="~/assets/images/ava.png" alt="avatar">
                                </div>
                                <div class="flex flex-col justify-center gap-[5px]">
                                    <div class="flex gap-[5px] items-center">
                                        <p class="text-lg font-bold text-black">Рустам Абдуллаев</p>
                                        <img draggable="false" width="18" height="18" src="~/assets/images/verified.png"
                                            alt="verified">
                                        <img draggable="false" width="18" height="18" src="~/assets/images/crown.png"
                                            alt="crown">
                                    </div>
                                    <div v-if="isTutor" class="flex gap-[5px] items-center">
                                        <div class="w-[18px] h-[18px] flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z"
                                                    fill="#787B8D" />
                                            </svg>
                                        </div>
                                        <span class="text-sm text-gray">Репетитор</span>
                                    </div>
                                    <div v-else class="flex gap-[5px] items-center">
                                        <div class="w-[18px] h-[18px] flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.2287 14.4157H13.7828V3.39165C13.7828 1.79467 12.4881 0.5 10.8913 0.5H5.10804C3.51106 0.5 2.21659 1.79467 2.21659 3.39165V14.4157H0.770662C0.47128 14.4157 0.228516 14.6585 0.228516 14.9579C0.228516 15.2572 0.47128 15.5 0.770662 15.5H15.2287C15.5281 15.5 15.7709 15.2572 15.7709 14.9579C15.7709 14.6585 15.5281 14.4157 15.2287 14.4157ZM4.53163 2.82736C4.62982 2.72938 4.76541 2.66858 4.91521 2.66858H7.01798C7.31736 2.66858 7.56012 2.91135 7.56012 3.21073C7.56012 3.36053 7.49954 3.49611 7.40135 3.59431C7.30315 3.6925 7.16777 3.75309 7.01798 3.75309H4.91521C4.61561 3.75309 4.37285 3.51032 4.37285 3.21073C4.37285 3.06114 4.43344 2.92556 4.53163 2.82736ZM4.53163 4.69761C4.62982 4.59963 4.76541 4.53883 4.91521 4.53883H7.01798C7.31736 4.53883 7.56012 4.7816 7.56012 5.08098C7.56012 5.23056 7.49954 5.36615 7.40135 5.46434C7.30315 5.56233 7.16777 5.62312 7.01798 5.62312H4.91521C4.61561 5.62312 4.37285 5.38036 4.37285 5.08098C4.37285 4.93139 4.43344 4.7958 4.53163 4.69761ZM4.37285 6.95102C4.37285 6.80122 4.43344 6.66584 4.53163 6.56765C4.62982 6.46946 4.76541 6.40887 4.91521 6.40887H7.01798C7.31736 6.40887 7.56012 6.65163 7.56012 6.95102C7.56012 7.10081 7.49954 7.2364 7.40135 7.33438C7.30315 7.43258 7.16777 7.49316 7.01798 7.49316H4.91521C4.61561 7.49316 4.37285 7.25061 4.37285 6.95102ZM10.1683 14.4157H5.8309V11.3433C5.8309 10.1456 6.80196 9.17475 7.99969 9.17475C9.19743 9.17475 10.1683 10.1456 10.1683 11.3433V14.4157ZM11.4675 7.33438C11.3696 7.43258 11.234 7.49316 11.0842 7.49316H8.9814C8.68181 7.49316 8.43926 7.25061 8.43926 6.95102C8.43926 6.80122 8.49984 6.66584 8.59804 6.56765C8.69602 6.46946 8.83161 6.40887 8.9814 6.40887H11.0842C11.3838 6.40887 11.6263 6.65163 11.6263 6.95102C11.6263 7.10081 11.5657 7.2364 11.4675 7.33438ZM11.4675 5.46434C11.3696 5.56233 11.234 5.62312 11.0842 5.62312H8.9814C8.68181 5.62312 8.43926 5.38036 8.43926 5.08098C8.43926 4.93139 8.49984 4.7958 8.59804 4.69761C8.69623 4.59942 8.83161 4.53883 8.9814 4.53883H11.0842C11.3838 4.53883 11.6263 4.7816 11.6263 5.08098C11.6263 5.23056 11.5657 5.36615 11.4675 5.46434ZM11.4675 3.59431C11.3696 3.6925 11.234 3.75309 11.0842 3.75309H8.9814C8.68181 3.75309 8.43926 3.51032 8.43926 3.21073C8.43926 3.06114 8.49984 2.92556 8.59804 2.82736C8.69602 2.72938 8.83161 2.66858 8.9814 2.66858H11.0842C11.3838 2.66858 11.6263 2.91135 11.6263 3.21073C11.6263 3.36053 11.5657 3.49611 11.4675 3.59431Z"
                                                    fill="#787B8D" />
                                            </svg>
                                        </div>
                                        <span class="text-sm text-gray">Учебное заведение</span>
                                    </div>
                                </div>
                            </NuxtLink>
                            <p class="text-sm text-gray">На Ustoztop.uz с июня 2022</p>
                        </div>
                        <BaseButton state="tertiary" size="large">
                            <div class="w-6 h-6 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.5119 0.736679C17.912 0.843886 18.1494 1.25514 18.0422 1.65524L17.6762 3.02126C17.569 3.42136 17.1577 3.6588 16.7576 3.55159C16.3575 3.44439 16.1201 3.03313 16.2273 2.63303L16.5933 1.26701C16.7005 0.86691 17.1118 0.629473 17.5119 0.736679ZM13.3679 2.43292C12.6951 1.26759 11.0866 1.08579 10.1707 2.07155L3.72214 9.01165C3.94711 9.21571 4.14467 9.45767 4.30468 9.73482L6.80468 14.0649C6.96471 14.3421 7.07548 14.6342 7.13971 14.9311L16.3743 12.8166C17.686 12.5162 18.3328 11.0324 17.66 9.86702L13.3679 2.43292ZM5.34519 14.7242L2.84519 10.3941C2.43097 9.67665 1.51359 9.43084 0.796149 9.84505C0.07871 10.2593 -0.167103 11.1767 0.247111 11.8941L2.74711 16.2242C3.16132 16.9417 4.07871 17.1875 4.79615 16.7733C5.51359 16.359 5.7594 15.4417 5.34519 14.7242ZM11.2076 19.1439L9.30417 15.8471L12.3638 15.1465L13.8057 17.6439C14.2199 18.3613 13.974 19.2787 13.2566 19.6929C12.5392 20.1071 11.6218 19.8613 11.2076 19.1439ZM19.1459 5.56682C18.7458 5.45961 18.3345 5.69705 18.2273 6.09715C18.1201 6.49725 18.3575 6.9085 18.7576 7.01571L20.1236 7.38173C20.5237 7.48894 20.935 7.2515 21.0422 6.8514C21.1494 6.4513 20.912 6.04005 20.5119 5.93284L19.1459 5.56682Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <span>12 объявлений пользователя</span>
                        </BaseButton>
                        <BaseButton state="secondary" size="large">
                            <div class="w-6 h-6 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0.25C9.58579 0.25 9.25 0.585786 9.25 1C9.25 1.41421 9.58579 1.75 10 1.75C10.9521 1.75 11.8948 1.93753 12.7745 2.30187C13.6541 2.66622 14.4533 3.20025 15.1265 3.87348C15.7997 4.5467 16.3338 5.34593 16.6981 6.22554C17.0625 7.10516 17.25 8.04792 17.25 9C17.25 9.41421 17.5858 9.75 18 9.75C18.4142 9.75 18.75 9.41421 18.75 9C18.75 7.85093 18.5237 6.71312 18.0839 5.65152C17.6442 4.58992 16.9997 3.62533 16.1872 2.81282C15.3747 2.0003 14.4101 1.35578 13.3485 0.916054C12.2869 0.476325 11.1491 0.25 10 0.25ZM18 17V15.3541C18 14.5363 17.5021 13.8008 16.7428 13.4971L14.7086 12.6835C13.7429 12.2971 12.6422 12.7156 12.177 13.646L12 14C12 14 9.5 13.5 7.5 11.5C5.5 9.5 5 7 5 7L5.35402 6.82299C6.28438 6.35781 6.70285 5.25714 6.31654 4.29136L5.50289 2.25722C5.19916 1.4979 4.46374 1 3.64593 1H2C0.895431 1 0 1.89543 0 3C0 11.8366 7.16344 19 16 19C17.1046 19 18 18.1046 18 17ZM9.25 5C9.25 4.58579 9.58579 4.25 10 4.25C10.6238 4.25 11.2414 4.37286 11.8177 4.61157C12.394 4.85028 12.9177 5.20016 13.3588 5.64124C13.7998 6.08232 14.1497 6.60596 14.3884 7.18225C14.6271 7.75855 14.75 8.37622 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75C13.5858 9.75 13.25 9.41421 13.25 9C13.25 8.5732 13.1659 8.15059 13.0026 7.75628C12.8393 7.36197 12.5999 7.00369 12.2981 6.7019C11.9963 6.40011 11.638 6.16072 11.2437 5.99739C10.8494 5.83406 10.4268 5.75 10 5.75C9.58579 5.75 9.25 5.41421 9.25 5Z"
                                        fill="white" />
                                </svg>
                            </div>
                            <span>Показать номер</span>
                        </BaseButton>
                    </div>
                    <div class="bg-white rounded-3xl p-4 sm:p-5 flex flex-col gap-[15px] md:w-1/2 xl:w-full">
                        <p class="text-base font-bold">Локация</p>
                        <div class="rounded-3xl overflow-hidden relative aspect-[5/2] lg:aspect-[3.5] xl:aspect-[2.5]">
                            <iframe class="w-full h-full" src="https://yandex.ru/map-widget/v1/-/CDa9QQZ4" frameborder="1"
                                allowfullscreen="true" style="position:relative;"></iframe>
                        </div>
                        <div class="flex gap-[15px] items-center">
                            <div class="bg-bg rounded-full p-3 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 22C15.375 22 21 15.7981 21 10.8889C21 5.97969 16.9706 2 12 2C7.02944 2 3 5.97969 3 10.8889C3 15.7981 8.625 22 12 22ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                        fill="#1977F1" />
                                </svg>
                            </div>
                            <div class="flex flex-col gap-[5px]">
                                <p class="text-sm font-bold">Город Ташкент, Ул.Ислама Каримова</p>
                                <p class="text-xs text-gray">Ориентир: Дружба Народов, бывший. "UzBowling"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div></template>