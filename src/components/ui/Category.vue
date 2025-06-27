<template>
  <div
    class="bg-transparent border-2 rounded-[0.4rem] mb-2 active:bg-black active:text-white py-1 w-full cursor-pointer"
  >
    <div class="flex flex-row flex-wrap justify-center">
      <p class="mr-1 text-[min(4vw,0.9rem)]">{{ title }}</p>
      <component :is="icon" v-bind="iconProps"></component>
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
  icon: {
    type: Object,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: "Title",
  },
  iconProps: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});
</script>
