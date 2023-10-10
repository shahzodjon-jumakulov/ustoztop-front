<script setup>

definePageMeta({
  middleware: [
    function (to, from) {
      console.log(to)
      if (to.params.type == 'active' || to.params.type == 'pending' || to.params.type == 'not-paid' || to.params.type == 'not-active' || to.params.type == 'rejected') {
        return
      } else {
        return to.path.replace(`/${to.params.type}`, '');
      }
    },
  ],
});

</script>

<template>
  <div class="fixed inset-0 w-full h-full bg-bg flex flex-col gap-4 sm:gap-5">
    <div class="flex p-4 sm:p-5 bg-white justify-center">
      <NuxtLink :to="localePath('/profile')">
        <BaseBack class="absolute left-4 top-[18px] sm:top-[22px] sm:left-5" />
      </NuxtLink>
      <div class="flex gap-[5px] items-center">
        <span class="text-xl font-bold text-black">Активные</span>
        <BaseCount count="19" />
      </div>
    </div>
    <div class="bg-white rounded-3xl flex flex-col sm:mx-5">

    </div>
  </div>
</template>