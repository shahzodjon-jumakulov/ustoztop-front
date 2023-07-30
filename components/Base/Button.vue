<script setup>
const props = defineProps(["type", "size"]);
</script>

<template>
  <button
    :class="`${props.type} ${props.size} py-3 px-5 rounded-full whitespace-nowrap outline-none flex items-center gap-[5px] w-max`"
  >
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
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    #fdc500;
}

button.primary:active {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    #fdc500;
}

/* secondary button */
button.secondary {
  background: #1977f1;
  color: white;
}

button.secondary:hover {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    #1977f1;
}

button.secondary:active {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
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
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    #e9efff;
}
</style>
