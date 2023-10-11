<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

// language dropdown
const lang = ref(false)

const breadCrumb = [
    {
        name: "Мой профиль",
        link: null,
    },
]
console.log(useRoute())
const activeTab = ref(0)
if (useRoute().name == 'profile-wallet___uz' || useRoute().name == 'profile-wallet___ru') {
    activeTab.value = 1;
} else if (useRoute().name == 'profile-settings___uz' || useRoute().name == 'profile-settings___ru') {
    activeTab.value = 2;
}

const login = useState("isLoginOpen")
const signup = useState("isSignupOpen")

// user info
const userInfo = useUserInfo();
const token = useCookie("token");
if (token.value && !userInfo.value) {
    await usePersonalData(locale.value);
}

const isAuthenticated = useAuthenticated();

// logout
const isLogout = ref(false);
function handleLogout() {
    useLogOut();
    userInfo.value = null;
    navigateTo(localePath("/"))
}
const widthOfNav = ref(0)
const leftOfNav = ref(0)

const handleSelected = () => {
    setTimeout(() => {
        const el = document.getElementById("stick");
        const activeEl = document.getElementsByClassName("group active")[0]
        if (activeEl) {
            widthOfNav.value = activeEl.offsetWidth
            leftOfNav.value = activeEl.offsetLeft
            el.style.width = `${widthOfNav.value}px`
            el.style.left = `${leftOfNav.value}px`
        }
    }, 1);
}

watch(activeTab, () => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    handleSelected()
})

onMounted(() => {
    handleSelected();
    window.addEventListener('resize', () => { handleSelected() }, true);
})
</script>

