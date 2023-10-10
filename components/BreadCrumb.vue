<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const props = defineProps({
    navs: {
        required: true,
        type: Array,
    }
})
</script>

<template>
    <div class="flex items-center text-sm text-gray whitespace-nowrap flex-wrap">
        <NuxtLink :to="localePath('/')" class="hover:text-blue active:text-pressed">Главная</NuxtLink>
        <div class="flex items-center" v-for="item in props.navs" :key="item.key">
            <div class="w-4 h-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.354175 0.2756C0.138544 0.448104 0.103583 0.762751 0.276088 0.978382L2.69288 3.99937L0.276088 7.02035C0.103583 7.23598 0.138544 7.55063 0.354174 7.72314C0.569805 7.89564 0.884452 7.86068 1.05696 7.64505L3.72362 4.31171C3.86971 4.12911 3.86971 3.86963 3.72362 3.68702L1.05696 0.353687C0.884452 0.138056 0.569806 0.103095 0.354175 0.2756Z"
                        fill="#787B8D" />
                </svg>
            </div>
            <NuxtLink v-if="item.link" :to="localePath(item.link)" class="hover:text-blue active:text-pressed">{{ item.name }}</NuxtLink>
            <div v-else class="text-black">{{ item.name }}</div>
        </div>
    </div>
</template>