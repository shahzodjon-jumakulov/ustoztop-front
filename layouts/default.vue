<script setup>
const isMain = ref(null);
onMounted(() => {
    isMain.value = useRoute().fullPath == '/' || useRoute().fullPath == '/ru'
})
watch(() => useRoute().fullPath, newVal => {
    isMain.value = newVal == '/' || newVal == '/ru'
})
</script>

<template>
    <div class="min-h-[100svh] flex flex-col">
        <ModalCategories />
        <ModalLogin />
        <ModalSignup />
        <PageHeader :class="{'max-lg:hidden': !isMain}" />
        <slot></slot>
        <PageFooter />
    </div>
</template>