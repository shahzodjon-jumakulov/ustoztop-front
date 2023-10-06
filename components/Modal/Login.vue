<script setup>
const isLogin = ref(0)
// 0 - login
// 1 - forgot pass, enter phone
// 2 - forgot pass, confirm code

const auth = useState("isLoginOpen")
const signup = useState("isSignupOpen")

watch(auth, () => {
    if (auth.value) {
        isLogin.value = 0;
        useState('isCategoriesOpen').value = false;
        disableScroll()
    } else {
        enableScroll();
    }
})

// inputs
const phone = ref(null)
const password = ref(null)

// login button clicked
async function handleLogin() {
    const submittedPhone = phone.value.replaceAll(" ", "").replaceAll("+", "").replaceAll("-", "")
    const body = {
        phone_number: `+${submittedPhone}`,
        password: password.value,
    }
    const { data, error } = await useMyFetch('/api/users/login/', {
        body: JSON.stringify(body),
        method: 'POST',
        onResponse({response}) {
            console.log(response)
        }
    })
    console.log(data.value)
    console.log(error.value)
}

watch(() => useRoute().path, () => auth.value = false)

const digits = ref(["", "", "", "", "", ""])

const submit = async () => {
    const submittedPhone = phone.value.replaceAll(" ", "").replaceAll("+", "").replaceAll("-", "")
    const body = {
        otp: digits.value.join(''),
        phone_number: submittedPhone,
    }
    console.log(body)
    // const data = ref(false);
    const { data, error } = await useMyFetch('/api/users/register/', {
        body: JSON.stringify(body),
        method: 'POST',
    })
    console.log(data.value)
    console.log(error.value)
    if (data.value) {
        isValidCode.value = true;
    } else {
        isValidCode.value = false;
    }
}

function moveToNext(event, index) {
    if (event.target) {
        if (event.target.value.length == 6) {
            for (let i = 0; i < 6; i++) {
                const item = document.getElementById(`digit${i}`)
                const digit = event.target.value.toString().charAt(i)
                digits.value[i] = digit
                item.focus();
            }
        }
    }
    if (event.target.value.length === event.target.maxLength) {
        const nextDigit = document.getElementById(`digit${index + 1}`)
        if (nextDigit) {
            nextDigit.focus();
        }
    }
    if (index == 5) {
        console.log("Submitted")
        // submit();
    }
}

const handleKeypress = (event, index) => {
    var previous, next;
    if (index > 0) {
        previous = document.getElementById(`digit${index - 1}`)
    }
    if (index < 6) {
        next = document.getElementById(`digit${index + 1}`)
    }
    if (event.keyCode == 8) {
        if (event.target.value) {
            digits.value[index] = ""
        } else if (previous) {
            previous.focus();
            previous.value = "";
            digits.value[index - 1] = ""
        }
    }

    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        if (digits.value[index]) {
            digits.value[index] = "";
        }
    }

    if (event.keyCode == 37 && previous) {
        previous.focus();
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        // Prevent the default arrow key behavior
        event.preventDefault();
    }
}

</script>

