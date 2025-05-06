<template>
  <input
    type="text"
    placeholder="Programmer..."
    :class="`border-2 focus:outline-none border-black rounded-md w-1/2 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2  h-${props.height} px-2 py-2 my-2 mx-2`"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  height: {
    type: Number,
    required: false,
    default: 15,
  },
});
</script>
