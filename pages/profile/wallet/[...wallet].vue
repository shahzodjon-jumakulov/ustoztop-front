<script setup>
const localePath = useLocalePath();

definePageMeta({
    middleware: [
        function (to, from) {
            if (useWallet().value.find(tab => tab.link == to.params.wallet)) {
                return
            } else {
                return to.path.replace(`/${to.params.wallet}`, '');
            }
        },
    ],
});
const tabs = useWallet();
const tabIndex = tabs.value.findIndex(t => t.link == useRoute().params.wallet);

</script>

<template>
    <div
        class="max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:h-full bg-bg flex flex-col gap-4 sm:gap-5 overflow-auto max-lg:pb-[66px]">
        <div class="flex p-4 sm:p-5 bg-white justify-center lg:hidden">
            <NuxtLink :to="localePath('/profile/wallet')">
                <BaseBack class="absolute left-4 top-[18px] sm:top-[22px] sm:left-5" />
            </NuxtLink>
            <div class="flex gap-[5px] items-center">
                <span class="text-xl font-bold text-black">{{ $t(`myWallet[${tabIndex}]`) }}</span>
            </div>
        </div>
        <div class="flex flex-col sm:max-lg:mx-5">
            <WalletBalance v-if="tabIndex == 0" />
            <WalletTransactions v-else-if="tabIndex == 1" />
            <WalletServices v-else-if="tabIndex == 2" />
        </div>
    </div>
</template>