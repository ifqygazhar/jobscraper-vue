<script setup lang="ts">
import Jobstreet from "./components/icon/Jobstreet.vue";
import Button from "./components/ui/Button.vue";
import Card from "./components/ui/Card.vue";
import Category from "./components/ui/Category.vue";
import Input from "./components/ui/Input.vue";

const items = [1, 2, 3, 4, 5];
</script>

<template>
  <div class="flex flex-col justify-center font-montserrat h-screen">
    <div
      class="font-bold text-black text-center text-[min(10vw,1.7rem)] lg:text-[3rem]"
    >
      Easy way to find a job 🔎
    </div>
    <div class="font-light text-black text-center text-[min(10vw,1.3rem)]">
      Just search in here
    </div>
    <div class="flex flex-row justify-center">
      <Input /> <Button :px="10" :py="20" />
    </div>
    <div class="flex flex-row flex-wrap justify-center items-center">
      <template v-for="(item, index) in items" :key="index">
        <Category :title="'HEYYY'" :icon="Jobstreet" />
      </template>
    </div>
    <div class="flex flex-col justify-center items-center">
      <Card />
    </div>
  </div>
</template>
