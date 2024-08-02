<script setup lang="ts">
import { Button } from "./ui/button";
</script>

<template>
  <header
    class="px-4 sm:px-6 lg:px-8 pt-3 fixed top-0 left-0 right-0 w-full backdrop-blur-sm flex items-center justify-between"
  >
    <p
      class="text-xl sm:text-2xl font-semibold tracking-tighter text-muted-foreground"
    >
      thecoding<span class="text-black">montana</span>
    </p>
    <Button
      class="rounded-full px-6 border-black transition-all duration-500 ease-in-out text-black group gap-1 hover:bg-transparent"
      variant="outline"
      size="sm"
    >
      Let's talk
      <Icon
        name="ic:twotone-arrow-outward"
        class="size-5 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-all duration-500 ease-in-out"
      />
    </Button>
  </header>
</template>
