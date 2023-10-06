<script setup>
const { locale } = useI18n();
const isCategories = useState("isCategoriesOpen")
const selectedCategory = ref(null)
const selectedSubcategory = ref(null)
const hoveredCategory = ref(0)

const { data: categoriesData } = await useMyFetch(`/api/announcements/categories/?format=json`)
console.log(categoriesData.value)
const categories = ref([])
if (categoriesData.value) {
    categories.value = categoriesData.value
}

watch(isCategories, () => {
    if (isCategories.value) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        disableScroll()
    } else {
        enableScroll();
    }
})
</script>

<template>
    <Teleport to="body">
        <div v-if="isCategories"
            class="group/container fixed inset-0 z-[9] lg:top-[90px] h-[100svh] lg:h-[calc(100%-90px)] opacity-0 transition-opacity duration-300 ease-in-out"
            :class="{ 'isOpen opacity-[1]': isCategories }">
            <div @click="isCategories = false" class="bg-black bg-opacity-60 w-full absolute lg:h-full lg:bottom-0 z-[9]">
            </div>
            <div
                class="h-[calc(100%-50px)] flex justify-center items-center lg:items-start w-full min-[1600px]:max-w-[1280px] lg:h-3/4 fixed lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10">
                <!-- mobile -->
                <div
                    class="bg-white inline-flex flex-col gap-2.5 justify-start items-center lg:rounded-b-3xl w-full h-full lg:hidden">
                    <div v-if="selectedCategory == null" class="flex flex-col text-center w-full h-full">
                        <div class="text-2xl text-black font-bold p-4 sm:p-5">{{ $t("sticky.category") }}</div>
                        <div class="flex flex-col custom-scrollbar overflow-auto py-2">
                            <div class="flex hover:bg-bg rounded-[200px] active:bg-bg2 justify-between items-center py-2.5 px-5 cursor-pointer"
                                v-for="item in categories" :key="item.key" @click="selectedCategory = item">
                                <div class="flex gap-2.5 items-center">
                                    <div class="w-[30px] h-[30px] bg-bg2 rounded-full overflow-hidden">
                                        <img class="ml-[3px]" src="~/assets/images/category.svg" alt="icon">
                                    </div>
                                    <div class="flex items-center gap-[5px] text-left text-base font-bold text-black">
                                        <span>{{ item.name }}</span>
                                        <span
                                            class="bg-bg2 rounded-3xl text-xs font-normal flex items-center justify-center px-2 h-6"
                                            v-if="item.subcategories">
                                            {{ item.subcategories.length }}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col text-center w-full h-full " v-else>
                        <div
                            class="text-2xl text-black font-bold p-4 sm:p-5 grid grid-flow-col grid-cols-[max-content] items-center">
                            <div class="group/icon flex items-center justify-center h-6 w-6 cursor-pointer"
                                @click="selectedCategory = null">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.46967 6.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967Z"
                                        class="fill-lightGray group-hover/icon:fill-blue group-active/icon:fill-pressed" />
                                </svg>
                            </div>
                            {{ selectedCategory.name }}
                        </div>
                        <div class="flex flex-col custom-scrollbar overflow-auto py-2">
                            <div class="group cursor-pointer h-[50px] transition-height duration-300 ease-in-out"
                                v-for="(item, index) in selectedCategory.subcategories" :key="item.key"
                                :class="{ 'active h-full': selectedSubcategory == index && item.sub }"
                                @click="selectedSubcategory = (selectedSubcategory == index ? null : index)">
                                <div
                                    class="hover:bg-bg active:bg-bg2 group-[.active]:bg-bg rounded-3xl transition-all duration-300 ease-in-out group-[.active]:pb-2.5 h-[50px] group-[.active]:h-full overflow-hidden">
                                    <div class="flex justify-between items-center py-2.5 px-5 h-[50px]">
                                        <div
                                            class="text-base font-bold text-black group-[.active]:text-blue transition-color duration-300 ease-in-out">
                                            {{ item.name }}</div>
                                        <div class="w-6 h-6 flex items-center justify-center group-[.active]:-rotate-180 transition-rotate duration-300 ease-in-out"
                                            v-if="item.sub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6"
                                                fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.5856 0.531506C11.3269 0.20806 10.8549 0.155619 10.5315 0.414376L5.99997 4.03956L1.46849 0.414375C1.14505 0.155618 0.673077 0.208059 0.41432 0.531505C0.155562 0.854952 0.208004 1.32692 0.53145 1.58568L5.53145 5.58568C5.80536 5.80481 6.19458 5.80481 6.46849 5.58568L11.4685 1.58568C11.7919 1.32692 11.8444 0.854953 11.5856 0.531506Z"
                                                    class="fill-black group-[.active]:fill-blue" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="text-black text-base text-left py-2.5 px-5" v-for="sub in item.sub"
                                        :key="sub.key">{{ sub }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- tablet && desktop -->
                <div
                    class="lg:flex gap-10 hidden bg-white rounded-b-3xl w-full h-full ease-in-out p-5 relative overflow-hidden">
                    <!-- ICON of hovered category -->
                    <div class="max-xl:hidden absolute -bottom-10 -right-10">
                        <img src="~/assets/images/languages.png" alt="icon">
                    </div>
                    <!-- CATEGORIES -->
                    <div class="w-[350px] overflow-y-auto flex-shrink-0 pr-2.5">
                        <div class="flex hover:bg-bg2 rounded-[200px] justify-between items-center py-2.5 px-5 cursor-pointer"
                            v-for="item, index in categories" :key="item.key" @click="selectedCategory = item"
                            @mouseover="hoveredCategory = index">
                            <div class="flex gap-2.5 items-center">
                                <div class="w-[30px] h-[30px] bg-bg2 rounded-full overflow-hidden">
                                    <img class="ml-[3px]" src="~/assets/images/category.svg" alt="icon">
                                </div>
                                <div class="flex items-center gap-[5px] text-left text-base font-bold text-black">
                                    <span>{{ item.name }}</span>
                                    <span
                                        class="bg-bg2 rounded-3xl text-xs font-normal flex items-center justify-center px-2 h-6"
                                        v-if="item.subcategories">
                                        {{ item.subcategories.length }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SUBCATEGORIES of hovered category -->
                    <div class="overflow-y-auto flex flex-col gap-5">
                        <!-- name -->
                        <div class="flex text-2xl font-bold items-center">
                            {{ categories[hoveredCategory].name }}
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </div>
                        <!-- categories -->
                        <div class="gap-5 columns-3 xl:columns-4">
                            <div class="flex flex-col gap-2.5 pb-5 text-black break-inside-avoid"
                                v-for="(item, index) in categories[hoveredCategory].subcategories" :key="item.key"
                                :class="{ 'inline-flex': item.sub }">
                                <NuxtLink to="#" class="text-base font-bold hover:text-blue active:text-pressed">
                                    {{ item.name }}
                                </NuxtLink>
                                <div class="flex flex-col gap-[5px] break-inside-avoid" v-if="item.subcategories">
                                    <NuxtLink to="#" class="text-sm text-left hover:text-blue active:text-pressed"
                                        v-for="sub in item.subcategories" :key="sub.key">
                                        {{ sub.name }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>