<script setup>


const isSelected = ref(null)
const auth = useState("isSignupOpen", () => false)

watch(auth, () => {
    if (auth.value) {
        disableScroll()
    } else {
        enableScroll();
    }
})
</script>

<template>
    <teleport to="body">
        <div class="fixed inset-0 z-10 h-[100svh]" v-if="auth">
            <div class="bg-black bg-opacity-60 w-full absolute"></div>
            <div class="flex justify-center items-center w-full h-full fixed">
                <div
                    class="p-5 bg-white inline-flex flex-col gap-2.5 justify-start items-center md:rounded-3xl w-full h-full">
                    <div class="ml-auto hidden md:block" @click="auth = false, isSelected = null">
                        <svg class="group cursor-pointer p-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.3588 15.3587C15.0659 15.6516 14.591 15.6516 14.2981 15.3587L12 13.0606L9.7019 15.3587C9.40901 15.6516 8.93413 15.6516 8.64124 15.3587C8.34835 15.0658 8.34835 14.5909 8.64124 14.298L10.9393 11.9999L8.64125 9.70184C8.34836 9.40895 8.34836 8.93408 8.64125 8.64118C8.93415 8.34829 9.40902 8.34829 9.70191 8.64118L12 10.9393L14.2981 8.64119C14.591 8.3483 15.0659 8.3483 15.3588 8.64119C15.6516 8.93409 15.6516 9.40896 15.3588 9.70185L13.0607 11.9999L15.3588 14.298C15.6517 14.5909 15.6517 15.0658 15.3588 15.3587Z"
                                class="fill-[#A7AABC] group-hover:fill-blue group-active:fill-pressed" />
                        </svg>
                    </div>
                    <div class="flex flex-col text-center w-full h-full gap-8">
                        <div class="flex items-center justify-center">
                            <div class="ml-auto md:hidden absolute left-5" @click="auth = false, isSelected = null">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                        fill="#A7AABC" />
                                </svg>
                            </div>
                            <div class="text-2xl text-black font-bold">{{ $t("signup") }}</div>
                        </div>
                        <div class="flex flex-col gap-2.5 h-full">
                            <div class="group h-1/2" :class="{ selected: isSelected == 1 }" @click="isSelected = 1">
                                <div
                                    class="bg-white group-active:bg-bg2 group-[.selected]:bg-bg border border-bg2 group-[.selected]:border-blue rounded-3xl p-[5px] flex flex-col gap-[5px] justify-center items-center cursor-pointer h-full">
                                    <div class="px-2.5 py-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="36" viewBox="0 0 29 36"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M14.5 16C18.9183 16 22.5 12.4183 22.5 8C22.5 3.58172 18.9183 0 14.5 0C10.0817 0 6.5 3.58172 6.5 8C6.5 12.4183 10.0817 16 14.5 16ZM14.5 36C22.232 36 28.5 32.4183 28.5 28C28.5 23.5817 22.232 20 14.5 20C6.76801 20 0.5 23.5817 0.5 28C0.5 32.4183 6.76801 36 14.5 36Z"
                                                class="fill-icon group-[.selected]:fill-blue" />
                                        </svg>
                                    </div>
                                    <div class="text-gray text-base group-[.selected]:text-black">
                                        Репетитор
                                    </div>
                                </div>
                            </div>
                            <div class="group h-1/2" :class="{ selected: isSelected == 2 }" @click="isSelected = 2">
                                <div
                                    class="bg-white group-active:bg-bg2 group-[.selected]:bg-bg border border-bg2 group-[.selected]:border-blue rounded-3xl p-[5px] flex flex-col gap-[5px] justify-center items-center cursor-pointer h-full">
                                    <div class="px-2.5 py-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M43.2779 41.8586H39.4221V12.4611C39.4221 8.20246 35.9696 4.75 31.7116 4.75H16.2894C12.0308 4.75 8.57888 8.20246 8.57888 12.4611V41.8586H4.72307C3.92472 41.8586 3.27734 42.5059 3.27734 43.3043C3.27734 44.1026 3.92472 44.75 4.72307 44.75H43.2779C44.0762 44.75 44.7236 44.1026 44.7236 43.3043C44.7236 42.5059 44.0762 41.8586 43.2779 41.8586ZM14.7523 10.9563C15.0142 10.695 15.3757 10.5329 15.7752 10.5329H21.3826C22.1809 10.5329 22.8283 11.1803 22.8283 11.9786C22.8283 12.3781 22.6667 12.7396 22.4049 13.0015C22.143 13.2633 21.782 13.4249 21.3826 13.4249H15.7752C14.9763 13.4249 14.3289 12.7775 14.3289 11.9786C14.3289 11.5797 14.4905 11.2181 14.7523 10.9563ZM14.7523 15.9436C15.0142 15.6823 15.3757 15.5202 15.7752 15.5202H21.3826C22.1809 15.5202 22.8283 16.1676 22.8283 16.9659C22.8283 17.3648 22.6667 17.7264 22.4049 17.9883C22.143 18.2495 21.782 18.4117 21.3826 18.4117H15.7752C14.9763 18.4117 14.3289 17.7643 14.3289 16.9659C14.3289 16.567 14.4905 16.2055 14.7523 15.9436ZM14.3289 21.9527C14.3289 21.5533 14.4905 21.1922 14.7523 20.9304C15.0142 20.6685 15.3757 20.507 15.7752 20.507H21.3826C22.1809 20.507 22.8283 21.1544 22.8283 21.9527C22.8283 22.3522 22.6667 22.7137 22.4049 22.975C22.143 23.2369 21.782 23.3984 21.3826 23.3984H15.7752C14.9763 23.3984 14.3289 22.7516 14.3289 21.9527ZM29.7834 41.8586H18.217V33.6656C18.217 30.4716 20.8065 27.8827 24.0005 27.8827C27.1944 27.8827 29.7834 30.4716 29.7834 33.6656V41.8586ZM33.2481 22.975C32.9868 23.2369 32.6252 23.3984 32.2258 23.3984H26.6184C25.8195 23.3984 25.1727 22.7516 25.1727 21.9527C25.1727 21.5533 25.3342 21.1922 25.5961 20.9304C25.8574 20.6685 26.2189 20.507 26.6184 20.507H32.2258C33.0247 20.507 33.6715 21.1544 33.6715 21.9527C33.6715 22.3522 33.5099 22.7137 33.2481 22.975ZM33.2481 17.9883C32.9868 18.2495 32.6252 18.4117 32.2258 18.4117H26.6184C25.8195 18.4117 25.1727 17.7643 25.1727 16.9659C25.1727 16.567 25.3342 16.2055 25.5961 15.9436C25.8579 15.6818 26.2189 15.5202 26.6184 15.5202H32.2258C33.0247 15.5202 33.6715 16.1676 33.6715 16.9659C33.6715 17.3648 33.5099 17.7264 33.2481 17.9883ZM33.2481 13.0015C32.9868 13.2633 32.6252 13.4249 32.2258 13.4249H26.6184C25.8195 13.4249 25.1727 12.7775 25.1727 11.9786C25.1727 11.5797 25.3342 11.2181 25.5961 10.9563C25.8574 10.695 26.2189 10.5329 26.6184 10.5329H32.2258C33.0247 10.5329 33.6715 11.1803 33.6715 11.9786C33.6715 12.3781 33.5099 12.7396 33.2481 13.0015Z"
                                                fill="#787B8D" class="group-[.selected]:fill-blue" />
                                        </svg>
                                    </div>
                                    <div class="text-gray text-base group-[.selected]:text-black">
                                        Учебное заведение
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center items-center gap-[5px] text-sm pb-4">
                            <span>Есть аккаунт?</span>
                            <NuxtLink to="#" class="link">Вход</NuxtLink>
                        </div>
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
</style>