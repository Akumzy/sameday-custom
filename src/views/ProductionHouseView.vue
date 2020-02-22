<template>
  <div class="min-h-screen w-full py-6 bg-ui-gray-4">
    <div class="container px-4 ml-auto">
      <div class="pl-8">
        <!--  -->
        <div class="flex justify-between">
          <div class="inline-flex items-center mb-6">
            <router-link to="/production-house" tag="div" class="cursor-pointer">
              <span
                class="w-8 h-8 inline-flex justify-center items-center bg-ui-blue-2 text-white rounded-full"
              >
                <arrow-left-vue class="w-4 h-4" />
              </span>
              <span class="ml-4">Back</span>
            </router-link>
            <div class="h-5 mx-4 bg-ui-dark-lighter" style="width:1px"></div>
            <product-vue class="w-6 h-6 text-ui-blue-2" />
            <h1 class="text-ui-dark leading-10 text-2xl font-bold ml-5">Production House</h1>
          </div>
        </div>
        <!--  -->
        <div class="mb-6">
          <span class="font-bold">Order: {{$route.params.id}}</span>
        </div>
        <!--  -->
        <div class="flex justify-between mb-6">
          <span class="text-ui-blue-2 text-xs font-medium">Account Setup > Delivery Method</span>
          <div>
            <span class="text-ui-blue-2 mr-4">Production Status</span>
            <span class="text-ui-green font-semibold font-semibold">Running 2 of 4</span>
          </div>
        </div>
        <!--  -->
        <div
          class="rounded w-full px-4 flex items-center justify-between font-medium ui-shadow bg-white"
          style="height: 150px;"
        >
          <!--  -->
          <div class="text-center">
            <div class="inline-flex justify-center">
              <shopping-cart-vue class="w-4 h-4" />
              <span class="ml-2 truncate">Order Value</span>
            </div>
            <div class="text-ui-blue-2 mt-2 text-base">$40,000</div>
          </div>
          <!--  -->
          <div class="h-10 mx-4 bg-ui-gray-3" style="width:1px" />
          <!--  -->
          <div class="text-center">
            <div class>
              <span class>Order Date</span>
            </div>
            <div class="mt-2">
              <time class="text-ui-blue-2 truncate">25-June-2017</time>
            </div>
          </div>
          <!--  -->
          <div class="h-10 mx-4 bg-ui-gray-3" style="width:1px" />
          <!--  -->
          <div class="text-center">
            <div class="justify-center">
              <span class>Delivery Method</span>
            </div>
            <div class="mt-2">
              <span class="text-ui-blue-2">Pickup Order</span>
              <span class="text-ui-green font-semibold text-sm ml-4">Can Edit</span>
            </div>
          </div>
          <!--  -->
          <div class="h-10 mx-4 bg-ui-gray-3" style="width:1px" />
          <!--  -->
          <div class="text-center">
            <div class>
              <span class>Rush Option</span>
            </div>
            <div class="mt-2">
              <span
                class="w-6 h-6 bg-ui-green-1 rounded-full inline-flex justify-center items-center text-white"
              >
                <check-vue class="w-3 h-3" />
              </span>
              <span class="text-ui-blue-2 ml-2">Rush</span>
            </div>
          </div>
          <!--  -->
          <div class="h-10 mx-4 bg-ui-gray-3" style="width:1px" />
          <!--  -->
          <div class="text-center">
            <div class="justify-center">
              <span class>Status</span>
            </div>
            <div class="mt-2">
              <span class="text-ui-blue-2">Pending</span>
            </div>
          </div>
          <!--  -->
          <div class="h-10 mx-4 bg-ui-gray-3" style="width:1px" />
          <!--  -->
          <div class="text-center">
            <div class>
              <span class>Requested By</span>
            </div>
            <div class="mt-2">
              <time class="flex text-ui-blue-2">25-June-2017</time>
              <div class="text-xs">
                <span class="text-ui-gray mr-4">Time Left</span>
                <span class="text-ui-green font-semibold font-medium">10:00:00</span>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="h-10 mx-4 bg-ui-gray-3" style="width:1px" />
          <!--  -->
          <div class="text-center">
            <div class="justify-center">
              <span class>Shipped or Picked Date</span>
            </div>
            <div class="mt-2">
              <span class="text-ui-blue-2">25 - June - 2017</span>
            </div>
          </div>
          <!--  -->
        </div>
        <!--  -->
        <div class="mt-10">
          <div class="rounded-md bg-white ui-shadow py-4">
            <div class="flex justify-between">
              <div class="inline-flex items-center">
                <div role="button" class="ui-tab" :class="[isActiveTab('all')]">
                  <div class="cursor-pointer" @click="setActiveTab('all')">
                    <span class="font-semibold">Product Details</span>
                  </div>
                </div>
                <div class="h-6 mx-4 bg-ui-gray-3" style="width:1px" />
                <div class="ui-tab" :class="[isActiveTab('awaiting')]">
                  <div role="button" class="px-4 cursor-pointer" @click="setActiveTab('awaiting')">
                    <span class="font-semibold">History / Notes</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <dropdown class="ml-4 right">
                  <template #label>
                    <ui-button class="text-ui-green font-semibold">
                      <span>Worksheet</span>
                      <angle-down-vue class="w-4 h-4 ml-2" />
                    </ui-button>
                  </template>
                  <template #menu>
                    <div class="justify-center">Worksheet</div>
                    <div class="divider"></div>
                    <div class="justify-center">Invoice</div>
                  </template>
                </dropdown>

                <ui-button class="ui-inactive px-8 opacity-50 mx-4">Print</ui-button>
                <ui-button class="ui-outline">
                  <note-vue class="w-4 h-4 mr-2 text-ui-gray-3" />
                  <span>Add Note</span>
                </ui-button>
                <dropdown class="ml-4 right">
                  <template #label>
                    <ui-button class="ui-primary">
                      <span>Complete Production</span>
                      <angle-down-vue class="w-4 h-4 ml-2" />
                    </ui-button>
                  </template>
                  <template #menu>
                    <div>
                      <contrast-vue class="w-4 h-4 mr-4" />
                      <span class="pr-6">Full Production</span>
                    </div>
                    <div class="divider"></div>
                    <div>
                      <contrast-vue class="w-4 h-4 mr-4" />
                      <span class="pr-6">Partial Production</span>
                    </div>
                  </template>
                </dropdown>
              </div>
            </div>
            <div class="mt-8 h-16 bg-ui-gray-light pl-10 pr-4 flex items-center justify-between">
              <span class="font-semibold">Product</span>
              <ui-button class="border border-ui-blue-2 text-ui-blue-2">Download Artwork</ui-button>
            </div>
            <div class="h-300 pb-4 pt-6 px-4 flex">
              <div
                v-for="(preview, i) in previews"
                :key="i"
                class="mx-2 h-full"
                style="max-width: 180px"
              >
                <div class="bg-white w-full" style="height: 80%">
                  <img :src="`${publicPath}/images/${preview.uri}`" :alt="preview.label" />
                </div>
                <div
                  class="w-full font-semibold flex items-center justify-center"
                  style="height: 20%"
                >
                  <span>{{preview.label}}</span>
                </div>
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
                      <span>Item #</span>
                    </th>
                    <th style="min-width:110px"></th>
                    <th style="min-width:200px">
                      <span>Details</span>
                    </th>
                    <th style="min-width:140px">
                      <span>Production Type</span>
                    </th>
                    <th style="min-width:80px">
                      <span>Colors</span>
                    </th>
                    <th class="text-center">
                      <span>Quantity</span>
                    </th>
                    <th style>
                      <span>Paid</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white">
                    <td class="text-center">
                      <ui-checkbox />
                    </td>
                    <td>
                      <span>#232JODJSDKN2</span>
                    </td>
                    <td>
                      <div class="w-12 h-12 flex items-center">
                        <preview-item class="inline-flex items-center" :previews="previews">
                          <eye-vue class="w-4 h-4 mr-3" />
                          <div class="w-full overflow-hidden">
                            <img src="~@/assets/images/min-design.png" alt="Sample design" />
                          </div>
                        </preview-item>
                      </div>
                    </td>
                    <td class="pr-4" style="width: 216px">
                      <p>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                    </td>

                    <td class="px-2">
                      <span class="text-ui-red-2 font-semibold">DTG Print</span>
                    </td>
                    <td>
                      <ui-button class="ui-primary" style="background-color:#529DED">Royal</ui-button>
                    </td>

                    <td class="pl-4">
                      <span>L X 4</span>
                    </td>
                    <td>
                      <div class="pr-6 text-ui-green font-semibold text-center">
                        <span>Paid in full</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import clockVue from "../components/icons/clock.vue";
