// @ts-check
import antfu from "@antfu/eslint-config";

/**
 * Shared ESLint rules for all apps
 * @type {import("eslint").Linter.RulesRecord}
 */
export const baseRules = {
  "style/eol-last": "off",
  "no-console": "warn",
  "unused-imports/no-unused-imports": "warn",
  "unused-imports/no-unused-vars": "warn",
  "unicorn/throw-new-error": "off",
};

/**
 * Create base ESLint config with antfu preset
 * @param {Parameters<typeof antfu>[0]} [options] - Additional options to merge
 */
export function createBaseConfig(options) {
  return antfu({
    formatters: true,
    stylistic: true,
    ...options,
    rules: {
      ...baseRules,
      ...(options?.rules ?? {}),
    },
  });
}

// Default export for direct usage (optional)
export default createBaseConfig();
