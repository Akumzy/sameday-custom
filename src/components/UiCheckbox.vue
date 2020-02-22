<template>
  <label class="w-5 h-5">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
</template>
    
<script lang="ts">
export default {};
</script>  
<style lang="postcss" scoped>
label {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  user-select: none;
}

label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
  @apply rounded w-full h-full bg-ui-black-10 absolute left-0 right-0 inline-flex justify-center items-center;
}

label:hover input ~ .checkmark {
  @apply bg-ui-black-20;
}

label input:checked ~ .checkmark {
  @apply bg-ui-blue-2;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

label input:checked ~ .checkmark:after {
  display: block;
}

label .checkmark:after {
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>