<template>
    <div class="profile flex flex-col justify-between pb-4 flex-grow">
        <div class="flex flex-col gap-4 sm:gap-5 h-full flex-grow">
            <div class="bg-white py-4 sm:py-5 lg:py-0">
                <div class="container">
                    <BreadCrumb :navs="breadCrumb" class="mb-5 max-lg:hidden" />
                    <!-- avatar, auth -->
                    <div v-if="!isAuthenticated" class="flex flex-col gap-[15px] justify-center items-center">
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
                            <BaseButton @click="login = true" size="medium" state="primary">{{ $t("login.title") }}
                            </BaseButton>
                            <BaseButton @click="signup = true" size="medium" state="tertiary">{{ $t("signup.title") }}
                            </BaseButton>
                        </div>
                    </div>
                    <div v-else class="flex flex-col gap-2.5 justify-center">
                        <div class="flex items-center gap-[15px]">
                            <div class="flex gap-2.5 items-center">
                                <div class="border-bg rounded-full border-[1.2px] lg:border-2 p-[1.2px] lg:p-0.5 inline-flex">
                                    <svg v-if="!userInfo.profile_pic" class="inline-block w-[55.2px] h-[55.2px]"
                                        xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92"
                                        fill="none">
                                        <rect width="92" height="92" rx="46" fill="#F4F6FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M46.0312 42.3214C53.2997 42.3214 59.192 36.4292 59.192 29.1607C59.192 21.8923 53.2997 16 46.0312 16C38.7628 16 32.8705 21.8923 32.8705 29.1607C32.8705 36.4292 38.7628 42.3214 46.0312 42.3214ZM46.0312 75.2232C58.7511 75.2232 69.0625 69.331 69.0625 62.0625C69.0625 54.794 58.7511 48.9018 46.0312 48.9018C33.3114 48.9018 23 54.794 23 62.0625C23 69.331 33.3114 75.2232 46.0312 75.2232Z"
                                            fill="#787B8D" />
                                    </svg>
                                    <img v-else :src="userInfo.profile_pic" alt="avatar">
                                </div>
                                <div class="flex flex-col justify-center gap-[5px]">
                                    <h1 class="text-lg text-black font-bold">
                                        {{ userInfo.profile.first_name || userInfo.profile.last_name ?
                                            `${userInfo.profile.first_name} ${userInfo.profile.last_name}` : 'Ustoztop username'
                                        }}
                                    </h1>
                                    <div class="flex gap-[5px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <path v-if="userInfo.role == 'TUTOR'" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z"
                                                fill="#787B8D" />
                                            <path v-else-if="userInfo.role == 'COURCE_CENTER'" fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M16.2268 15.4157H14.7808V4.39165C14.7808 2.79467 13.4862 1.5 11.8894 1.5H6.10608C4.5091 1.5 3.21464 2.79467 3.21464 4.39165V15.4157H1.76871C1.46933 15.4157 1.22656 15.6585 1.22656 15.9579C1.22656 16.2572 1.46933 16.5 1.76871 16.5H16.2268C16.5261 16.5 16.7689 16.2572 16.7689 15.9579C16.7689 15.6585 16.5261 15.4157 16.2268 15.4157ZM5.52968 3.82736C5.62787 3.72938 5.76346 3.66858 5.91325 3.66858H8.01603C8.31541 3.66858 8.55817 3.91135 8.55817 4.21073C8.55817 4.36053 8.49758 4.49611 8.39939 4.59431C8.3012 4.6925 8.16582 4.75309 8.01603 4.75309H5.91325C5.61366 4.75309 5.3709 4.51032 5.3709 4.21073C5.3709 4.06114 5.43148 3.92556 5.52968 3.82736ZM5.52968 5.69761C5.62787 5.59963 5.76346 5.53883 5.91325 5.53883H8.01603C8.31541 5.53883 8.55817 5.7816 8.55817 6.08098C8.55817 6.23056 8.49758 6.36615 8.39939 6.46434C8.3012 6.56233 8.16582 6.62312 8.01603 6.62312H5.91325C5.61366 6.62312 5.3709 6.38036 5.3709 6.08098C5.3709 5.93139 5.43148 5.7958 5.52968 5.69761ZM5.3709 7.95102C5.3709 7.80122 5.43148 7.66584 5.52968 7.56765C5.62787 7.46946 5.76346 7.40887 5.91325 7.40887H8.01603C8.31541 7.40887 8.55817 7.65163 8.55817 7.95102C8.55817 8.10081 8.49758 8.2364 8.39939 8.33438C8.3012 8.43258 8.16582 8.49316 8.01603 8.49316H5.91325C5.61366 8.49316 5.3709 8.25061 5.3709 7.95102ZM11.1663 15.4157H6.82895V12.3433C6.82895 11.1456 7.8 10.1748 8.99774 10.1748C10.1955 10.1748 11.1663 11.1456 11.1663 12.3433V15.4157ZM12.4656 8.33438C12.3676 8.43258 12.232 8.49316 12.0822 8.49316H9.97945C9.67986 8.49316 9.4373 8.25061 9.4373 7.95102C9.4373 7.80122 9.49789 7.66584 9.59608 7.56765C9.69407 7.46946 9.82965 7.40887 9.97945 7.40887H12.0822C12.3818 7.40887 12.6244 7.65163 12.6244 7.95102C12.6244 8.10081 12.5638 8.2364 12.4656 8.33438ZM12.4656 6.46434C12.3676 6.56233 12.232 6.62312 12.0822 6.62312H9.97945C9.67986 6.62312 9.4373 6.38036 9.4373 6.08098C9.4373 5.93139 9.49789 5.7958 9.59608 5.69761C9.69427 5.59942 9.82965 5.53883 9.97945 5.53883H12.0822C12.3818 5.53883 12.6244 5.7816 12.6244 6.08098C12.6244 6.23056 12.5638 6.36615 12.4656 6.46434ZM12.4656 4.59431C12.3676 4.6925 12.232 4.75309 12.0822 4.75309H9.97945C9.67986 4.75309 9.4373 4.51032 9.4373 4.21073C9.4373 4.06114 9.49789 3.92556 9.59608 3.82736C9.69407 3.72938 9.82965 3.66858 9.97945 3.66858H12.0822C12.3818 3.66858 12.6244 3.91135 12.6244 4.21073C12.6244 4.36053 12.5638 4.49611 12.4656 4.59431Z"
                                                fill="#787B8D" />
                                        </svg>
                                        <p class="text-sm text-gray">
                                            {{ userInfo.role == 'TUTOR' ? $t("profile.tutor") : $t("profile.center") }}</p>
                                    </div>
                                </div>
                            </div>
                            <NuxtLink :to="localePath('/profile/settings')"
                                class="group/icon w-6 h-6 flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.75 5C1.75 3.20507 3.20507 1.75 5 1.75H11C11.4142 1.75 11.75 1.41421 11.75 1C11.75 0.585786 11.4142 0.25 11 0.25H5C2.37665 0.25 0.25 2.37665 0.25 5V17C0.25 19.6234 2.37665 21.75 5 21.75H17C19.6234 21.75 21.75 19.6234 21.75 17V11C21.75 10.5858 21.4142 10.25 21 10.25C20.5858 10.25 20.25 10.5858 20.25 11V17C20.25 18.7949 18.7949 20.25 17 20.25H5C3.20507 20.25 1.75 18.7949 1.75 17V5ZM15.419 1.67708C16.3218 0.774305 17.7855 0.774305 18.6883 1.67708L20.3229 3.31171C21.2257 4.21449 21.2257 5.67818 20.3229 6.58096L18.8736 8.03028C18.7598 7.97394 18.6401 7.91302 18.516 7.84767C17.6806 7.40786 16.6892 6.79057 15.9493 6.05069C15.2095 5.31082 14.5922 4.31945 14.1524 3.48403C14.087 3.35989 14.0261 3.24018 13.9697 3.12639L15.419 1.67708ZM14.8887 7.11135C15.7642 7.98687 16.8777 8.67594 17.7595 9.14441L12.06 14.8438C11.7064 15.1975 11.2475 15.4269 10.7523 15.4977L7.31963 15.9881C6.5568 16.097 5.90295 15.4432 6.01193 14.6804L6.50231 11.2477C6.57305 10.7525 6.80248 10.2936 7.15616 9.93996L12.8556 4.24053C13.3241 5.12234 14.0131 6.23582 14.8887 7.11135Z"
                                        class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-blue" />
                                </svg>
                            </NuxtLink>
                            <div class="group/blue flex gap-[5px] items-center cursor-pointer max-lg:hidden ml-auto">
                                <div class="h-[18px] w-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.2501 0.9375C13.9394 0.9375 13.6876 1.18934 13.6876 1.5C13.6876 1.81066 13.9394 2.0625 14.2501 2.0625H15.0845C12.2761 4.30212 10.1391 5.72041 8.1073 6.6628C6.00922 7.63591 3.99654 8.11393 1.42876 8.44204C1.12061 8.48141 0.902722 8.76314 0.942098 9.0713C0.981474 9.37945 1.2632 9.59734 1.57136 9.55796C4.21018 9.22078 6.34442 8.72056 8.58065 7.68337C10.7672 6.66925 13.0253 5.15371 15.9376 2.82083V3.75C15.9376 4.06066 16.1894 4.3125 16.5001 4.3125C16.8107 4.3125 17.0626 4.06066 17.0626 3.75V2.25C17.0626 1.52513 16.4749 0.9375 15.7501 0.9375H14.2501ZM16.5 7.5C16.5 6.67157 15.8284 6 15 6C14.1716 6 13.5 6.67157 13.5 7.5V15C13.5 15.8284 14.1716 16.5 15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V7.5ZM4.5 13.5C4.5 12.6716 3.82843 12 3 12C2.17157 12 1.5 12.6716 1.5 13.5L1.5 15C1.5 15.8284 2.17157 16.5 3 16.5C3.82843 16.5 4.5 15.8284 4.5 15L4.5 13.5ZM9 9C9.82843 9 10.5 9.67157 10.5 10.5V15C10.5 15.8284 9.82843 16.5 9 16.5C8.17157 16.5 7.5 15.8284 7.5 15V10.5C7.5 9.67157 8.17157 9 9 9Z"
                                            class="fill-blue group-hover/blue:fill-pressed group-active/blue:fill-doublePressed" />
                                    </svg>
                                </div>
                                <p
                                    class="text-blue text-sm group-hover/blue:text-pressed group-active/blue:text-doublePressed">
                                    {{ $t("profile.stats") }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-between sm:items-center">
                            <p class="text-xs text-gray">На Ustoztop.uz с июня 2022</p>
                            <div class="group/blue flex gap-[5px] items-center cursor-pointer lg:hidden">
                                <div class="h-[18px] w-[18px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.2501 0.9375C13.9394 0.9375 13.6876 1.18934 13.6876 1.5C13.6876 1.81066 13.9394 2.0625 14.2501 2.0625H15.0845C12.2761 4.30212 10.1391 5.72041 8.1073 6.6628C6.00922 7.63591 3.99654 8.11393 1.42876 8.44204C1.12061 8.48141 0.902722 8.76314 0.942098 9.0713C0.981474 9.37945 1.2632 9.59734 1.57136 9.55796C4.21018 9.22078 6.34442 8.72056 8.58065 7.68337C10.7672 6.66925 13.0253 5.15371 15.9376 2.82083V3.75C15.9376 4.06066 16.1894 4.3125 16.5001 4.3125C16.8107 4.3125 17.0626 4.06066 17.0626 3.75V2.25C17.0626 1.52513 16.4749 0.9375 15.7501 0.9375H14.2501ZM16.5 7.5C16.5 6.67157 15.8284 6 15 6C14.1716 6 13.5 6.67157 13.5 7.5V15C13.5 15.8284 14.1716 16.5 15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V7.5ZM4.5 13.5C4.5 12.6716 3.82843 12 3 12C2.17157 12 1.5 12.6716 1.5 13.5L1.5 15C1.5 15.8284 2.17157 16.5 3 16.5C3.82843 16.5 4.5 15.8284 4.5 15L4.5 13.5ZM9 9C9.82843 9 10.5 9.67157 10.5 10.5V15C10.5 15.8284 9.82843 16.5 9 16.5C8.17157 16.5 7.5 15.8284 7.5 15V10.5C7.5 9.67157 8.17157 9 9 9Z"
                                            class="fill-blue group-hover/blue:fill-pressed group-active/blue:fill-doublePressed" />
                                    </svg>
                                </div>
                                <p
                                    class="text-blue text-sm group-hover/blue:text-pressed group-active/blue:text-doublePressed">
                                    {{ $t("profile.stats") }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative max-lg:hidden">
                        <NuxtLink :to="activeTab != 0 ? localePath('/profile/my-ads') : ''"
                            class="group p-5 flex gap-[5px] items-center cursor-pointer"
                            :class="{ 'active': activeTab == 0 }" @click="activeTab = 0">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.0114 0.740586C18.4115 0.847792 18.6489 1.25904 18.5417 1.65914L18.1757 3.02517C18.0685 3.42527 17.6572 3.66271 17.2571 3.5555C16.857 3.44829 16.6196 3.03704 16.7268 2.63694L17.0928 1.27092C17.2 0.870816 17.6113 0.633379 18.0114 0.740586ZM13.8674 2.43682C13.1946 1.27149 11.5861 1.08969 10.6702 2.07545L4.22165 9.01556C4.44662 9.21961 4.64418 9.46157 4.80419 9.73872L7.30419 14.0689C7.46422 14.346 7.57499 14.6381 7.63922 14.935L16.8738 12.8205C18.1855 12.5201 18.8323 11.0363 18.1595 9.87093L13.8674 2.43682ZM5.8447 14.7281L3.3447 10.398C2.93049 9.68056 2.0131 9.43474 1.29566 9.84896C0.578222 10.2632 0.332409 11.1806 0.746622 11.898L3.24662 16.2281C3.66084 16.9456 4.57822 17.1914 5.29566 16.7772C6.0131 16.3629 6.25891 15.4456 5.8447 14.7281ZM11.7071 19.1478L9.80368 15.851L12.8633 15.1504L14.3052 17.6478C14.7194 18.3652 14.4736 19.2826 13.7561 19.6968C13.0387 20.111 12.1213 19.8652 11.7071 19.1478ZM19.6454 5.57072C19.2453 5.46352 18.834 5.70095 18.7268 6.10105C18.6196 6.50115 18.857 6.91241 19.2571 7.01961L20.6232 7.38564C21.0233 7.49285 21.4345 7.25541 21.5417 6.85531C21.6489 6.45521 21.4115 6.04396 21.0114 5.93675L19.6454 5.57072Z"
                                        class="fill-icon group-[.active]:fill-blue group-hover:fill-blue group-active:fill-blue" />
                                </svg>
                            </div>
                            <span
                                class="text-base text-gray group-[.active]:font-bold group-[.active]:text-black group-hover:text-blue group-active:text-pressed">
                                Мои объявления
                            </span>
                        </NuxtLink>
                        <NuxtLink :to="localePath('/profile/wallet')"
                            class="group p-5 flex gap-[5px] items-center cursor-pointer"
                            :class="{ 'active': activeTab == 1 }" @click="activeTab = 1">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0H4.00001C2.32132 0 0.884159 1.03408 0.290771 2.5H13.7093C13.1159 1.03408 11.6787 0 10 0ZM20 14H16C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10H20V14ZM0 4H16C18.2091 4 20 5.79086 20 8V8.5H16C14.067 8.5 12.5 10.067 12.5 12C12.5 13.933 14.067 15.5 16 15.5H20V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                                        class="fill-icon group-[.active]:fill-blue group-hover:fill-blue group-active:fill-blue" />
                                </svg>
                            </div>
                            <span
                                class="text-base text-gray group-[.active]:font-bold group-[.active]:text-black group-hover:text-blue group-active:text-pressed">
                                Кошелёк: 0 сум
                            </span>
                        </NuxtLink>
                        <NuxtLink :to="localePath('/profile/settings')"
                            class="group p-5 flex gap-[5px] items-center cursor-pointer"
                            :class="{ 'active': activeTab == 2 }" @click="activeTab = 2">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.0455 3H12.9545C14.0089 3 14.8636 3.80589 14.8636 4.8C14.8636 5.93762 16.0808 6.66088 17.08 6.11698L17.1815 6.06174C18.0946 5.56468 19.2622 5.85966 19.7894 6.72058L20.7439 8.27943C21.2711 9.14036 20.9582 10.2412 20.0451 10.7383C19.0455 11.2824 19.0455 12.7176 20.0451 13.2617C20.9582 13.7588 21.2711 14.8596 20.7439 15.7206L19.7894 17.2794C19.2622 18.1403 18.0946 18.4353 17.1815 17.9383L17.08 17.883C16.0808 17.3391 14.8636 18.0624 14.8636 19.2C14.8636 20.1941 14.0089 21 12.9545 21H11.0455C9.99109 21 9.13635 20.1941 9.13635 19.2C9.13635 18.0624 7.91917 17.3391 6.92 17.883L6.81851 17.9383C5.90541 18.4353 4.73782 18.1404 4.21064 17.2794L3.25609 15.7206C2.72891 14.8597 3.04176 13.7588 3.95487 13.2617C4.95451 12.7176 4.95451 11.2824 3.95487 10.7383C3.04176 10.2412 2.72891 9.14034 3.25609 8.27942L4.21064 6.72057C4.73782 5.85964 5.90541 5.56467 6.81852 6.06172L6.92 6.11697C7.91917 6.66087 9.13635 5.93761 9.13635 4.8C9.13635 3.80589 9.99109 3 11.0455 3ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z"
                                        class="fill-icon group-[.active]:fill-blue group-hover:fill-blue group-active:fill-blue" />
                                </svg>
                            </div>
                            <span
                                class="text-base text-gray group-[.active]:font-bold group-[.active]:text-black group-hover:text-blue group-active:text-pressed">
                                Настройки профиля
                            </span>
                        </NuxtLink>
                        <div class="h-[3px] bg-blue w-[200px] rounded-full absolute bottom-0 left-0 transition-all duration-300 ease-in-out"
                            id="stick"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 sm:mx-4 lg:hidden flex-grow">
                <!-- options -->
                <div v-if="isAuthenticated" class="flex flex-col bg-white rounded-3xl">
                    <NuxtLink :to="localePath('/profile/my-ads')"
                        class="flex items-center justify-between px-5 y-2.5 rounded-[200px] hover:bg-bg2 active:bg-[#D2D7E5] h-[50px] cursor-pointer">
                        <div class="flex gap-2.5 items-center">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.0119 0.740586C18.412 0.847792 18.6494 1.25904 18.5422 1.65914L18.1762 3.02517C18.069 3.42527 17.6577 3.66271 17.2576 3.5555C16.8575 3.44829 16.6201 3.03704 16.7273 2.63694L17.0933 1.27092C17.2005 0.870816 17.6118 0.633379 18.0119 0.740586ZM13.8679 2.43682C13.1951 1.27149 11.5866 1.08969 10.6707 2.07545L4.22214 9.01556C4.44711 9.21961 4.64467 9.46157 4.80468 9.73872L7.30468 14.0689C7.46471 14.346 7.57548 14.6381 7.63971 14.935L16.8743 12.8205C18.186 12.5201 18.8328 11.0363 18.16 9.87093L13.8679 2.43682ZM5.84519 14.7281L3.34519 10.398C2.93097 9.68056 2.01359 9.43474 1.29615 9.84896C0.57871 10.2632 0.332897 11.1806 0.747111 11.898L3.24711 16.2281C3.66132 16.9456 4.57871 17.1914 5.29615 16.7772C6.01359 16.3629 6.2594 15.4456 5.84519 14.7281ZM11.7076 19.1478L9.80417 15.851L12.8638 15.1504L14.3057 17.6478C14.7199 18.3652 14.474 19.2826 13.7566 19.6968C13.0392 20.111 12.1218 19.8652 11.7076 19.1478ZM19.6459 5.57072C19.2458 5.46352 18.8345 5.70095 18.7273 6.10105C18.6201 6.50115 18.8575 6.91241 19.2576 7.01961L20.6236 7.38564C21.0237 7.49285 21.435 7.25541 21.5422 6.85531C21.6494 6.45521 21.412 6.04396 21.0119 5.93675L19.6459 5.57072Z"
                                        fill="#787B8D" />
                                </svg>
                            </div>
                            <div class="flex gap-[5px] items-center">
                                Мои объявления
                                <BaseCount count="19" />
                            </div>
                        </div>
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="localePath('/profile/wallet')"
                        class="flex items-center justify-between px-5 y-2.5 rounded-[200px] hover:bg-bg2 active:bg-[#D2D7E5] h-[50px] cursor-pointer">
                        <div class="flex gap-2.5 items-center">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0H4.00001C2.32132 0 0.884159 1.03408 0.290771 2.5H13.7093C13.1159 1.03408 11.6787 0 10 0ZM20 14H16C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10H20V14ZM0 4H16C18.2091 4 20 5.79086 20 8V8.5H16C14.067 8.5 12.5 10.067 12.5 12C12.5 13.933 14.067 15.5 16 15.5H20V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                                        fill="#787B8D" />
                                </svg>
                            </div>
                            <div class="flex gap-[5px] items-center">
                                Кошелёк: 0 сум
                            </div>
                        </div>
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="localePath('/profile/settings')"
                        class="flex items-center justify-between px-5 y-2.5 rounded-[200px] hover:bg-bg2 active:bg-[#D2D7E5] h-[50px] cursor-pointer">
                        <div class="flex gap-2.5 items-center">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.0455 3H12.9545C14.0089 3 14.8636 3.80589 14.8636 4.8C14.8636 5.93762 16.0808 6.66088 17.08 6.11698L17.1815 6.06174C18.0946 5.56468 19.2622 5.85966 19.7894 6.72058L20.7439 8.27943C21.2711 9.14036 20.9582 10.2412 20.0451 10.7383C19.0455 11.2824 19.0455 12.7176 20.0451 13.2617C20.9582 13.7588 21.2711 14.8596 20.7439 15.7206L19.7894 17.2794C19.2622 18.1403 18.0946 18.4353 17.1815 17.9383L17.08 17.883C16.0808 17.3391 14.8636 18.0624 14.8636 19.2C14.8636 20.1941 14.0089 21 12.9545 21H11.0455C9.99109 21 9.13635 20.1941 9.13635 19.2C9.13635 18.0624 7.91917 17.3391 6.92 17.883L6.81851 17.9383C5.90541 18.4353 4.73782 18.1404 4.21064 17.2794L3.25609 15.7206C2.72891 14.8597 3.04176 13.7588 3.95487 13.2617C4.95451 12.7176 4.95451 11.2824 3.95487 10.7383C3.04176 10.2412 2.72891 9.14034 3.25609 8.27942L4.21064 6.72057C4.73782 5.85964 5.90541 5.56467 6.81852 6.06172L6.92 6.11697C7.91917 6.66087 9.13635 5.93761 9.13635 4.8C9.13635 3.80589 9.99109 3 11.0455 3ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z"
                                        fill="#787B8D" />
                                </svg>
                            </div>
                            <div class="flex gap-[5px] items-center">
                                Настройки профиля
                            </div>
                        </div>
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </NuxtLink>
                </div>
                <!-- language with dropdown -->
                <div class="flex flex-col gap-[5px]">
                    <div class="group current" :class="{ 'active': lang }">
                        <div class="px-5 py-[13px] rounded-[25px] flex justify-between bg-white border border-bg group-[.active]:border-blue group-[.active]:bg-white  group-[.active]:hover:shadow-[0px_0px_0px_4px_rgba(25,119,241,0.20)] cursor-pointer group-hover:bg-bg2 group-active:bg-[#D2D7E5]"
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
                                    class="flex items-center gap-2.5 h-[34px] rounded-[25px] px-2.5 group-[.active]/item:bg-bg group-[.active]/item:text-blue group-[.active]/item:font-bold group-hover/item:bg-bg">
                                    <img src="~/assets/images/uz.svg" alt="uz" width="18" height="18">
                                    <div class="">O‘zbekcha</div>
                                </div>
                            </NuxtLink>
                            <NuxtLink :to="switchLocalePath('ru')" class="group/item option"
                                :class="{ 'active': locale == 'ru' }" @click="lang = false">
                                <div
                                    class="flex items-center gap-2.5 h-[34px] rounded-[25px] px-2.5 group-[.active]/item:bg-bg group-[.active]/item:text-blue group-[.active]/item:font-bold group-hover/item:bg-bg">
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
                        <NuxtLink to="#"
                            class="nav flex items-center justify-between py-2.5 px-5 h-[50px] rounded-[25px] cursor-pointer hover:bg-bg2 active:bg-[#D2D7E5]">
                            <div class="flex items-center gap-2.5">
                                <div class="flex w-6 h-6 items-center justify-center">
                                    <img src="~/assets/images/logo.svg" alt="logo">
                                </div>
                                <div class="text-base">{{ $t("about") }}</div>
                            </div>
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="#"
                            class="nav flex items-center justify-between py-2.5 px-5 h-[50px] rounded-[25px] cursor-pointer hover:bg-bg2 active:bg-[#D2D7E5]">
                            <div class="flex items-center gap-2.5">
                                <div class="flex w-6 h-6 items-center justify-center">
                                    <img src="~/assets/images/help.svg" alt="logo">
                                </div>
                                <div class="text-base">{{ $t("faq") }}</div>
                            </div>
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <!-- logout -->
                <div v-if="isAuthenticated" @click="isLogout = true"
                    class="bg-white px-5 py-2.5 flex justify-between items-center rounded-[200px] cursor-pointer hover:bg-bg2 active:bg-[#D2D7E5] h-[50px]">
                    <div class="flex gap-2.5 items-center">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.4736 0.714532C5.16154 -0.410762 7.37871 0.620886 7.70755 2.51564H10.999C12.5178 2.51564 13.749 3.74685 13.749 5.26564C13.749 5.67985 13.4132 6.01564 12.999 6.01564C12.5848 6.01564 12.249 5.67985 12.249 5.26564C12.249 4.57528 11.6894 4.01564 10.999 4.01564H7.74902V16.5156H10.999C11.6894 16.5156 12.249 15.956 12.249 15.2656C12.249 14.8514 12.5848 14.5156 12.999 14.5156C13.4132 14.5156 13.749 14.8514 13.749 15.2656C13.749 16.7844 12.5178 18.0156 10.999 18.0156H7.70755C7.37871 19.9104 5.16154 20.942 3.4736 19.8167L1.4736 18.4834C0.708552 17.9734 0.249023 17.1147 0.249023 16.1953V4.336C0.249023 3.41653 0.708552 2.5579 1.4736 2.04787L3.4736 0.714532ZM14.4687 12.5296C14.1758 12.2367 14.1758 11.7618 14.4687 11.4689L15.1884 10.7493L9.99902 10.7493C9.58481 10.7493 9.24902 10.4135 9.24902 9.99927C9.24902 9.58505 9.58481 9.24927 9.99902 9.24927L15.1884 9.24927L14.4687 8.5296C14.1758 8.2367 14.1758 7.76183 14.4687 7.46894C14.7616 7.17604 15.2365 7.17604 15.5294 7.46894L16.8222 8.76183C17.5057 9.44525 17.5057 10.5533 16.8222 11.2367L15.5294 12.5296C15.2365 12.8225 14.7616 12.8225 14.4687 12.5296Z"
                                    fill="#E4335D" />
                            </svg>
                        </div>
                        <span class="text-base text-black">Выйти</span>
                    </div>
                    <div class="w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
                <!-- terms and rules -->
                <div class="flex flex-col gap-4 text-center mb-4 text-xs mt-auto">
                    <NuxtLink to="#"
                        class="hover:text-blue active:text-pressed underline hover:no-underline w-fit self-center">Условия
                        использования
                    </NuxtLink>
                    <NuxtLink to="#"
                        class="hover:text-blue active:text-pressed underline hover:no-underline w-fit self-center">Политика
                        обработки
                        данных
                    </NuxtLink>
                    <NuxtLink to="https://redmedia.uz/"
                        class="group flex justify-center gap-[5px] flex-wrap w-fit self-center">
                        <span class="group-hover:text-blue group-active:text-pressed">Разработано креативным
                            агентством</span>
                        <span class="flex items-center gap-[4.5px]">
                            <img src="~/assets/images/credit.svg" alt="redmedia">
                        </span>
                    </NuxtLink>
                </div>
            </div>
            <NuxtPage />
        </div>
        <!-- logout modal -->
        <div class="">
            <div @click="isLogout = false"
                class="bg-black bg-opacity-60 w-full fixed top-0 h-full transition-all duration-300 ease-in-out"
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
.nav:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #E9EFFF;
}</style>