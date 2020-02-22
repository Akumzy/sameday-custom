
<template>
  <header class="app-header flex items-center px-6 w-full z-40">
    <div>
      <Logo width="130" height="50" />
    </div>
    <div class="flex justify-end items-center flex-1">
      <div class="w-16 flex search-bar">
        <div class="w-16 inline-flex justify-center items-center">
          <magnify-vue class="w-6 h-6" />
        </div>
        <div class="search-bar-field overflow-hidden">
          <input type="text" placeholder="Search" class="w-full px-2 outline-none" />
        </div>
      </div>
      <div class="px-4 inline-flex items-center text-ui-gray-2">
        <div class="relative">
          <envolope-vue class="w-6 h-6" />
          <span class="badge">4</span>
        </div>
        <span class="ml-4">Message</span>
      </div>
      <div
        class="px-4 inline-flex items-center text-ui-gray-2 border-ui-dark-lighter border-r border-l"
      >
        <div class="relative">
          <shopping-cart-vue class="w-6 h-6" />
          <span class="badge">10</span>
        </div>
        <span class="ml-4">Market Place</span>
      </div>
      <div class="px-4 inline-flex items-center text-ui-gray-2 border-ui-dark-lighter border-r">
        <svg class="icon w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M14.4 9h-5.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h5.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 14h-7.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h7.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM8.6 6h7.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-7.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1zM5.4 9h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM5.4 14h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM5.4 4h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1z"
          />
        </svg>
        <span class="ml-4">Notifications</span>
      </div>
      <dropdown class="right">
        <template #label>
          <div class="px-4">
            <div class="w-10 h-10">
              <avatar class="border border-ui-blue-1" name="Akuma Isaac" />
            </div>
            <div class="flex font-medium text-sm justify-center items-center">
              <span>Me</span>
              <angle-down-vue class="w-4 h-4 ml-1 text-ui-blue-2" />
            </div>
          </div>
        </template>
        <template #menu>
          <div class="justify-center">Profile</div>
          <div class="divider"></div>
          <div class="justify-center">Logout</div>
        </template>
      </dropdown>
    </div>
  </header>
</template>
    
<script lang="ts">
import Logo from "@/components/Logo.vue";
import Avatar from "@/components/Avatar.vue";
import { defineComponent } from "@vue/composition-api";
import MagnifyVue from "./icons/Magnify.vue";
import arrowLeftVue from "./icons/arrow-left.vue";
import Dropdown from "./Dropdown.vue";
import AngleDownVue from "./icons/AngleDown.vue";
import EnvolopeVue from "./icons/Envolope.vue";
import ShoppingCartVue from "./icons/ShoppingCart.vue";

export default defineComponent({
  components: {
    Logo,
    Avatar,
    MagnifyVue,
    AngleDownVue,
    Dropdown,
    EnvolopeVue,
    ShoppingCartVue
  },
  name: "AppHeader",
  setup() {
    return {};
  }
});
</script>
<style lang="postcss" scoped>
.search-bar {
  @apply pb-1 duration-200 transition-all  border-ui-dark-lighter border-r border-l;
  &:hover,
  &:focus-within,
  &.active {
    width: 270px;
    @apply border-b border-r-0 border-l-0;
  }
  &-field {
    width: calc(100% - 4rem);
  }
}
.badge {
  right: -10px;
  top: -5px;
  @apply w-4 h-4 inline-flex justify-center items-center bg-ui-blue-2 text-white rounded-full absolute;
}
</style>