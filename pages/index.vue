<script setup>
const switchLocalePath = useSwitchLocalePath()

</script>

<template>
    <div>
        <PageHeader class="flex md:hidden" />
        <div class="flex flex-col gap-8 sm:gap-10">
            <Hero />
            <MainCards />
        </div>
    </div>
</template>