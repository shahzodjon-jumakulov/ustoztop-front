<script setup>
const props = defineProps({
    placeholder: {
        required: true,
        type: String,
    },
    id: {
        required: true,
        type: String,
    },
    type: {
        required: true,
        type: String,
    },
    modelValue: {
        required: true,
    },
    checkPassword: {
        required: false,
        type: String,
    },
})

const errorMsg = ref(null);
const requirements = ref([]);

const isFocused = ref(false)
const inputType = ref(props.type == "check_password" ? "password" : props.type)

const inputModelValue = ref(null)
inputModelValue.value = props.modelValue

watch(inputModelValue, () => errorMsg.value = null)

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    if (props.type == 'tel') {
        formatPhoneNumber(event);
    } else if (props.type == 'password' || props.type == 'check_password') {
        validatePassword();
    }
    emit('update:modelValue', inputModelValue.value);
}

// phone number
const formatPhoneNumber = (event) => {
    let inputValue = event.target.value.replace(/\D/g, '').slice(3);

    if (inputValue.length > 9) {
        inputValue = inputValue.substring(0, 9);
    }

    if (inputValue.length <= 2) {
        inputModelValue.value = "+998 " + inputValue;
    } else if (inputValue.length <= 5) {
        inputModelValue.value = "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2);
    } else if (inputValue.length <= 7) {
        inputModelValue.value = "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2, 5) + "-" + inputValue.substring(5);
    } else {
        inputModelValue.value = "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2, 5) + "-" + inputValue.substring(5, 7) + "-" + inputValue.substring(7, 9);
    }
};
const handleFocus = (event) => {
    isFocused.value = true
    if (!event.target.value && props.type == 'tel') {
        event.target.value = "+998 ";
    }
};
const handleBlur = (event) => {
    isFocused.value = false;
    if (props.type == 'tel') {
        validatePhone();
    } else if (props.type == 'password' || props.type == 'check_password') {
        validatePassword();
    }
}


// password
const show = ref(false)
const toggleShowPassword = () => {
    show.value = !show.value;
    if (isFocused.value) {
        // If the input was focused, refocus it after toggling visibility
        requestAnimationFrame(() => {
            document.getElementById(props.id).focus();
        });
    }
};
watch(show, (newValue) => {
    if (newValue) {
        inputType.value = 'text';
    } else {
        inputType.value = 'password';
    }
})

function validatePhone() {
    if (inputModelValue.value) {
        const val = inputModelValue.value.replaceAll(" ", "").replaceAll("-", "");
        const phoneNumberRegex = /^(\+998)(\d{9})$/;
        const isValid = phoneNumberRegex.test(val);
        if (isValid) {
            errorMsg.value = null;
        } else {
            errorMsg.value = 'Введен неверный номер телефона'
        }
    } else {
        errorMsg.value = 'Поле не должно быть пустым'
        return false;
    }
}

