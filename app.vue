<script setup>
useHead({
  meta: [{
    name: "theme-color",
    content: "#1977F1",
  }]
})

const categories = useCategories();
if (!categories.value) {
  const { data: categoriesData } = await useMyFetch(`/api/announcements/categories/?format=json`)
  if (categoriesData.value) {
    categories.value = categoriesData.value
  }
}
</script>

<template>
  <div>
    <NuxtLayout>
      <!-- <VitePwaManifest /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>