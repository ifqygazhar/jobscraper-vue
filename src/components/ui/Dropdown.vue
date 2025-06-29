<template>
  <div class="relative w-full">
    <div
      class="flex flex-row justify-start p-4 rounded-md w-full h-full border-2 border-black cursor-pointer"
      @click="toggleDropdown"
    >
      <div class="flex flex-row items-center gap-2 justify-between w-full">
        <div class="flex flex-row items-center gap-2 flex-1 min-w-0">
          <component
            :is="icon"
            class="size-5 text-black bg-transparent flex-shrink-0"
          ></component>
          <input
            v-model="searchValue"
            :placeholder="title"
            class="outline-none bg-transparent flex-1 min-w-0"
            @input="filterOptions"
            @click.stop
          />
        </div>
        <ChevronDownIcon
          class="size-5 text-black bg-transparent transition-transform duration-200 flex-shrink-0"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </div>

    <!-- Dropdown Options -->
    <div
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-white border-2 border-black rounded-md mt-1 max-h-60 overflow-y-auto z-10"
    >
      <div
        v-for="option in filteredOptions"
        :key="option.id"
        class="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
        @click="selectOption(option)"
      >
        <div class="flex items-center gap-3 min-w-0">
          <!-- Gunakan icon custom jika ada, fallback ke icon default -->
          <component
            :is="option.icon || icon"
            class="size-4 text-gray-600 flex-shrink-0"
            :isHaveBackground="true"
            :width="16"
            :height="16"
          ></component>
          <span class="truncate">{{ option.label }}</span>
        </div>
      </div>

      <div
        v-if="filteredOptions.length === 0"
        class="p-3 text-gray-500 text-center"
      >
        No options found
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { MapPinIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";

interface Option {
  id: number | string;
  label: string;
  value: any;
  icon?: any; // Tambahkan icon property
}

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Location",
  },
  icon: {
    type: Object,
    required: false,
    default: MapPinIcon,
  },
  options: {
    type: Array as () => Option[],
    required: false,
    default: () => [],
  },
});

const emit = defineEmits(["select"]);

// State
const isOpen = ref(false);
const searchValue = ref("");

// Dummy data - nanti bisa diganti dengan data dari API
const dummyOptions: Option[] = [
  { id: 1, label: "Jakarta", value: "jakarta" },
  { id: 2, label: "Bandung", value: "bandung" },
  { id: 3, label: "Surabaya", value: "surabaya" },
  { id: 4, label: "Yogyakarta", value: "yogyakarta" },
  { id: 5, label: "Medan", value: "medan" },
  { id: 6, label: "Bali", value: "bali" },
];

const allOptions = ref<Option[]>(
  props.options.length > 0 ? props.options : dummyOptions
);

// Computed
const filteredOptions = computed(() => {
  if (!searchValue.value) {
    return allOptions.value;
  }
  return allOptions.value.filter((option) =>
    option.label.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
  searchValue.value = option.label;
  isOpen.value = false;
  emit("select", option);
};

const filterOptions = () => {
  if (!isOpen.value) {
    isOpen.value = true;
  }
};

const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".relative")) {
    isOpen.value = false;
  }
};

// Lifecycle
onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>
