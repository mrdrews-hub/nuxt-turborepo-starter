// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'
import { PrimeVueConfig } from './prime.config'

const currentDir = fileURLToPath(new URL('.', import.meta.url))

export default defineNuxtConfig({

  extends: ['../base'],
  modules: ['@primevue/nuxt-module'],
  devtools: { enabled: true },
  css: [`${currentDir}/app/assets/main.css`],
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  primevue: PrimeVueConfig,
})
