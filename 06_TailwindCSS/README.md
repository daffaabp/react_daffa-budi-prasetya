# Rangkuman Materi Tailwind CSS
Tailwind CSS merupakan sebuah framework CSS yang memanfaatkan class utility dalam mengembangkan tampilan web dengan lebih mudah dan cepat. Berbasis utility artinya Tailwind cuma terdiri dari 100% utility class dan nggak ada class komponen seperti Navbar, Button, Card, Modal, dll. Komponen ini kita buat sendiri dengan class.

## Membuat Project Tailwind
### 1. Menggunakan link CDN
Masukkan link CDN dibawah title
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coba Tailwind dari CDN</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
### 2. Menggunakan Tailwind NPM
Masuk ke direktory, laku masukkan perintah
`npm install -D tailwindcss`
`npx tailwindcss init`

Setelah itu lakukan konfigurasi tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Lalu buat file input.css dan isi dengan script dibawah ini
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Jalankan file nya dengan cara
`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

Terakhir hubungkan file output.css dibawah title dan project tailwind siap digunakan
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Margin di Tailwind CSS
sintaks `m` Mengatur margin di semua sisi --> Contoh penggunaan `m-2`
sintaks `mt` Mengatur margin di sisi atas --> Contoh penggunaan `mt-10`
sintaks `mb` Mengatur margin di sisi bawah --> Contoh penggunaan `mb-5`
sintaks `mr` Mengatur margin di sisi kanan --> Contoh penggunaan `mr-3`
sintaks `ml` Mengatur margin di sisi kiri --> Contoh penggunaan `ml-2`
sintaks `mx` Mengatur margin di sumbu-x (kanan dan kiri) --> Contoh penggunaan `mx-4`
sintaks `my` Mengatur margin di sumbu-y (atas dan bawah) --> Contoh penggunaan `mx-4`

## Mengatur Teks di Tailwind
sintaks `text-sm` --> Teks berukuran kecil
sintaks `text-base` --> Teks berukuran sedang
sintaks `text-lg` --> Teks berukuran besar
sintaks `text-xl` --> Teks berukuran lebih besar
sintaks `text-3xl` --> Teks berukuran lebih besar 3 kali

## Pseudo Class di Tailwind
sintaks `hover` Mengubah style ketika elemen di hover (diarahkan oleh cursor) --> Contoh :  `hover:bg-blue-200`
sintaks `focus` Mengubah style ketika elemen dalam kondisi fokus --> Contoh :  `focus:ring-violet-300`
sintaks `active` Mengubah style ketika elemen dalam kondisi aktif --> Contoh :  `active:bg-blue-700`
sintaks `invalid` Mengubah style ketika nilai yang dimasukkan tidak sesuai --> Contoh :  `invalid:text-pink-600`


## Menambahkan Dark-Mode di Tailwind CSS
Cukup dengan menggunakan prefiks `dark:` lalu kemudian diikuti dengan utility class yang ingin digunakan.

## Menggunakan Directives di Tailwind CSS
- Directives dapat digunakan untuk menyimpan  sekumpulan utility class menjadi satu class utuh yang nantinya dapat digunakan
- Directives dapat digunakan untuk mengurangi duplikasi penggunaan utility class sehingga ketika ada perubahan style cukup diubah di satu tempat saja
- Directives dapat digunakan bersama dengan utility class lainnya

## Responsive Design di Tailwind
Penerapan responsive design dapat digunakan di Tailwind dengan memanfaatkan breakpoint yang telah tersedia.






