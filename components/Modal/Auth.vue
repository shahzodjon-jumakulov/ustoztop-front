<script setup>


const isSelected = ref(null)


</script>

<template>
    <teleport to="body">
        <div class="fixed inset-0 bg-black bg-opacity-60 z-10">
            <div class="flex justify-center items-center min-h-screen">
                <div class="p-5 bg-white inline-flex flex-col gap-2.5 justify-center items-center rounded-3xl w-[500px]">
                    <div class="ml-auto">
                        <svg class="group cursor-pointer p-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.3588 15.3587C15.0659 15.6516 14.591 15.6516 14.2981 15.3587L12 13.0606L9.7019 15.3587C9.40901 15.6516 8.93413 15.6516 8.64124 15.3587C8.34835 15.0658 8.34835 14.5909 8.64124 14.298L10.9393 11.9999L8.64125 9.70184C8.34836 9.40895 8.34836 8.93408 8.64125 8.64118C8.93415 8.34829 9.40902 8.34829 9.70191 8.64118L12 10.9393L14.2981 8.64119C14.591 8.3483 15.0659 8.3483 15.3588 8.64119C15.6516 8.93409 15.6516 9.40896 15.3588 9.70185L13.0607 11.9999L15.3588 14.298C15.6517 14.5909 15.6517 15.0658 15.3588 15.3587Z"
                                class="fill-[#A7AABC] group-hover:fill-blue group-active:fill-pressed" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-5 text-center w-full">
                        <div class="text-2xl text-black font-bold">Регистрация</div>
                        <div class="flex gap-2.5">
                            <div class="group bg-white border border-bg2 rounded-3xl p-[5px] w-1/2 aspect-square flex flex-col gap-[5px] justify-center items-center cursor-pointer"
                                :class="{ selected: isSelected == 1 }" @click="isSelected = 1">
                                <div class="px-2.5 py-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="36" viewBox="0 0 29 36"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.5 16C18.9183 16 22.5 12.4183 22.5 8C22.5 3.58172 18.9183 0 14.5 0C10.0817 0 6.5 3.58172 6.5 8C6.5 12.4183 10.0817 16 14.5 16ZM14.5 36C22.232 36 28.5 32.4183 28.5 28C28.5 23.5817 22.232 20 14.5 20C6.76801 20 0.5 23.5817 0.5 28C0.5 32.4183 6.76801 36 14.5 36Z"
                                            class="fill-icon group-hover:fill-blue" />
                                    </svg>
                                </div>
                                <div class="text-gray text-base group-hover:text-black">
                                    Репетитор
                                </div>
                            </div>
                            <div
                                class="bg-white border border-bg2 rounded-3xl p-[5px] w-1/2 aspect-square flex justify-center items-center">
                                Учебное заведение</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>