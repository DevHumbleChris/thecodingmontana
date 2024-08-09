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
  <main class="max-w-[85rem] mx-auto relative">
    <Header />
    <slot />
  </main>
</template>
