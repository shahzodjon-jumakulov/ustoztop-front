<script setup>

const cards = [
    {
        name: "Нажмида Абдуллаева",
        verified: true,
        premium: true,
        type: "tutor",
        location: "Ташкент",
        lastOnline: "11:47",
    },
    {
        name: "PDP IT Academy",
        verified: true,
        premium: true,
        type: "center",
        location: "Ташкент",
        lastOnline: "11:47",
    },
    {
        name: "Дилшод Тулкинов",
        verified: true,
        premium: true,
        type: "center",
        location: "Ташкент",
        lastOnline: "11:47",
    },
    {
        name: "Astrum IT Academy",
        verified: true,
        premium: true,
        type: "tutor",
        location: "Ташкент",
        lastOnline: "11:47",
    },
    {
        name: "Шахриёр Ибрагимов",
        verified: true,
        premium: true,
        type: "center",
        location: "Ташкент",
        lastOnline: "11:47",
    },
    {
        name: "CAMBRIDGE",
        verified: true,
        premium: true,
        type: "tutor",
        location: "Ташкент",
        lastOnline: "11:47",
    },
]

</script>

<template>
    <div class="flex flex-col gap-5 sm:px-5 mb-4">
        <div class="px-4 sm:px-0 gap-2 text-2xl sm:text-[32px] lheight-normal font-bold text-black">
            Премиум репетиторы и учебные заведения
        </div>
        <div class="flex flex-col gap-4">
            <BasePremiumCard v-for="item in cards" :key="item.key" :name="item.name" :type="item.type" :isVerified="item.verified"
                :isPremium="item.premium" :location="item.location" :lastOnline="item.lastOnline" />
        </div>
    </div>
</template>