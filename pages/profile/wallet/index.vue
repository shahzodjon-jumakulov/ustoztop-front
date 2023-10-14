<script setup>

const tabs = useWallet();
const tabIndex = tabs.value.findIndex(t => t.link == 'my-wallet');
</script>

<template>
    <div class="max-lg:hidden bg-white rounded-3xl flex flex-col sm:max-lg:mx-5">
        <WalletBalance />
    </div>
</template>