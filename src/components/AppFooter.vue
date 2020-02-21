<template>
  <footer class="bg-ui-footer w-full px-6 flex items-center font-Nunito">
    <div class="flex w-full container mx-auto">
      <div class="w-1/4">
        <h3 class="text-ui-blue-2 font-bold text-lg">Download App</h3>
        <div class="mt-4">
          <a
            href
            class="w-12 h-12 rounded-full bg-ui-black-05 inline-flex mr-6 items-center justify-center"
          >
            <apple-vue class="w-4 h-4" />
          </a>
          <a
            href
            class="w-12 h-12 rounded-full bg-ui-black-05 inline-flex items-center justify-center"
          >
            <play-store-vue class="w-4 h-4" />
          </a>
        </div>
      </div>
      <div class="w-2/4 flex flex-col justify-center text-ui-text-base">
        <p
          class="text-sm"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
        <div class="flex w-full mt-6 text-ui-blue-2 underline text-sm">
          <div class="w-1/3">
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div class="w-1/3">
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div class="w-1/3">
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
        </div>
      </div>
      <div class="w-1/4 flex-col flex items-end">
        <div class="ml-auto">
          <h3 class="text-ui-blue-2 font-bold text-lg">Contact Us</h3>
          <div class="mt-4">
            <a href class>
              <twitter-vue class="w-6 h-6" />
            </a>
            <a href class="mx-4">
              <facebook-vue class="w-6 h-6" />
            </a>
            <a href class>
              <instagram-vue class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
    
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PlayStoreVue from "./icons/PlayStore.vue";
import AppleVue from "./icons/Apple.vue";
import FacebookVue from "./icons/Facebook.vue";
import TwitterVue from "./icons/Twitter.vue";
import InstagramVue from "./icons/Instagram.vue";

export default defineComponent({
  components: { PlayStoreVue, AppleVue, FacebookVue, TwitterVue, InstagramVue },
  name: "AppFooter",
  setup() {
    return {};
  }
});
</script>
<style lang="postcss" scoped>
footer {
  height: 300px;
}
</style>