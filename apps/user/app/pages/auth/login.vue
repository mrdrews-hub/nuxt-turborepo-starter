<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useToast } from 'primevue'
import { Field, useForm } from 'vee-validate'
import { LoginSchema } from '~/validations/auth/login.schema'

definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in',
  },
})

const { fetch: refreshSession } = useUserSession()

const toast = useToast()

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(LoginSchema),
})
const loading = ref(false)
const handleLogin = handleSubmit(async (values) => {
  try {
    loading.value = true
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: values,
    })
    toast.add({
      summary: 'Login Success',
      severity: 'success',
    })
    await refreshSession()
    await navigateTo('/')
  }
  catch (error: any) {
    const errorMessage = error?.data?.data?.message

    toast.add({
      summary: 'Login Failed',
      detail: errorMessage,
      severity: 'error',
    })
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 relative">
    <div class="w-full max-w-[440px] flex flex-col items-center justify-center">
      <div class="lg:hidden mb-8 flex items-center gap-2">
        <div class="size-8 rounded-md bg-surface-50 flex items-center justify-center border border-primary">
          <Icon name="material-symbols:water-drop-outline" class="text-primary" />
        </div>
        <span class="text-xl font-bold dark:text-white">Apique Academy</span>
      </div>
      <div class="mb-10 text-center lg:text-left">
        <h2 class="text-text-main dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-2">
          Welcome back
        </h2>
        <p class="text-text-muted dark:text-gray-400 text-sm font-normal leading-normal">
          Please enter your details to sign in.
        </p>
      </div>
      <form class="flex flex-col gap-5 w-full" @submit.prevent="handleLogin">
        <Field v-slot="{ field, errorMessage }" as="div" name="email">
          <FormFieldWrapper id="email" label="Email" :error="errorMessage">
            <InputText id="email" v-bind="field" :invalid="!!errors.email" type="email" placeholder="Email address" fluid />
          </FormFieldWrapper>
        </Field>
        <Field v-slot="{ field, errorMessage }" as="div" name="password">
          <FormFieldWrapper id="password" label="Password" :error="errorMessage">
            <Password input-id="password" placeholder="Password" :toggle-mask="false" fluid :feedback="false" v-bind="field" />
          </FormFieldWrapper>
        </Field>
        <Button type="submit" label="Log In" :loading="loading" />
      </form>
      <p class="mt-8 text-center text-sm text-text-main dark:text-gray-400">
        Don't have an account?
        <NuxtLink class="font-bold text-primary hover:underline ml-1" to="/auth/register">
          Sign up for free
        </NuxtLink>
      </p>
      <div class="mt-auto pt-8 text-center text-xs text-text-muted dark:text-gray-600">
        © 2024 Apique Academy. All rights reserved.
      </div>
    </div>
  </div>
</template>
