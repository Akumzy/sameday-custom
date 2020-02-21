<template>
  <div
    class="flex h-12 items-center justify-start relative cursor-pointer hover:bg-ui-sidebar-list-overlay hover:text-ui-blue-1"
  >
    <div class="w-sidebar-closed text-center absolute">
      <span>
        <slot name="icon" />
      </span>
    </div>
    <div
      :class="{'hidden':!isOpen}"
      class="border-b border-ui-black-10 pl font-semibold text-sm flex w-full ml-6 h-full items-center"
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
