<script setup>

// search input
const search = ref(null)
const isFocused = ref(false)

function cons(val) {
    console.log(val)
}

</script>

<template>
    <div class="flex gap-2.5 bg-white p-5 min-w-full">
        <div class="logo font-bold">
            LOGO
        </div>
        <form class="search-bar w-full">
            <div class="relative h-full">
                <input type="text" id="search" v-model="search" @focus="isFocused = true" @blur="isFocused = false"
                    class="rounded-3xl bg-bg hover:bg-bg2 w-full h-full pl-5 outline-none caret-yellow placeholder:text-gray placeholder:text-base"
                    placeholder="Поиск объявлений" required>
                <div class="absolute right-2.5 top-0 my-2 flex gap-2.5 items-center">
                    <div class="clear cursor-pointer duration-100 ease-in transition-all opacity-0" :class="{ 'visible': search }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                fill="#A7AABC" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
                                class="pressed" />
                        </svg>
                    </div>
                    <button type="submit"
                        class="btn text-black bg-yellow rounded-3xl py-[9px] px-5 text-sm lheight-normal opacity-0 duration-100 ease-in transition-all"
                        :class="{ 'visible': search && isFocused }">Найти</button>
                </div>
            </div>
        </form>
        <button class="h-[50px] py-3 px-5 bg-yellow rounded-full whitespace-nowrap text-black text-base">Разместить
            объявление</button>
    </div>
</template>

<style scoped>
input:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #E9EFFF;
}

.visible {
    opacity: 1;
}

.clear:hover path {
    fill: #1977F1;
}

.clear:active path {
    fill: #1977F1;
}

.clear path.pressed {
    display: none;
}

.clear:active path.pressed {
    display: block;
    fill: black;
    fill-opacity: 0.1;
}
</style>