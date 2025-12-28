<template>
  <nav class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-surface-dark bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <div class="p-1.5 bg-primary/10 rounded-lg text-primary flex items-center justify-center">
            <Icon name="material-symbols:water-drop-outline" class="text-xl" />
          </div>
          <span class="text-lg font-bold tracking-tight text-text-main dark:text-white">Apique Academy</span>
        </div>
        <NuxtLink to="/auth/register" class="bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm">
          Daftar Sekarang
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>