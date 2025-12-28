<script lang="ts" setup>
import { toasticon } from './constant/toast'

const { loggedIn } = useUserSession()
</script>

<template>
  <Toast position="top-right">
    <template #container="{ message, closeCallback }">
      <div class="flex justify-between items-center p-2.5 min-h-16">
        <div class="flex items-start gap-2">
          <Icon :name="toasticon[message?.severity as keyof typeof toasticon]" size="25" />
          <div>
            <p class="font-bold">
              {{ message.summary }}
            </p>
            <p v-show="!!message.detail" class="text-sm font-medium opacity-80">
              {{ message.detail }}
            </p>
          </div>
        </div>
        <div class="absolute top-1 right-1">
          <button type="button" class="hover:cursor-pointer text-surface-400 hover:text-red-500 transition-all h-[20px] rounded-full" @click="closeCallback">
            <Icon name="material-symbols:close-rounded" size="20" class="font-bold" />
          </button>
        </div>
      </div>
    </template>
  </Toast>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>