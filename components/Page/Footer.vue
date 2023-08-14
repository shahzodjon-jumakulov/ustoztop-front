<script setup>
const route = useRoute()
const localePath = useLocalePath()
const isAuth = useAuthenticated()

const activeNav = ref(null)

function getActiveNav() {
    if (route.name == 'index___ru' || route.name == 'index___uz') {
        activeNav.value = "main"
    } else if (route.name == 'saved___ru' || route.name == 'saved___uz') {
        activeNav.value = "saved"
    } else if (route.name == 'profile___ru' || route.name == 'profile___uz') {
        activeNav.value = "profile"
    } else {
        activeNav.value = null
    }
}

getActiveNav()

watch(() => route.fullPath, () => getActiveNav());
</script>

<template>
    <div class="mt-auto z-10 sticky bottom-0 w-full lg:relative">
        <div class="bg-white shadow-[0_-2px_10px_0_rgba(7,37,77,0.05)] h-[50px] flex lg:hidden mt-4 sm:mt-5 md:mt-6">
            <NuxtLink :to="localePath('/')" :class="{ 'active': activeNav == 'main' }"
                class="group flex flex-col flex-[1_0_0] items-center justify-center gap-0.5">
                <div class="flex items-center justify-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path
                            d="M15.6032 17.0024L18.5596 19.9586C16.8761 21.2518 14.7746 22.0132 12.5036 22.0132C6.98253 22.0132 2.49609 17.5227 2.49609 12.0078H6.61573C6.61573 15.2518 9.2579 17.8938 12.5022 17.8938C13.6406 17.8938 14.7015 17.5694 15.6032 17.0024Z"
                            class="fill-lightGray group-[.active]:fill-blue" />
                        <path
                            d="M22.5062 12.0093C22.5062 14.2859 21.739 16.3916 20.4515 18.075L17.4951 15.1189C18.0621 14.2173 18.3866 13.152 18.3866 12.0078H22.5062V12.0093Z"
                            class="fill-lightGray group-[.active]:fill-blue" />
                        <path
                            d="M12.5017 15.2236C14.2765 15.2236 15.7152 13.7849 15.7152 12.0102C15.7152 10.2355 14.2765 8.79688 12.5017 8.79688C10.7269 8.79688 9.28809 10.2355 9.28809 12.0102C9.28809 13.7849 10.7269 15.2236 12.5017 15.2236Z"
                            class="fill-lightGray group-[.active]:fill-yellow" />
                        <path
                            d="M22.5068 12.0053H18.3871C18.3871 8.75985 15.7464 6.12079 12.5022 6.12079C9.2579 6.12079 6.61719 8.76131 6.61719 12.0053H2.49609C2.49609 6.48757 6.98399 2 12.5022 2C18.0203 2 22.5082 6.48757 22.5082 12.0053H22.5068Z"
                            class="fill-lightGray group-[.active]:fill-blue" />
                    </svg>
                </div>
                <div class="text-lightGray text-[10px] group-[.active]:text-blue group-[.active]:font-bold">{{
                    $t("sticky.main")
                }}</div>
            </NuxtLink>
            <div class="group flex flex-col flex-[1_0_0] items-center justify-center gap-0.5">
                <div class="flex justify-center items-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2 0C0.895431 0 0 0.895431 0 2V6C0 7.10457 0.895431 8 2 8H6C7.10457 8 8 7.10457 8 6V2C8 0.895431 7.10457 0 6 0H2ZM14 0C12.8954 0 12 0.895431 12 2V6C12 7.10457 12.8954 8 14 8H18C19.1046 8 20 7.10457 20 6V2C20 0.895431 19.1046 0 18 0H14ZM0 14C0 12.8954 0.895431 12 2 12H6C7.10457 12 8 12.8954 8 14V18C8 19.1046 7.10457 20 6 20H2C0.895431 20 0 19.1046 0 18V14ZM14 12C12.8954 12 12 12.8954 12 14V18C12 19.1046 12.8954 20 14 20H18C19.1046 20 20 19.1046 20 18V14C20 12.8954 19.1046 12 18 12H14Z"
                            fill="#A7AABC" class="group-[.active]:fill-blue" />
                    </svg>
                </div>
                <div class="text-lightGray text-[10px] group-[.active]:text-blue group-[.active]:font-bold">{{
                    $t("sticky.category") }}</div>
            </div>
            <div v-if="isAuth" class="group flex flex-col flex-[1_0_0] items-center justify-center gap-0.5">
                <div class="flex justify-center items-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V9.25H14C14.4142 9.25 14.75 9.58579 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75H10.75V14C10.75 14.4142 10.4142 14.75 10 14.75C9.58579 14.75 9.25 14.4142 9.25 14V10.75H6C5.58579 10.75 5.25 10.4142 5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H9.25V6C9.25 5.58579 9.58579 5.25 10 5.25Z"
                            fill="#A7AABC" class="group-[.active]:fill-blue" />
                    </svg>
                </div>
                <div class="text-lightGray text-[10px] group-[.active]:text-blue group-[.active]:font-bold">{{
                    $t("sticky.post")
                }}</div>
            </div>
            <NuxtLink :to="localePath('/saved')" :class="{ 'active': activeNav == 'saved' }"
                class="group flex flex-col flex-[1_0_0] items-center justify-center gap-0.5">
                <div class="flex justify-center items-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 5.75V16C0 17.6481 1.88153 18.5889 3.2 17.6L6.8 14.9C7.51111 14.3667 8.48889 14.3667 9.2 14.9L12.8 17.6C14.1185 18.5889 16 17.6481 16 16V5.75H0ZM0 4.25H16V2C16 0.895431 15.1046 0 14 0H2C0.895431 0 0 0.895431 0 2V4.25Z"
                            fill="#A7AABC" class="group-[.active]:fill-blue" />
                    </svg>
                </div>
                <div class="text-lightGray text-[10px] group-[.active]:text-blue group-[.active]:font-bold">{{
                    $t("sticky.saved") }}</div>
            </NuxtLink>
            <NuxtLink :to="localePath('/profile')" :class="{ 'active': activeNav == 'profile' }"
                class="group flex flex-col flex-[1_0_0] items-center justify-center gap-0.5">
                <div class="flex justify-center items-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.49988 8C9.70902 8 11.4999 6.20914 11.4999 4C11.4999 1.79086 9.70902 0 7.49988 0C5.29074 0 3.49988 1.79086 3.49988 4C3.49988 6.20914 5.29074 8 7.49988 8ZM7.49988 18C11.3659 18 14.4999 16.2091 14.4999 14C14.4999 11.7909 11.3659 10 7.49988 10C3.63388 10 0.499878 11.7909 0.499878 14C0.499878 16.2091 3.63388 18 7.49988 18Z"
                            fill="#A7AABC" class="group-[.active]:fill-blue" />
                    </svg>
                </div>
                <div class="text-lightGray text-[10px] group-[.active]:text-blue group-[.active]:font-bold">{{
                    $t("sticky.profile") }}</div>
            </NuxtLink>
        </div>
        <div class="footer hidden lg:flex flex-col gap-10 p-10 lg:bg-blue mt-10">
            <div class="flex flex-col gap-10 w-full">
                <div class="links flex justify-between text-sm text-white">
                    <NuxtLink to="/" class="flex cursor-pointer h-10">
                        <PageLogo color="white" :isAnimated="true" />
                    </NuxtLink>
                    <div class="flex gap-20">
                        <div class="flex flex-col gap-5">
                            <NuxtLink to="#" class="hover:text-yellow active:text-[#E4B100]">О сервисе</NuxtLink>
                            <NuxtLink to="#" class="hover:text-yellow active:text-[#E4B100]">Вопрос-ответ</NuxtLink>
                        </div>
                        <div class="flex flex-col gap-5">
                            <NuxtLink to="#" class="hover:text-yellow active:text-[#E4B100]">Условия использования
                            </NuxtLink>
                            <NuxtLink to="#" class="hover:text-yellow active:text-[#E4B100]">Политика обработки данных
                            </NuxtLink>
                        </div>
                        <div class="flex gap-5">
                            <NuxtLink to="#"
                                class="bg-white hover:bg-yellow flex justify-center items-center h-[30px] w-[30px] rounded-full">
                                <img src="~/assets/images/telegram.svg" alt="telegram">
                            </NuxtLink>
                            <NuxtLink to="#"
                                class="bg-white hover:bg-yellow flex justify-center items-center h-[30px] w-[30px] rounded-full">
                                <img src="~/assets/images/instagram.svg" alt="instagram">
                            </NuxtLink>
                            <NuxtLink to="#"
                                class="bg-white hover:bg-yellow flex justify-center items-center h-[30px] w-[30px] rounded-full">
                                <img src="~/assets/images/facebook.svg" alt="facebook">
                            </NuxtLink>
                            <NuxtLink to="#"
                                class="group bg-white hover:bg-yellow flex justify-center items-center h-[30px] w-[30px] rounded-full">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.3442 1.87364C17.1484 1.13727 16.5689 0.556364 15.8317 0.357273C14.4988 1.30047e-07 9.15059 0 9.15059 0C9.15059 0 3.80514 1.30047e-07 2.46945 0.357273C1.73496 0.553636 1.15553 1.13455 0.956949 1.87364C0.600586 3.21 0.600586 6 0.600586 6C0.600586 6 0.600586 8.79 0.956949 10.1264C1.15281 10.8627 1.73224 11.4436 2.46945 11.6427C3.80514 12 9.15059 12 9.15059 12C9.15059 12 14.4988 12 15.8317 11.6427C16.5662 11.4464 17.1456 10.8655 17.3442 10.1264C17.7006 8.79 17.7006 6 17.7006 6C17.7006 6 17.7006 3.21 17.3442 1.87364Z"
                                        fill="#1977F1" />
                                    <path d="M7.44222 8.57182L11.8845 6L7.44222 3.42818V8.57182Z"
                                        class="fill-white group-hover:fill-yellow" />
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-5 text-white">
                <hr class="border border-lightBlue" />
                <div class="flex justify-between text-xs">
                    <span>©2023 Ustoztop. Все права защищены</span>
                    <NuxtLink to="https://redmedia.uz/main" class="group flex items-center gap-2.5">
                        <span class="group-hover:text-yellow group-active:text-[#E4B100]">Разработано креативным
                            агентством</span>
                        <span class="flex items-center gap-[4.5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path
                                    d="M16.2369 2.1097C14.5387 0.41764 12.3308 0 9.34666 0C6.36253 0 4.1538 0.413034 2.45637 2.1097C0.758945 3.80483 0.34668 6.01587 0.34668 9C0.34668 11.9841 0.758177 14.1944 2.45637 15.8903C4.1538 17.587 6.35946 18 9.34666 18C12.3339 18 14.5395 17.587 16.2369 15.8903C17.9351 14.1936 18.3466 11.9841 18.3466 9C18.3466 6.01587 17.939 3.8056 16.2369 2.1097Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M7.43889 8.53919C7.0819 8.1822 6.99515 7.71773 6.99515 7.08973C6.99515 6.46174 7.0819 5.99727 7.43889 5.64104C7.79588 5.28405 8.25958 5.1973 8.88758 5.1973C9.51557 5.1973 9.97927 5.28482 10.337 5.64104C10.6948 5.99727 10.7808 6.46174 10.7808 7.08973C10.7808 7.71773 10.694 8.1822 10.337 8.53919C9.98004 8.89618 9.51634 8.98294 8.88758 8.98294C8.81695 8.98294 8.74785 8.9814 8.68106 8.9791L10.3831 10.6811C10.9121 10.556 11.3596 10.3318 11.7443 9.94719C12.4483 9.24396 12.6187 8.32807 12.6187 7.0905C12.6187 5.85293 12.4498 4.93704 11.7443 4.23381C11.0403 3.53288 10.1251 3.35938 8.88758 3.35938C7.65001 3.35938 6.73489 3.53058 6.03166 4.23381C5.32766 4.93704 5.15723 5.85293 5.15723 7.0905V14.6395H6.99592V10.6965L10.9389 14.6395H13.5392L7.43966 8.53996L7.43889 8.53919Z"
                                    fill="#1977F1" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="12" viewBox="0 0 64 12" fill="none">
                                <path
                                    d="M3.23889 7.42522H2.84505V11.2991H0.84668V1.85156H4.70754C6.73278 1.85156 8.01104 3.0208 8.01104 4.63839C8.01104 6.0794 6.99151 7.15345 5.3601 7.38453L8.1738 11.2991H5.93052L3.23889 7.42522ZM2.84505 5.99803H4.65303C5.53668 5.99803 6.03953 5.53586 6.03953 4.81574C6.03953 4.09561 5.53668 3.61963 4.65303 3.61963H2.84505V5.99879V5.99803Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M12.3379 9.80036C13.2216 9.80036 13.6699 9.4879 13.9824 8.91672L15.5186 9.93625C14.9612 10.7516 14.0369 11.4725 12.2834 11.4725C9.95877 11.4725 8.4502 9.85487 8.4502 7.72061C8.4502 5.58634 10.0947 3.96875 12.1475 3.96875C14.4584 3.96875 15.8311 5.77673 15.8311 7.5709C15.8311 7.88336 15.8172 8.15514 15.7904 8.33248H10.4209C10.652 9.27064 11.386 9.80036 12.3379 9.80036ZM13.9417 7.01353C13.7513 6.07538 13.1264 5.49114 12.202 5.49114C11.2777 5.49114 10.5983 6.03469 10.3941 7.01353H13.9417Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M24.0017 1.36014V11.2968H22.1393V10.5628C21.6088 11.134 20.8618 11.4733 19.9374 11.4733C17.8715 11.4733 16.376 9.85575 16.376 7.72148C16.376 5.58722 17.8308 3.96963 19.8829 3.96963C20.7389 3.96963 21.4598 4.25522 21.9895 4.75808V1.35938H24.0017V1.36014ZM22.0717 7.72225C22.0717 6.55301 21.3239 5.73769 20.223 5.73769C19.1221 5.73769 18.3744 6.58065 18.3744 7.72225C18.3744 8.86385 19.149 9.69299 20.223 9.69299C21.2971 9.69299 22.0717 8.89072 22.0717 7.72225Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M33.857 11.2991L33.381 4.7881L31.342 10.9867H29.6699L27.6308 4.77428L27.1418 11.2991H25.2793L25.9587 1.85156H27.8481V1.86538L28.3103 1.85156L30.5121 8.52613L32.7008 1.85156L33.163 1.86538V1.85156H35.0386L35.7318 11.2991H33.8563H33.857Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M40.4473 9.80036C41.331 9.80036 41.7793 9.4879 42.0918 8.91672L43.628 9.93625C43.0706 10.7516 42.1463 11.4725 40.3928 11.4725C38.0681 11.4725 36.5596 9.85487 36.5596 7.72061C36.5596 5.58634 38.204 3.96875 40.2569 3.96875C42.5677 3.96875 43.9404 5.77673 43.9404 7.5709C43.9404 7.88336 43.9266 8.15514 43.8997 8.33248H38.5303C38.7614 9.27064 39.4953 9.80036 40.4473 9.80036ZM42.0511 7.01353C41.8607 6.07538 41.2358 5.49114 40.3114 5.49114C39.3871 5.49114 38.7077 6.03469 38.5034 7.01353H42.0511Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M52.1111 1.36014V11.2968H50.2486V10.5628C49.7181 11.134 48.9711 11.4733 48.0468 11.4733C45.9809 11.4733 44.4854 9.85575 44.4854 7.72148C44.4854 5.58722 45.9402 3.96963 47.9923 3.96963C48.8483 3.96963 49.5692 4.25522 50.0989 4.75808V1.35938H52.1111V1.36014ZM50.1811 7.72225C50.1811 6.55301 49.4333 5.73769 48.3324 5.73769C47.2315 5.73769 46.4837 6.58065 46.4837 7.72225C46.4837 8.86385 47.2584 9.69299 48.3324 9.69299C49.4064 9.69299 50.1811 8.89072 50.1811 7.72225Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M53.1602 1.80874C53.1602 1.0748 53.7444 0.53125 54.4791 0.53125C55.2138 0.53125 55.7842 1.0748 55.7842 1.80874C55.7842 2.54268 55.213 3.08623 54.4791 3.08623C53.7452 3.08623 53.1602 2.55573 53.1602 1.80874ZM53.4596 4.1334H55.4718V11.297H53.4596V4.1334Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                                <path
                                    d="M63.9998 4.13521V11.2988H62.1373V10.5104C61.6206 11.1222 60.8729 11.4754 59.9355 11.4754C57.8695 11.4754 56.374 9.8578 56.374 7.72354C56.374 5.58927 57.8695 4.09375 59.9355 4.09375C60.8736 4.09375 61.6214 4.42003 62.1373 5.00427V4.13444H63.9998V4.13521ZM62.0697 7.72354C62.0697 6.5543 61.322 5.73898 60.2211 5.73898C59.1202 5.73898 58.3724 6.58194 58.3724 7.72354C58.3724 8.86514 59.147 9.69428 60.2211 9.69428C61.2951 9.69428 62.0697 8.89201 62.0697 7.72354Z"
                                    class="fill-white group-hover:fill-yellow group-active:fill-[#E4B100]" />
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

