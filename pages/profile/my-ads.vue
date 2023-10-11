<script setup>
const localePath = useLocalePath();
const route = useRoute();

const tabs = useTabs();
const activeTab = ref(route.params.type ? tabs.value.findIndex(tab => tab.link == route.params.type[0]) : 0);
</script>

<template>
    <div class="max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:h-full bg-bg flex flex-col gap-4 sm:gap-5">
        <div class="flex p-4 sm:p-5 bg-white justify-center lg:hidden">
            <NuxtLink :to="localePath('/profile')">
                <BaseBack class="absolute left-4 top-[18px] sm:top-[22px] sm:left-5" />
            </NuxtLink>
            <div class="flex gap-[5px] items-center">
                <span class="text-xl font-bold text-black">Мои объявления</span>
                <BaseCount count="19" />
            </div>
        </div>
        <div class="bg-white rounded-3xl flex flex-col sm:mx-5 lg:hidden">
            <NuxtLink :to="localePath(`/profile/my-ads/${item.link}`)"
                class="px-5 py-2.5 flex justify-between items-center h-[50px] hover:bg-bg2 active:bg-[#D2D7E5] rounded-full"
                v-for="item, index in tabs" :key="item.key">
                <div class="flex items-center gap-[5px]">
                    <span>{{ $t(`myAds[${index}]`) }}</span>
                    <BaseCount :count="item.count" />
                </div>
                <div class="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                            fill="black" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="flex gap-5 container">
            <div class="max-lg:hidden p-5 bg-white rounded-3xl flex flex-col w-1/3 h-fit">
                <NuxtLink :to="localePath(`/profile/my-ads/${tabs[index].link}`)"
                    class="group px-2.5 flex gap-[5px] items-center h-[34px] hover:bg-bg active:bg-bg2 rounded-full cursor-pointer"
                    :class="{ 'active bg-bg': activeTab == index }" v-for="item, index in tabs" :key="item.key"
                    @click="activeTab = index">
                    <span class="text-sm text-black group-[.active]:text-blue group-[.active]:font-bold">
                        {{ $t(`myAds[${index}]`) }}
                    </span>
                    <BaseCount :count="item.count" />
                </NuxtLink>
            </div>
            <div class="flex flex-col gap-5 w-2/3">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>