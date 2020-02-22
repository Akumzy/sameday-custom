<template>
  <div id="app" class="fixed w-full h-full flex">
    <app-sidebar />
    <div class="body h-full flex-1">
      <app-header />
      <main class="overflow-y-auto w-full">
        <router-view />
        <app-footer />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/sidebar/AppSidebar.vue";
import AppFooter from "./components/AppFooter.vue";

export default defineComponent({
  components: { AppHeader, AppSidebar, AppFooter },
  name: "App",
  setup() {
    return {};
  }
});
</script>
<style lang="postcss">
:root {
  --sidebar-w-open: 240px;
  --sidebar-w-closed: 80px;
  --sidebar-w: var(--sidebar-w-open);
  --header-h: 77px;
}
#app {
  > aside {
    width: var(--sidebar-w);
    box-shadow: 0px 3px 50px #0000001f;
  }

  > .body {
    > header {
      height: var(--header-h);
      box-shadow: 0px 3px 50px #1877ff1c;
    }
    > main {
      height: calc(100% - var(--header-h));
    }
  }
}
.icon {
  fill: currentColor;
  display: inline-block;
}
</style>