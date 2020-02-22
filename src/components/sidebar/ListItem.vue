<template>
  <div
    class="flex h-12 items-center justify-start relative cursor-pointer hover:bg-ui-sidebar-list-overlay hover:text-ui-blue-1 font-semibold  text-sm "
  >
    <div class="w-sidebar-closed text-center absolute">
      <span>
        <slot name="icon" />
      </span>
    </div>
    <div
      v-if="isOpen"
      class="fade-in border-b border-ui-black-10 pl flex w-full ml-6 h-full items-center"
    >
      <slot name="text" />
    </div>
  </div>
</template>
    
<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  props: {
    isOpen: Boolean
  },
  name: "ListItem",
  setup(props) {
    return {};
  }
});
</script>
<style lang="postcss" scoped>
.fade-in {
  animation-name: fadeIn;
  animation-delay: 200ms;
  animation-duration: 50ms;
  animation-fill-mode: both;
  animation-timing-function: ease-in
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
