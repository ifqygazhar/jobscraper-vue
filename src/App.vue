<script setup lang="ts">
import Button from "./components/ui/Button.vue";
import Card from "./components/ui/Card.vue";
import Input from "./components/ui/Input.vue";
import DropDown from "./components/ui/Dropdown.vue";
import { BriefcaseIcon } from "@heroicons/vue/20/solid";
import { platformJobOptions } from "./const/platform";

const items = [1, 2, 3, 4];
</script>

<template>
  <div
    class="flex flex-col justify-center items-center font-montserrat h-screen w-full"
  >
    <div
      class="flex flex-col items-center justify-center w-2/2 px-4 md:w-1/2 md:px-0"
    >
      <div
        class="font-bold text-black text-center text-[min(10vw,1.7rem)] lg:text-[2.5rem]"
      >
        Easy way to find a job 🔎
      </div>
      <div class="font-light text-black text-center text-[min(10vw,1.3rem)]">
        Just search in here
      </div>
      <div class="flex flex-row justify-center w-full">
        <Input /> <Button :pl="10" :py="20" />
      </div>
      <div class="flex flex-col sm:flex-row justify-center w-full gap-2">
        <div class="w-full sm:w-1/2">
          <DropDown />
        </div>
        <div class="w-full sm:w-1/2">
          <DropDown
            :title="`Platform Job`"
            :icon="BriefcaseIcon"
            :options="platformJobOptions"
          />
        </div>
      </div>
      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 lg:justify-between items-center w-full gap-x-2"
      >
        <template v-for="(item, index) in items" :key="index">
          <Category
            :title="'Jobstreet'"
            :icon="Kemnaker"
            :iconProps="{ isHaveBackground: true }"
          />
        </template>
      </div> -->
      <div class="flex flex-col justify-center items-center w-full gap-2">
        <Card />
      </div>
    </div>
  </div>
</template>
