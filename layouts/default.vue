<script setup>

</script>

<template>
    <div class="min-h-screen flex flex-col">
        <ModalLogin />
        <ModalSignup />
        <PageHeader class="hidden lg:flex" />
        <div>
            <slot></slot>
        </div>
        <PageFooter />
    </div>
</template>