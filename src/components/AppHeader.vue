
<template>
  <header class="app-header flex items-center px-6 w-full">
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
      <div class="px-4 inline-flex items-center text-ui-text-base">
        <svg class="icon w-6 h-6" viewBox="0 0 41.692 31.269">
          <path
            d="M37.783,59.882H3.909A3.913,3.913,0,0,0,0,63.791V87.242a3.913,3.913,0,0,0,3.909,3.909H37.783a3.913,3.913,0,0,0,3.909-3.909V63.791A3.913,3.913,0,0,0,37.783,59.882Zm0,2.606a1.3,1.3,0,0,1,.5.1L20.846,77.7,3.409,62.589a1.3,1.3,0,0,1,.5-.1Zm0,26.057H3.909a1.3,1.3,0,0,1-1.3-1.3v-21.9L19.992,80.41a1.3,1.3,0,0,0,1.708,0L39.086,65.342v21.9A1.3,1.3,0,0,1,37.783,88.545Z"
            transform="translate(0 -59.882)"
          />
        </svg>
        <span class="ml-4">Message</span>
      </div>
      <div
        class="px-4 inline-flex items-center text-ui-text-base border-ui-dark-lighter border-r border-l"
      >
        <svg class="icon w-6 h-6" viewBox="0 0 43.437 46.742">
          <path
            d="M29.58,30.776H55.335a5.313,5.313,0,0,0,5.3-5.3V14.522a.122.122,0,0,0-.01-.058c0-.019-.01-.048-.01-.067s-.01-.038-.01-.058a.611.611,0,0,1-.019-.067c-.01-.019-.01-.038-.019-.058s-.01-.038-.019-.058a.468.468,0,0,1-.029-.067.21.21,0,0,0-.029-.048l-.029-.058c-.01-.019-.019-.029-.029-.048s-.029-.038-.038-.058a.168.168,0,0,0-.038-.048c-.01-.019-.029-.029-.038-.048s-.029-.029-.038-.048-.029-.029-.038-.038l-.048-.048c-.019-.01-.029-.029-.048-.038s-.038-.029-.058-.038-.029-.019-.048-.029a.2.2,0,0,1-.058-.038l-.058-.029-.058-.029-.058-.029c-.019-.01-.038-.01-.058-.019a.178.178,0,0,0-.067-.019.416.416,0,0,1-.048-.01.211.211,0,0,0-.077-.01c-.01,0-.019-.01-.038-.01L26.881,8.845V4.291a.591.591,0,0,0-.01-.134.073.073,0,0,0-.01-.038c0-.029-.01-.058-.01-.086s-.01-.048-.019-.077-.01-.029-.01-.048l-.029-.086c0-.01-.01-.029-.01-.038a.288.288,0,0,0-.038-.077c-.01-.01-.01-.029-.019-.038a.2.2,0,0,0-.038-.058c-.01-.019-.019-.029-.029-.048s-.019-.029-.029-.048-.029-.038-.038-.058l-.029-.029-.058-.058-.029-.029a.418.418,0,0,0-.067-.058c-.01-.01-.029-.019-.038-.029s-.038-.029-.058-.048a.886.886,0,0,0-.077-.048c-.01-.01-.019-.01-.029-.019-.038-.019-.086-.038-.125-.058L19,.1a1.3,1.3,0,1,0-1.009,2.392l6.283,2.651V33.562A5.309,5.309,0,0,0,28.9,38.817a5.233,5.233,0,1,0,9.722,2.69,5.136,5.136,0,0,0-.72-2.642H49.561a5.162,5.162,0,0,0-.72,2.642,5.235,5.235,0,1,0,5.235-5.235H29.58a2.712,2.712,0,0,1-2.709-2.709V30.046A5.363,5.363,0,0,0,29.58,30.776ZM36.035,41.5a2.642,2.642,0,1,1-2.642-2.642A2.646,2.646,0,0,1,36.035,41.5Zm20.692,0a2.642,2.642,0,1,1-2.642-2.642A2.646,2.646,0,0,1,56.728,41.5ZM55.335,28.182H29.58a2.712,2.712,0,0,1-2.709-2.709V11.458l31.173,4.294v9.712A2.714,2.714,0,0,1,55.335,28.182Z"
            transform="translate(-17.2 0)"
          />
        </svg>
        <span class="ml-4">Market Place</span>
      </div>
      <div class="px-4 inline-flex items-center text-ui-text-base border-ui-dark-lighter border-r">
        <svg class="icon w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M14.4 9h-5.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h5.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 14h-7.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h7.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM8.6 6h7.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-7.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1zM5.4 9h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM5.4 14h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM5.4 4h-1.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h1.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1z"
          />
        </svg>
        <span class="ml-4">Notifications</span>
      </div>
      <div class="px-4">
        <div class="w-10 h-10">
          <avatar class="border border-ui-blue-1" />
        </div>
        <div class="flex font-medium text-sm justify-center">Me</div>
      </div>
    </div>
  </header>
</template>
    
<script lang="ts">
import Logo from "@/components/Logo.vue";
import Avatar from "@/components/Avatar.vue";
import { defineComponent } from "@vue/composition-api";
import MagnifyVue from "./icons/Magnify.vue";

export default defineComponent({
  components: { Logo, Avatar, MagnifyVue },
  name: "AppHeader",
  setup() {
    return {};
  }
});
</script>
<style lang="postcss">
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
</style>