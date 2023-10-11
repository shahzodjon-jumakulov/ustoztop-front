<script setup>
const localePath = useLocalePath();

definePageMeta({
  middleware: [
    function (to, from) {
      if (useTabs().value.find(tab => tab.link == to.params.type)) {
        return
      } else {
        return to.path.replace(`/${to.params.type}`, '');
      }
    },
  ],
});
const tabs = useTabs();
const tabIndex = tabs.value.findIndex(t => t.link == useRoute().params.type);

</script>

<template>
  <div class="max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:h-full bg-bg flex flex-col gap-4 sm:gap-5">
    <div class="flex p-4 sm:p-5 bg-white justify-center lg:hidden">
      <NuxtLink :to="localePath('/profile/my-ads')">
        <BaseBack class="absolute left-4 top-[18px] sm:top-[22px] sm:left-5" />
      </NuxtLink>
      <div class="flex gap-[5px] items-center">
        <span class="text-xl font-bold text-black">{{ $t(`myAds[${tabIndex}]`) }}</span>
        <BaseCount count="19" />
      </div>
    </div>
    <div class="bg-white rounded-3xl flex flex-col sm:max-lg:mx-5">
      <CardProfileAds :type="tabs[tabIndex].link" />
    </div>
  </div>
</template>