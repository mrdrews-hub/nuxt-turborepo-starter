// @ts-check
import { createBaseConfig } from "../base/eslint.config.mjs";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  createBaseConfig({
    // Add app-specific rules here if needed
    // rules: {}
  })
);
