<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
  }>(),
  {
    title: "title",
    description: "description",
  }
);
</script>

<template>
  <div class="h-full w-full flex items-start justify-start">
    <div
      class="relative flex h-full w-full items-center justify-center overflow-hidden bg-gray-100 antialiased"
    >
      <div
        class="flex absolute left-0 top-0 z-10 h-full w-full rounded bg-transparent"
      />
      <div class="relative flex h-full w-full justify-start">
        <div
          class="absolute inset-0 flex h-full w-full"
          style="
            background-image: linear-gradient(
              to bottom right,
              #f472b6,
              #f87171
            );
          "
        />
        <div
          class="absolute flex bottom-0 right-0 h-[88%] w-[90%] rounded-tl-2xl bg-gray-900/80 shadow-2xl backdrop-blur-xl"
        >
          <div
            class="absolute left-0 right-0 w-full rounded-tl-2xl border-b border-gray-700/50 bg-gray-800/70 px-4 py-[10px] flex flex-row gap-x-2"
          >
            <div class="h-3 w-3 rounded-full bg-[#FE5F57]"></div>
            <div class="h-3 w-3 rounded-full bg-[#FFBC2E]"></div>
            <div class="h-3 w-3 rounded-full bg-[#28C840]"></div>
          </div>
          <div
            class="relative flex h-full w-full flex-col justify-end p-10 text-white"
          >
            <div class="flex flex-col">
              <h2 class="break-word text-6xl font-black">
                {{ title }}
              </h2>
              <p class="mt-3 text-2xl">
                {{ description }}
              </p>
            </div>
            <div
              class="mt-10 flex flex-row gap-x-3 items-center whitespace-nowrap text-white"
            >
              <h4 class="text-xl">@thecodingmontana</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
