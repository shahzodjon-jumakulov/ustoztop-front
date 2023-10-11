<script setup>

const props = defineProps(['type'])

const isOpen = ref(false);

const buttons = ref([])

switch (props.type) {
    case 'active':
        buttons.value = ['edit', 'deactivate', 'promote']
        break;
    case 'pending':
        buttons.value = ['edit', 'promote']
        break;
    case 'not-paid':
        buttons.value = ['edit', 'deactivate', 'activate']
        break;
    case 'not-active':
        buttons.value = ['edit', 'delete', 'activate']
        break;
    case 'rejected':
        buttons.value = ['edit']
        break;

    default:
        break;
}
</script>

<template>
    <div class="p-5 bg-white flex flex-col gap-4 md:gap-5 rounded-3xl">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-[5px]">
                <p class="text-xl md:text-2xl font-bold text-blue">Репетитор по математике </p>
                <p class="max-md:hidden line-clamp-2 text-sm leading-snug text-black">
                    Репетитор по математике и физике с 5-летним стажем. С отличием закончил филиал
                    Российского государственного университета нефти и газа имени И.М. Губкина в г. Ташкенте в 2020 году.
                    Доступны занятия: Репетитор по математике и физике с 5-летним стажем.</p>
                <p class="text-black font-bold text-base md:text-lg">700 000 сум/в месяц</p>
            </div>
            <!-- stats -->
            <div class="flex flex-wrap gap-2.5" v-if="type != 'rejected'">
                <div class="flex gap-[5px] items-center">
                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.8477 10.6102C16.7174 9.69512 16.7174 8.30488 15.8477 7.38982C14.3809 5.8465 11.8616 3.75 9 3.75C6.13836 3.75 3.61912 5.8465 2.15228 7.38982C1.28257 8.30488 1.28257 9.69512 2.15228 10.6102C3.61912 12.1535 6.13836 14.25 9 14.25C11.8616 14.25 14.3809 12.1535 15.8477 10.6102ZM9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                                fill="#787B8D" />
                        </svg>
                    </div>
                    <span class="text-xs text-gray">2 517</span>
                </div>
                <div class="flex gap-[5px] items-center">
                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.75 0.6875C7.43934 0.6875 7.1875 0.93934 7.1875 1.25C7.1875 1.56066 7.43934 1.8125 7.75 1.8125C8.46406 1.8125 9.17113 1.95315 9.83084 2.22641C10.4905 2.49967 11.09 2.90019 11.5949 3.40511C12.0998 3.91003 12.5003 4.50945 12.7736 5.16916C13.0469 5.82887 13.1875 6.53594 13.1875 7.25C13.1875 7.56066 13.4393 7.8125 13.75 7.8125C14.0607 7.8125 14.3125 7.56066 14.3125 7.25C14.3125 6.3882 14.1428 5.53484 13.813 4.73864C13.4832 3.94244 12.9998 3.219 12.3904 2.60961C11.781 2.00023 11.0576 1.51684 10.2614 1.18704C9.46516 0.857244 8.6118 0.6875 7.75 0.6875ZM13.75 13.25V12.0155C13.75 11.4022 13.3766 10.8506 12.8071 10.6228L11.2815 10.0126C10.5571 9.72286 9.73164 10.0367 9.38276 10.7345L9.25 11C9.25 11 7.375 10.625 5.875 9.125C4.375 7.625 4 5.75 4 5.75L4.26551 5.61724C4.96328 5.26836 5.27714 4.44285 4.98741 3.71852L4.37717 2.19291C4.14937 1.62343 3.59781 1.25 2.98445 1.25H1.75C0.921573 1.25 0.25 1.92157 0.25 2.75C0.25 9.37742 5.62258 14.75 12.25 14.75C13.0784 14.75 13.75 14.0784 13.75 13.25ZM7.1875 4.25C7.1875 3.93934 7.43934 3.6875 7.75 3.6875C8.21783 3.6875 8.68109 3.77965 9.11331 3.95868C9.54553 4.13771 9.93826 4.40012 10.2691 4.73093C10.5999 5.06174 10.8623 5.45447 11.0413 5.88669C11.2204 6.31891 11.3125 6.78217 11.3125 7.25C11.3125 7.56066 11.0607 7.8125 10.75 7.8125C10.4393 7.8125 10.1875 7.56066 10.1875 7.25C10.1875 6.9299 10.1245 6.61294 10.002 6.31721C9.87946 6.02148 9.69992 5.75277 9.47357 5.52643C9.24723 5.30008 8.97852 5.12054 8.68279 4.99804C8.38706 4.87555 8.0701 4.8125 7.75 4.8125C7.43934 4.8125 7.1875 4.56066 7.1875 4.25Z"
                                fill="#787B8D" />
                        </svg>
                    </div>
                    <span class="text-xs text-gray">15</span>
                </div>
                <div class="flex gap-[5px] items-center">
                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3 5.8125V13.5C3 14.7361 4.41115 15.4416 5.4 14.7L8.1 12.675C8.63333 12.275 9.36667 12.275 9.9 12.675L12.6 14.7C13.5889 15.4416 15 14.7361 15 13.5V5.8125H3ZM3 4.6875H15V3C15 2.17157 14.3284 1.5 13.5 1.5H4.5C3.67157 1.5 3 2.17157 3 3V4.6875Z"
                                fill="#787B8D" />
                        </svg>
                    </div>
                    <span class="text-xs text-gray">189</span>
                </div>
                <div class="flex gap-[5px] items-center max-sm:w-full">
                    <div class="w-[18px] h-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4 0.9375C4.31066 0.9375 4.5625 1.18934 4.5625 1.5V2.625H9.4375V1.5C9.4375 1.18934 9.68934 0.9375 10 0.9375C10.3107 0.9375 10.5625 1.18934 10.5625 1.5V2.625H10.75C12.4069 2.625 13.75 3.96815 13.75 5.625V6.1875H0.25V5.625C0.25 3.96815 1.59315 2.625 3.25 2.625H3.4375V1.5C3.4375 1.18934 3.68934 0.9375 4 0.9375ZM0.25 7.3125H13.75V13.5C13.75 15.1569 12.4069 16.5 10.75 16.5H3.25C1.59315 16.5 0.25 15.1569 0.25 13.5V7.3125Z"
                                fill="#787B8D" />
                        </svg>
                    </div>
                    <span class="text-xs text-gray">17.07.2023 - 17.08.2023</span>
                </div>
            </div>
            <!-- see statistics -->
            <div class="flex gap-[5px] items-center" v-if="type != 'rejected'">
                <div class="w-[18px] h-[18px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.2501 0.9375C13.9394 0.9375 13.6876 1.18934 13.6876 1.5C13.6876 1.81066 13.9394 2.0625 14.2501 2.0625H15.0845C12.2761 4.30212 10.1391 5.72041 8.1073 6.6628C6.00922 7.63591 3.99654 8.11393 1.42876 8.44204C1.12061 8.48141 0.902722 8.76314 0.942098 9.0713C0.981474 9.37945 1.2632 9.59734 1.57136 9.55796C4.21018 9.22078 6.34442 8.72056 8.58065 7.68337C10.7672 6.66925 13.0253 5.15371 15.9376 2.82083V3.75C15.9376 4.06066 16.1894 4.3125 16.5001 4.3125C16.8107 4.3125 17.0626 4.06066 17.0626 3.75V2.25C17.0626 1.52513 16.4749 0.9375 15.7501 0.9375H14.2501ZM16.5 7.5C16.5 6.67157 15.8284 6 15 6C14.1716 6 13.5 6.67157 13.5 7.5V15C13.5 15.8284 14.1716 16.5 15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V7.5ZM4.5 13.5C4.5 12.6716 3.82843 12 3 12C2.17157 12 1.5 12.6716 1.5 13.5L1.5 15C1.5 15.8284 2.17157 16.5 3 16.5C3.82843 16.5 4.5 15.8284 4.5 15L4.5 13.5ZM9 9C9.82843 9 10.5 9.67157 10.5 10.5V15C10.5 15.8284 9.82843 16.5 9 16.5C8.17157 16.5 7.5 15.8284 7.5 15V10.5C7.5 9.67157 8.17157 9 9 9Z"
                            fill="#1977F1" />
                    </svg>
                </div>
                <span class="text-blue text-xs ">Посмотреть статистику</span>
            </div>
            <!-- rejected message -->
            <div class="p-2.5 rounded-2xl bg-red bg-opacity-10 text-red text-xs flex flex-wrap gap-[5px]" v-if="type == 'rejected'">
                <span>Объявление отклонено модератором.</span>
                <NuxtLink to="#" class="underline">Подробнее</NuxtLink>
            </div>
        </div>
        <div class="flex gap-2.5 h-[34px]">
            <BaseAdButton action="edit" />
            <BaseAdButton class="max-sm:hidden" v-if="buttons[1]" :action="buttons[1]" />
            <BaseAdButton class="max-md:hidden" v-if="buttons[2]" :action="buttons[2]" />
            <div class="relative aspect-square md:hidden" :class="{ 'hidden': buttons.length == 1, 'sm:hidden': buttons.length == 2, 'md:hidden': buttons.length == 3 }">
                <div @click="isOpen = true"
                    class="aspect-square hover:bg-bg active:bg-bg2 rounded-full h-full flex items-center justify-center cursor-pointer">
                    <div class="w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="3" viewBox="0 0 13 3" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.5 1.25C0.5 1.94036 1.05964 2.5 1.75 2.5C2.44036 2.5 3 1.94036 3 1.25C3 0.559644 2.44036 0 1.75 0C1.05964 0 0.5 0.559644 0.5 1.25ZM6.75 2.5C6.05964 2.5 5.5 1.94036 5.5 1.25C5.5 0.559644 6.05964 0 6.75 0C7.44036 0 8 0.559644 8 1.25C8 1.94036 7.44036 2.5 6.75 2.5ZM11.75 2.5C11.0596 2.5 10.5 1.94036 10.5 1.25C10.5 0.559644 11.0596 0 11.75 0C12.4404 0 13 0.559644 13 1.25C13 1.94036 12.4404 2.5 11.75 2.5Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
                <div v-if="isOpen" v-click-outside="() => isOpen = false"
                    class="absolute right-0 top-full w-[222px] bg-white p-2.5 rounded-3xl flex flex-col gap-2.5 border border-bg2 shadow-[0px_8px_24px_-4px_rgba(24,39,75,0.08),0px_6px_12px_-6px_rgba(24,39,75,0.12)]">
                    <BaseAdButton class="sm:hidden" v-if="buttons[1]" :action="buttons[1]" />
                    <BaseAdButton v-if="buttons[2]" :action="buttons[2]" />
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 
    Редактировать
    Удалить
    Деактивировать
    Активировать
    Разместить в ТОП
 -->