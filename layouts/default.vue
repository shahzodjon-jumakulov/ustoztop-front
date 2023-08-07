<script setup>

</script>

<template>
    <div class="min-h-screen flex flex-col">
        <PageHeader class="hidden md:flex" />
        <ModalLogin />
        <ModalSignup />
        <div>
            <slot></slot>
        </div>
        <PageFooter />
    </div>
</template>