function validatePassword() {
    if (!inputModelValue.value) {
        errorMsg.value = 'Поле не должно быть пустым'
        requirements.value.map(item => item.status = false)
        return false;
    }
    else if (props.type == 'password') {
        const isValid = true;
        let errorArr = [
            {
                name: "Только буквы латинского алфавита, цифры и спецсимволы",
                status: true,
            },
            {
                name: "8 и более символов",
                status: true,
            },
            {
                name: "Хотя бы одна цифра",
                status: true,
            },
            {
                name: "Хотя бы одна заглавная буква",
                status: true,
            },
        ];
        // if (inputModelValue.value) {
        //     var regEx = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*-_+=();:?{}~,./|`~]{8,64}$/;
        //     console.log(regEx.test(inputModelValue.value));
        // }

        // Only letters, numbers and characters
        var regEx = /^[0-9A-Za-z!@#$%^&*()_\-+={[}\]|\:;"',.?\/\\~`]+[0-9A-Za-z!@#$%^&*()_\-+={[}\]|\:;"',.?\/\\~`]*$/g
        if (regEx.test(inputModelValue.value)) errorArr[0].status = true
        else errorArr[0].status = false;
        // check length
        if (inputModelValue.value.length < 8 || inputModelValue.value.length > 64) {
            errorArr[1].status = false;
        }
        // AT least one number
        var regExNumber = /.*[0-9].*/
        if (regExNumber.test(inputModelValue.value)) errorArr[2].status = true
        else errorArr[2].status = false;
        // AT least one CAPITAL letter
        var regExNumber = /.*[A-Z].*/
        if (regExNumber.test(inputModelValue.value)) errorArr[3].status = true
        else errorArr[3].status = false;

        requirements.value = errorArr;
    } else if (props.type == "check_password") {
        if (inputModelValue.value === props.checkPassword) {
            errorMsg.value = null;
        } else {
            errorMsg.value = "Пароли не совпадают";
        }
    }
}

if (props.checkPassword) {
    watch(() => props.checkPassword, () => {
        console.log(1)
        validatePassword();
    })
}

//  ! @ # $ % ^ & * ( ) — _ + = ; : , ./ ? \ | ` ~ [ ] { }
</script>

<template>
    <div class="group flex flex-col gap-2.5" :class="{ 'error': errorMsg }">
        <div class="relative h-[50px] w-full">
            <input :type="inputType" :id="props.id"
                class="block h-full w-full pr-4 pt-5 pb-2.5 pl-[54px] bg-bg hover:bg-bg2 rounded-[25px] text-base text-black outline-none peer caret-yellow border border-bg focus:border-blue focus:hover:shadow-[0px_0px_0px_4px_rgba(25,119,241,0.20)] focus:bg-white group-[.error]:focus:border-red group-[.error]:focus:hover:shadow-[0px_0px_0px_4px_rgba(228,51,93,0.20)]"
                placeholder=" " @input="updateValue" pattern="\d*" @focus="handleFocus" v-model="inputModelValue"
                @blur="handleBlur" />
            <label :for="props.id"
                class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-[54px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 group-[.error]:text-red">
                {{ props.placeholder }}
            </label>
            <div
                class="input-focus absolute inset-y-0 left-0 flex justify-center items-center ml-5 w-6 pointer-events-none">
                <slot></slot>
            </div>
            <div class="absolute inset-y-0 right-5 flex gap-2.5 items-center ml-5">
                <svg v-if="errorMsg" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.96798 1.16592C8.85365 -0.388639 11.1464 -0.388642 12.032 1.16592L19.7041 14.6324C20.5649 16.1433 19.4445 18 17.6721 18H2.32789C0.555459 18 -0.564896 16.1433 0.29587 14.6324L7.96798 1.16592ZM10.9999 14C10.9999 14.5523 10.5522 15 9.99994 15C9.44765 15 8.99994 14.5523 8.99994 14C8.99994 13.4477 9.44765 13 9.99994 13C10.5522 13 10.9999 13.4477 10.9999 14ZM10.7499 6C10.7499 5.58579 10.4142 5.25 9.99994 5.25C9.58573 5.25 9.24994 5.58579 9.24994 6V11C9.24994 11.4142 9.58573 11.75 9.99994 11.75C10.4142 11.75 10.7499 11.4142 10.7499 11V6Z"
                        fill="#E4335D" />
                </svg>
                <div v-if="props.type == 'password' || props.type == 'check_password'" @mousedown="toggleShowPassword"
                    class="group/eye w-6">
                    <svg v-if="show" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C8.18448 5 4.82549 7.79533 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C15.8155 19 19.1745 16.2047 21.1303 14.1469ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            class="fill-lightGray group-hover/eye:fill-blue group-active/eye:fill-pressed" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.6429 17.7036C15.2337 18.4709 13.66 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C3.69953 8.98001 4.78196 7.97414 6.04468 7.10534L3.46967 4.53033ZM9.41536 10.476C9.15145 10.9227 9 11.4436 9 12C9 13.6569 10.3431 15 12 15C12.5564 15 13.0773 14.8486 13.524 14.5846L9.41536 10.476ZM12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C20.6902 14.6099 20.1791 15.1103 19.6078 15.6077L9.4127 5.41264C10.2422 5.15256 11.1086 5 12 5Z"
                            class="fill-lightGray group-hover/eye:fill-blue group-active/eye:fill-pressed" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-0.5" v-if="errorMsg || requirements.length">
            <span class="text-left text-red text-xs" v-if="errorMsg">{{ errorMsg }}</span>
            <span class="text-left text-xs" v-if="requirements.length" v-for="item in requirements" :key="item.key"
                :class="item.status ? 'text-green' : 'text-red'">• {{ item.name }}</span>
        </div>
    </div>
</template>