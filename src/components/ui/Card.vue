<template>
  <div
    :class="{
      'bg-black ': isCardActive,
      'border-2 bg-transparent ': !isCardActive,
    }"
    class="rounded-[0.8rem] p-4 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[58vw] xl:w-[58vw] overflow-auto cursor-pointer"
    @click="toggleCardActive"
  >
    <div class="flex flex-col flex-wrap">
      <div class="flex flex-row justify-between mb-1.5">
        <p :class="isCardActive ? 'text-white ' : 'text-black '">Programmer</p>
        <div class="flex flex-row flex-wrap items-center">
          <div
            :class="{
              'bg-white acitve:bg-black': isCardActive,
              'bg-black ': !isCardActive,
            }"
            class="rounded mr-2"
          >
            <img
              class="h-5 w-5 object-contain"
              src="https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/43349064a3f558d1f4095294fc357137.jpeg"
              alt="company logos"
            />
          </div>
          <p
            :class="
              isCardActive
                ? 'text-gray-200 '
                : 'text-black active:text-gray-200'
            "
          >
            Company name
          </p>
        </div>
      </div>
      <div class="flex flex-col flex-wrap mb-2">
        <IconAndText
          class="mb-2"
          :icon="MapPinIcon"
          :title="'Sample Location'"
          :is-card-active="isCardActive"
        />
        <IconAndText
          :icon="BanknotesIcon"
          :title="'Sallary'"
          :is-card-active="isCardActive"
        />
      </div>
    </div>
    <button class="bg-jobstreet rounded w-full p-1.5 cursor-pointer">
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
import { ref } from "vue";

const isCardActive = ref(false);

const toggleCardActive = () => {
  isCardActive.value = !isCardActive.value;
};
</script>
