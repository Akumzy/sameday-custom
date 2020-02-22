<template>
  <tr class="bg-white">
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
      <template v-if="index%2">
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
    
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UiCheckbox from "../UiCheckbox.vue";
import UiButton from "../UiButton.vue";
import PreviewItem from "../PreviewItem.vue";

export default defineComponent({
  components: { UiCheckbox, UiButton, PreviewItem },
  props: {
    index: Number
  },

  setup() {
    return {
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
