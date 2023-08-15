<script setup>
const switchLocalePath = useSwitchLocalePath()

</script>

<template>
    <div>
        <PageHeader class="flex lg:hidden" />
        <div class="flex flex-col gap-4 sm:gap-8 md:gap-10">
            <Hero />
            <MainCards />
        </div>
    </div>
</template>