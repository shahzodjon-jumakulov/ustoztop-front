<script setup>

const props = defineProps(['state'])

</script>

<template>
    <div class="p-4 bg-white rounded-3xl flex flex-col gap-4 h-fit">
        <div class="bg-lightYellow rounded-3xl">
            <img v-if="state == 'top'" src="~/assets/images/service_top.svg" alt="top">
            <img v-else-if="state == 'premium'" src="~/assets/images/service_premium.svg" alt="premium">
        </div>
        <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2.5">
                <p class="text-lg text-blue font-bold">Размещение в TOP</p>
                <p class="text-lg text-blue font-bold">Премиум профиль</p>
                <p class="line-clamp-3 text-gray text-sm">
                    Кошелек используется для оплаты всех платных услуг Ustoztop (реклама, размещение или продвижение
                    объявлений и покупка премиум).
                </p>
                <p class="font-bold text-sm text-black">15 000 сум</p>
            </div>
            <BaseButton state="primary" size="medium">Подключить услугу</BaseButton>
        </div>
    </div>
</template>