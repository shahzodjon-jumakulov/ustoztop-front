<script setup>
const switchLocalePath = useSwitchLocalePath()

</script>

<template>
    <div>
        <PageHeader class="flex md:hidden" />
        <div>
            <NuxtLink :to="switchLocalePath('ru')">Main page ru</NuxtLink>
            <NuxtLink :to="switchLocalePath('uz')">Main page uz</NuxtLink>
            <!-- <ModalAuth /> -->
        </div>
    </div>
</template>