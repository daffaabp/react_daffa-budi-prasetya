# Rangkuman Materi CSS
CSS _(Cascading Style Sheet)_ adalah bahasa yang digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs website. Tiga cara menambahkan file CSS ke dalam HTML yaitu dengan cara External CSS, Internal CSS, dan Inline CSS.

## Kegunaan CSS
- Beragam variasi menarik 
- Tampilan website akan lebih rapi

# Tiga Cara Menyisipkan File CSS pada HTML
- Inline Style CSS merupakan kode yang dituliskan di dalam file HTML dan menggunakan elemen spesifik yang memuat tag <style>. Jenis CSS ini hanya mempengaruhi satu baris kode HTML dan harus menempel pada elemen tulisan tersebut.
- Internal CSS merupakan kode yang dituliskan pada bagian header file HTML. Namun, penggunaaan internal CSS ini terkadang membuat loading menjadi semakin lama.
- External CSS merupakan kode CSS yang diletakkan di luar dokumen HTML sebagai file .css. External CSS memiliki fungsi untuk mengkustomisasi semua tampilan halaman website yang sudah ditentukan atau beberapa halaman sekaligus.

## Selector dalam CSS
#### 1. Selector Tag
Selektor Tag disbut juga Type Selector. Selektor ini akan memilih elemen berdasarkan nama tag.
Contoh:
`
p {
    color: blue;
}
`

#### 2. Selector Class
Selektor class adalah selektor yang memilih elemen berdasarkan nama class yang diberikan. Selektor class dibuat dengan tanda titik di depannya.
Contoh:
```
.pink {
  color: white;
  background: pink;
  padding: 5px;
}
```

#### 3. Selector ID
Selektor ID hampir sama dengan class. Bedanya, ID bersifat unik. Hanya boleh digunakan oleh satu elemen saja. Selektor ID ditandai dengan tanda pagar (#) di depannya.
Contoh:
```
#header {
    background: teal;
    color: white;
    height: 100px;
    padding: 50px;
}
```

#### 4. Selector Attribute
Selektor atribut adalah selektor yang memilik elemen berdasarkan atribut. Selektor ini hampir sama seperti selektor Tag.
Contoh selektor Atribut:
```
input[type=text] {
    background: none;
    color: cyan;
    padding: 10px;
    border: 1px solid cyan;
}
```

#### 5. Selector Universal
Selektor universal adalah selektor yang digunakan untuk menyeleksi semua elemen pada jangkaua (scope) Contoh:
```
* {
    border: 1px solid grey;
}
```

#### 6. Pseudo Selector 
Pseudo selektor adalah selektor untuk memilih elemen semu seperti state pada elemen, elemen before dan after, elemen ganjil, dan sebagainya. Ada dua macam pseudo selektor:
- pseudo-class selektor untuk state elemen;
- pseudo-element selektor untuk elemen semu di HTML.
1. Pseudo-class adalah selektor untuk memilih state pada elemen. Contohnya seperti elemen saat diklik, saat fokus, saat disentuh, dan lain sebagainya. Nah, dengan selektor ini kita bisa menentukan tampilan dari elemen pada state tersebut.
Contoh:
`
a:hover {
  color: green;
}
`
2. Pseudo-element
Pseudo-element adalah selektor untuk memilih elemen semu. Elemen semu yang saya maksud di sini adalah elemen yang seolah-olah kita tambahkan di HTML.
Contoh:
`
p::first-line {
  color: magenta;
}
`

## Contoh Tag - Tag Dasar CSS
#### 1. CSS Fonts
- `font-size` untuk mengatur ukuran font;
- `font-weight` untuk mengatur ketebalan font;
- `font-style` untuk mengatur gaya font;
- `font-family` untuk mengatur jenis font;

#### 2. CSS Margin dan Padding
- `margin-top: 5px;`
- `margin-right: 10px;`
- `margin-bottom: 15px;`
- `margin-left: 20px;`

#### 3. CSS Background Color
- `background-color` menetapkan warna background pada satu elemen
- `background-image` menentukan gambar background pada suatu elemen
- `background-repeat` menentukan gambar background untuk di ulang
- `background-attachment` menentukan ukuran gambar untuk background
- `background-position` mengatur posisi awal gambar background

#### 4. CSS Display
- `block` element block ini selalu dimulai pada baris baru (yang dimulai dari kiri ke kanan)
- `inline-block` element inline-block membutuhkan lebar sesuai yang diperlukan
- `none` menyembunyikan elemen untuk tidak ditampilkan

#### 5. CSS Table
- `border` menambahkan border pada table, th, dan td
- `border-collapse` membuat border menjadi single border
- `:nth-child(even)`  membuat background stripe