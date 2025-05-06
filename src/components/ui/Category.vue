<template>
  <div
    class="bg-transparent border-2 rounded-[0.4rem] ml-2 mb-2 active:bg-black active:text-white px-2 py-2 sm:w-1/4 md:w-1/4 lg:w-1/9 xl:w-1/9 cursor-pointer"
  >
    <div class="flex flex-row flex-wrap justify-start">
      <p class="mr-1 text-[min(4vw,0.9rem)]">Title</p>
      <p class="text-[min(4vw,0.9rem)]">Emoji</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
