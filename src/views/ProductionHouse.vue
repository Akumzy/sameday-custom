<template>
  <div class="w-full h-full px-4 py-6">
    <div class="flex justify-between px-8">
      <div class="inline-flex items-center">
        <product-vue class="w-6 h-6 text-ui-blue-2" />
        <h1 class="text-ui-dark leading-10 text-2xl font-bold ml-5">Production House</h1>
      </div>
      <div class="inline-flex items-center">
        <ui-button class="ui-primary mr-4">Categoris</ui-button>
        <div class="h-10 w-300 rounded-md inline-flex items-center bg-ui-gray-light">
          <span class="w-12 justify-center inline-flex text-center">
            <magnify-vue class="w-3 h-3" />
          </span>
          <input type="search" class="h-full flex-1 bg-transparent outline-none pr-2" />
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="flex">
        <div class="inline-flex px-2">
          <div class="ui-tab" :class="[isActiveTab('all')]">
            <div>
              <span class="font-semibold">All Productions</span>
              <span>178</span>
            </div>
          </div>
          <div class="ui-tab" :class="[isActiveTab('awaiting')]">
            <div class="border-l border-r border-ui-text-base px-4">
              <span class="font-semibold">Awating Production</span>
              <span>178</span>
            </div>
          </div>
          <div class="ui-tab" :class="[isActiveTab('confirmed')]">
            <div>
              <span class="font-semibold">Completed</span>
              <span>178</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import ProductVue from "@/components/icons/Product.vue";
import UiButton from "../components/UiButton.vue";
import CloseVue from "../components/icons/Close.vue";
import MagnifyVue from "../components/icons/Magnify.vue";
type Tabs = "all" | "awaiting" | "confirmed";
export default defineComponent({
  components: { ProductVue, UiButton, CloseVue, MagnifyVue },
  name: "ProjectionHouse",
  setup() {
    const activeTab = ref<Tabs>("all");
    function isActiveTab(tab: Tabs) {
      return tab === activeTab.value ? "active" : "";
    }
    return { isActiveTab };
  }
});
</script>
<style lang="postcss">
.ui-tab {
  @apply border-b-4 border-transparent px-4 py-2;
  &.active {
    @apply border-ui-blue-2 text-ui-blue-2;
  }
}
</style>