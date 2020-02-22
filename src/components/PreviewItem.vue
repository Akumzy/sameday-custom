<template>
  <div class="w-full h-full relative item-preview" v-preview>
    <slot />
    <div class="item-preview-box">
      <div class="flex w-full">
        <div v-for="(preview, i) in previews" :key="i" class="mx-2 h-full" style="width: 150px">
          <div class="bg-white w-full" style="height: 80%">
            <img :src="`${publicPath}/images/${preview.uri}`" :alt="preview.label" />
          </div>
          <div
            class="w-full font-semibold text-white flex items-end pb-1 justify-center"
            style="height: 20%"
          >
            <span>{{preview.label}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  props: {
    previews: Array
  },
  name: "PreviewItem",
  directives: {
    preview: {
      inserted(el: HTMLElement) {
        el.addEventListener("mouseenter", function() {
          let target = el.querySelector(".item-preview-box") as HTMLElement;
          if (target && !target.classList.contains("active")) {
            target.classList.add("active");
          }
          el.addEventListener("mouseleave", onMouseOut);
        });
        function onMouseOut(ev: MouseEvent) {
          let target = el.querySelector(".item-preview-box") as HTMLElement;

          if (target.classList.contains("active")) {
            target.classList.remove("active");
          }
          el.removeEventListener("mouseout", onMouseOut);
        }
      }
    }
  },
  setup(props) {
    return { publicPath: `${location.protocol}//${location.host}` };
  }
});
</script>
<style lang="postcss">
.item-preview-box {
  transform: scale(0);
  transition-delay: 200ms;
  left: 3rem;
  @apply h-64 top-0 absolute origin-top-left bg-ui-preview p-4 inline-flex transition-all duration-500 rounded-md shadow z-10;
  &.active {
    transform: scale(1);
  }
}
</style>