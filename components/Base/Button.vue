<script setup>
const props = defineProps(["type", "size"]);
</script>

<template>
  <button :disabled="props.type == 'loading'"
    :class="`${props.type} ${props.size} py-3 px-5 rounded-full whitespace-nowrap outline-none flex justify-center items-center gap-[5px] w-full`">
    <div class="loader w-6 h-6 flex items-center justify-center" v-if="props.type == 'loading'">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M9.5 4C10.6046 4 11.5 3.10457 11.5 2C11.5 0.89543 10.6046 0 9.5 0C8.39543 0 7.5 0.89543 7.5 2C7.5 3.10457 8.39543 4 9.5 4ZM9.5 20C10.6046 20 11.5 19.1046 11.5 18C11.5 16.8954 10.6046 16 9.5 16C8.39543 16 7.5 16.8954 7.5 18C7.5 19.1046 8.39543 20 9.5 20ZM17.4281 7.73217C16.4715 8.28445 15.2483 7.9567 14.6961 7.00012C14.1438 6.04353 14.4715 4.82035 15.4281 4.26807C16.3847 3.71578 17.6079 4.04353 18.1602 5.00012C18.7124 5.9567 18.3847 7.17988 17.4281 7.73217ZM0.839572 15.0001C1.39186 15.9567 2.61504 16.2845 3.57162 15.7322C4.52821 15.1799 4.85596 13.9567 4.30367 13.0001C3.75139 12.0435 2.52821 11.7158 1.57162 12.2681C0.615038 12.8204 0.287287 14.0435 0.839572 15.0001ZM15.4281 15.7319C14.4715 15.1796 14.1438 13.9565 14.6961 12.9999C15.2483 12.0433 16.4715 11.7155 17.4281 12.2678C18.3847 12.8201 18.7124 14.0433 18.1602 14.9999C17.6079 15.9565 16.3847 16.2842 15.4281 15.7319ZM0.839573 5.00012C0.287288 5.9567 0.615038 7.17988 1.57162 7.73217C2.52821 8.28445 3.75139 7.9567 4.30367 7.00012C4.85596 6.04353 4.52821 4.82035 3.57162 4.26807C2.61504 3.71578 1.39186 4.04353 0.839573 5.00012Z"
          fill="black" />
      </svg>
    </div>
    <slot></slot>
  </button>
</template>

<style scoped>
button.large {
  height: 50px;
  font-size: 16px;
}

button.medium {
  height: 34px;
  font-size: 14px;
  line-height: normal;
  padding-top: 9px;
  padding-bottom: 9px;
}

/* primary button */
button.primary {
  background: #fdc500;
  color: black;
}

button.primary:hover {
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%),
    #fdc500;
}

button.primary:active {
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    #fdc500;
}

/* secondary button */
button.secondary {
  background: #1977f1;
  color: white;
}

button.secondary:hover {
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%),
    #1977f1;
}

button.secondary:active {
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    #1977f1;
}

/* tertiary button */
button.tertiary {
  background: #f4f6ff;
  color: black;
}

button.tertiary:hover {
  background: #e9efff;
}

button.tertiary:active {
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%),
    #e9efff;
}

/* loading button */
button.loading {
  background-color: #E9EFFF;
}

button.loading .loader {
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
