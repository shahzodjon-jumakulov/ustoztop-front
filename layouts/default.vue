<script setup>

</script>

<template>
    <div class="min-h-screen flex flex-col">
        <ModalCategories />
        <ModalLogin />
        <ModalSignup />
        <PageHeader class="hidden lg:flex" />
        <slot></slot>
        <PageFooter />
    </div>
</template>