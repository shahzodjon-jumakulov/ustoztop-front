<script setup>
// search input
const search = ref(null);
const searched = ref(false);

watch(search, () => {
  if (search) {
    searched.value = false;
  }
});

function cons(val) {
  console.log(val);
}
</script>

<template>
  <div class="flex gap-2.5 bg-white p-5 min-w-full">
    <PageLogo />
    <BaseButton type="tertiary" size="large">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.08301 0C0.978438 0 0.0830078 0.895431 0.0830078 2V6C0.0830078 7.10457 0.978438 8 2.08301 8H6.08301C7.18758 8 8.08301 7.10457 8.08301 6V2C8.08301 0.895431 7.18758 0 6.08301 0H2.08301ZM14.083 0C12.9784 0 12.083 0.895431 12.083 2V6C12.083 7.10457 12.9784 8 14.083 8H18.083C19.1876 8 20.083 7.10457 20.083 6V2C20.083 0.895431 19.1876 0 18.083 0H14.083ZM0.0830078 14C0.0830078 12.8954 0.978438 12 2.08301 12H6.08301C7.18758 12 8.08301 12.8954 8.08301 14V18C8.08301 19.1046 7.18758 20 6.08301 20H2.08301C0.978438 20 0.0830078 19.1046 0.0830078 18V14ZM14.083 12C12.9784 12 12.083 12.8954 12.083 14V18C12.083 19.1046 12.9784 20 14.083 20H18.083C19.1876 20 20.083 19.1046 20.083 18V14C20.083 12.8954 19.1876 12 18.083 12H14.083Z"
          fill="#787B8D"
        />
      </svg>
      <span>Категории</span>
    </BaseButton>
    <div class="search-bar w-full overflow-hidden relative rounded-3xl">
      <input
        type="text"
        id="search"
        v-model="search"
        class="rounded-3xl bg-bg hover:bg-bg2 w-full h-full pl-5 outline-none caret-yellow placeholder:text-gray placeholder:text-base"
        placeholder="Поиск объявлений"
        autocomplete="off"
      />
      <div
        class="btn-group absolute right-2.5 top-0 my-2 flex gap-2.5 items-center"
        :class="{ active: search, searched: searched }"
      >
        <div class="clear cursor-pointer" @click="search = null">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
              fill="#A7AABC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5ZM15.8588 15.8587C15.5659 16.1516 15.091 16.1516 14.7981 15.8587L12.5 13.5606L10.2019 15.8587C9.90901 16.1516 9.43413 16.1516 9.14124 15.8587C8.84835 15.5658 8.84835 15.0909 9.14124 14.798L11.4393 12.4999L9.14125 10.2018C8.84836 9.90895 8.84836 9.43408 9.14125 9.14118C9.43415 8.84829 9.90902 8.84829 10.2019 9.14118L12.5 11.4393L14.7981 9.14119C15.091 8.8483 15.5659 8.8483 15.8588 9.14119C16.1516 9.43409 16.1516 9.90896 15.8588 10.2019L13.5607 12.4999L15.8588 14.798C16.1517 15.0909 16.1517 15.5658 15.8588 15.8587Z"
              class="pressed"
            />
          </svg>
        </div>
        <BaseButton type="primary" size="medium" @click="searched = true"
          >Найти</BaseButton
        >
      </div>
    </div>
    <div class="navbar flex items-center">
      <div class="lang px-2.5 flex w-max gap-[5px]">
        <img src="~/assets/images/ru.svg" alt="ru" />
        <span>Рус</span>
      </div>
      <div class="saved px-2.5 flex w-max gap-[5px]">
        <img src="~/assets/images/saved.svg" alt="saved" />
        <span>Избранное</span>
      </div>
      <div class="auth px-2.5 flex w-max gap-[5px]">
        <span>Вход</span>
        <span>/</span>
        <span>Регистрация</span>
      </div>
    </div>
    <BaseButton type="primary" size="large">Разместить объявление</BaseButton>
  </div>
</template>

<style scoped>
.btn-group {
  transform: translateX(calc(100% + 10px));
  transition: transform 300ms cubic-bezier(0.68, 0, 0.265, 1.55);
}

.btn-group.active {
  transform: translateX(0);
}

.btn-group.active.searched {
  transform: translateX(calc(100% - 24px));
}

input:active {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    #e9efff;
}

.visible {
  opacity: 1;
}

.clear:hover path {
  fill: #1977f1;
}

.clear:active path {
  fill: #1977f1;
}

.clear path.pressed {
  display: none;
}

.clear:active path.pressed {
  display: block;
  fill: black;
  fill-opacity: 0.1;
}
</style>
