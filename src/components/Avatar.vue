<template>
  <figure class="w-full h-full rounded-full overflow-hidden bg-ui-dark-lighter text-white">
    <span class="absolute w-full h-full flex justify-center items-center" v-text="initials" />
    <img
      :src="uri"
      :alt="name"
      @load="setImageState(true)"
      @error="setImageState(false)"
      :class="{'opacity-0':!isImageLoaded}"
    />
  </figure>
</template>
    
<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  props: {
    uri: String,
    name: String
  },
  name: "Avatar",
  setup(props) {
    const isImageLoaded = ref(false);
    function setImageState(state: boolean) {
      isImageLoaded.value = state;
    }
    const initials = computed(function getInitials() {
      let [first = "", last = ""] = (props.name || "").split(" ");
      return `${first[0]}${last[0]}`;
    });
    return { isImageLoaded, setImageState, initials };
  }
});
</script>