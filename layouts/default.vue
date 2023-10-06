<script setup>

</script>

<template>
    <div class="min-h-[100svh] flex flex-col">
        <ModalCategories />
        <ModalLogin />
        <ModalSignup />
        <PageHeader />
        <slot></slot>
        <PageFooter />
    </div>
</template>