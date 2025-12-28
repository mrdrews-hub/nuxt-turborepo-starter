import type { NuxtConfig } from 'nuxt/config'
import { definePreset } from '@primeuix/themes'
import Lara from '@primeuix/themes/lara'

const ForestGreenPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32', // primary
      900: '#1b5e20', // primary-dark
      950: '#0d3d12',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#2e7d32', // primary
          inverseColor: '#ffffff',
          hoverColor: '#1b5e20', // primary-dark
          activeColor: '#388e3c',
        },
        highlight: {
          background: '#2e7d32',
          focusBackground: '#1b5e20',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        surface: {
          0: '#ffffff', // surface-light
          50: '#f8f9f8', // background-light
          100: '#f0f4f0',
          200: '#e8ece8',
          300: '#d8ddd8',
          400: '#b8c0b8',
          500: '#8a948a',
          600: '#5e6b5e', // text-muted
          700: '#4a544a',
          800: '#363d36',
          900: '#1c211c', // text-main
          950: '#0f120f',
        },
      },
      dark: {
        primary: {
          color: '#66bb6a',
          inverseColor: '#1a221a',
          hoverColor: '#81c784',
          activeColor: '#a5d6a7',
        },
        highlight: {
          background: 'rgba(102, 187, 106, .16)',
          focusBackground: 'rgba(102, 187, 106, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        surface: {
          0: '#243024', // surface-dark
          50: '#1a221a', // background-dark
          100: '#1e281e',
          200: '#243024',
          300: '#2e3d2e',
          400: '#3a4d3a',
          500: '#4a5f4a',
          600: '#5e6b5e',
          700: '#8a948a',
          800: '#b8c0b8',
          900: '#e8ece8',
          950: '#f8f9f8',
        },
      },
    },
  },
})

export const PrimeVueConfig: NuxtConfig['primevue'] = {
  autoImport: true,
  options: {
    theme: {
      preset: ForestGreenPreset,
      options: {
        prefix: 'p',
        darkModeSelector: '.dracula',
        cssLayer: {
          name: 'primevue',
          order: 'theme, base, primevue',
        },
      },
    },
    ripple: true,
  },
}