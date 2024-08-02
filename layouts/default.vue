<script setup lang="ts">
useHead({
  meta: [
    { property: "og:title", content: `The Coding Montana` },
    {
      name: "description",
      content: "Hey, its Christopher Odhiambo. Frontend Software Engineer",
    },
    {
      property: "og:description",
      content: "Hey, its Christopher Odhiambo. Frontend Software Engineer",
    },
    { property: "og:url", content: "https://thecodingmontana.vercel.app/" },
    { name: "twitter:title", content: "The Coding Montana" },
    {
      name: "twitter:description",
      content: "Hey, its Christopher Odhiambo. Frontend Software Engineer",
    },
    { name: "twitter:site", content: "https://thecodingmontana.vercel.app/" },
  ],
  title: `The Coding Montana`,
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "icon", href: "/images/icon.png" },
    { rel: "canonical", href: "https://thecodingmontana.vercel.app/" },
  ],
});
</script>

<template>
  <main
    class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]"
  >
    <Header />
    <slot />
  </main>
</template>
