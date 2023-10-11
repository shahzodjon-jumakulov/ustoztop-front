<script setup>
const localePath = useLocalePath();
const activeTab = ref(0);

// dummy data
const tabs = useTabs();
</script>

<template>
    <div class="max-lg:hidden flex gap-5 container">
        <div class="p-5 bg-white rounded-3xl flex flex-col w-1/3 h-fit">
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
            <CardProfileAds />
        </div>
    </div>
</template>