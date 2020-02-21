<template>
  <button class="px-5 h-10 rounded-md">
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
}
</style>