<script setup lang="ts">
import { projects } from "~/types";
</script>

<template>
  <div class="space-y-5 px-4 sm:px-6 lg:px-8 pt-10 sm:pt-8 pb-10">
    <div>
      <div class="flex items-center space-xNum-3">
        <svg
          width="32"
          height="1"
          viewBox="0 0 32 1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="1" fill="currentColor" />
        </svg>

        <p class="text-xs uppercase">Take a look at my</p>
      </div>
      <p class="font-semibold text-2xl">Projects</p>
    </div>

    <Marquee :pauseOnHover="true" class="[--duration:20s]">
      <SingleProject
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </Marquee>
  </div>
</template>
