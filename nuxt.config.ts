// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-og-image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "sitemap.xml"],
      ignore: ["/tak", "/konfiguration", "/checkout"],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  fonts: {
    families: [{ name: "Raleway", provider: "google" }],
    experimental: {
      processCSSVariables: true,
    },
  },
  site: {
    url: process.env.BASE_URL,
    name: "The Coding Montana",
  },
  sitemap: {
    sources: ["/api/sitemap"],
  },
  schemaOrg: {
    identity: {
      type: "Person",
      name: "@thecodingmontana",
      url: process.env.BASE_URL,
      logo: "/images/icon.png",
    },
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode-admin",
  },
});
