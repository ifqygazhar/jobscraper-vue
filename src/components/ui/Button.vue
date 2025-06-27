<template>
  <button
    @click="onClick"
    :class="`bg-black pl-${pl} py-${py} my-2 ml-2 rounded-[0.4rem] cursor-pointer`"
  >
    <div class="font-bold text-white text-[1.2rem]">
      <div v-if="primary" class="flex justify-start">
        <p class="ml-2 mr-2">{{ title }}</p>
        <p class="mr-2">💼</p>
      </div>
      <div v-else>
        <p>{{ title }}</p>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  title: {
    type: String,
    required: false,
    default: "Find",
  },
  primary: {
    type: Boolean,
    required: false,
    default: true,
  },
  height: {
    type: Number,
    required: false,
    default: 1.3,
  },
  py: {
    type: Number,
    required: false,
    default: 5,
  },
  pl: {
    type: Number,
    required: false,
    default: 0,
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: false,
  },
});
</script>
