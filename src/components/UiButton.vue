<template>
  <button class="px-5 h-10 rounded-md inline-flex items-center">
    <slot />
  </button>
</template>
    
<script lang="ts">
export default {
  name: "UiButton"
};
</script>
<style lang="postcss" scoped>
button {
  &.ui-primary {
    @apply bg-ui-blue-2 text-white;
  }
  &.ui-outline {
    @apply bg-transparent border border-ui-gray text-black;
  }
  &.ui-inactive {
    @apply bg-ui-gray-2 text-white;
  }
}
</style>