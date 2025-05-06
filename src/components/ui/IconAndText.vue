<template>
  <div class="flex flex-row flex-wrap items-center">
    <div class="bg-white rounded h-6 w-6 flex items-center justify-center">
      <component :is="icon" class="size-5" />
    </div>
    <p class="ml-2 text-gray-200 text-[min(4vw,0.9rem)]">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "N/A",
  },
  icon: {
    type: Object,
    required: true,
    default: MapPinIcon,
  },
});
</script>
