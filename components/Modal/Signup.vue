<script setup>
const isSelected = ref(null);
const widthOfNav = ref(0)
const leftOfNav = ref(0)
const auth = useState("isSignupOpen", () => false);
const login = useState("isLoginOpen", () => false);

// input
const phone = ref(null)

watch(auth, () => {
    if (auth.value) {
        disableScroll();
    } else {
        enableScroll();
    }
    if (auth.value) {
        setTimeout(() => {
            if (isSelected.value != null) {
                handleSelected()
            }
        }, 1);
    }
});

watch(isSelected, () => {
    if (isSelected != null && auth.value) {
        setTimeout(() => {
            handleSelected()
        }, 1);
    }
})

// format phone number input
const formatPhoneNumber = (event) => {
    let inputValue = event.target.value.replace(/\D/g, '').slice(3);

    if (inputValue.length > 9) {
        inputValue = inputValue.substring(0, 9);
    }

    if (inputValue.length <= 2) {
        phone.value = "+998 " + inputValue;
    } else if (inputValue.length <= 5) {
        phone.value = "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2);
    } else if (inputValue.length <= 7) {
        phone.value = "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2, 5) + "-" + inputValue.substring(5);
    } else {
        phone.value = "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2, 5) + "-" + inputValue.substring(5, 7) + "-" + inputValue.substring(7, 9);
    }
};

const handleFocus = () => {
    if (!phone.value) {
        phone.value = "+998 ";
    }
};

const handleSelected = () => {
    const el = document.getElementById("nav");
    if (isSelected.value == 1) {
        widthOfNav.value = document.getElementById("tutor").offsetWidth
        leftOfNav.value = document.getElementById("tutor").offsetLeft
    } else if (isSelected.value == 2) {
        widthOfNav.value = document.getElementById("center").offsetWidth
        leftOfNav.value = document.getElementById("center").offsetLeft
    }
    el.style.width = `${widthOfNav.value}px`
    el.style.left = `${leftOfNav.value}px`
}

const submit = () => {
    console.log(phone.value)
}
</script>