import UiCheckbox from "../components/UiCheckbox.vue";
import PreviewItem from "../components/PreviewItem.vue";
import arrowLeftVue from "../components/icons/arrow-left.vue";
import ShoppingCartVue from "../components/icons/ShoppingCart.vue";
import CheckVue from "../components/icons/Check.vue";
import NoteVue from "../components/icons/Note.vue";
import AngleDownVue from "@/components/icons/AngleDown.vue";
import Dropdown from "../components/Dropdown.vue";
import EyeVue from "../components/icons/Eye.vue";
import ContrastVue from "../components/icons/Contrast.vue";

type Tabs = "all" | "awaiting" | "confirmed";
export default defineComponent({
  components: {
    ProductVue,
    UiButton,
    CloseVue,
    MagnifyVue,
    clockVue,
    UiCheckbox,
    PreviewItem,
    arrowLeftVue,
    ShoppingCartVue,
    CheckVue,
    NoteVue,
    AngleDownVue,
    Dropdown,
    EyeVue,
    ContrastVue
  },
  name: "ProjectionHouseView",

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
      ],
      publicPath: `${location.protocol}//${location.host}`
    };
  }
});
</script>
<style lang="postcss">
.ui-tab {
  @apply border-b-4 border-transparent px-4 py-4  transition-all duration-300;
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
}
.ui-shadow {
  box-shadow: 0px 3px 50px #00000007;
}
</style>