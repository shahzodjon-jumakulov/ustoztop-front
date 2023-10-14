<script setup>
const localePath = useLocalePath();

const props = defineProps(['cost', 'isDeposit', 'method', 'status', 'name', 'reference'])
</script>

<template>
    <div class="bg-white p-5 rounded-3xl flex flex-col gap-[15px]">
        <div
            class="px-5 py-2.5 bg-[#167CE5] rounded-[200px] flex justify-between items-center text-sm font-bold text-white">
            <p>22.06.2023 <span class="font-normal">(13:30)</span></p>
            <p>{{ isDeposit ? '+' : '-' }}{{ numberWithSpaces(cost) }} сум</p>
        </div>
        <div class="flex gap-x-10 gap-y-5 flex-wrap">
            <div class="flex flex-col gap-2.5">
                <p class="text-xs text-gray">Операция</p>
                <div class="flex flex-col gap-[5px]">
                    <p class="text-sm font-bold">{{ name }}</p>
                    <NuxtLink class="text-xs text-gray" v-if="reference" to="#">
                        для объявления
                        <span class="underline hover:text-blue hover:no-underline active:text-pressed">
                            {{ reference.name }}
                        </span>
                    </NuxtLink>
                    <!-- <NuxtLink class="text-xs text-gray" v-if="reference" :to="localePath(`/announcement/${reference.link}`)">для объявления {{ reference.name }}</NuxtLink> -->
                </div>
            </div>
            <div class="flex flex-col gap-2.5">
                <p class="text-xs text-gray">Способ оплаты</p>
                <img v-if="method == 'click'" class="h-6 w-fit" src="~/assets/images/click.svg" alt="click">
                <img v-else-if="method == 'payme'" class="h-6 w-fit" src="~/assets/images/payme.svg"
                    alt="payme">
                <img v-else-if="method == 'paynet'" class="h-6 w-fit" src="~/assets/images/paynet.svg"
                    alt="paynet">
            </div>
            <div class="flex flex-col gap-2.5 max-sm:w-full">
                <p class="text-xs text-gray">Статус</p>
                <div class="bg-opacity-10 px-2.5 py-[5px] rounded-[47px] text-xs w-fit"
                    :class="{ 'bg-green text-green': status == 'completed', 'bg-yellow text-yellow': status == 'pending', 'bg-red text-red': status == 'rejected' }">
                    <span v-if="status == 'completed'">Исполнено</span>
                    <span v-else-if="status == 'pending'">В обработке</span>
                    <span v-else-if="status == 'rejected'">Отказано</span>
                </div>
            </div>
        </div>
    </div>
</template>