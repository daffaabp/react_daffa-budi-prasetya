import React from 'react'

const Service = () => {
  return (
   <div class="h-full lg:h-screen flex-col justify-center items-center px-10 md:px-24 xl:px-56 p-0" id="services">
   <div class="title mt-20">
       <h1 class="text-5xl lg:text-9xl font-extrabold text-blue-400 opacity-30 md:text-md">
           Services
       </h1>
       <h3 class="text-xl font-bold">What Can I Do</h3>
   </div>

   <section class="bg-white">
       <div class="container mx-auto">
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
               <div class="bg-slate-50 p-6 rounded-lg shadow-lg">
                   <h3 class="text-xl font-bold mb-4">Manajemen Persediaan</h3>
                   <p>
                       Kami hadir untuk mengoptimalkan proses produksi dan distribusi dan meningkatkan efisiensi.
                   </p>
               </div>
               <div class="bg-slate-50 p-6 rounded-lg shadow-lg">
                   <h3 class="text-xl font-bold mb-4">User Experience</h3>
                   <p>
                       Nemo enim ipsam voluptatem quia voluptas aspernatur blandit
                       tempus porttitor maxime.
                   </p>
               </div>
               <div class="bg-slate-50 p-6 rounded-lg shadow-lg">
                   <h3 class="text-xl font-bold mb-4">Konsultasi Bisnis</h3>
                   <p>
                   Melalui sesi konsultasi bisnis yang personal, kami membantu Anda mengatasi permasalahan inventori.
                   </p>
               </div>
               <div class="bg-slate-50 p-6 rounded-lg shadow-lg">
                   <h3 class="text-xl font-bold mb-4">Logistik Global</h3>
                   <p>
                       Nemo enim ipsam voluptatem quia voluptas aspernatur blandit
                       tempus porttitor maxime.
                   </p>
               </div>
               <div class="bg-slate-50 p-6 rounded-lg shadow-lg">
                   <h3 class="text-xl font-bold mb-4">Penyimpanan dan Distribusi</h3>
                   <p>
                       Dengan infrastruktur logistik yang canggih, kami memastikan produk Anda mencapai tujuan dengan cepat dan tepat waktu, di mana pun itu.
                   </p>
               </div>
               <div class="bg-slate-50 p-6 rounded-lg shadow-lg">
                   <h3 class="text-xl font-bold mb-4">Manajemen Rantai Pasokan</h3>
                   <p>
                   Kami menyediakan solusi untuk mengelola setiap tahap dari produksi hingga pengiriman.
                   </p>
               </div>
           </div>
       </div>
   </section>
</div>
  )
}

export default Service
