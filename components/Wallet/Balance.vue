<script setup>

const isOpen = ref(false);
const selected = ref(null);
const price = ref(null);

const isValid = ref(false);

watch(selected, newVal => {
    if (newVal != null && price.value) {
        isValid.value = true;
    } else {
        isValid.value = false;
    }
})

watch(price, newVal => {
    if (newVal && selected.value != null) {
        isValid.value = true;
    } else {
        isValid.value = false;
    }
})
</script>

<template>
    <div class="bg-white rounded-3xl p-5 flex flex-col gap-[15px]">
        <p class="text-base text-black font-bold">Кошелёк</p>
        <div class="flex flex-col gap-[15px]">
            <p class="text-blue text-2xl font-bold">0 сум</p>
            <BaseButton state="primary" size="large" @click="isOpen = true">
                <div class="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.5 0H4.50001C2.82132 0 1.38416 1.03408 0.790771 2.5H14.2093C13.6159 1.03408 12.1787 0 10.5 0ZM20.5 14H16.5C15.3954 14 14.5 13.1046 14.5 12C14.5 10.8954 15.3954 10 16.5 10H20.5V14ZM0.5 4H16.5C18.7091 4 20.5 5.79086 20.5 8V8.5H16.5C14.567 8.5 13 10.067 13 12C13 13.933 14.567 15.5 16.5 15.5H20.5V16C20.5 18.2091 18.7091 20 16.5 20H4.5C2.29086 20 0.5 18.2091 0.5 16V4Z"
                            fill="black" />
                    </svg>
                </div>
                <span>Пополнить баланс</span>
            </BaseButton>
        </div>
        <!-- payment modal -->
        <Teleport to="body">
        <div class="fixed inset-0 transition-all duration-300 ease-in-out"
            :class="isOpen ? 'z-[99] opacity-100' : '-z-10 opacity-0'">
            <div @click="isOpen = false" class="bg-black bg-opacity-60 w-full absolute md:h-full"></div>
            <div
                class="bg-white p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 md:gap-2.5 max-w-[804px] h-full w-full md:h-fit md:fixed md:top-1/2 md:-translate-y-1/2 md:w-[calc(100%-40px)] md:left-1/2 md:-translate-x-1/2 md:rounded-3xl">
                <div class="pb-4 sm:pb-5 md:pb-0 flex justify-center items-center gap-[5px] md:justify-end">
                    <BaseBack @click="isOpen = false"
                        class="absolute left-4 top-[18px] sm:top-[22px] sm:left-5 md:hidden" />
                    <div class="flex gap-[5px] items-center md:hidden">
                        <span class="text-xl font-bold text-black">Пополнение</span>
                    </div>
                    <BaseClose @click="isOpen = false" class="max-md:hidden" />
                </div>
                <div class="flex flex-col gap-8 sm:gap-10 flex-grow">
                    <input type="number" placeholder="Сумма пополнения" v-model="price"
                        class="bg-bg rounded-3xl border border-[rgba(0,0,0,0)] h-[50px] px-5 w-full caret-yellow text-base text-black hover:bg-bg2 focus:outline-none focus:border-blue focus:hover:shadow-[0px_0px_0px_4px_rgba(25,119,241,0.20)]">
                    <div class="flex flex-col gap-[15px] select-none flex-grow">
                        <p class="text-base font-bold">Способ оплаты</p>
                        <div class="flex flex-col gap-2.5 flex-grow md:flex-row">
                            <div @click="selected = 0" :class="{ 'selected border-blue !bg-white': selected == 0 }"
                                class="group/icon bg-white hover:bg-bg active:bg-bg2 cursor-pointer border border-bg2 rounded-2xl flex justify-center items-center h-1/3 w-full md:h-[200px]">
                                <img class="transition-all duration-300 ease-in-out group-hover/icon:scale-105 group-active/icon:scale-105 group-[.selected]/icon:scale-105"
                                    src="~/assets/images/click_large.svg" alt="click">
                            </div>
                            <div @click="selected = 1" :class="{ 'selected border-blue !bg-white': selected == 1 }"
                                class="group/icon bg-white hover:bg-bg active:bg-bg2 cursor-pointer border border-bg2 rounded-2xl flex justify-center items-center h-1/3 w-full md:h-[200px]">
                                <img class="transition-all duration-300 ease-in-out group-hover/icon:scale-105 group-active/icon:scale-105 group-[.selected]/icon:scale-105"
                                    src="~/assets/images/payme_large.svg" alt="payme">
                            </div>
                            <div @click="selected = 2" :class="{ 'selected border-blue !bg-white': selected == 2 }"
                                class="group/icon bg-white hover:bg-bg active:bg-bg2 cursor-pointer border border-bg2 rounded-2xl flex justify-center items-center h-1/3 w-full md:h-[200px]">
                                <img class="transition-all duration-300 ease-in-out group-hover/icon:scale-105 group-active/icon:scale-105 group-[.selected]/icon:scale-105"
                                    src="~/assets/images/paynet_large.svg" alt="paynet">
                            </div>
                        </div>
                    </div>
                    <BaseButton :state="!isValid ? 'tertiary' : 'primary'" size="large"
                        :class="{ 'pointer-events-none': !isValid }">Продолжить</BaseButton>
                </div>
            </div>
        </div>
        </Teleport>
    </div>
</template>