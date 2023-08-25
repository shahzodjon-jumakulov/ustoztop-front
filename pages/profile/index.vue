<script setup>

const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
// language dropdown
const lang = ref(false)

const login = useState("isLoginOpen")
const signup = useState("isSignupOpen")
</script>

<template>
    <div class="profile flex flex-col justify-between pb-4">
        <div class="flex flex-col gap-4 h-full">
            <!-- avatar, auth -->
            <div class="p-4 bg-white flex flex-col gap-[15px] justify-center items-center">
                <div class="avatar w-[60px] rounded-full">
                    <div class="img border-bg rounded-full border-[1.2px] p-[2.4px] inline-flex">
                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="56" height="56"
                            viewBox="0 0 56 56" fill="none">
                            <rect x="0.400391" y="0.398438" width="55.2" height="55.2" rx="27.6" fill="#F4F6FF" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28.0008 26.2688C31.8115 26.2688 34.9008 23.1795 34.9008 19.3688C34.9008 15.558 31.8115 12.4688 28.0008 12.4688C24.19 12.4688 21.1008 15.558 21.1008 19.3688C21.1008 23.1795 24.19 26.2688 28.0008 26.2688ZM28.0008 43.5188C34.6696 43.5188 40.0758 40.4295 40.0758 36.6187C40.0758 32.808 34.6696 29.7188 28.0008 29.7188C21.3319 29.7188 15.9258 32.808 15.9258 36.6187C15.9258 40.4295 21.3319 43.5188 28.0008 43.5188Z"
                                fill="#787B8D" />
                        </svg>
                    </div>
                </div>
                <div class="auth flex flex-col items-center w-full gap-2.5">
                    <BaseButton @click="login = true" size="medium" type="primary">{{ $t("login.title") }}</BaseButton>
                    <BaseButton @click="signup = true" size="medium" type="tertiary">{{ $t("signup.title") }}</BaseButton>
                </div>
            </div>
            <!-- language with dropdown -->
            <div class="flex flex-col gap-[5px]">
                <div class="group current" :class="{ 'active': lang }">
                    <div class="px-5 py-[13px] rounded-[25px] flex justify-between bg-white border border-bg group-[.active]:border-blue group-[.active]:bg-white"
                        @click="lang = !lang">
                        <div class="flex gap-2.5">
                            <img v-if="locale == 'ru'" src="~/assets/images/ru.svg" alt="ru" width="24" height="24">
                            <img v-else src="~/assets/images/uz.svg" alt="ru" width="24" height="24">
                            <div class="text-base text-black">{{ $t("currLang") }}</div>
                        </div>
                        <div
                            class="w-6 h-6 flex items-center justify-center group-[.active]:rotate-[-180deg] transition-all duration-300 ease-in-out">
                            <img src="~/assets/images/arrow.svg" alt="icon">
                        </div>

                    </div>
                </div>
                <div class="group dropdown" :class="{ 'active': lang }">
                    <div
                        class="px-2.5 py-0 group-[.active]:py-2.5 h-0 group-[.active]:h-[90px] bg-white border-0 group-[.active]:border border-bg2 rounded-[25px] transition-all duration-300 ease-in-out overflow-hidden">
                        <NuxtLink :to="switchLocalePath('uz')" class="group/item option"
                            :class="{ 'active': locale == 'uz' }" @click="lang = false">
                            <div
                                class="flex items-center gap-2.5 h-[34px] rounded-[25px] px-2.5 group-[.active]/item:bg-bg">
                                <img src="~/assets/images/uz.svg" alt="uz" width="18" height="18">
                                <div class="">O‘zbekcha</div>
                            </div>
                        </NuxtLink>
                        <NuxtLink :to="switchLocalePath('ru')" class="group/item option"
                            :class="{ 'active': locale == 'ru' }" @click="lang = false">
                            <div
                                class="flex items-center gap-2.5 h-[34px] rounded-[25px] px-2.5 group-[.active]/item:bg-bg">
                                <img src="~/assets/images/ru.svg" alt="ru" width="18" height="18">
                                <div class="">Русский</div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <!-- links to about and FAQ -->
            <div class="flex flex-col">
                <div class="flex flex-col bg-white rounded-[25px]">
                    <NuxtLink to="#" class="nav flex items-center justify-between py-2.5 px-5 h-[50px] rounded-[25px]">
                        <div class="flex items-center gap-2.5">
                            <div class="flex w-6 h-6 items-center justify-center">
                                <img src="~/assets/images/logo.svg" alt="logo">
                            </div>
                            <div class="text-base">{{ $t("about") }}</div>
                        </div>
                        <img class="rotate-[270deg]" src="~/assets/images/arrow.svg" alt="icon">
                    </NuxtLink>
                    <NuxtLink to="#" class="nav flex items-center justify-between py-2.5 px-5 h-[50px] rounded-[25px]">
                        <div class="flex items-center gap-2.5">
                            <div class="flex w-6 h-6 items-center justify-center">
                                <img src="~/assets/images/help.svg" alt="logo">
                            </div>
                            <div class="text-base">{{ $t("faq") }}</div>
                        </div>
                        <img class="rotate-[270deg]" src="~/assets/images/arrow.svg" alt="icon">
                    </NuxtLink>
                </div>
            </div>
            <!-- terms and rules -->
            <div class="flex flex-col gap-4 text-center mb-4 text-xs mt-auto">
                <NuxtLink to="#" class="hover:text-yellow active:text-[#E4B100]">Условия использования
                </NuxtLink>
                <NuxtLink to="#" class="hover:text-yellow active:text-[#E4B100]">Политика обработки данных
                </NuxtLink>
                <NuxtLink to="https://redmedia.uz/main" class="group flex justify-center gap-[5px] flex-wrap">
                    <span class="group-hover:text-yellow group-active:text-[#E4B100]">Разработано креативным
                        агентством</span>
                    <span class="flex items-center gap-[4.5px]">
                        <img src="~/assets/images/credit.svg" alt="redmedia">
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #E9EFFF;
}

.profile {
    height: calc(100svh - 50px);
}
</style>