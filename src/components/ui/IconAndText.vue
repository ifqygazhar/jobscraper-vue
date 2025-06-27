<template>
  <div class="flex flex-row flex-wrap items-center">
    <div
      :class="{
        'bg-white': isCardActive,
        'bg-black': !isCardActive,
      }"
      class="rounded h-6 w-6 flex items-center justify-center"
    >
      <component
        :is="icon"
        :class="{
          'text-white': !isCardActive,
          'text-black': isCardActive,
        }"
        class="size-5"
      />
    </div>
    <p
      :class="{
        'text-gray-200': isCardActive,
        'text-black': !isCardActive,
      }"
      class="ml-2 text-[min(4vw,0.9rem)]"
    >
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  isCardActive: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: false,
    default: "N/A",
  },
  icon: {
    type: Object,
    required: false,
    default: MapPinIcon,
  },
});
</script>
