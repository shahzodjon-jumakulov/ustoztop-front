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
})

const isFocused = ref(false)
const inputType = ref(props.type)

const phone = ref(null)
phone.value = props.modelValue

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    if (props.type == 'tel') {
        formatPhoneNumber(event);
    }
    emit('update:modelValue', event.target.value)
}

// phone number
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
const handleFocus = (event) => {
    isFocused.value = true
    if (!event.target.value && props.type == 'tel') {
        event.target.value = "+998 ";
    }
};


// password
const show = ref(false)
const toggleShowPassword = () => {
    show.value = !show.value;
    if (isFocused.value) {
        // If the input was focused, refocus it after toggling visibility
        requestAnimationFrame(() => {
            document.getElementById('password').focus();
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

</script>

<template>
    <div class="flex flex-col gap-[10px]">
        <div class="relative h-[50px] w-full">
            <input :type="inputType" :id="props.id"
                class="block h-full w-full pr-4 pt-5 pb-2.5 pl-[54px] bg-bg hover:bg-bg2 rounded-[25px] text-base text-black outline-none peer caret-yellow border border-bg focus:border-blue focus:hover:shadow-[0px_0px_0px_4px_rgba(25,119,241,0.20)] focus:bg-white"
                placeholder=" " @input="updateValue" pattern="\d*" maxlength="18" @focus="handleFocus" v-model="phone"
                @blur="isFocused = false" />
            <label :for="props.id"
                class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-[54px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                {{ props.placeholder }}
            </label>
            <div
                class="input-focus absolute inset-y-0 left-0 flex justify-center items-center ml-5 w-6 pointer-events-none">
                <slot></slot>
            </div>
            <div v-if="props.type == 'password'" @mousedown="toggleShowPassword"
                class="group absolute inset-y-0 right-5 flex justify-center items-center ml-5 w-6">
                <svg v-if="show" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C8.18448 5 4.82549 7.79533 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C15.8155 19 19.1745 16.2047 21.1303 14.1469ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        class="fill-lightGray group-hover:fill-blue group-active:fill-pressed" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.6429 17.7036C15.2337 18.4709 13.66 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C3.69953 8.98001 4.78196 7.97414 6.04468 7.10534L3.46967 4.53033ZM9.41536 10.476C9.15145 10.9227 9 11.4436 9 12C9 13.6569 10.3431 15 12 15C12.5564 15 13.0773 14.8486 13.524 14.5846L9.41536 10.476ZM12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C20.6902 14.6099 20.1791 15.1103 19.6078 15.6077L9.4127 5.41264C10.2422 5.15256 11.1086 5 12 5Z"
                        class="fill-lightGray group-hover:fill-blue group-active:fill-pressed" />
                </svg>
            </div>
        </div>
    </div>
</template>