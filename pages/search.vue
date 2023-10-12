<script setup>
import Logo from '~/components/Page/Logo.vue';
import SavedCard from '~/components/Base/SavedCard.vue';
import Search from '~/components/Modal/Search.vue';
import SearchSm from '~/components/Modal/SearchSm.vue';
import SearchMd from '~/components/Modal/SearchMd.vue';

import { ref, watch } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

</script>
<template>
    <div class="flex flex-col gap-2.5 lg:items-center">
        <Search @close="closeModal" v-if="isModalOpen" class="sm:hidden" />
        <SearchSm @close="closeModal" v-if="isModalOpen" class="hidden sm:block md:hidden" />
        <SearchMd @close="closeModal" v-if="isModalOpen" class="hidden md:block lg:hidden" />
        <!-- Hedaer -->
        <div class="flex flex-col bg-white md:w-full">
            <div class="flex justify-center  p-4 sm:p-5 gap-5 lg:hidden xl:hidden 2xl:hidden">
                <Logo class="w-full max-w-[241px] md:h-[50px] hidden md:flex" />
                <div class="flex gap-[5px] sm:gap-[10px] justify-center md:justify-start w-full align-stretch">
                    <img class="md:hidden" src="~/assets/images/left_arrow.svg" alt="left" />
                    <div
                        class="flex justify-between rounded-[25px] text-black text-[14px] font-normal bg-bg2 w-full px-2.5 h-[34px] sm:h-[50px] sm:pl-5 sm:pr-2.5">
                        <input class="bg-bg2 w-full outline-none" type="text" value="Математика" />
                        <img class="w-[18px]" src="~/assets/images/close.svg" alt="close" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col px-4 pb-4 sm:px-5 sm:pb-5 xl:justify-start xl:mx-auto xl:w-[1216px] w-full gap-2.5 ">
                <h1 class="text-black text-[24px] sm:text-[32px] font-bold leading-7 sm:leading-[38px] text-left">
                    Объявления
                    по
                    запросу
                    <span class="text-blue text-[24px] sm:text-[32px] font-bold">«математика»</span>
                </h1>
                <div class="flex justify-between sm:justify-start gap-5 items-center text-[12px] sm:text-[14px]">
                    <p class="text-black">Найдено 136 объявлений</p>
                    <div class="flex gap-[5px]">
                        <img src="~/assets/images/location.svg" alt="location" />
                        <p class="text-blue">Показать на карте</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main -->
        <div class="flex flex-col">
            <div class="flex items-stretch px-4 py-5 justify-between">
                <button class="flex items-center gap-2.5 px-5 text-black text-[14px] min-w-[168px] font-normal">Сначала
                    новые<img src="~/assets/images/arrow.svg" alt="down arrow" />
                </button>
                <button class="flex items-center text-blue gap-[5px] px-5 py-2.5 lg:hidden" @click="openModal">
                    <img class="px-[2.25px] py-[5px]" src="~/assets/images/filter.svg" alt="filter" />
                    Фильтры
                </button>
            </div>
            <!-- Main Content -->
            <div class="flex items-start justify-center flex-1 pr-5 max-w-[1216px]">
                <!-- Cards -->
                <div class="flex flex-col gap-5 sm:px-5 w-full">
                    <SavedCard />
                    <SavedCard />
                    <SavedCard />
                    <SavedCard />
                </div>
                <!-- filter -->
                <div class="hidden lg:flex lg:flex-col p-5 bg-white rounded-[25px]">
                    <div class="flex flex-col gap-[40px]">
                        <div class="flex flex-col self-stretch xl:min-w-[352px] lg:min-w-[267px]">
                            <div class="flex justify-between items-center py-[15px]">
                                <p class="font-bold text-[16px] text-black">Категории</p>
                                <button class="p-0 outline-none border-none text-blue text-[12px]">Сбросить</button>
                            </div>
                            <button class="px-5 py-[15px] flex self-stretch items-center text-[14px] gap-2.5 text-gray">
                                <img src="~/assets/images/direaction_right.svg" alt="down arrow" />
                                <p class="flex gap-2.5">Все категории<span class="px-2 rounded-full bg-bg2">19</span>
                                </p>
                            </button>
                            <button class="px-5 py-[15px] flex self-stretch items-center text-[14px] gap-2.5 text-gray">
                                <img src="~/assets/images/direaction_right.svg" alt="down arrow" />
                                <p class="flex gap-2.5">Школьные предметы<span class="px-2 rounded-full bg-bg2">19</span>
                                </p>
                            </button>
                            <div class="flex flex-col">
                                <button
                                    class="group transition-all rounded-[100px] px-5 flex self-stretch items-center text-[14px] py-3 bg-white hover:bg-bg w-full">
                                    <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                        Математика<span class="px-2 rounded-full bg-bg2 font-normal text-black">19</span>
                                    </p>
                                </button>
                                <button
                                    class="group transition-all rounded-[100px] px-5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                    <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                        Математика на английском<span class="px-2 rounded-full bg-bg2">19</span></p>
                                </button>
                                <button
                                    class="group transition-all rounded-[100px] px-5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                    <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                        Математика для детей<span class="px-2 rounded-full bg-bg2">19</span>
                                    </p>
                                </button>
                                <button
                                    class="group transition-all rounded-[100px] px-5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                    <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                        Математика ДТМ<span class="px-2 rounded-full bg-bg2">19</span></p>
                                </button>
                                <button
                                    class="group transition-all rounded-[100px] px-5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                    <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                        SAT
                                        математика<span class="px-2 rounded-full bg-bg2">19</span></p>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <p class="font-bold text-[16px] text-black">Цена <span
                                    class="text-[16px] text-gray font-normal">(сум)</span>
                            </p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex items-center rounded-[200px] px-5 py-3 gap-[3px] bg-bg">
                                    <label for="min_price" class="text-gray text-[12px]">от</label>
                                    <input id="min_price"
                                        class="bg-bg outline-none text-black text-[14px] font-bold placeholder:text-black placeholder:text[14px] placeholder:font-bold"
                                        placeholder="200 0000" />
                                </div>
                                <div class="flex items-center rounded-[200px] px-5 py-3 gap-[3px] bg-bg">
                                    <label for="max_price" class="text-gray text-[12px]">до</label>
                                    <input id="max_price"
                                        class="bg-bg outline-none text-black text-[14px] font-bold placeholder:text-black placeholder:text[14px] placeholder:font-bold"
                                        placeholder="3 000 000" />
                                </div>
                            </form>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <p class="font-bold text-[16px] text-black">Цена</p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex gap-[5px]">
                                    <input id="input_radio" name="input_radio" type="radio" />
                                    <label for="input_radio" class="text-[14px] text-black">Без
                                        разницы</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input id="input_radio2" type="radio" name="input_radio" />
                                    <label for="input_radio2" class="text-[14px] text-black">Дошкольники</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input id="input_radio3" type="radio" name="input_radio" />
                                    <label for="input_radio3" class="text-[14px] text-black">Школьники</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input id="input_radio4" type="radio" name="input_radio" />
                                    <label for="input_radio4" class="text-[14px] text-black">Абитуриенты</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input id="input_radio5" type="radio" name="input_radio" />
                                    <label for="input_radio5" class="text-[14px] text-black">Студенты</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input id="input_radio6" type="radio" name="input_radio" />
                                    <label for="input_radio6" class="text-[14px] text-black">Взрослые</label>
                                </div>
                            </form>
                        </div>
                        <div class="flex items-stretch justify-between text-[12px] text-gray p-[5px] bg-bg rounded-[69px]">
                            <button class="py-[5px] px-3 hover:text-blue hover:bg-white rounded-[200px]">Все</button>
                            <button
                                class="flex items-center gap-[5px] px-[14px] hover:text-blue hover:bg-white rounded-[200px]"><img
                                    src="~/assets/images/user.svg" alt="profile" />Репетиторы</button>
                            <button
                                class="px-[8px] flex justify-center w-[96px] items-center gap-[5px] hover:text-blue hover:bg-white rounded-[200px]"><img
                                    src="~/assets/images/hospital.svg" alt="hospital" />Учебные
                                заведения</button>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <p class="font-bold text-[16px] text-black">Место занятий</p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Без разницы</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">У ученика</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">У репетитора</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Онлайн</label>
                                </div>
                            </form>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <p class="font-bold text-[16px] text-black">Тип занятий</p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Без разницы</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Групповые</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Индивидуальные</label>
                                </div>
                            </form>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <p class="font-bold text-[16px] text-black">Язык занятий</p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Без разницы</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Узбекский</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Русский</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Английский</label>
                                </div>
                            </form>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <p class="font-bold text-[16px] text-black">Язык занятий</p>
                            <button
                                class="px-5 h-[50px] flex justify-center items-center bg-bg rounded-[25px] overflow-hidden text-gray text-[16px]">
                                <img src="~/assets/images/location_gray.svg" alt="location" />
                                <span class="truncate">Выберите область и район</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>