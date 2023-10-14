<script setup>
// dummy data
const cards = [
    {
        name: 'Пополнение кошелька',
        cost: '50000',
        isDeposit: true,
        method: 'click',
        status: 'completed',
    },
    {
        name: 'Услуга “Размещение в TOP”',
        reference: {
            name: '№123456789',
            link: '/123456789',
        },
        cost: '15000',
        isDeposit: false,
        method: 'payme',
        status: 'pending',
    },
    {
        name: 'Услуга “Премиум профиль”',
        cost: '50000',
        isDeposit: false,
        method: 'paynet',
        status: 'rejected',
    },
]
</script>

<template>
    <div class="">
        <div class="xl:hidden flex flex-col gap-4 sm:gap-5">
            <CardTransaction v-for="card in cards" :key="card.key" :name="card.name" :reference="card.reference"
                :cost="card.cost" :is-deposit="card.isDeposit" :method="card.method" :status="card.status" />
        </div>
        <div class="max-xl:hidden bg-white rounded-3xl p-5">
            <table>
                <tr class="text-sm text-white font-bold">
                    <th class="w-[115px] bg-blue rounded-l-3xl px-5 py-2.5">Дата</th>
                    <th class="bg-blue px-5 py-2.5">Операция</th>
                    <th class="w-[144px] bg-blue px-5 py-2.5">Способ оплаты</th>
                    <th class="w-[135px] bg-blue px-5 py-2.5">Сумма</th>
                    <th class="bg-blue rounded-r-3xl px-5 py-2.5">Статус</th>
                </tr>
                <tr v-for="card in cards" :key="card.key">
                    <td class="px-5 py-2.5 text-sm">22.06.2023 13:30</td>
                    <td class="px-5 py-2.5 font-bold text-sm">{{ card.name }}
                        <NuxtLink class="text-xs text-gray font-normal" v-if="card.reference" to="#">
                            для объявления
                            <span class="underline hover:text-blue hover:no-underline active:text-pressed">
                                {{ card.reference.name }}
                            </span>
                        </NuxtLink>
                    </td>
                    <td class="px-5 py-2.5">
                        <img v-if="card.method == 'click'" class="h-[18px]" src="~/assets/images/click.svg" alt="click">
                        <img v-else-if="card.method == 'payme'" class="h-[18px]" src="~/assets/images/payme.svg"
                            alt="payme">
                        <img v-else-if="card.method == 'paynet'" class="h-[18px]" src="~/assets/images/paynet.svg"
                            alt="paynet">
                    </td>
                    <td class="px-5 py-2.5 text-sm font-bold">{{ card.isDeposit ? '+' : '-' }}{{ numberWithSpaces(card.cost) }} сум</td>
                    <td class="px-5 py-2.5 text-xs">
                        <span v-if="card.status == 'completed'"
                            class="px-2.5 py-[5px] text-green bg-green bg-opacity-10 rounded-3xl whitespace-nowrap">Исполнено</span>
                        <span v-else-if="card.status == 'pending'"
                            class="px-2.5 py-[5px] text-yellow bg-yellow bg-opacity-10 rounded-3xl whitespace-nowrap">В
                            обработке</span>
                        <span v-else-if="card.status == 'rejected'"
                            class="px-2.5 py-[5px] text-red bg-red bg-opacity-10 rounded-3xl whitespace-nowrap">Отказано</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>