<template>
    <teleport to="body">
        <div class="fixed inset-0 z-[11] h-[100svh]" v-if="auth">
            <div @click="auth = false" class="bg-black bg-opacity-60 w-full absolute md:h-full"></div>
            <div
                class="h-[calc(100%-50px)] flex justify-center items-center w-full md:w-[500px] md:h-max fixed md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <div
                    class="p-5 bg-white inline-flex flex-col gap-2.5 justify-start items-center md:rounded-3xl w-full h-full">
                    <div class="flex w-full">
                        <div v-if="isLogin != 0" class="group/icon mr-auto hidden md:block cursor-pointer"
                            @click="isLogin--">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                    class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                            </svg>
                        </div>
                        <div class="group/icon ml-auto hidden md:block cursor-pointer"
                            @click="auth = false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.3588 15.3587C15.0659 15.6516 14.591 15.6516 14.2981 15.3587L12 13.0606L9.7019 15.3587C9.40901 15.6516 8.93413 15.6516 8.64124 15.3587C8.34835 15.0658 8.34835 14.5909 8.64124 14.298L10.9393 11.9999L8.64125 9.70184C8.34836 9.40895 8.34836 8.93408 8.64125 8.64118C8.93415 8.34829 9.40902 8.34829 9.70191 8.64118L12 10.9393L14.2981 8.64119C14.591 8.3483 15.0659 8.3483 15.3588 8.64119C15.6516 8.93409 15.6516 9.40896 15.3588 9.70185L13.0607 11.9999L15.3588 14.298C15.6517 14.5909 15.6517 15.0658 15.3588 15.3587Z"
                                    class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                            </svg>
                        </div>
                    </div>
                    <!-- login -->
                    <form @submit.prevent v-if="isLogin == 0" class="flex flex-col text-center w-full h-full gap-8 md:gap-5">
                        <div class="flex items-center justify-center">
                            <div class="ml-auto md:hidden absolute left-5" @click="auth = false">
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
                            <BaseInput placeholder="Номер телефона" id="phone_number" type="tel" v-model="phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0.25C9.58579 0.25 9.25 0.585786 9.25 1C9.25 1.41421 9.58579 1.75 10 1.75C10.9521 1.75 11.8948 1.93753 12.7745 2.30187C13.6541 2.66622 14.4533 3.20025 15.1265 3.87348C15.7997 4.5467 16.3338 5.34593 16.6981 6.22554C17.0625 7.10516 17.25 8.04792 17.25 9C17.25 9.41421 17.5858 9.75 18 9.75C18.4142 9.75 18.75 9.41421 18.75 9C18.75 7.85093 18.5237 6.71312 18.0839 5.65152C17.6442 4.58992 16.9997 3.62533 16.1872 2.81282C15.3747 2.0003 14.4101 1.35578 13.3485 0.916054C12.2869 0.476325 11.1491 0.25 10 0.25ZM18 17V15.3541C18 14.5363 17.5021 13.8008 16.7428 13.4971L14.7086 12.6835C13.7429 12.2971 12.6422 12.7156 12.177 13.646L12 14C12 14 9.5 13.5 7.5 11.5C5.5 9.5 5 7 5 7L5.35402 6.82299C6.28438 6.35781 6.70285 5.25714 6.31654 4.29136L5.50289 2.25722C5.19916 1.4979 4.46374 1 3.64593 1H2C0.895431 1 0 1.89543 0 3C0 11.8366 7.16344 19 16 19C17.1046 19 18 18.1046 18 17ZM9.25 5C9.25 4.58579 9.58579 4.25 10 4.25C10.6238 4.25 11.2414 4.37286 11.8177 4.61157C12.394 4.85028 12.9177 5.20016 13.3588 5.64124C13.7998 6.08232 14.1497 6.60596 14.3884 7.18225C14.6271 7.75855 14.75 8.37622 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75C13.5858 9.75 13.25 9.41421 13.25 9C13.25 8.5732 13.1659 8.15059 13.0026 7.75628C12.8393 7.36197 12.5999 7.00369 12.2981 6.7019C11.9963 6.40011 11.638 6.16072 11.2437 5.99739C10.8494 5.83406 10.4268 5.75 10 5.75C9.58579 5.75 9.25 5.41421 9.25 5Z"
                                        fill="#787B8D" class="group-[.error]:fill-red" />
                                </svg>
                            </BaseInput>
                            <BaseInput placeholder="Пароль" id="password" type="password" v-model="password" :is-login="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 0.25C5.37665 0.25 3.25 2.37665 3.25 5V5.0702C1.39935 5.42125 0 7.04721 0 9V15C0 17.2091 1.79086 19 4 19H12C14.2091 19 16 17.2091 16 15V9C16 7.04721 14.6006 5.42125 12.75 5.0702V5C12.75 2.37665 10.6234 0.25 8 0.25ZM11.25 5C11.25 3.20507 9.79493 1.75 8 1.75C6.20507 1.75 4.75 3.20507 4.75 5H11.25ZM10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z"
                                        fill="#787B8D" class="group-[.error]:fill-red" />
                                </svg>
                            </BaseInput>
                        </div>
                        <div class="flex flex-col gap-4 items-center mt-auto text-sm leading-normal">
                            <div @click="isLogin = 1"
                                class="link text-blue hover:text-pressed active:text-[#145FC1] cursor-pointer">
                                Забыли пароль?
                            </div>
                            <div class="flex justify-center items-center gap-[5px]">
                                <span>Нет аккаунта?</span>
                                <div @click="signup = true, auth = false"
                                    class="link text-blue hover:text-pressed active:text-[#145FC1] cursor-pointer">
                                    Зарегистрироваться
                                </div>
                            </div>
                        </div>
                        <BaseButton @click="handleLogin()" type="submit" state="primary" size="large">
                            {{ $t("login.loginbtn") }}
                        </BaseButton>
                    </form>
                    <!-- forgot password -->
                    <div v-else-if="isLogin == 1" class="flex flex-col text-center w-full h-full gap-8 md:gap-5">
                        <div class="flex items-center justify-center">
                            <div class="ml-auto md:hidden absolute left-5" @click="auth = false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                        fill="#A7AABC" />
                                </svg>
                            </div>
                            <div class="text-2xl text-black font-bold">{{ $t("login.confirmPhone") }}</div>
                        </div>
                        <div class="flex flex-col gap-[10px]">
                            <BaseInput placeholder="Номер телефона" id="phone_number" type="tel" v-model="phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 0.25C9.58579 0.25 9.25 0.585786 9.25 1C9.25 1.41421 9.58579 1.75 10 1.75C10.9521 1.75 11.8948 1.93753 12.7745 2.30187C13.6541 2.66622 14.4533 3.20025 15.1265 3.87348C15.7997 4.5467 16.3338 5.34593 16.6981 6.22554C17.0625 7.10516 17.25 8.04792 17.25 9C17.25 9.41421 17.5858 9.75 18 9.75C18.4142 9.75 18.75 9.41421 18.75 9C18.75 7.85093 18.5237 6.71312 18.0839 5.65152C17.6442 4.58992 16.9997 3.62533 16.1872 2.81282C15.3747 2.0003 14.4101 1.35578 13.3485 0.916054C12.2869 0.476325 11.1491 0.25 10 0.25ZM18 17V15.3541C18 14.5363 17.5021 13.8008 16.7428 13.4971L14.7086 12.6835C13.7429 12.2971 12.6422 12.7156 12.177 13.646L12 14C12 14 9.5 13.5 7.5 11.5C5.5 9.5 5 7 5 7L5.35402 6.82299C6.28438 6.35781 6.70285 5.25714 6.31654 4.29136L5.50289 2.25722C5.19916 1.4979 4.46374 1 3.64593 1H2C0.895431 1 0 1.89543 0 3C0 11.8366 7.16344 19 16 19C17.1046 19 18 18.1046 18 17ZM9.25 5C9.25 4.58579 9.58579 4.25 10 4.25C10.6238 4.25 11.2414 4.37286 11.8177 4.61157C12.394 4.85028 12.9177 5.20016 13.3588 5.64124C13.7998 6.08232 14.1497 6.60596 14.3884 7.18225C14.6271 7.75855 14.75 8.37622 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75C13.5858 9.75 13.25 9.41421 13.25 9C13.25 8.5732 13.1659 8.15059 13.0026 7.75628C12.8393 7.36197 12.5999 7.00369 12.2981 6.7019C11.9963 6.40011 11.638 6.16072 11.2437 5.99739C10.8494 5.83406 10.4268 5.75 10 5.75C9.58579 5.75 9.25 5.41421 9.25 5Z"
                                        fill="#787B8D" class="group-[.error]:fill-red" />
                                </svg>
                            </BaseInput>
                        </div>
                        <BaseButton @click="isLogin = 2" state="primary" size="large">
                            {{ $t("submit") }}
                        </BaseButton>
                    </div>
                    <!-- confirm code -->
                    <div v-else-if="isLogin == 2" class="flex flex-col text-center w-full h-full gap-8 md:gap-5">
                        <div class="flex items-center justify-center">
                            <div class="ml-auto md:hidden absolute left-5" @click="auth = false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                        fill="#A7AABC" />
                                </svg>
                            </div>
                            <div class="text-2xl text-black font-bold">{{ $t("login.enterSms") }}</div>
                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="text-gray text-sm">На номер <b>{{ phone }}</b> было отправлено
                                СМС с 6-значным кодом</div>
                            <div class="flex flex-col gap-2.5 items-center">
                                <div class="flex gap-2.5 items-center justify-center">
                                    <input :id="`digit${index}`" type="number" v-for="(digit, index) in digits"
                                        :key="digit.key" v-model="digits[index]" min="0" max="9" maxlength="1"
                                        @input="moveToNext($event, index)" @keydown="handleKeypress($event, index)"
                                        class="w-[50px] h-[50px] rounded-full bg-bg text-lg text-black font-bold flex text-center caret-yellow border border-[rgba(0,0,0,0)] focus-within:border-blue focus-within:bg-white focus-within:outline-none hover:bg-[#E8EAF2]"
                                        :class="{ '!border-blue !bg-white hover:shadow-[0px_0px_0px_4px_rgba(25,119,241,0.20)]': digit.toString().length, '!border-red !bg-white hover:shadow-[0px_0px_0px_4px_rgba(228,51,93,0.20)]': isValidCode == false }">
                                </div>
                                <div class="text-xs text-red" v-if="isValidCode == false">Неверный код</div>
                            </div>
                        </div>
                        <BaseButton state="primary" size="large">
                            {{ $t("submit") }}
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.group {
    -webkit-tap-highlight-color: transparent;
}

input:focus~.input-focus svg path {
    fill: #1977F1;
}

.error input:focus~.input-focus svg path {
    fill: #E4335D;
}
</style>