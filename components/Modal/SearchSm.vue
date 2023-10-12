<template>
    <div class="fixed w-full h-full flex bg-white overflow-auto justify-center">
        <div class="flex flex-col w-[480px] mx-auto">
            <div class="flex justify-between items-center p-5">
                <img src="~/assets/images/left_arrow.svg" alt="left arrow" @click="$emit('close')" />
                <p class="text-[20px] font-bold text-black">Фильтры</p>
                <button class="text-[12px] text-blue">Сбросить</button>
            </div>
            <div class="flex flex-col w-[480px] p-5">
                <div class="flex flex-col gap-[40px]">
                    <div class="flex flex-col self-stretch xl:min-w-[352px] lg:min-w-[267px]">
                        <div class="flex justify-between items-center py-[15px]">
                            <p class="font-bold text-[16px] text-black">Категории</p>
                        </div>
                        <button class="px-5 py-[15px] flex self-stretch items-center text-[14px] gap-2.5 text-gray">
                            <img src="~/assets/images/direaction_right.svg" alt="down arrow" />
                            <p class="flex gap-2.5">Все категории<span class="px-2 rounded-full bg-bg2">19</span></p>
                        </button>
                        <button class="px-5 py-[15px] flex self-stretch items-center text-[14px] gap-2.5 text-gray">
                            <img src="~/assets/images/direaction_right.svg" alt="down arrow" />
                            <p class="flex gap-2.5">Школьные предметы<span class="px-2 rounded-full bg-bg2">19</span>
                            </p>
                        </button>
                        <div class="flex flex-col">
                            <button
                                class="group transition-all rounded-[100px] px-2.5 flex self-stretch items-center text-[14px] py-3 bg-white hover:bg-bg w-full">
                                <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                    Математика<span class="px-2 rounded-full bg-bg2 font-normal text-black">19</span>
                                </p>
                            </button>
                            <button
                                class="group transition-all rounded-[100px] px-2.5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                    Математика на английском<span class="px-2 rounded-full bg-bg2">19</span></p>
                            </button>
                            <button
                                class="group transition-all rounded-[100px] px-2.5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                    Математика для детей<span class="px-2 rounded-full bg-bg2">19</span>
                                </p>
                            </button>
                            <button
                                class="group transition-all rounded-[100px] px-2.5 flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">
                                    Математика ДТМ<span class="px-2 rounded-full bg-bg2">19</span></p>
                            </button>
                            <button
                                class="group transition-all rounded-[100px] px-[10px] flex self-stretch items-center text-[14px] py-3 bg-white w-full">
                                <p class="flex gap-2.5 transition-all group-hover:text-blue group-hover:font-bold">SAT
                                    математика<span class="px-2 rounded-full bg-bg2">19</span></p>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[15px]">
                        <p class="font-bold text-[16px] text-black">Цена <span
                                class="text-[16px] text-gray font-normal">(сум)</span>
                        </p>
                        <form class="flex flex-row justify-center items-stretch gap-2.5">
                            <div class="flex items-center rounded-[200px] w-[215px] px-5 py-3 gap-[3px] bg-bg">
                                <label for="min_price" class="text-gray text-[12px]">от</label>
                                <input id="min_price"
                                    class="bg-bg outline-none w-[159px] text-black text-[14px] font-bold placeholder:text-black placeholder:text[14px] placeholder:font-bold"
                                    placeholder="200 0000" />
                            </div>
                            <div class="flex items-center rounded-[200px] w-[215px] px-5 py-3 gap-[3px] bg-bg">
                                <label for="max_price" class="text-gray text-[12px]">до</label>
                                <input id="max_price"
                                    class="bg-bg outline-none w-[159px] text-black text-[14px] font-bold placeholder:text-black placeholder:text[14px] placeholder:font-bold"
                                    placeholder="3 000 000" />
                            </div>
                        </form>
                    </div>
                    <div class="flex items-stretch justify-between text-[12px] text-gray p-[5px] bg-bg rounded-[69px]">
                        <button class="py-[5px] px-3 hover:text-blue hover:bg-white rounded-[200px]">Все</button>
                        <button
                            class="flex items-center gap-[5px] px-[14px] hover:text-blue hover:bg-white rounded-[200px]"><img
                                src="~/assets/images/user.svg" alt="profile" />Репетиторы</button>
                        <button
                            class="px-[8px] flex justify-center w-[217px] items-center gap-[5px] hover:text-blue hover:bg-white rounded-[200px]"><img
                                src="~/assets/images/hospital.svg" alt="hospital" />Учебные
                            заведения</button>
                    </div>
                    <div class="flex gap-[40px]">
                        <div class="flex flex-col gap-[15px] w-[200px]">
                            <p class="font-bold text-[16px] text-black">Для кого</p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex gap-[5px]">
                                    <input id="input_radio" name="input_radio" type="radio" />
                                    <label for="input_radio" class="text-[14px] text-black">Без
                                        разницы</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" name="input_radio" />
                                    <label class="text-[14px] text-black">Дошкольники</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" name="input_radio" />
                                    <label class="text-[14px] text-black">Школьники</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Абитуриенты</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Студенты</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" />
                                    <label class="text-[14px] text-black">Взрослые</label>
                                </div>
                            </form>
                        </div>
                        <div class="flex flex-col gap-[15px] w-[200px]">
                            <p class="font-bold text-[16px] text-black">Кто преподает</p>
                            <form class="flex flex-col gap-2.5">
                                <div class="flex gap-[5px]">
                                    <input id="input_radio" name="input_radio" type="radio" />
                                    <label for="input_radio" class="text-[14px] text-black">Без
                                        разницы</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" name="input_radio" />
                                    <label class="text-[14px] text-black">Мужчина</label>
                                </div>
                                <div class="flex gap-[5px]">
                                    <input type="radio" name="input_radio" />
                                    <label class="text-[14px] text-black">Женщина</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="flex gap-[40px]">
                        <div class="flex flex-col gap-[15px] w-[200px]">
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
                        <div class="flex flex-col gap-[15px] w-[200px]">
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
                        <p class="font-bold text-[16px] text-black">Локация</p>
                        <button
                            class="px-5 h-[50px] flex justify-center items-center bg-bg rounded-[25px] gap-2.5 overflow-hidden text-gray text-[16px]"><img
                                src="~/assets/images/location_gray.svg" alt="location" />Выберите
                            область и район</button>
                    </div>
                    <button class="text-[16px] text-black bg-yellow mb-10 px-5 py-3 rounded-[125px]">Показать 2 549
                        обьявлений</button>
                </div>
            </div>
        </div>
    </div>
</template>