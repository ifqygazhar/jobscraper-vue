<template>
  <input
    type="text"
    :placeholder="`${props.title}`"
    :value="modelValue"
    @input="handleInput"
    class="border-2 focus:outline-none border-black rounded-md w-full h-15 px-2"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  height: {
    type: Number,
    required: false,
    default: 15,
  },
  title: {
    type: String,
    required: false,
    default: "Search",
  },
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "input"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
  emit("input", target.value);
};
</script>
