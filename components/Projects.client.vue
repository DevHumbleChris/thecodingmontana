<script setup lang="ts">
import { useScroll } from "@vueuse/core";
import { cn } from "~/lib/utils";

const containerRef = ref<HTMLElement | null>(null);
const xNum = ref<number>(0);
const currentIndex = ref(0);

const { x, isScrolling } = useScroll(containerRef, { behavior: "smooth" });

const imgs = ref([
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80",
  },
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

    const imgArrCopy = [...imgs.value];

    if (delta > 0) {
      const firstItem = imgArrCopy.shift();
      if (!firstItem) return;
      imgArrCopy.push({ ...firstItem, id: Math.random() });
    } else {
      const lastItem = imgArrCopy.pop();
      imgArrCopy.unshift({ ...lastItem!, id: Math.random() });
    }

    imgs.value = imgArrCopy;
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

const getPosition = (index: number) => {
  const length = imgs.value.length;
  const position = length % 2 ? index - (length + 1) / 2 : index - length / 2;
  return position;
};

onMounted(() => {
  useGsap.from(".crad", {
    x: -100,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".crad",
      markers: true,
      start: "top center",
      toggleActions: "restart restart restart",
      // onEnter onLeave onEnterback onLeaveBack
    },
  });
  useGsap.to(".crad", {
    x: 0,
    opacity: 1,
    duration: 3,
    scrollTrigger: {
      trigger: ".crad",
      markers: true,
      start: "top center",
      toggleActions: "restart reverse",
      // onEnter onLeave onEnterback onLeaveBack
    },
  });
});
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
        class="flex transition-all duration-700 items-center justify-center gap-5 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
      >
        <div
          v-for="(img, index) in imgs"
          :key="index"
          class="h-80 shrink-0 snap-center"
          :class="
            cn(getPosition(index) === currentIndex ? 'w-[50%] crad' : 'w-[20%]')
          "
        >
          <img
            :src="img.url"
            :alt="index"
            :id="index"
            class="w-screen h-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
