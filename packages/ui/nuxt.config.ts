// https://nuxt.com/docs/api/configuration/nuxt-config
import { PrimeVueConfig } from "./prime.config";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: PrimeVueConfig,
});
