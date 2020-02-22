<template>
  <div class="w-full min-h-screen px-4 py-6 bg-ui-gray-4">
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
      <div class="flex justify-between">
        <div class="inline-flex px-2">
          <div role="button" class="ui-tab" :class="[isActiveTab('all')]">
            <div class="cursor-pointer" @click="setActiveTab('all')">
              <span class="font-semibold">All Productions</span>
              <span class="text-sm ml-2 px-2 text-ui-gray-1">178</span>
            </div>
          </div>
          <div class="ui-tab" :class="[isActiveTab('awaiting')]">
            <div
              role="button"
              class="border-l border-r border-ui-gray-2 px-4 cursor-pointer"
              @click="setActiveTab('awaiting')"
            >
              <span class="font-semibold">Awating Production</span>
              <span
                class="text-sm ml-2 bg-ui-red-1 text-white rounded-full w-6 h-6 inline-flex items-center justify-center font-bold"
              >19</span>
            </div>
          </div>
          <div class="ui-tab" :class="[isActiveTab('confirmed')]">
            <div role="button" class="cursor-pointer" @click="setActiveTab('confirmed')">
              <span class="font-semibold">Completed</span>
            </div>
          </div>
        </div>
        <div>
          <ui-button class="ui-outline text-sm">Print worksheet</ui-button>
          <ui-button>Mark as Complete</ui-button>
          <ui-button class="ui-inactive px-8 opacity-50">Save</ui-button>
        </div>
      </div>
      <div class="container">
        <table class="w-full ui-table border-collapse">
          <thead>
            <tr class="bg-ui-gray-light">
              <th style="width:40px; text-align:center">
                <ui-checkbox />
              </th>
              <th style="min-width:110px">
                <span>Order #</span>
              </th>
              <th style="min-width:110px">
                <span>Item #</span>
              </th>
              <th style="min-width:200px">
                <span>Details</span>
              </th>
              <th style="min-width:100px">
                <span>Colors</span>
              </th>
              <th style="min-width:80px">
                <span>Qty</span>
              </th>
              <th style="min-width:90px">
                <span>Print Type</span>
              </th>
              <th style="min-width:110px">
                <span>Delivery Method</span>
              </th>
              <th style="min-width:150px">
                <span>Delivery Time</span>
              </th>
              <th>
                <span>Production Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="i in 2">
              <tr class="h-2 bg-transparent spacer" :key="i+'spacer'"></tr>

              <tr
                :key="i"
                class="bg-white cursor-pointer"
                @click="$router.push('/production-house/ADJ2322434D')"
              >
                <td class="text-center">
                  <ui-checkbox />
                </td>
                <td>
                  <span>#232JODJSDKN2</span>
                </td>
                <td>
                  <span>#232JODJSDKN2</span>
                </td>
                <td>
                  <div class="flex">
                    <div class="w-12 h-12">
                      <preview-item :previews="previews">
                        <div class="w-full h-full overflow-hidden">
                          <img src="~@/assets/images/min-design.png" alt="Sample design" />
                        </div>
                      </preview-item>
                    </div>

                    <div class="px-2 leading-tight" style="font-size:10px">
                      <p>No Minimum - More Color</p>
                      <p>Available - Gildan unisex ultra</p>
                      <p>cotton T- shirt (NY1)</p>
                    </div>
                  </div>
                </td>
                <td>
                  <ui-button class="ui-primary" style="background-color:#529DED">Royal</ui-button>
                </td>
                <td>
                  <span>L X 4</span>
                </td>
                <td>
                  <span>DTG Print</span>
                </td>
                <td>
                  <template v-if="i%2">
                    <div class="flex items-center font-semibold">
                      <clock-vue class="text-ui-blue-1 w-6 h-6" />
                      <span class="text-ui-red-1 px-2">Rush Shipping</span>
                    </div>
                  </template>
                  <template v-else>
                    <span class="text-ui-blue-1 font-semibold">Pickup Order</span>
                  </template>
                </td>
                <td>
                  <div class="font-semibold">
                    <time datetime="23 - June - 2019">23 - June - 2019</time>
                    <div>
                      <span class="text-ui-gray-1 mr-2">Time Left</span>
                      <span class="text-ui-green-1">10:00:00</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="pr-6 font-semibold text-ui-green-1 text-center">
                    <p class="pr-2">Running</p>
                    <p>2 of 5</p>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
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
import clockVue from "../components/icons/clock.vue";
import UiCheckbox from "../components/UiCheckbox.vue";
import TableRow from "../components/production-house/TableRow.vue";
import PreviewItem from "../components/PreviewItem.vue";

type Tabs = "all" | "awaiting" | "confirmed";
export default defineComponent({
  components: {
    ProductVue,
    UiButton,
    CloseVue,
    MagnifyVue,
    clockVue,
    UiCheckbox,
    TableRow,
    PreviewItem
  },
  name: "ProjectionHouse",

  setup() {
    const activeTab = ref<Tabs>("all");
    function isActiveTab(tab: Tabs) {
      return tab === activeTab.value ? "active" : "";
    }
    function setActiveTab(tab: Tabs) {
      return (activeTab.value = tab);
    }

    return {
      isActiveTab,
      setActiveTab,
      previews: [
        { label: "Front", uri: "Front.png" },
        { label: "Back", uri: "Back.png" },
        { label: "Side", uri: "Side-left.png" },
        { label: "Side", uri: "Front.png" }
      ]
    };
  }
});
</script>
<style lang="postcss" scoped>
.ui-tab {
  @apply border-b-4 border-transparent px-4 pt-4  transition-all duration-300;
  &.active {
    @apply border-ui-blue-2 text-ui-blue-2;
  }
}
.ui-table {
  th {
    height: 60px;
    @apply text-left text-sm px-2;
  }
  td {
    height: 80px;
    @apply text-xs font-medium;
  }
  tbody > tr:not(.spacer) {
    @apply shadow-sm;
    &:hover {
      box-shadow: 0px 3px 50px #007bff12;
    }
  }
}
</style>