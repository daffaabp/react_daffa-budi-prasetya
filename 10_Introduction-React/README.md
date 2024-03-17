# Rangkuman Introduction React JS
React adalah libray JavaScript yang digunakan untuk membangun user interface yang interaktif berbasis component. React yang dibuat oleh Facebook dan bersifat open-source, sehingga dapat digunakan oleh siapa saja secara gratis.

## Cara Install React JS dengan Vite
- Download dan install installer [Node.js](https://nodejs.org/en/download)
- Setelah selesai, buat folder baru untuk instalasi react
- Buka command prompt (CMD), lalu ketik: `npm -v`
- Masuk ke folder instalasi react yang sudah dibuat, kemudian ketik:
`d: cd React-js` (Kamu bisa mengganti “React-js” dengan nama folder yang kamu buat)
- Install React dengan mengetik kode: `npm install -g pnpm`
- Lalu ketikkan perintah `pnpm create vite`, lalu ketikkan nama project kalian (misalnya intallasi-react-with-vite), lalu select framework kalian pilih "React", lalu select a variant kalian pilih "Javascript" dengan cara menekan tombol Enter
- Lalu masuk ke direktori folder React tadi dengan cara ketikkan `cd .\installasi-react-with-vite`
- Kemudian ketikkan perintah `pnpm install`
- lalu untuk menjalankan aplikasi ReactJs nya, ketikkan perintah `npm run dev`
- Untuk melihat tampilan websitenya, silahkan akses halaman "http://localhost:5173/" pada browser
- Selamat aplikasi React kamu dengan Vite sudah berhasil di install

## Apa itu Vite?
- Vite adalah alat build yang menggunakan bundler Rollup
- Vite menawarkan beberapa keunggulan dibandingkan alat build tradisional, seperti :
    1. Startup yang lebih cepat
    2. HMR yang lebih cepat
    3. Ukuran build yang lebih kecil

## Mengapa menggunakan Vite untuk React?
- Vite menawarkan beberapa keuntungan untuk pengembang React, seperti:
    1. Pengalaman pengembangan yang lebih cepat: Vite dapat membantu membuat aplikasi React dengan lebih cepat dan mudah.
    2. Performa yang lebih baik: Vite dapat menghasilkan aplikasi React yang berkinerja tinggi.
    3. Kemudahan penggunaan: Vite mudah dipelajari dan digunakan.

## Fitur Unggulan React JS :
#### 1. Declarative views
Ini membuat kode menjadi lebih mudah diprediksi dan di-debug. React membantu pembuatan desain UI yang interaktif di setiap state dalam aplikasi. Jika ada objek state yang berubah, React akan memperbarui dan merender ulang komponen.
#### 2. Component-based
Memungkinkan developer membangun Encapsulated Component yang bisa mengelola state-nya sendiri, dan menggunakannya untuk membuat UI yang kompleks.
#### 3. Learn once, write anywhere
Mengembangkan fitur baru tanpa perlu menulis ulang kode sebelumnya. React juga dapat bekerja dengan Node.js dan mobile apps menggunakan React Native.

## Kenapa React JS?
Menurut survei oleh Statista, lebih dari 50% developer memilih React JS sebagai framework untuk pengembangan software dan website. Inilah mengapa React JS cukup populer bila dibandingkan platform lainnya.
#### 1. Lebih Sederhana
Dengan pendekatan berbasis komponen serta penggunaan Javascript yang sederhana dalam pembuatan website atau aplikasi mobile, ReactJS banyak menjadi pilihan bagi para developer.
#### 2. Mudah dipelajari
Berbeda dengan platform lainnya seperti Angular dan Ember yang menggunakan Domain Specific Language, ReactJS menggunakan bahasa yang mirip dengan HTML dan CSS sehingga memudahkan programmer pemula untuk menguasainya.
#### 3. Data binding satu arah
Data binding dalam React JS berjalan satu arah sehingga pengontrolan data menjadi lebih baik. React menggunakan arsitektur aplikasi yang disebut Flux, untuk mengontrol aliran data ke komponen melalui satu titik kontrol. Hal ini membuat kita lebih mudah untuk men-debug komponen self-contained dari aplikasi ReactJS.
#### 4. Performa
ReactJS menggunakan kerangka VDOM yang membuat aplikasi web berjalan lebih cepat. Dengan kerangka ini, antarmuka pengguna yang kompleks dapat dipecah menjadi beberapa komponen. Dengan begitu, proses pengembangan bisa berjalan lebih cepat karena memungkinkan banyak pengguna bekerja pada komponen secara bersamaan.
#### 5. Mudah diuji
Aplikasi-aplikasi ReactJS sangat mudah untuk diuji. React views dapat dijadikan sebagai function dari state, sehingga kamu dapat memanipulasinya dengan state yang diberikan ke ReactJS views dan melihat output serta triggered actions, events, functions, dan sebagainya.

## Fitur React JS
#### JSX
JSX adalah ekstensi sintaks Javascript yang memungkinkan untuk penggunaan HTML di Javascript. Dengan JSX, kita dapat memodifikasi Document Object Model (DOM), yaitu sebuah API untuk mengatur struktur halaman web. Modifikasi DOM dilakukan untuk menambahkan konten dinamis pada halaman website.
#### Virtual DOM
Virtual DOM berguna untuk melihat bagian dari DOM asli yang diubah. Ketika developer mengupdate DOM pada JSX, ReactJS akan membuat salinan DOM aslinya. Fitur ini bertugas untuk membuat kode seperti dengan me-render seluruh halaman yang dilakukan oleh pengguna pada setiap perubahannya.
#### Single way data flow
Single way data flow adalah suatu teknik yang hanya memiliki satu cara untuk mentransfer data ke seluruh aplikasi. Dengan teknik ini, kontrol terhadap data jadi lebih baik.








