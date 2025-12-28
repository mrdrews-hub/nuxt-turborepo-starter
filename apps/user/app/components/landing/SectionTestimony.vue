<template>
  <section class="py-16 bg-white dark:bg-surface-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-text-main dark:text-white">
        Kisah Sukses
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex gap-1 text-primary mb-4">
            <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="text-xl fill-current" />
          </div>
          <p class="text-text-muted dark:text-gray-300 italic mb-6">
            "Saya dulu sering merusak sweter wol saya. Setelah mengikuti kursus ini, saya benar-benar menikmati hari mencuci. Modul melipat mengubah lemari saya selamanya."
          </p>
          <div class="flex items-center gap-3">
            <img alt="Sarah J." class="w-10 h-10 rounded-full object-cover" data-alt="Portrait of Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArA7ZY-xsHXDM7gEQ14indbkKt9-9BBUAFhIacrOL3vDZzPfetbFLrkyKc_wLonT5dK3saWmtnjcGOZO5rxO1crRzw3UlnYAc7YhL4_L_WEG-nfDhiO3IqCVwCuQsQbxFt-ly3TuS4COr0WIqmdSn7K1rUXAqLcFId2s7Y12_Tm_mDuNi8ttekwrSUZOYoYhML1jy5f21jRxdhWQWCfbvGOQtH6-LhY90toQk0FEYV5z8yes55oNi00lYER6IWkBpgrIjnEy2oDBI">
            <div>
              <p class="font-bold text-sm text-text-main dark:text-white">
                Sarah Jenkins
              </p>
              <p class="text-xs text-text-muted">
                Ibu Rumah Tangga
              </p>
            </div>
          </div>
        </div>
        <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex gap-1 text-primary mb-4">
            <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="text-xl fill-current" />
          </div>
          <p class="text-text-muted dark:text-gray-300 italic mb-6">
            "Kemeja putih saya selalu berubah menjadi abu-abu. Modul kimia menjelaskan alasannya dengan tepat. Kursus ini balik modal dalam satu bulan."
          </p>
          <div class="flex items-center gap-3">
            <img alt="Mark T." class="w-10 h-10 rounded-full object-cover" data-alt="Portrait of Mark Thompson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-jkNGOur6TDdwFJMhu-FqEiVVjEZq7wzOUlKFQ-Hi3Yf2k07LBnLnVysRyqFrg-TboihdZikKTWLsm1g81d7n5-7fMz5y1D_Gb9YYfNPN66SkEkOm5DBETfQI4cpmG5dgTU4P3ipSyXBf5c26AO_eh4PRHpCuU4wxxybD46zytqpOZ_AyL0hJCw-gvtN5s0mMpzQoDpQXiNhMfRdxSIhnW-Acqoi7lIq4ILLColX3UZgKpEaMaKQrIlddnZZUg466Ne8YEh8KJ60">
            <div>
              <p class="font-bold text-sm text-text-main dark:text-white">
                Rudi Hartono
              </p>
              <p class="text-xs text-text-muted">
                Konsultan Bisnis
              </p>
            </div>
          </div>
        </div>
        <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex gap-1 text-primary mb-4">
            <Icon v-for="i in 5" :key="i" name="material-symbols:star" class="text-xl fill-current" />
          </div>
          <p class="text-text-muted dark:text-gray-300 italic mb-6">
            "Sederhana, efektif, dan langsung pada intinya. Instrukturnya jelas sangat menguasai materinya. Sangat direkomendasikan untuk mahasiswa!"
          </p>
          <div class="flex items-center gap-3">
            <img alt="Emily C." class="w-10 h-10 rounded-full object-cover" data-alt="Portrait of Emily Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB80pYnRFP3R9R58iAqu90ty_5pWRWvHzIu3yQvOt1-JZ6IxGQuVb7uJikoysJV89pUGQpvU3OlmnNseYNBkkkW92ZlTshyGZkot05V3Rgqd57syKYsGhIgff4QI4aZLIE7h9qR3ohQ8h4kIv1TqvX9mHYF7EzNIJHond9TavpI5OnzNtC1AZvPXF-AvBrlf7CshIsaaxZLdsau1wWRUnb6JpDtOUVIVTjbmLRXhFUctuTRdDQObAOUNYdn-B73XFx8UzyuGujjf-k">
            <div>
              <p class="font-bold text-sm text-text-main dark:text-white">
                Emilia Sari
              </p>
              <p class="text-xs text-text-muted">
                Mahasiswa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>