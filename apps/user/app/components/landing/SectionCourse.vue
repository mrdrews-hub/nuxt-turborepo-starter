<template>
  <section class="py-20 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-surface-dark relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-text-main dark:text-white mb-4">
          Kursus Terbaru
        </h2>
        <p class="text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
          Pilih kelas yang sesuai dengan kebutuhan Anda, mulai dari pemula hingga tingkat lanjut untuk bisnis.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
          <div class="h-48 overflow-hidden relative">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img alt="Basic Laundry" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpoZzfJ2THvqdHgXoIS7U-jmlPn1BJLCzsOPggk7kTM7MLvk5-U6IsRw2dTifAPq6Vdi8rS3-VEkLZeHk5jH1NN7iZacqCOPtO64lcdystUCoYsOlr7p0ElXZFvNLOFC4ioJmqXpvJIKp50AWKjTkXFk7zcEzZYUx_4ZVvjIOJuxPaQRqZq1cfn1f23TpDzoDEAx8IuxzR5dCajFI5tYh_QEAV3G_ddqa9FFeo1stQ8ShYypZUQwHbMbaha-_IJhiI7-TgC04_FJY">
            <div class="absolute top-4 left-4 z-20">
              <span class="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Pemula</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-main dark:text-white mb-2">
              Dasar Laundry Rumahan
            </h3>
            <p class="text-sm text-text-muted dark:text-gray-400 mb-6 line-clamp-2">
              Pelajari cara mencuci, menjemur, dan menyetrika pakaian sehari-hari dengan hasil seperti profesional.
            </p>
            <div class="flex items-center justify-between mt-auto">
              <span class="text-2xl font-black text-primary">Rp 199.000</span>
              <button class="bg-text-main dark:bg-white text-white dark:text-text-main font-bold py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity">
                Detail Kelas
              </button>
            </div>
          </div>
        </div>
        <div class="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative">
          <div class="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-30">
            Terlaris
          </div>
          <div class="h-48 overflow-hidden relative bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span class="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 group-hover:scale-110 transition-transform duration-500">dry_cleaning</span>
            <div class="absolute top-4 left-4 z-20">
              <span class="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Menengah</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-main dark:text-white mb-2">
              Masterclass Satuan &amp; Dry Clean
            </h3>
            <p class="text-sm text-text-muted dark:text-gray-400 mb-6 line-clamp-2">
              Teknik khusus untuk jas, gaun pesta, dan bahan sensitif lainnya. Termasuk panduan bahan kimia.
            </p>
            <div class="flex items-center justify-between mt-auto">
              <span class="text-2xl font-black text-primary">Rp 499.000</span>
              <button class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
        <div class="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
          <div class="h-48 overflow-hidden relative bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span class="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 group-hover:scale-110 transition-transform duration-500">storefront</span>
            <div class="absolute top-4 left-4 z-20">
              <span class="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Bisnis</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-main dark:text-white mb-2">
              Manajemen Bisnis Laundry
            </h3>
            <p class="text-sm text-text-muted dark:text-gray-400 mb-6 line-clamp-2">
              Bangun SOP, kelola karyawan, dan strategi pemasaran untuk usaha laundry kiloan yang sukses.
            </p>
            <div class="flex items-center justify-between mt-auto">
              <span class="text-2xl font-black text-primary">Rp 799.000</span>
              <button class="bg-text-main dark:bg-white text-white dark:text-text-main font-bold py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity">
                Detail Kelas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>