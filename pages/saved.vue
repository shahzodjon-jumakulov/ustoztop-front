<script setup>
const selected = ref(1)
const widthOfNav = ref(0)
const leftOfNav = ref(0)

const handleSelected = () => {
    setTimeout(() => {
        const el = document.getElementById("stick");
        const activeEl = document.getElementsByClassName("active-saved")[0]
        if (activeEl) {
            widthOfNav.value = activeEl.offsetWidth
            leftOfNav.value = activeEl.offsetLeft
            el.style.width = `${widthOfNav.value}px`
            el.style.left = `${leftOfNav.value}px`
        }
    }, 1);
}

onMounted(() => {
    handleSelected();
    window.addEventListener('resize', () => { handleSelected() }, true);
})

watch(selected, () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleSelected()
})

// dummy data
const saved = [
    {
        isTop: true,
    },
    {
        isTop: true,
    },
    {
        isTop: true,
    },
    {
        isTop: false,
    },
    {
        isTop: false,
    },
    {
        isTop: false,
    },
    {
        isTop: false,
    },
    {
        isTop: false,
    },
    {
        isTop: false,
    },
    {
        isTop: false,
    },
]

const seen = [
    {
        isTop: false,
        isSaved: false,
    },
    {
        isTop: false,
        isSaved: true,
    },
    {
        isTop: true,
        isSaved: false,
    },
    {
        isTop: false,
        isSaved: true,
    },
    {
        isTop: true,
        isSaved: false,
    },
    {
        isTop: true,
        isSaved: false,
    },
    {
        isTop: true,
        isSaved: false,
    },
    {
        isTop: false,
        isSaved: true,
    },
    {
        isTop: true,
        isSaved: false,
    },
    {
        isTop: false,
        isSaved: false,
    },
]
</script>

<template>
    <div>
        <div class="flex justify-center items-center relative p-4 sm:p-5 bg-white lg:hidden">
            <h1 class="text-xl sm:text-2xl font-bold text-black">Избранное</h1>
        </div>
        <div
            class="bg-white flex gap-[5px] overflow-x-scroll no-scrollbar whitespace-nowrap relative mb-4 sm:mb-5 lg:hidden">
            <div class="group p-5 text-base text-gray cursor-pointer md:w-1/2 md:text-center"
                :class="{ 'active-saved': selected == 1 }" @click="selected = 1">
                <span class="group-[.active-saved]:text-black group-[.active-saved]:font-bold inline-flex gap-[5px]">
                    {{ $t('saved.tabs[0]') }}
                    <span
                        class="text-xs text-black font-normal bg-bg2 rounded-full h-6 aspect-square flex justify-center items-center">19</span>
                </span>
            </div>
            <div class="group p-5 text-base text-gray cursor-pointer md:w-1/2 md:text-center"
                :class="{ 'active-saved': selected == 2 }" @click="selected = 2">
                <span class="group-[.active-saved]:text-black group-[.active-saved]:font-bold inline-flex gap-[5px]">
                    {{ $t('saved.tabs[1]') }}
                    <span
                        class="text-xs text-black font-normal bg-bg2 rounded-full h-6 aspect-square flex justify-center items-center">19</span>
                </span>
            </div>
            <div class="rounded-full h-[3px] bg-blue absolute bottom-0 transition-all duration-300 ease-in-out" id="stick">
            </div>
        </div>
        <div class="flex gap-5 lg:px-5 xl:px-8 xl:max-w-[1280px] xl:mx-auto">
            <div
                class="hidden lg:flex flex-col p-5 bg-white rounded-3xl whitespace-nowrap w-[307px] xl:w-[392px] flex-none text-sm text-black h-min sticky top-5">
                <div class="hover:bg-bg active:bg-bg2 rounded-[100px] px-4 h-[34px] flex items-center cursor-pointer gap-[5px]"
                    :class="{ 'bg-bg text-blue font-bold': selected == 1 }" @click="selected = 1">
                    {{ $t("saved.tabs[0]") }}
                    <span
                        class="bg-bg2 rounded-3xl text-xs text-black font-normal flex items-center justify-center px-2 h-6">19</span>
                </div>
                <div class="hover:bg-bg active:bg-bg2 rounded-[100px] px-4 h-[34px] flex items-center cursor-pointer gap-[5px]"
                    :class="{ 'bg-bg text-blue font-bold': selected == 2 }" @click="selected = 2">
                    {{ $t("saved.tabs[1]") }}
                    <span
                        class="bg-bg2 rounded-3xl text-xs text-black font-normal flex items-center justify-center px-2 h-6">19</span>
                </div>
            </div>
            <div class="cards w-full">
                <div class="flex flex-col gap-4 sm:gap-5 sm:px-5 lg:px-0" v-if="selected == 1">
                    <BaseSavedCard v-for="item in saved" :key="item.key" :isTop="item.isTop" :isSaved="true" />
                </div>
                <div class="flex flex-col gap-4 sm:gap-5 sm:px-5 lg:px-0" v-else>
                    <BaseSavedCard v-for="item in seen" :key="item.key" :isTop="item.isTop" :isSaved="item.isSaved" />
                </div>
            </div>
        </div>
    </div>
</template>