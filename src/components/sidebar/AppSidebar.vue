
<template>
  <aside class="h-full duration-200 transition-all" :class="[isOpen?'bg-ui-blue-1':'bg-ui-blue-2']">
    <div class="border-b border-ui-black-10 h-header-h flex items-center relative">
      <!--  -->
      <div class="px-6" v-if="isOpen">
        <button class="text-white border-none outline-none bg-transparent" @click="closeSidebar">
          <close-vue class="w-6 h-6" />
        </button>
      </div>
      <!--  -->
      <div class="flex justify-center absolute w-sidebar-closed" v-else>
        <button class="text-white border-none outline-none bg-transparent" @click="openSidebar">
          <svg class="w-6 h-6 icon" viewBox="0 0 20 20">
            <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z" />
          </svg>
        </button>
      </div>
      <!--  -->
    </div>
    <div style="height: calc(100% - var(--header-h))">
      <div class="text-white pt-10 overflow-y-auto" style="height:calc(100% - 3rem)">
        <!--  -->
        <router-link to="/" tag="div">
          <list-item :is-open="isOpen">
            <template #icon>
              <grid-vue class="w-5 h-5" />
            </template>
            <template #text>
              <span>Dashboard</span>
            </template>
          </list-item>
        </router-link>
        <!--  -->

        <details class="accordion">
          <summary>
            <list-item :is-open="isOpen">
              <template #icon>
                <time-left-vue class="w-5 h-5" />
              </template>
              <template #text>
                <span>
                  Operations
                  <angle-down-vue class="w-4 h-4 ml-2" />
                </span>
              </template>
            </list-item>
          </summary>
          <div class="text-xs font-medium">
            <router-link to="/orders" tag="div">
              <list-item :is-open="isOpen" class="!text-xs !font-medium">
                <template #text>
                  <span>Orders</span>
                </template>
              </list-item>
            </router-link>
            <router-link to="/production-house" tag="div">
              <list-item :is-open="isOpen" class="!text-xs !font-medium">
                >
                <template #text>
                  <span>Production House</span>
                </template>
              </list-item>
            </router-link>
            <router-link to="/orders" tag="div">
              <list-item :is-open="isOpen" class="!text-xs !font-medium">
                >
                <template #text>
                  <span>Bids</span>
                </template>
              </list-item>
            </router-link>
            <router-link to="/promotion" tag="div" class="!text-xs !font-medium">
              <list-item :is-open="isOpen" class="!text-xs !font-medium">
                <template #text>
                  <span>Promotion / Discount</span>
                </template>
              </list-item>
            </router-link>
          </div>
        </details>
        <!--  -->
        <list-item :is-open="isOpen">
          <template #icon>
            <records-vue class="w-5 h-5" />
          </template>
          <template #text>
            <span>Records</span>
          </template>
        </list-item>
        <!--  -->
        <list-item :is-open="isOpen">
          <template #icon>
            <shopping-cart-vue class="w-5 h-5" />
          </template>
          <template #text>
            <span>
              Supply Store
              <span class="badge">3</span>
            </span>
          </template>
        </list-item>
        <!--  -->
        <list-item :is-open="isOpen">
          <template #icon>
            <supply-vue class="w-5 h-5" />
          </template>
          <template #text>
            <span>Market Place</span>
          </template>
        </list-item>
        <!--  -->
        <list-item :is-open="isOpen">
          <template #icon>
            <chat-vue class="w-5 h-5" />
          </template>
          <template #text>
            <span>Forums</span>
          </template>
        </list-item>
        <!--  -->
      </div>
      <div class="text-white">
        <list-item :is-open="isOpen">
          <template #icon>
            <settings-vue class="w-5 h-5" />
          </template>
          <template #text>
            <span>Settings</span>
          </template>
        </list-item>
      </div>
    </div>
  </aside>
</template>
    
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import ListItem from "./ListItem.vue";
import GridVue from "../icons/Grid.vue";
import TimeLeftVue from "../icons/TimeLeft.vue";
import RecordsVue from "../icons/Records.vue";
import SettingsVue from "../icons/Settings.vue";
import ShoppingCartVue from "../icons/ShoppingCart.vue";
import SupplyVue from "../icons/Supply.vue";
import ChatVue from "../icons/Chat.vue";
import CloseVue from "../icons/Close.vue";
import AngleDownVue from "../icons/AngleDown.vue";

export default defineComponent({
  components: {
    ListItem,
    GridVue,
    TimeLeftVue,
    RecordsVue,
    SettingsVue,
    ShoppingCartVue,
    SupplyVue,
    ChatVue,
    CloseVue,
    AngleDownVue
  },
  name: "AppSidebar",
  setup() {
    const isOpen = ref(true);

    function closeSidebar() {
      document.documentElement.style.setProperty(
        "--sidebar-w",
        "var(--sidebar-w-closed)"
      );

      isOpen.value = false;
    }
    function openSidebar() {
      document.documentElement.style.setProperty(
        "--sidebar-w",
        "var(--sidebar-w-open)"
      );
      isOpen.value = true;
    }
    return { closeSidebar, isOpen, openSidebar };
  }
});
</script>
<style lang="postcss">
.pl {
  padding-left: calc(var(--sidebar-w-closed) - 1.25rem);
}
.is-active,
.router-link-exact-active {
  @apply bg-ui-sidebar-list-overlay text-ui-blue-1;
}
.badge {
  font-size: 10px;
  @apply bg-ui-red-1 w-4 h-4 rounded-full inline-flex items-center justify-center ml-4;
}
.accordion > summary::-webkit-details-marker {
  display: none;
}
</style>