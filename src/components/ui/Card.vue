<template>
  <div
    class="rounded-[0.8rem] p-4 bg-black w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[58vw] xl:w-[58vw] overflow-auto"
  >
    <div class="flex flex-col flex-wrap">
      <div class="flex flex-row justify-between mb-1">
        <p class="text-white text-[min(4vw,1.2rem)]">Programmer</p>
        <IconAndText :icon="BanknotesIcon" :title="'tesla'" />
      </div>
      <div class="flex flex-col flex-wrap">
        <IconAndText
          class="mb-2"
          :icon="MapPinIcon"
          :title="'Sample Location'"
        />
        <IconAndText :icon="BanknotesIcon" :title="'Price'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BanknotesIcon, MapPinIcon } from "@heroicons/vue/20/solid";
import IconAndText from "./IconAndText.vue";
</script>
