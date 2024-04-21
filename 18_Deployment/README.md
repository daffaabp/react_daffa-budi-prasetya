# Rangkuman React Deployment 
React Deployment adalah proses untuk mengunggah aplikasi React yang telah selesai dikembangkan ke server atau platform hosting agar dapat diakses secara online. Proses deployment ini penting untuk memperlihatkan hasil akhir dari pengembangan aplikasi kepada pengguna. Beberapa metode deployment yang umum digunakan dalam pengembangan aplikasi React antara lain menggunakan platform seperti Netlify, Vercel, Heroku, GitHub Pages, dan lain sebagainya. Setelah proses deployment selesai, pengguna dapat mengakses aplikasi React melalui URL yang telah disediakan.
 
## A. Build React App
#### 1. Kenapa Perlu Build?
Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men deploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat.

#### 2. Build React App
Karena proyek kita dibangun menggunakan Create React App
`npm run build`
Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men deploy ke produksi. Untuk pengembangan normal, gunakan `npm start`

#### 3. Run Optimize App
Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita  bisa menggunakan serve
// install serve
`npm install -g serve`

// jalankan serve di lokal
`serve -s build`

## B. Deploy with Vercell
Vercel adalah platform cloud yang memungkinkan Anda untuk dengan mudah mendeploy dan mengelola aplikasi web, termasuk aplikasi React, Next.js, dan banyak lagi. Berikut adalah rangkuman tentang Vercel

#### 1. Fitur Utama
- Deploy otomatis: Vercel menyediakan deploy otomatis setiap kali Anda mengirimkan perubahan ke repository Git, mempercepat proses pengiriman dan pengujian.
- Global Edge Network: Aplikasi yang di-host di Vercel didistribusikan di seluruh CDN mereka, memastikan ketersediaan dan latensi yang rendah di seluruh dunia.
- Pratinjau Cabang: Anda dapat dengan mudah membuat pratinjau setiap kali Anda melakukan push ke cabang di repositori Git Anda, memungkinkan pengujian terpisah sebelum melakukan deployment ke produksi.
- Skalabilitas Otomatis: Vercel secara otomatis menangani skalabilitas aplikasi Anda, meningkatkan atau mengurangi kapasitas sesuai dengan permintaan.
- Monitoring dan Analytics: Platform ini menyediakan alat untuk memantau performa dan penggunaan aplikasi Anda, sehingga Anda dapat mengidentifikasi dan menangani masalah dengan cepat.
- Integrasi Git: Vercel terintegrasi dengan berbagai penyedia layanan Git seperti GitHub, GitLab, dan Bitbucket, memungkinkan Anda untuk dengan mudah melakukan deployment dari repositori Git Anda.

#### 2. Langkah Langkah Menggunakan Vercell sebagai Deployment React
1. Buka laman "https://vercel.com/login" pada browser, kemudian login dengan akun Github
2. Klik menu "Add new Project"
3. Halaman ini akan menampilkan seluruh project yang ada di dalam repository Github kita. Pilih salah satu project yang akan di deploy
4. Klik tombol "create"
5. Tunggu hingga proses deployment nya berhasil
6. Salin/buka link url dari project yang sudah selesai ter deploy.

