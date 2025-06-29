<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/ui/Button.vue";
import Card from "./components/ui/Card.vue";
import Input from "./components/ui/Input.vue";
import DropDown from "./components/ui/Dropdown.vue";
import LoadingCard from "./components/ui/shimmer/LoadingCard.vue";
import { BriefcaseIcon } from "@heroicons/vue/20/solid";
import { platformJobOptions } from "./const/platform";
import { glintStore } from "./store/glints_store";

// Store
const glintsStore = glintStore();

// Reactive data
const workQuery = ref("Programmer");
const locationQuery = ref("All+Cities/Provinces");
const selectedPlatform = ref("");

// Methods
const handleSearch = async () => {
  if (selectedPlatform.value === "glints") {
    await glintsStore.fetchJobs({
      work: workQuery.value,
      location_name: locationQuery.value,
      page: 1,
    });
  }
};

const handlePlatformSelect = (option: any) => {
  selectedPlatform.value = option.value;
  if (option.value === "glints") {
    handleSearch();
  }
};

// Auto search when user types (debounced)
let searchTimeout: number;
const debouncedSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    if (selectedPlatform.value === "glints") {
      handleSearch();
    }
  }, 500);
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center font-montserrat h-min-screen w-full"
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
      <div
        class="flex flex-row justify-center w-full h-full items-center gap-2 mt-2"
      >
        <div class="flex-1 min-w-0">
          <Input
            :title="`Programmer`"
            v-model="workQuery"
            @input="debouncedSearch"
          />
        </div>
        <div class="flex-shrink-0 w-auto">
          <Button @click="handleSearch" />
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row justify-center items-center w-full h-full gap-2 mt-2"
      >
        <div class="w-full relative sm:w-1/2 flex">
          <Input
            :title="`Search Location...`"
            v-model="locationQuery"
            @input="debouncedSearch"
          />
        </div>
        <div class="w-full h-max sm:w-1/2 flex">
          <DropDown
            :title="`Platform Job`"
            :icon="BriefcaseIcon"
            :options="platformJobOptions"
            @select="handlePlatformSelect"
          />
        </div>
      </div>

      <!-- Job Results -->
      <div class="flex flex-col justify-center items-center w-full gap-2 mt-4">
        <!-- Loading State -->
        <template v-if="glintsStore.loading">
          <LoadingCard v-for="i in 3" :key="i" />
        </template>

        <!-- Error State -->
        <div v-else-if="glintsStore.error" class="text-red-500 text-center">
          {{ glintsStore.error }}
        </div>

        <!-- Job Cards -->
        <template v-else-if="glintsStore.jobs.length > 0">
          <Card v-for="job in glintsStore.jobs" :key="job.link" :job="job" />

          <!-- Load More Button -->
          <div
            v-if="glintsStore.hasMore"
            class="w-full flex justify-center mt-4"
          >
            <div
              @click="glintsStore.loadMoreJobs()"
              :disabled="glintsStore.loadingMore"
              class="w-full bg-jobstreet mb-2 py-2 px-2 text-white font-bold rounded-md cursor-pointer flex justify-center items-center"
            >
              <template v-if="glintsStore.loadingMore"> Loading... </template>
              <template v-else> Load More Jobs </template>
            </div>
          </div>

          <!-- End of Results Message -->
          <div v-else class="text-gray-500 text-center py-4">
            No more jobs to load
          </div>
        </template>

        <!-- No Results -->
        <div
          v-else-if="selectedPlatform === 'glints'"
          class="text-gray-500 text-center"
        >
          No jobs found
        </div>

        <!-- Default Card when no platform selected -->
        <Card v-else />
      </div>
    </div>
  </div>
</template>
