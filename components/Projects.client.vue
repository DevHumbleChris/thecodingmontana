<script setup lang="ts">
import type { UseScrollReturn } from "@vueuse/core";
import { vScroll } from "@vueuse/components";
import { useScroll } from "@vueuse/core";

const containerRef = ref<HTMLElement | null>(null);
const xNum = ref<number>(0);

const { x, isScrolling } = useScroll(containerRef, { behavior: "smooth" });

const imgs = ref([
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
]);

const onMouseDown = (e: MouseEvent) => {
  if (containerRef.value) {
    xNum.value = e.pageX;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }
};

const onMouseMove = (e: MouseEvent) => {
  e.preventDefault();

  if (containerRef.value) {
    containerRef.value.style.pointerEvents = "none";

    const delta = e.pageX - xNum.value;

    xNum.value = e.pageX;

    containerRef.value.scrollBy(-delta, 0);
  }
};

const onMouseUp = (e: MouseEvent) => {
  if (containerRef.value) {
    containerRef.value.style.removeProperty("pointer-events");

    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }
};

onMounted(() => {
  if (!containerRef.value) {
    return;
  }

  containerRef.value.addEventListener("mousedown", onMouseDown);
});

onUnmounted(() => {
  if (!containerRef.value) {
    return;
  }

  containerRef.value?.removeEventListener("mousedown", onMouseDown);
});

const onScroll = () => {
  console.log("hello");
};
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

    <div ref="containerRef" class="relative overflow-hidden py-4">
      <div
        class="flex items-center justify-center gap-5 cursor-grab active:cursor-grabbing"
      >
        <div
          v-for="(img, index) in imgs"
          :key="index"
          class="h-96 shrink-0 w-[80%]"
        >
          <img
            :src="img"
            :alt="index"
            :id="index"
            class="w-screen h-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
