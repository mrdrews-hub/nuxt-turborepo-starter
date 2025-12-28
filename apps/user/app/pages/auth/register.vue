<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="w-full h-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 relative bg-background-light dark:bg-background-dark">
    <!-- Mobile Header Logo (visible only on small screens) -->
    <div class="lg:hidden mb-8 flex items-center gap-2">
      <div class="size-8 rounded-md bg-surface-50 flex items-center justify-center border border-primary">
        <Icon name="material-symbols:water-drop-outline" class="text-primary" />
      </div>
      <span class="text-xl font-bold dark:text-white">Apique Academy</span>
    </div>
    <!-- Form Container -->
    <div class="w-full max-w-md mx-auto">
      <div class="mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-2">
          Create an account
        </h2>
        <p class="text-text-muted dark:text-gray-400">
          Start your professional laundry journey today.
        </p>
      </div>
      <form class="space-y-5" onsubmit="event.preventDefault()">
        <!-- Full Name -->
        <FormFieldWrapper id="name" label="Full Name">
          <InputText id="name" class="w-full" type="text" fluid placeholder="Enter Full Name" />
        </FormFieldWrapper>
        <!-- Email -->
        <FormFieldWrapper id="email" label="Email">
          <InputText id="email" class="w-full" type="email" fluid placeholder="Enter Email" />
        </FormFieldWrapper>
        <!-- Password -->
        <FormFieldWrapper id="password" label="Password">
          <InputText id="password" class="w-full" type="password" fluid placeholder="Enter Password" />
        </FormFieldWrapper>
        <!-- Confirm Password -->
        <FormFieldWrapper id="confirm-password" label="Confirm Password">
          <InputText id="confirm-password" class="w-full" type="password" fluid placeholder="Confirm Password" />
        </FormFieldWrapper>
        <!-- Terms -->
        <div class="flex items-start">
          <div class="flex h-6 items-center">
            <input id="terms" class="h-4 w-4 rounded border-border-color text-primary focus:ring-primary bg-white dark:bg-zinc-800 dark:border-zinc-600" name="terms" type="checkbox">
          </div>
          <div class="ml-3 text-sm leading-6">
            <label class="font-normal text-text-main dark:text-gray-300" for="terms">
              I agree to the <a class="font-semibold text-primary hover:text-green-500 hover:underline" href="#">Terms of Service</a> and <a class="font-semibold text-primary hover:text-green-500 hover:underline" href="#">Privacy Policy</a>
            </label>
          </div>
        </div>
        <!-- Submit Button -->
        <Button fluid>
          Create Account
        </Button>
      </form>
      <p class="mt-8 text-center text-sm text-text-muted dark:text-gray-400">
        Already have an account?
        <NuxtLink class="font-bold leading-6 text-primary hover:text-green-500 hover:underline" to="/auth/login">
          Log In
        </NuxtLink>
      </p>
    </div>
  </div>
</template>