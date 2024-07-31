<script setup>


// dummy data
const results = [
    {
        top: true,
    },
    {
        top: true,
    },
    {
        top: true,
    },
    {
        top: true,
    },
    {
        top: false,
    },
    {
        top: false,
    },
    {
        top: false,
    },
    {
        top: false,
    },
    {
        top: false,
    },
]
</script>

<template>
    <div class="container">
        <div class="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:flex-wrap">
            <CardAnnouncement class="lg:w-[calc(50%-10px)] xl:w-[calc(33.33%-13.35px)]" v-for="card in results" :key="card.key" :is-top="card.top" :phone-number="false" link="/announcement/ustoztop123" />
        </div>
    </div>
</template>