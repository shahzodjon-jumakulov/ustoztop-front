<script setup>

const tabs = useTabs();
const tabIndex = tabs.value.findIndex(t => t.link == 'active');
</script>

<template>
    <div class="max-lg:hidden bg-white rounded-3xl flex flex-col sm:max-lg:mx-5">
        <CardProfileAds :type="tabs[tabIndex].link" />
    </div>
</template>