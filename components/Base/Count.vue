<script setup>
const props = defineProps(['count'])
</script>

<template>
    <div class="bg-bg2 rounded-3xl px-2 text-xs h-6 min-w-[24px] flex items-center justify-center">{{ props.count }}</div>
</template>