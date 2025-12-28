<template>
  <div class="min-h-screen flex justify-center items-center p-5 md:p-0">
    <div class="md:w-4/5 w-full md:mx-auto bg-white rounded-md">
      <div class="flex lg:h-[680px]">
        <!-- Left Side: Immersive Image -->
        <div class="hidden lg:flex lg:w-1/2 relative bg-background-light dark:bg-background-dark overflow-hidden rounded-l-md">
          <div class="absolute inset-0 w-full h-full">
            <img alt="Neat stack of white clean towels on a wooden surface with a soft green plant in background" class="w-full h-full object-cover" data-alt="Neat stack of white clean towels on a wooden surface with a soft green plant in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN0JyYeVT3KnaNr6WluPDL4fgM_7eGFg5saT09mF1IjLOj_ulq_iTXDl__knG46GP6CC6sbWvdO8A24HdPKEJI9QLh4LGQJ9f-IIsdQXG5MCozRo0iJnOZpHpArGFVAqceKX9S8RYqycVpiaRnAXVhtrmd_gohJs-rio_N5YWwsCOJyylIhb-2UDKh7SegSyhfJ-AE8UiD13Alh29A9F3AzPHfjTFyMxYMDC2IigZIpDqb3ylUhOfrSC0Yxtm-OEqi1jNaB0zZDFw">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div class="relative z-10 flex flex-col justify-end p-16 w-full text-white">
            <div class="mb-8">
              <span class="inline-block p-2 bg-primary/20 backdrop-blur-md rounded-lg mb-4 text-primary font-bold border border-primary/30">
                <span class="material-symbols-outlined align-middle mr-1 text-sm">school</span>
                Pro Tips
              </span>
              <h1 class="text-4xl font-bold leading-tight mb-4">
                Elevate your laundry business standards.
              </h1>
              <p class="text-lg text-gray-200 max-w-md">
                Join over 10,000 professionals mastering textile care, stain removal, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
        <!-- Right Side: Dynamic Content via NuxtPage -->
        <NuxtPage :page-key="route => route.fullPath" />
      </div>
    </div>
  </div>
</template>
