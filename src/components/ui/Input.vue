<template>
  <input
    type="text"
    placeholder="Programmer..."
    :class="`border-2 focus:outline-none border-black rounded-md w-full h-${props.height} px-2 py-2 my-2 `"
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
