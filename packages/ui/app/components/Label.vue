<script lang="ts" setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
    },
  for: {
    type: String,
    required: true,
    }
})
</script>

<template>
  <label :for="props.for" class="text-sm font-medium text-surface-800 dark:text-surface-200">
    <slot/>
    <span v-if="props.required" class="text-red-500">*</span>
  </label>
</template>