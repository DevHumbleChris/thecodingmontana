<script setup lang="ts">
import type { Project } from "~/types";

const props = defineProps<{
  project: Project;
}>();

const project = toRef(props?.project);
</script>

<template>
  <div
    class="group relative block rounded-xl focus:outline-none w-[20rem] sm:w-[35rem] overflow-hidden"
  >
    <div
      class="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/80"
    >
      <NuxtImg
        class="size-full absolute top-0 start-0 object-cover opacity-90"
        :src="project.imgUrl"
        :alt="project.name"
      />
    </div>

    <div
      class="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-black to-black dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none"
    />

    <div class="absolute bottom-0 z-50">
      <div class="flex flex-col h-full p-4 sm:p-6 gap-2">
        <div class="flex items-center gap-4">
          <NuxtLink
            :to="project.repo"
            target="_blank"
            class="flex items-center text-white gap-2 hover:underline hover:decoration-wavy hover:underline-offset-2"
          >
            <Icon name="bi:github" class="size-4" />
            <p>Repo</p>
          </NuxtLink>
          <NuxtLink
            :to="project.link"
            target="_blank"
            class="flex items-center text-white gap-2 hover:underline hover:decoration-wavy hover:underline-offset-2"
          >
            <Icon name="lucide:external-link" class="size-4.5" />
            <p>Link</p>
          </NuxtLink>
        </div>
        <h3
          class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80"
        >
          {{ project.name }}
        </h3>
        <h3
          class="text-base font-semibold text-white group-hover:text-white/80 group-focus:text-white/80"
        >
          {{ project.description }}
        </h3>
        <div class="text-white/80 flex items-center gap-2 flex-wrap">
          <div
            v-for="stack in project.stacks"
            :key="stack.name"
            class="flex items-center flex-shrink-0 gap-1.5"
          >
            <Icon :name="stack.icon" class="size-4" />
            <p>{{ stack.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
