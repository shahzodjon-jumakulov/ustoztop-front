<script setup>
useHead({
  meta: [
    {
      name: "theme-color",
      content: "#1977F1",
    },
  ],
});

const categories = useCategories();
categories.value = [
  {
    id: 21,
    name: "Все категории",
    subcategories: [
      {
        id: 4,
        name: "Маркетинг",
        subcategories: [
          {
            id: 18,
            name: "Digital Marketing",
            slug: "digital-marketing",
          },
          {
            id: 19,
            name: "Интернет маркетинг",
            slug: "internet-marketing",
          },
          {
            id: 20,
            name: "Интернет маркетинг",
            slug: "branding",
          },
        ],
        slug: "marketing",
      },
      {
        id: 3,
        name: "Школьные предметы",
        subcategories: [
          {
            id: 1,
            name: "Математика",
            slug: "mathematics",
          },
          {
            id: 16,
            name: "Русский язык и литература",
            slug: "russian-and-literature",
          },
          {
            id: 17,
            name: "История Узбекистана",
            slug: "history-of-uzbekistan",
          },
        ],
        slug: "subjects",
      },
      {
        id: 2,
        name: "Языковые",
        subcategories: [
          {
            id: 5,
            name: "Английский",
            subcategories: [
              {
                id: 6,
                name: "Английский для начинающих",
                slug: "english-for-kids",
              },
              {
                id: 8,
                name: "IELTS",
                slug: "english-IELTS",
              },
              {
                id: 9,
                name: "Английский для бизнеса",
                slug: "english-for-business",
              },
              {
                id: 10,
                name: "Разговорный английский",
                slug: "english-speaking",
              },
            ],
            slug: "english",
          },
          {
            id: 11,
            name: "Корейский",
            subcategories: [
              {
                id: 12,
                name: "TOPIK",
                slug: "korean-TOPIK",
              },
              {
                id: 13,
                name: "Корейский для начинающих",
                slug: "korean-for-kids",
              },
            ],
            slug: "korean",
          },
          {
            id: 14,
            name: "Русский",
            slug: "russian",
          },
          {
            id: 15,
            name: "Испанский",
            slug: "spanish",
          },
        ],
        slug: "languages",
      },
    ],
    slug: "all-categories",
  },
];
</script>

<template>
  <div>
    <NuxtLayout>
      <!-- <VitePwaManifest /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