<template>
    <teleport to="body">
        <div class="fixed inset-0 z-10 h-[100svh]" v-if="auth">
            <div class="bg-black bg-opacity-60 w-full absolute"></div>
            <div class="container flex justify-center items-center w-full h-full fixed">
                <div
                    class="p-5 bg-white inline-flex flex-col gap-2.5 justify-start items-center md:rounded-3xl w-full h-full">
                    <div class="ml-auto hidden md:block" @click="(auth = false), (isSelected = null)">
                        <svg class="group cursor-pointer p-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.3588 15.3587C15.0659 15.6516 14.591 15.6516 14.2981 15.3587L12 13.0606L9.7019 15.3587C9.40901 15.6516 8.93413 15.6516 8.64124 15.3587C8.34835 15.0658 8.34835 14.5909 8.64124 14.298L10.9393 11.9999L8.64125 9.70184C8.34836 9.40895 8.34836 8.93408 8.64125 8.64118C8.93415 8.34829 9.40902 8.34829 9.70191 8.64118L12 10.9393L14.2981 8.64119C14.591 8.3483 15.0659 8.3483 15.3588 8.64119C15.6516 8.93409 15.6516 9.40896 15.3588 9.70185L13.0607 11.9999L15.3588 14.298C15.6517 14.5909 15.6517 15.0658 15.3588 15.3587Z"
                                class="fill-[#A7AABC] group-hover:fill-blue group-active:fill-pressed" />
                        </svg>
                    </div>
                    <div class="flex flex-col text-center w-full h-full gap-8">
                        <div class="flex items-center justify-center">
                            <div class="ml-auto md:hidden absolute left-5" @click="(auth = false), (isSelected = null)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                        fill="#A7AABC" />
                                </svg>
                            </div>
                            <div class="text-2xl text-black font-bold">
                                {{ $t("signup.title") }}
                            </div>
                        </div>
                        <div v-if="isSelected == null" class="flex flex-col gap-2.5 h-full">
                            <div class="group h-1/2" :class="{ selected: isSelected == 1 }" @click="isSelected = 1">
                                <div
                                    class="bg-white group-active:bg-bg2 group-[.selected]:bg-bg border border-bg2 group-[.selected]:border-blue rounded-3xl p-[5px] flex flex-col gap-[5px] justify-center items-center cursor-pointer h-full">
                                    <div class="px-2.5 py-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="36" viewBox="0 0 29 36"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M14.5 16C18.9183 16 22.5 12.4183 22.5 8C22.5 3.58172 18.9183 0 14.5 0C10.0817 0 6.5 3.58172 6.5 8C6.5 12.4183 10.0817 16 14.5 16ZM14.5 36C22.232 36 28.5 32.4183 28.5 28C28.5 23.5817 22.232 20 14.5 20C6.76801 20 0.5 23.5817 0.5 28C0.5 32.4183 6.76801 36 14.5 36Z"
                                                class="fill-icon group-[.selected]:fill-blue" />
                                        </svg>
                                    </div>
                                    <div class="text-gray text-base group-[.selected]:text-black">
                                        Репетитор
                                    </div>
                                </div>
                            </div>
                            <div class="group h-1/2" :class="{ selected: isSelected == 2 }" @click="isSelected = 2">
                                <div
                                    class="bg-white group-active:bg-bg2 group-[.selected]:bg-bg border border-bg2 group-[.selected]:border-blue rounded-3xl p-[5px] flex flex-col gap-[5px] justify-center items-center cursor-pointer h-full">
                                    <div class="px-2.5 py-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M43.2779 41.8586H39.4221V12.4611C39.4221 8.20246 35.9696 4.75 31.7116 4.75H16.2894C12.0308 4.75 8.57888 8.20246 8.57888 12.4611V41.8586H4.72307C3.92472 41.8586 3.27734 42.5059 3.27734 43.3043C3.27734 44.1026 3.92472 44.75 4.72307 44.75H43.2779C44.0762 44.75 44.7236 44.1026 44.7236 43.3043C44.7236 42.5059 44.0762 41.8586 43.2779 41.8586ZM14.7523 10.9563C15.0142 10.695 15.3757 10.5329 15.7752 10.5329H21.3826C22.1809 10.5329 22.8283 11.1803 22.8283 11.9786C22.8283 12.3781 22.6667 12.7396 22.4049 13.0015C22.143 13.2633 21.782 13.4249 21.3826 13.4249H15.7752C14.9763 13.4249 14.3289 12.7775 14.3289 11.9786C14.3289 11.5797 14.4905 11.2181 14.7523 10.9563ZM14.7523 15.9436C15.0142 15.6823 15.3757 15.5202 15.7752 15.5202H21.3826C22.1809 15.5202 22.8283 16.1676 22.8283 16.9659C22.8283 17.3648 22.6667 17.7264 22.4049 17.9883C22.143 18.2495 21.782 18.4117 21.3826 18.4117H15.7752C14.9763 18.4117 14.3289 17.7643 14.3289 16.9659C14.3289 16.567 14.4905 16.2055 14.7523 15.9436ZM14.3289 21.9527C14.3289 21.5533 14.4905 21.1922 14.7523 20.9304C15.0142 20.6685 15.3757 20.507 15.7752 20.507H21.3826C22.1809 20.507 22.8283 21.1544 22.8283 21.9527C22.8283 22.3522 22.6667 22.7137 22.4049 22.975C22.143 23.2369 21.782 23.3984 21.3826 23.3984H15.7752C14.9763 23.3984 14.3289 22.7516 14.3289 21.9527ZM29.7834 41.8586H18.217V33.6656C18.217 30.4716 20.8065 27.8827 24.0005 27.8827C27.1944 27.8827 29.7834 30.4716 29.7834 33.6656V41.8586ZM33.2481 22.975C32.9868 23.2369 32.6252 23.3984 32.2258 23.3984H26.6184C25.8195 23.3984 25.1727 22.7516 25.1727 21.9527C25.1727 21.5533 25.3342 21.1922 25.5961 20.9304C25.8574 20.6685 26.2189 20.507 26.6184 20.507H32.2258C33.0247 20.507 33.6715 21.1544 33.6715 21.9527C33.6715 22.3522 33.5099 22.7137 33.2481 22.975ZM33.2481 17.9883C32.9868 18.2495 32.6252 18.4117 32.2258 18.4117H26.6184C25.8195 18.4117 25.1727 17.7643 25.1727 16.9659C25.1727 16.567 25.3342 16.2055 25.5961 15.9436C25.8579 15.6818 26.2189 15.5202 26.6184 15.5202H32.2258C33.0247 15.5202 33.6715 16.1676 33.6715 16.9659C33.6715 17.3648 33.5099 17.7264 33.2481 17.9883ZM33.2481 13.0015C32.9868 13.2633 32.6252 13.4249 32.2258 13.4249H26.6184C25.8195 13.4249 25.1727 12.7775 25.1727 11.9786C25.1727 11.5797 25.3342 11.2181 25.5961 10.9563C25.8574 10.695 26.2189 10.5329 26.6184 10.5329H32.2258C33.0247 10.5329 33.6715 11.1803 33.6715 11.9786C33.6715 12.3781 33.5099 12.7396 33.2481 13.0015Z"
                                                fill="#787B8D" class="group-[.selected]:fill-blue" />
                                        </svg>
                                    </div>
                                    <div class="text-gray text-base group-[.selected]:text-black">
                                        Учебное заведение
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="flex flex-col gap-8">
                                <div class="flex bg-bg w-max rounded-full p-[5px] mx-auto relative">
                                    <div id="nav"
                                        class="bg-white rounded-full absolute left-0 top-0 h-[26px] my-[5px] z-[1] transition-width transition-left duration-300 ease-in-out">
                                    </div>
                                    <div id="tutor" class="group z-[2]" :class="{ 'active': isSelected == 1 }"
                                        @click="isSelected = 1">
                                        <div
                                            class="flex gap-[5px] px-5 py-[3px] rounded-full text-sm text-gray group-[.active]:text-blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z"
                                                    class="fill-icon group-[.active]:fill-blue" />
                                            </svg>
                                            <span>Репетитор</span>
                                        </div>
                                    </div>
                                    <div id="center" class="group z-[2]" :class="{ 'active': isSelected == 2 }"
                                        @click="isSelected = 2">
                                        <div
                                            class="flex gap-[5px] px-5 py-[3px] rounded-full text-sm text-gray group-[.active]:text-blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16.2287 15.4157H14.7828V4.39165C14.7828 2.79467 13.4881 1.5 11.8913 1.5H6.10804C4.51106 1.5 3.21659 2.79467 3.21659 4.39165V15.4157H1.77066C1.47128 15.4157 1.22852 15.6585 1.22852 15.9579C1.22852 16.2572 1.47128 16.5 1.77066 16.5H16.2287C16.5281 16.5 16.7709 16.2572 16.7709 15.9579C16.7709 15.6585 16.5281 15.4157 16.2287 15.4157ZM5.53163 3.82736C5.62982 3.72938 5.76541 3.66858 5.91521 3.66858H8.01798C8.31736 3.66858 8.56012 3.91135 8.56012 4.21073C8.56012 4.36053 8.49954 4.49611 8.40135 4.59431C8.30315 4.6925 8.16777 4.75309 8.01798 4.75309H5.91521C5.61561 4.75309 5.37285 4.51032 5.37285 4.21073C5.37285 4.06114 5.43344 3.92556 5.53163 3.82736ZM5.53163 5.69761C5.62982 5.59963 5.76541 5.53883 5.91521 5.53883H8.01798C8.31736 5.53883 8.56012 5.7816 8.56012 6.08098C8.56012 6.23056 8.49954 6.36615 8.40135 6.46434C8.30315 6.56233 8.16777 6.62312 8.01798 6.62312H5.91521C5.61561 6.62312 5.37285 6.38036 5.37285 6.08098C5.37285 5.93139 5.43344 5.7958 5.53163 5.69761ZM5.37285 7.95102C5.37285 7.80122 5.43344 7.66584 5.53163 7.56765C5.62982 7.46946 5.76541 7.40887 5.91521 7.40887H8.01798C8.31736 7.40887 8.56012 7.65163 8.56012 7.95102C8.56012 8.10081 8.49954 8.2364 8.40135 8.33438C8.30315 8.43258 8.16777 8.49316 8.01798 8.49316H5.91521C5.61561 8.49316 5.37285 8.25061 5.37285 7.95102ZM11.1683 15.4157H6.8309V12.3433C6.8309 11.1456 7.80196 10.1748 8.99969 10.1748C10.1974 10.1748 11.1683 11.1456 11.1683 12.3433V15.4157ZM12.4675 8.33438C12.3696 8.43258 12.234 8.49316 12.0842 8.49316H9.9814C9.68181 8.49316 9.43926 8.25061 9.43926 7.95102C9.43926 7.80122 9.49984 7.66584 9.59804 7.56765C9.69602 7.46946 9.83161 7.40887 9.9814 7.40887H12.0842C12.3838 7.40887 12.6263 7.65163 12.6263 7.95102C12.6263 8.10081 12.5657 8.2364 12.4675 8.33438ZM12.4675 6.46434C12.3696 6.56233 12.234 6.62312 12.0842 6.62312H9.9814C9.68181 6.62312 9.43926 6.38036 9.43926 6.08098C9.43926 5.93139 9.49984 5.7958 9.59804 5.69761C9.69623 5.59942 9.83161 5.53883 9.9814 5.53883H12.0842C12.3838 5.53883 12.6263 5.7816 12.6263 6.08098C12.6263 6.23056 12.5657 6.36615 12.4675 6.46434ZM12.4675 4.59431C12.3696 4.6925 12.234 4.75309 12.0842 4.75309H9.9814C9.68181 4.75309 9.43926 4.51032 9.43926 4.21073C9.43926 4.06114 9.49984 3.92556 9.59804 3.82736C9.69602 3.72938 9.83161 3.66858 9.9814 3.66858H12.0842C12.3838 3.66858 12.6263 3.91135 12.6263 4.21073C12.6263 4.36053 12.5657 4.49611 12.4675 4.59431Z"
                                                    class="fill-icon group-[.active]:fill-blue" />
                                            </svg>
                                            <span>Учебное заведение</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative h-[50px] w-full">
                                    <input type="tel" id="floating_filled"
                                        class="block h-full w-full p-4 pl-[54px] bg-bg rounded-[25px] text-base text-black outline-none peer caret-yellow border border-bg focus:border-blue"
                                        placeholder=" " v-model="phone" @input="formatPhoneNumber" pattern="\d*"
                                        maxlength="18" @focus="handleFocus" required />
                                    <label for="floating_filled"
                                        class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-[54px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                        Номер телефона
                                    </label>
                                    <div
                                        class="input-focus absolute inset-y-0 left-0 flex justify-center items-center ml-5 w-6 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M10 0.25C9.58579 0.25 9.25 0.585786 9.25 1C9.25 1.41421 9.58579 1.75 10 1.75C10.9521 1.75 11.8948 1.93753 12.7745 2.30187C13.6541 2.66622 14.4533 3.20025 15.1265 3.87348C15.7997 4.5467 16.3338 5.34593 16.6981 6.22554C17.0625 7.10516 17.25 8.04792 17.25 9C17.25 9.41421 17.5858 9.75 18 9.75C18.4142 9.75 18.75 9.41421 18.75 9C18.75 7.85093 18.5237 6.71312 18.0839 5.65152C17.6442 4.58992 16.9997 3.62533 16.1872 2.81282C15.3747 2.0003 14.4101 1.35578 13.3485 0.916054C12.2869 0.476325 11.1491 0.25 10 0.25ZM18 17V15.3541C18 14.5363 17.5021 13.8008 16.7428 13.4971L14.7086 12.6835C13.7429 12.2971 12.6422 12.7156 12.177 13.646L12 14C12 14 9.5 13.5 7.5 11.5C5.5 9.5 5 7 5 7L5.35402 6.82299C6.28438 6.35781 6.70285 5.25714 6.31654 4.29136L5.50289 2.25722C5.19916 1.4979 4.46374 1 3.64593 1H2C0.895431 1 0 1.89543 0 3C0 11.8366 7.16344 19 16 19C17.1046 19 18 18.1046 18 17ZM9.25 5C9.25 4.58579 9.58579 4.25 10 4.25C10.6238 4.25 11.2414 4.37286 11.8177 4.61157C12.394 4.85028 12.9177 5.20016 13.3588 5.64124C13.7998 6.08232 14.1497 6.60596 14.3884 7.18225C14.6271 7.75855 14.75 8.37622 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75C13.5858 9.75 13.25 9.41421 13.25 9C13.25 8.5732 13.1659 8.15059 13.0026 7.75628C12.8393 7.36197 12.5999 7.00369 12.2981 6.7019C11.9963 6.40011 11.638 6.16072 11.2437 5.99739C10.8494 5.83406 10.4268 5.75 10 5.75C9.58579 5.75 9.25 5.41421 9.25 5Z"
                                                fill="#787B8D" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center items-center gap-[5px] text-sm mt-auto">
                            <span>Есть аккаунт?</span>
                            <div @click="login = true, auth = false"
                                class="link text-blue hover:text-pressed active:text-[#145FC1]">Вход</div>
                        </div>
                        <div v-if="isSelected" class="text-sm text-gray">
                            При регистрации вы соглашаетесь c
                            <span class="underline hover:text-blue active:text-pressed">условиями использования</span> и
                            <span class="underline hover:text-blue active:text-pressed">политикой обработки данных</span>.
                        </div>
                        <BaseButton v-if="isSelected" type="primary" size="large" @click="submit">{{ $t("submit") }}
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.container {
    height: calc(100% - 50px);
}

.group {
    -webkit-tap-highlight-color: transparent;
}
</style>
