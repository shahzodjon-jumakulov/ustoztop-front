<script setup>
const localePath = useLocalePath();

const props = defineProps({
    isTop: {
        default: false,
        type: Boolean,
    },
    isSaved: {
        default: false,
        type: Boolean,
    },
    link: {
        type: String,
    },
    phoneNumber: {
        default: true,
        type: Boolean,
    },
})

const saved = ref(props.isSaved)

const showNumber = ref(false);
const isHovered = ref(false);

const number = '+998996073137'

</script>

<template>
    <NuxtLink :to="localePath(props.link)" class="bg-white rounded-3xl border-2 border-[rgba(0,0,0,0)] cursor-pointer select-none transition-colors duration-100 ease-in-out"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false"
        :class="isTop ? 'group border-yellow active:bg-lightYellow active:border-[rgba(0,0,0,0)]' : 'hover:border-[rgba(25,119,241,0.30)] active:bg-bg2 active:border-[rgba(0,0,0,0)]'">
        <div class="border-2 border-[rgba(0,0,0,0)] p-4 sm:p-5 rounded-[22px] group-hover:border-lightYellow">
            <div class="flex flex-col gap-[15px]">
                <div class="flex flex-col gap-2.5">
                    <div class="flex flex-col gap-[5px]">
                        <div class="flex">
                            <div class="text-xl text-blue font-bold line-clamp-2 w-full">
                                <div class="flex gap-2.5 items-center h-6 float-right ml-2.5 mt-1">
                                    <div v-if="props.isTop"
                                        class="bg-lightYellow  rounded-[55px] px-[10.3px] flex items-center justify-center h-full w-[51px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16"
                                            fill="none">
                                            <path
                                                d="M6.08967 9.99857H7.26947V12.2862H5.43037C4.3778 12.2862 3.54503 11.9852 2.93197 11.3832C2.32474 10.7755 2.02116 9.9441 2.02116 8.88912V4.83851H0.286133V4.2881L4.0771 0.289062H4.57156V2.77449H7.2174V4.83851H4.61493V8.54516C4.61493 9.00955 4.74216 9.36791 4.99661 9.62017C5.25107 9.87244 5.61542 9.99857 6.08967 9.99857ZM13.5067 12.5528C12.5293 12.5528 11.6444 12.3349 10.8522 11.8992C10.0599 11.4635 9.43818 10.8615 8.98709 10.0932C8.54175 9.32491 8.31908 8.47059 8.31908 7.53033C8.31908 6.57861 8.54175 5.72146 8.98709 4.95891C9.43818 4.19064 10.0599 3.5915 10.8522 3.1615C11.6444 2.72576 12.5293 2.50788 13.5067 2.50788C14.4783 2.50788 15.3602 2.72576 16.1525 3.1615C16.9448 3.5915 17.5665 4.19064 18.0176 4.95891C18.4687 5.72719 18.6942 6.58431 18.6942 7.53033C18.6942 8.47059 18.4687 9.32491 18.0176 10.0932C17.5665 10.8615 16.9448 11.4635 16.1525 11.8992C15.3602 12.3349 14.4783 12.5528 13.5067 12.5528ZM11.6676 9.41376C12.1476 9.8954 12.7606 10.1362 13.5067 10.1362C14.2527 10.1362 14.8657 9.8954 15.3457 9.41376C15.8257 8.92641 16.0658 8.29861 16.0658 7.53033C16.0658 6.76206 15.8257 6.13713 15.3457 5.65552C14.8657 5.16818 14.2527 4.92451 13.5067 4.92451C12.7606 4.92451 12.1476 5.16818 11.6676 5.65552C11.1876 6.13713 10.9476 6.76206 10.9476 7.53033C10.9476 8.29861 11.1876 8.92641 11.6676 9.41376ZM25.7904 2.50788C26.7386 2.50788 27.5943 2.72576 28.3583 3.1615C29.127 3.5915 29.7285 4.19064 30.1622 4.95891C30.5959 5.72719 30.8131 6.58431 30.8131 7.53033C30.8131 8.47636 30.5959 9.33639 30.1622 10.1104C29.7285 10.8786 29.127 11.4806 28.3583 11.9164C27.5943 12.3522 26.7386 12.57 25.7904 12.57C24.8189 12.57 23.9399 12.3034 23.1533 11.7702V15.7176H20.5594V2.77449H22.2681L22.7107 3.6431C23.5726 2.88629 24.599 2.50788 25.7904 2.50788ZM23.6994 9.39657C24.1968 9.88962 24.8216 10.1362 25.5732 10.1362C26.3255 10.1362 26.9469 9.88962 27.4388 9.39657C27.9355 8.90352 28.1842 8.28142 28.1842 7.53033C28.1842 6.77925 27.9355 6.1572 27.4388 5.66413C26.9469 5.17105 26.3255 4.92451 25.5732 4.92451C24.8216 4.92451 24.1968 5.17392 23.6994 5.67272C23.2081 6.16579 22.9622 6.78502 22.9622 7.53033C22.9622 8.27572 23.2081 8.89775 23.6994 9.39657Z"
                                                fill="#FDC500" />
                                        </svg>
                                    </div>
                                    <div class="group/icon cursor-pointer w-6 h-6 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4 7.75V18C4 19.6481 5.88153 20.5889 7.2 19.6L10.8 16.9C11.5111 16.3667 12.4889 16.3667 13.2 16.9L16.8 19.6C18.1185 20.5889 20 19.6481 20 18V7.75H4ZM4 6.25H20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V6.25Z"
                                                class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                        </svg>
                                    </div>
                                </div>
                                Репетитор по математике
                            </div>
                        </div>
                        <div class="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.9987 7.32552C9.47146 7.32552 10.6654 6.13161 10.6654 4.65885C10.6654 3.18609 9.47146 1.99219 7.9987 1.99219C6.52594 1.99219 5.33203 3.18609 5.33203 4.65885C5.33203 6.13161 6.52594 7.32552 7.9987 7.32552ZM7.9987 13.9896C10.576 13.9896 12.6654 12.7957 12.6654 11.3229C12.6654 9.85016 10.576 8.65625 7.9987 8.65625C5.42137 8.65625 3.33203 9.85016 3.33203 11.3229C3.33203 12.7957 5.42137 13.9896 7.9987 13.9896Z"
                                    fill="#787B8D" />
                            </svg>
                            <span class="text-xs text-gray">Рустам Абдуллаев</span>
                        </div>
                    </div>
                    <p class="line-clamp-2 text-sm text-black leading-snug">
                        Я помогаю ученикам 8-9 классов успешно подготовиться и сдать ОГЭ на высокий балл!
                        После занятия Вы сможете оценить качество моей работы и как ученик усваивает материал. А дальше мы
                        совместно определим дальнейший формат и стоимость занятий.
                    </p>
                </div>
                <div class="flex justify-between">
                    <div class="flex flex-col gap-[15px]">
                        <p class="text-lg font-bold">700 000 сум/в месяц</p>
                        <div class="flex justify-between items-center h-6">
                            <div class="flex gap-2.5 items-center" :class="{ 'gap-5': isTop }">
                                <div class="flex gap-[5px] items-center">
                                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9 16.5C11.5312 16.5 15.75 11.8486 15.75 8.16667C15.75 4.48477 12.7279 1.5 9 1.5C5.27208 1.5 2.25 4.48477 2.25 8.16667C2.25 11.8486 6.46875 16.5 9 16.5ZM9 10.5C10.2426 10.5 11.25 9.49264 11.25 8.25C11.25 7.00736 10.2426 6 9 6C7.75736 6 6.75 7.00736 6.75 8.25C6.75 9.49264 7.75736 10.5 9 10.5Z"
                                                fill="#787B8D" />
                                        </svg>
                                    </div>
                                    <span class="text-xs text-gray">Ташкент</span>
                                </div>
                                <div class="flex gap-[5px] items-center">
                                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.8477 10.6102C16.7174 9.69512 16.7174 8.30488 15.8477 7.38982C14.3809 5.8465 11.8616 3.75 9 3.75C6.13836 3.75 3.61912 5.8465 2.15228 7.38982C1.28257 8.30488 1.28257 9.69512 2.15228 10.6102C3.61912 12.1535 6.13836 14.25 9 14.25C11.8616 14.25 14.3809 12.1535 15.8477 10.6102ZM9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                                                fill="#787B8D" />
                                        </svg>
                                    </div>
                                    <span class="text-xs text-gray">2 517</span>
                                </div>
                                <div class="flex gap-[5px] items-center">
                                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4 0.9375C4.31066 0.9375 4.5625 1.18934 4.5625 1.5V2.625H9.4375V1.5C9.4375 1.18934 9.68934 0.9375 10 0.9375C10.3107 0.9375 10.5625 1.18934 10.5625 1.5V2.625H10.75C12.4069 2.625 13.75 3.96815 13.75 5.625V6.1875H0.25V5.625C0.25 3.96815 1.59315 2.625 3.25 2.625H3.4375V1.5C3.4375 1.18934 3.68934 0.9375 4 0.9375ZM0.25 7.3125H13.75V13.5C13.75 15.1569 12.4069 16.5 10.75 16.5H3.25C1.59315 16.5 0.25 15.1569 0.25 13.5V7.3125Z"
                                                fill="#787B8D" />
                                        </svg>
                                    </div>
                                    <span class="text-xs text-gray">17.07.2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="showNumber = true"  v-if="(showNumber || isHovered) && props.phoneNumber"
                        class="max-md:hidden self-end bg-bg rounded-[125px] px-5 py-3 h-[34px] flex gap-[5px] items-center hover:bg-bg2 active:bg-[#D2D7E5] z-10">
                        <span class="w-[18px] h-[18px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.75 0.6875C7.43934 0.6875 7.1875 0.93934 7.1875 1.25C7.1875 1.56066 7.43934 1.8125 7.75 1.8125C8.46406 1.8125 9.17113 1.95315 9.83084 2.22641C10.4905 2.49967 11.09 2.90019 11.5949 3.40511C12.0998 3.91003 12.5003 4.50945 12.7736 5.16916C13.0469 5.82887 13.1875 6.53594 13.1875 7.25C13.1875 7.56066 13.4393 7.8125 13.75 7.8125C14.0607 7.8125 14.3125 7.56066 14.3125 7.25C14.3125 6.3882 14.1428 5.53484 13.813 4.73864C13.4832 3.94244 12.9998 3.219 12.3904 2.60961C11.781 2.00023 11.0576 1.51684 10.2614 1.18704C9.46516 0.857244 8.6118 0.6875 7.75 0.6875ZM13.75 13.25V12.0155C13.75 11.4022 13.3766 10.8506 12.8071 10.6228L11.2815 10.0126C10.5571 9.72286 9.73164 10.0367 9.38276 10.7345L9.25 11C9.25 11 7.375 10.625 5.875 9.125C4.375 7.625 4 5.75 4 5.75L4.26551 5.61724C4.96328 5.26836 5.27714 4.44285 4.98741 3.71852L4.37717 2.19291C4.14937 1.62343 3.59781 1.25 2.98445 1.25H1.75C0.921573 1.25 0.25 1.92157 0.25 2.75C0.25 9.37742 5.62258 14.75 12.25 14.75C13.0784 14.75 13.75 14.0784 13.75 13.25ZM7.1875 4.25C7.1875 3.93934 7.43934 3.6875 7.75 3.6875C8.21783 3.6875 8.68109 3.77965 9.11331 3.95868C9.54553 4.13771 9.93826 4.40012 10.2691 4.73093C10.5999 5.06174 10.8623 5.45447 11.0413 5.88669C11.2204 6.31891 11.3125 6.78217 11.3125 7.25C11.3125 7.56066 11.0607 7.8125 10.75 7.8125C10.4393 7.8125 10.1875 7.56066 10.1875 7.25C10.1875 6.9299 10.1245 6.61294 10.002 6.31721C9.87946 6.02148 9.69992 5.75277 9.47357 5.52643C9.24723 5.30008 8.97852 5.12054 8.68279 4.99804C8.38706 4.87555 8.0701 4.8125 7.75 4.8125C7.43934 4.8125 7.1875 4.56066 7.1875 4.25Z"
                                    fill="black" :class="{ 'fill-blue': showNumber }" />
                            </svg>
                        </span>
                        <span v-if="!showNumber" class="text-sm text-black">Показать номер</span>
                        <span v-else class="text-sm text-blue font-bold">{{ numberWithSpaces(number, false) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>