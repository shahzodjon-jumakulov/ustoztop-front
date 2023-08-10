<script setup>


const isSelected = ref(null)
const auth = useState("isLoginOpen", () => false)
const signup = useState("isSignupOpen", () => false)

watch(auth, () => {
    if (auth.value) {
        disableScroll()
    } else {
        enableScroll();
    }
})

// inputs
const phone = ref(null)
const password = ref(null)

const show = ref(false)
const isFocused = ref(false)

const toggleShowPassword = () => {
    show.value = !show.value;
    if (isFocused.value) {
        // If the input was focused, refocus it after toggling visibility
        requestAnimationFrame(() => {
            document.getElementById('passwordInput').focus();
        });
    }
};

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
</script>

<template>
    <teleport to="body">
        <div class="fixed inset-0 z-10 h-[100svh]" v-if="auth">
            <div class="bg-black bg-opacity-60 w-full absolute hidden md:block"></div>
            <div class="container flex justify-center items-center w-full fixed">
                <div
                    class="p-5 bg-white inline-flex flex-col gap-2.5 justify-start items-center md:rounded-3xl w-full h-full">
                    <div class="ml-auto hidden md:block" @click="auth = false, isSelected = null">
                        <svg class="group cursor-pointer p-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.3588 15.3587C15.0659 15.6516 14.591 15.6516 14.2981 15.3587L12 13.0606L9.7019 15.3587C9.40901 15.6516 8.93413 15.6516 8.64124 15.3587C8.34835 15.0658 8.34835 14.5909 8.64124 14.298L10.9393 11.9999L8.64125 9.70184C8.34836 9.40895 8.34836 8.93408 8.64125 8.64118C8.93415 8.34829 9.40902 8.34829 9.70191 8.64118L12 10.9393L14.2981 8.64119C14.591 8.3483 15.0659 8.3483 15.3588 8.64119C15.6516 8.93409 15.6516 9.40896 15.3588 9.70185L13.0607 11.9999L15.3588 14.298C15.6517 14.5909 15.6517 15.0658 15.3588 15.3587Z"
                                class="fill-[#A7AABC] group-hover:fill-blue group-active:fill-pressed" />
                        </svg>
                    </div>
                    <div class="flex flex-col text-center w-full h-full gap-8">
                        <div class="flex items-center justify-center">
                            <div class="ml-auto md:hidden absolute left-5" @click="auth = false, isSelected = null">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                        fill="#A7AABC" />
                                </svg>
                            </div>
                            <div class="text-2xl text-black font-bold">{{ $t("login.title") }}</div>
                        </div>
                        <div class="flex flex-col gap-[10px]">
                            <div class="relative h-[50px] w-full">
                                <input type="tel" id="floating_filled"
                                    class="block h-full w-full p-4 pl-[54px] bg-bg rounded-[25px] text-base text-black outline-none peer caret-yellow border border-bg focus:border-blue"
                                    placeholder=" " v-model="phone" @input="formatPhoneNumber" pattern="\d*" maxlength="18"
                                    @focus="handleFocus" required />
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
                            <div class="relative h-[50px] w-full">
                                <input :type="show ? 'text' : 'password'" id="passwordInput"
                                    class="block h-full w-full p-4 pl-[54px] bg-bg rounded-[25px] text-base text-black outline-none peer caret-yellow border border-bg focus:border-blue"
                                    @focus="isFocused = true" @blur="isFocused = false" placeholder=" "
                                    v-model="password" />
                                <label for="passwordInput"
                                    class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-[54px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                    Пароль
                                </label>
                                <div
                                    class="input-focus absolute inset-y-0 left-0 flex justify-center items-center ml-5 w-6 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8 0.25C5.37665 0.25 3.25 2.37665 3.25 5V5.0702C1.39935 5.42125 0 7.04721 0 9V15C0 17.2091 1.79086 19 4 19H12C14.2091 19 16 17.2091 16 15V9C16 7.04721 14.6006 5.42125 12.75 5.0702V5C12.75 2.37665 10.6234 0.25 8 0.25ZM11.25 5C11.25 3.20507 9.79493 1.75 8 1.75C6.20507 1.75 4.75 3.20507 4.75 5H11.25ZM10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z"
                                            fill="#787B8D" />
                                    </svg>
                                </div>
                                <div @mousedown="toggleShowPassword"
                                    class="group absolute inset-y-0 right-5 flex justify-center items-center ml-5 w-6">
                                    <svg v-if="show" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C8.18448 5 4.82549 7.79533 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C15.8155 19 19.1745 16.2047 21.1303 14.1469ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                            class="fill-lightGray group-hover:fill-blue group-active:fill-pressed" />
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.6429 17.7036C15.2337 18.4709 13.66 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C3.69953 8.98001 4.78196 7.97414 6.04468 7.10534L3.46967 4.53033ZM9.41536 10.476C9.15145 10.9227 9 11.4436 9 12C9 13.6569 10.3431 15 12 15C12.5564 15 13.0773 14.8486 13.524 14.5846L9.41536 10.476ZM12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C20.6902 14.6099 20.1791 15.1103 19.6078 15.6077L9.4127 5.41264C10.2422 5.15256 11.1086 5 12 5Z"
                                            class="fill-lightGray group-hover:fill-blue group-active:fill-pressed" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 items-center mt-auto">
                            <div class="link text-blue hover:text-pressed active:text-[#145FC1]">Забыли пароль?</div>
                            <div class="flex justify-center items-center gap-[5px] text-sm">
                                <span>Нет аккаунта?</span>
                                <div @click="signup = true, auth = false"
                                    class="link text-blue hover:text-pressed active:text-[#145FC1]">Зарегистрироваться
                                </div>
                            </div>
                        </div>
                        <BaseButton type="primary" size="large">{{ $t("login.loginbtn") }}</BaseButton>
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

input:focus~.input-focus svg path {
    fill: #1977F1;
}
</style>