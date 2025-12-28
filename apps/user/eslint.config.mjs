// @ts-check
import { createBaseConfig } from '../../packages/base/eslint.config.mjs';
import nuxt from './.nuxt/eslint.config.mjs';

export default nuxt(
  createBaseConfig({
    // Add app-specific rules here if needed
    // rules: {}
  }),
);
