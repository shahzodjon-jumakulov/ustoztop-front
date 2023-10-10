<script setup>

const activeTab = ref(0);

// dummy data
const tabs = [
    {
        name: "Активные",
        count: 19,
        link: "/profile/my-ads/active",
    },
    {
        name: "Ожидающие",
        count: 19,
        link: "/profile/my-ads/pending",
    },
    {
        name: "Неоплаченные",
        count: 19,
        link: "/profile/my-ads/not_paid",
    },
    {
        name: "Неактивные",
        count: 19,
        link: "/profile/my-ads/not_active",
    },
    {
        name: "Отклоненные",
        count: 19,
        link: "/profile/my-ads/rejected",
    },
]
</script>

<template>
    <div class="max-lg:hidden flex gap-5 container">
        <div class="p-5 bg-white rounded-3xl flex flex-col w-1/3 h-fit">
            <div class="group px-2.5 flex gap-[5px] items-center h-[34px] hover:bg-bg active:bg-bg2 rounded-full cursor-pointer"
                :class="{ 'active bg-bg': activeTab == index }" v-for="item, index in tabs" :key="item.key"
                @click="activeTab = index">
                <span class="text-sm text-black group-[.active]:text-blue group-[.active]:font-bold">{{ item.name }}</span>
                <BaseCount :count="item.count" />
            </div>
        </div>
        <div class="flex flex-col gap-5 w-2/3">
            <CardProfileAds />
        </div>
    </div>
</template>