<script setup lang="ts">
const images_data = ref([
  {
    id: 1,
    src: "/images/axelf-cop.jpg",
    name: "Beverly Hills Cop: Axel F",
    info: "Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.",
  },
  {
    id: 2,
    src: "/images/bad-boys.jpg",
    name: "Bad Boys: Ride or Die",
    info: "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
  },
  {
    id: 3,
    src: "/images/migration.jpg",
    name: "Migration",
    info: "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
  },
  {
    id: 4,
    src: "/images/quiet-place.jpg",
    name: "A Quiet Place: Day One",
    info: "As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.",
  },
  {
    id: 5,
    src: "/images/the-boys.jpg",
    name: "The Boys",
    info: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
  },
  {
    id: 6,
    src: "/images/wolverine.jpg",
    name: "Deadpool & Wolverine",
    info: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
  },
]);

const images = ref(images_data);
const currentIndex = ref(0);

const { left, right } = useMagicKeys();

watch([left, right], (v) => {
  if (v[0]) {
    handleMove(-1);
  }
  if (v[1]) {
    handleMove(1);
  }
});

const handleMove = (direction: number) => {
  const imgArrCopy = [...images.value];

  if (direction > 0) {
    const firstItem = imgArrCopy.shift();
    if (!firstItem) return;
    imgArrCopy.push({ ...firstItem, id: Math.random() });
  } else {
    const lastItem = imgArrCopy.pop();
    imgArrCopy.unshift({ ...lastItem!, id: Math.random() });
  }

  images.value = imgArrCopy;
};

const autoPlay = (interval: number = 3000) => {
  setInterval(() => {
    handleMove(1); // Move to the next image
  }, interval);
};

const getPosition = (index: number) => {
  const length = images.value.length;
  const position = length % 2 ? index - (length + 1) / 2 : index - length / 2;
  return position;
};
</script>

<template>
  <div class="space-y-5 px-4 sm:px-6 lg:px-8 pt-10 sm:pt-8 pb-10">
    <div>
      <div class="flex items-center space-x-3">
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

    <div>
      <!-- Card -->
      <div
        class="group relative block rounded-xl focus:outline-none w-[35rem]"
        href="#"
      >
        <div
          class="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70"
        >
          <img
            class="size-full absolute top-0 start-0 object-cover"
            src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image"
          />
        </div>

        <div class="absolute bottom-0 z-50">
          <div class="flex flex-col h-full p-4 sm:p-6">
            <div>
              <NuxtLink to="#">
                <Icon name="bi:github" class="size-7 text-white" />
              </NuxtLink>
            </div>
            <h3
              class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80"
            >
              Facebook is creating a news section in Watch to feature breaking
              news
            </h3>
            <p class="mt-2 text-white/80">
              Facebook launched the Watch platform in August
            </p>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>

    <div class="-mb-3 mt-4">
      <div
        class="relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25"
      >
        <div class="relative overflow-auto rounded-xl">
          <!-- Contents -->
          <div
            class="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-14"
          >
            <div class="shrink-0 snap-center">
              <div class="w-4 shrink-0 sm:w-48"></div>
            </div>
            <div class="shrink-0 snap-center first:pl-8 last:pr-8">
              <img
                class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
                src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
              />
            </div>
            <div class="shrink-0 snap-center first:pl-8 last:pr-8">
              <img
                class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
              />
            </div>
            <div class="shrink-0 snap-center first:pl-8 last:pr-8">
              <img
                class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
              />
            </div>
            <div class="shrink-0 snap-center first:pl-8 last:pr-8">
              <img
                class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
              />
            </div>
            <div class="shrink-0 snap-center first:pl-8 last:pr-8">
              <img
                class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
              />
            </div>
            <div class="shrink-0 snap-center first:pl-8 last:pr-8">
              <img
                class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
              />
            </div>
            <div class="shrink-0 snap-center">
              <div class="w-4 shrink-0 sm:w-48"></div>
            </div>
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"
        ></div>
      </div>
    </div>
  </div>
</template>
