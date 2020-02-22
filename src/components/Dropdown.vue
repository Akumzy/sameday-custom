<template>
  <details class="inline-flex relative">
    <summary>
      <slot name="label" />
    </summary>
    <div role="menu" class="absolute z-50">
      <div class="w-full">
        <div class="menu">
          <slot name="menu" />
        </div>
      </div>
    </div>
  </details>
</template>
    
<script lang="ts">
export default {};
</script>
<style lang="postcss" scoped>
details > summary {
  list-style: none;
  > *{
      pointer-events: none;
  }
}
details > summary::-webkit-details-marker {
  display: none;
}
details[open] > summary::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  cursor: default;
  z-index: 20;
  background: rgba(0, 0, 0, 0);
}

details {
  > div {
    top: calc(100% + 10px);
  }
  &.right {
    > div {
      right: 0px;
    }
  }

  &.left {
    > div {
      left: 0px;
    }
  }
}

.menu {
  background-color: #ffffff;
}

.menu {
  border-radius: 5px;
  min-width: 191px;
  box-shadow: 0px 3px 50px #00000017;
  @apply flex bg-white flex-col py-2 rounded;
}

details .menu > *:not(.divider) {
  @apply inline-flex truncate px-4 py-2  items-center cursor-pointer;
}
details .menu > *:not(.divider):hover,
details.menu > *.active {
  @apply bg-gray-100;
}
.divider {
  @apply w-full w-full bg-ui-gray-3  my-2;
  height: 1px;
}
</style>