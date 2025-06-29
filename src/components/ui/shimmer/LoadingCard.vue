<template>
  <div
    class="animate-pulse border-2 border-gray-200 rounded-[0.8rem] p-4 w-full"
  >
    <div class="flex flex-col flex-wrap">
      <div class="flex flex-row justify-between mb-3">
        <!-- Job Title Skeleton -->
        <div class="h-4 bg-gray-300 rounded w-1/3"></div>

        <!-- Company Info Skeleton -->
        <div class="flex flex-row flex-wrap items-center">
          <div class="h-5 w-5 bg-gray-300 rounded mr-2"></div>
          <div class="h-4 bg-gray-300 rounded w-24"></div>
        </div>
      </div>

      <div class="flex flex-col flex-wrap mb-4">
        <!-- Location Skeleton -->
        <div class="flex flex-row items-center mb-2">
          <div class="h-4 w-4 bg-gray-300 rounded mr-2"></div>
          <div class="h-3 bg-gray-300 rounded w-32"></div>
        </div>

        <!-- Salary Skeleton -->
        <div class="flex flex-row items-center">
          <div class="h-4 w-4 bg-gray-300 rounded mr-2"></div>
          <div class="h-3 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>

    <!-- Button Skeleton -->
    <div class="h-10 bg-gray-300 rounded w-full"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.animate-pulse {
  animation: shimmer 2s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
}
</style>
