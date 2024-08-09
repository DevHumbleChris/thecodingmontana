<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
</script>

<template>
  <div
    class="space-y-10 mt-10 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]"
  >
    <!-- Title -->
    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1
        class="block font-bold [text-wrap:balance] text-gray-800 text-3xl md:text-4xl lg:text-4xl text-center"
      >
        Hey, its Christopher Odhiambo. <br />
        Frontend Software Engineer
      </h1>
    </div>
    <!-- End Title -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
      <div class="space-y-5">
        <div>
          <h2 class="uppercase font-extrabold">Lives in</h2>
          <p>Mombasa, Kenya.</p>
        </div>
        <div>
          <h2 class="uppercase font-extrabold">hobbies</h2>
          <p class="capitalize">
            Swimming, Hiking, Camping,<br />
            Drawing, Gaming.
          </p>
        </div>
        <div>
          <h2 class="uppercase font-extrabold">ALIAS</h2>
          <p class="capitalize">The Coding Montana <br /></p>
        </div>
      </div>
      <div class="max-w-[20rem] self-start">
        <NuxtImg
          src="/images/profile.jpg"
          quality="80"
          format="webp"
          class="w-full h-full rounded-[5rem]"
          alt="@thecodingmontana"
        />
      </div>
      <div class="space-y-5 text-right">
        <div>
          <h2 class="uppercase font-extrabold">Certifications</h2>
          <NuxtLink
            to="https://www.apollographql.com/tutorials/certifications/69d431fd-7b99-442b-819c-f6fd10f0abbd"
            class="block hover:underline"
            >Graph Developer - Associate</NuxtLink
          >
          <NuxtLink
            to="https://freecodecamp.org/certification/AmChrisKE/back-end-development-and-apis"
            class="block hover:underline"
            >Backend Development And APIs</NuxtLink
          >
          <NuxtLink
            class="block hover:underline"
            to="https://www.coursera.org/account/accomplishments/certificate/LS9ZY274HA25"
            >Version Control</NuxtLink
          >
          <NuxtLink
            class="block hover:underline"
            to="https://www.coursera.org/account/accomplishments/certificate/8EA69695QQ8B"
          >
            Foundations of User Experience (UX) Design
          </NuxtLink>
          <NuxtLink
            class="block hover:underline"
            to="https://www.coursera.org/account/accomplishments/certificate/85CS8MCJL65F"
          >
            Programming with JavaScript
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-6 items-center gap-10 w-full">
      <div class="sm:col-span-2 self-start">
        <NuxtLink target="_blank" to="https://github.com/DevHumbleChris">
          <Button variant="ghost" class="gap-1 sm:gap-2 uppercase group">
            GitHub
            <Icon
              name="ic:twotone-arrow-outward"
              class="size-5 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-all duration-500 ease-in-out"
          /></Button>
        </NuxtLink>
        <NuxtLink target="_blank" to="https://twitter.com/AmChrisKE">
          <Button variant="ghost" class="gap-1 sm:gap-2 uppercase group">
            Twitter
            <Icon
              name="ic:twotone-arrow-outward"
              class="size-5 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-all duration-500 ease-in-out"
          /></Button>
        </NuxtLink>
        <NuxtLink
          target="_blank"
          to="https://www.linkedin.com/in/christopher-odhiambo-2870331aa/"
        >
          <Button variant="ghost" class="gap-1 sm:gap-2 uppercase group">
            LinkedIn
            <Icon
              name="ic:twotone-arrow-outward"
              class="size-5 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-all duration-500 ease-in-out"
          /></Button>
        </NuxtLink>
      </div>
      <div
        class="sm:col-span-4 grid grid-cols-5 sm:grid-cols-5 items-center gap-5"
      >
        <Separator class="col-span-1 sm:col-span-2" />
        <p class="col-span-4 sm:col-span-3">
          I'm Chris, I specialize in building applications (web/mobile) and
          sites using Javascript, React, Vue & Node.
        </p>
      </div>
    </div>
  </div>
</template>
