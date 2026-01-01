// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { AppConfig } from './app/config/app.config'

export default defineNuxtConfig({

  extends: ['../../packages/ui', '../../packages/base'],
  modules: ['nuxt-auth-utils', '@pinia/nuxt'],
  devtools: { enabled: true },
  app: AppConfig,
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'bun',
    node: false,
  },
})