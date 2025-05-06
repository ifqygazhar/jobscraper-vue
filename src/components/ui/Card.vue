<template>
  <div
    class="rounded-[0.8rem] p-4 bg-black w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[58vw] xl:w-[58vw] overflow-auto"
  >
    <div class="flex flex-col flex-wrap">
      <div class="flex flex-row justify-between mb-1.5">
        <p class="text-white text-[min(4vw,1.2rem)]">Programmer</p>
        <div class="flex flex-row flex-wrap items-center">
          <div class="rounded bg-white mr-2">
            <img
              class="h-5 w-5 object-contain"
              src="https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/43349064a3f558d1f4095294fc357137.jpeg"
              alt="company logos"
            />
          </div>
          <p class="text-gray-200 text-[min(4vw,0.9rem)]">Company name</p>
        </div>
      </div>
      <div class="flex flex-col flex-wrap mb-2">
        <IconAndText
          class="mb-2"
          :icon="MapPinIcon"
          :title="'Sample Location'"
        />
        <IconAndText :icon="BanknotesIcon" :title="'Sallary'" />
      </div>
    </div>
    <button class="bg-jobstreet rounded w-full p-1.5">
      <div class="flex flex-row justify-center items-center">
        <p class="text-white text-[min(4vw,0.8rem)] mr-2">Apply</p>
        <Jobstreet />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { BanknotesIcon, MapPinIcon } from "@heroicons/vue/20/solid";
import IconAndText from "./IconAndText.vue";
import Jobstreet from "../icon/Jobstreet.vue";
</script>
