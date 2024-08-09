<script setup lang="ts">
defineOgImageComponent("PikaStyle", {
  title: "The Coding Montana",
  description:
    "I'm Chris, frontend software developer living in Mombasa, Kenya. I specialize in building applications (web/mobile) and sites using Javascript, React, Vue & Node.",
});
</script>

<template>
  <section>
    <!-- Hero -->
    <div class="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-10 pb-10 space-y-10">
      <Hero />
    </div>
    <Projects />
    <!-- End Hero -->
  </section>
</template>
