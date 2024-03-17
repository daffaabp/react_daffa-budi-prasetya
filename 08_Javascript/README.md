## Berikut link g.docs Tugas 8_Javascript-Refreshment
[https://docs.google.com/document/d/17nXG1D2Bb4AclyW5dmRSYzA2JbpA78H5Q0bGF414Ui0/edit?usp=sharing](https://docs.google.com/document/d/17nXG1D2Bb4AclyW5dmRSYzA2JbpA78H5Q0bGF414Ui0/edit?usp=sharing)

# Rangkuman Materi Javascript
Javascript merupakan bahasa pemrograman atau bahasa skrip yang digunakan untuk pengembangan website. Hal ini bertujuan untuk membuat website lebih dinamis dan interaktif. Ringkasnya, bahasa pemrograman ini meningkatkan fungsional pada halaman web penggunanya. 

## Perbedaan Var, Let, dan Const
| Perbedaan | Var | Let | Const | 
| :---: | ------------- | ----------- | ---------- |
| Scope | Scope(cakupan) dari var adalah global scope atau function scope, jadi ketika mendeklarasikan variabel dengan mengunakan var, variabel ini dapat di akses dimanapun. | Let merupakan block scope sama seperti const | Const merupakan block scope, blok adalah potongan kode yang dibatasi oleh {}. |
| Redeklarasi dan update | var dapat di redeklarasi dan di update sesuka hati, var bisa menimpa value dari variable dengan nama yang sama | Let dapat diupdate sama seperi var, tetapi Let tidak dapat di redeklarisasi | Const merupakan deklarasi variabel yang konstan, variabel ini tidak dapat di redeklarisasi |
| Hoisting | Hoisting itu dimana deklarasi variable akan di angkat ke atas sebelum kode di eksekusi | Let juga mendukung hoisting tetapi perbedaannya inisialisasi var adalah undefined sedangkan let belum ada inisialisasi jadi akan menyebabkan error | Const juga mendukung hoisting tetapi perbedaannya inisialisasi var adalah undefined sedangkan const belum ada inisialisasi jadi akan menyebabkan error |
| Kapan Menggunakannya? | Saat ini sebaiknya tidak menggunakan var dalam pengembangan perangkat lunak |  |  |

## Kelebihan Javascript
1. Mudah Dipelajari dan Dipahami
2. Fleksibel untuk Digunakan
3. Beban Server Lebih Ringan
4. Berguna untuk Semua Kebutuhan
5. Interaktif dan Responsif

## Scoping
Scoping adalah menentukan dimana variable, function, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variable dikendalikan oleh lokasi deklarasi variable.
| Jenis Scoping | Deskripsi |
| :---: | ------------- |
| Global Scope | Saat kita mendeklarasikan variable, variable tersebut dapat diakses untuk setiap kondisi saat kita coding |
| Function Scope | Kita mendeklarasikan variable didalam function. Namun variable tersebut tidak dapat diakses saat diluar function tersebut  |
| Block Scope | Variable yang dideklarasikan dengan var tidak memiliki Block Scope. Oleh karena itu variable yang dideklarasikan didalam block {} dapat dipanggil atau diakses dari luar block. |

## Tipe Data Primitives
Primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yanb tersedia dalam bahasa pemrograman.
- String
- Boolean
- Number
- BigInt
- Undefined
- Null
- Symbol (ES6)

## Tipe Data Objects
Objects adalah unit yang menyimpan properti dan fungsi (_method_)
- Object
- Array
- Function
- Date
- Set
- Map
- Weak Set
- Weak Map

## Destructuring
Destructuring adalah ekspresi dari Javascript yang memungkinkan untuk menyalin nilai dari array, atau property, atau properti dari objek, ke dalam variable yang berbeda.

## Spread Syntax
Spread syntax (...) dalam JavaScript digunakan untuk menguraikan (spread out) elemen-elemen dari sebuah array atau properti-properti dari sebuah objek ke dalam tempat-tempat yang memerlukan beberapa elemen atau properti terpisah.

## Method
Method adalah fungsi yang disimpan sebagai properti objek dan digunakan untuk menentukan perilaku objek tersebut. Macam-macam contoh dari Method dan penggunaannya sebagai berikut :
### 1. MAP
Metode map() digunakan untuk membuat array baru dengan hasil dari memanggil sebuah fungsi pada setiap elemen array yang ada.
Contoh:
```
const array1 = [1,4,9,16];
const map1 = array1.map(x => x * 2);
console.log(map1);   
```
### 2. SLICE
Metode slice() digunakan untuk menyalin sebagian elemen dari array ke array baru.
Contoh :
```
const Hewan = ['Udang', 'Lele', 'Sapi', 'Cumi-Cumi', console.log(Hewan.slice(2));
```
### 3. FOREACH
Metode forEach() digunakan untuk melakukan iterasi pada setiap elemen array tanpa membuat array baru.
Contoh :
```
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
```
### 4. REDUCE
Metode reduce() digunakan untuk mereduksi elemen-elemen array menjadi satu nilai tunggal berdasarkan fungsi yang diberikan.
Contoh :
```
const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
```

## Control Flow
Control flow dalam JavaScript memungkinkan untuk mengontrol bagaimana program akan berjalan berdasarkan kondisi-kondisi tertentu. Salah satu cara untuk mengontrol alur program adalah dengan menggunakan blok try, catch, dan throw. Macam-macam contoh dari Control Flow sebagai berikut :
### 1. Try Catch
Blok try digunakan untuk mengeksekusi potongan kode yang mungkin menghasilkan kesalahan (error). Jika terjadi kesalahan di dalam blok try, kontrol akan beralih ke blok catch. Blok catch digunakan untuk menangkap dan menangani kesalahan yang terjadi di dalam blok try. Kita bisa menuliskan kode penanganan error di dalam blok catch.
### 2. Throw
Statement throw digunakan untuk melempar kesalahan (error) secara manual. Ini berguna ketika kita ingin menunjukkan bahwa terjadi kesalahan dalam program kita.

## Function
Fungsi adalah blok kode yang dapat dipanggil atau dijalankan secara berulang, dan dapat mengembalikan nilai atau melakukan tugas tertentu di dalam program. 

## Class
Pengertian Class pada JavaScript adalah sebagai kumpulan variabel dan metode yang digunakan sebagai blueprint atau rancangan untuk membuat sebuah objek. Class dalam JavaScript memungkinkan pembuatan objek dengan struktur yang sama, yang dapat memiliki variabel dan metode yang sama dan sesuai dengan apa yang digambarkan oleh class tersebut.

## Synchronous dan Asynchronous
Synchronoys adalah mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan. Output dari code sesuai denga urutan, karena setiap perintah harus menunggu perintah sebelumnya selesai. Sedangkan asynchronous adalah hasil eksekusi atau output yang tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. Karena ada salah satu ekskusi yang membutuhkan proses agak lama, sembari menunggu proses tersebut Javascript akan mengeksekusi proses selanjutnya terlebih dahulu.

## Callback
Callback adalah fungsi yang dikirimkan sebagi parameter pada fungsi lain.
Contoh :
```
function cekUkuran(angka1, angka2, callback) {
         let luas = callback(angka1, angka2);
         if (luas >= 100) {
            return "Besar";
         } else {
            return "Kecil";
         }
      }
      console.log(cekUkuran(10, 10, cekLuas));
```

## Promise
Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang.

## Function Asynchronous
Fungsi asynchronous pada JavaScript merujuk pada proses di mana beberapa kode dapat dieksekusi sekaligus tanpa harus menunggu kode lain selesai dijalankan. Dalam konteks ini, asynchronous berarti "tidak sinkron". Ini memungkinkan JavaScript untuk menjalankan kode yang membutuhkan waktu lama untuk selesai (seperti mengambil data dari server) tanpa menghentikan eksekusi kode lain dalam program.

## Await
Await adalah sebuah operator yang digunakan dalam fungsi asynchronous untuk menangguhkan eksekusi fungsi hingga promise diselesaikan. Operator await memungkinkan kode JavaScript untuk menunggu operasi asynchronous selesai sebelum melanjutkan eksekusi kode berikutnya.

## DOM
DOM (Document Object Model) pada JavaScript adalah sebuah objek yang memodelkan dokumen HTML. Objek ini berisi segala hal yang dibutuhkan untuk memanipulasi HTML, termasuk elemen, atribut, dan teks. DOM memungkinkan JavaScript untuk berinteraksi dengan halaman web, memanipulasi elemen HTML, dan mengubah konten dan gaya halaman secara dinamis.
### DOM Manipulation
| Event | Kegunaan |
| :---: | ------------- |
| element.innerHTML | Digunakan merubah isi dari tag yang sudah kita seleksi | 
| element.style<propertyCSS> | Digunakan merubah style dari tag yang sudah kita seleksi | 
| element.setAttribute() | Digunakan mengelola / memanipulasi attribute yang sudah kita seleksi | 
| element.classList.add() | Digunakan mengelola / memanipulasi class yang sudah kita seleksi | 
### DOM Event
| Event | Kegunaan |
| :---: | ------------- |
| onclick | Digunakan ketika pengguna mengklik mouse | 
| onchange | Digunakan dalam kombinasi dengan validasi bidang input | 
| onblur | Digunakan ketika anda meninggalkan kolom input | 
| onmouseover | Digunakan ketika pengguna mengarahkan mouse ke atas pada suatu object | 
| onmouseout | Digunakan ketika pengguna mengarahkan mouse keluar pada suatu object | 
| oncopy | Digunakan ketika pengguna mengcopy suatu object |


### Rangkuman Data Structures

## Apa itu Data Structures?
Data Structures adalah sebuah cara untuk menyimpan, mengatur, dan mengakses data dalam komputer sehingga data tersebut dapat digunakan secara efisien. Struktur data juga menentukan bagaimana data akan disimpan di memori komputer dan bagaimana data tersebut saling berhubungan satu sama lain.

## Kenapa Harus Belajar Data Structures?
Belajar data structures dalam JavaScript sangat penting karena beberapa alasan:
1. Efisiensi dan Kecepatan: Data structures yang tepat dapat membantu dalam meningkatkan efisiensi dan kecepatan program. Misalnya, menggunakan array atau linked list yang tepat dapat mempengaruhi bagaimana data diakses dan diproses.
2. Pemahaman Algoritma: Memahami data structures sangat penting untuk memahami algoritma. Algoritma sering kali bergantung pada struktur data yang digunakan untuk menyelesaikan masalah tertentu. Dengan memahami data structures, Anda dapat memilih algoritma yang paling efisien untuk masalah yang dihadapi.
3. Pemecahan Masalah: Data structures membantu dalam memecah masalah kompleks menjadi bagian yang lebih sederhana dan lebih mudah dikelola. Dengan memahami data structures, Anda dapat memecah masalah yang kompleks menjadi bagian yang lebih sederhana dan lebih mudah dikelola.
4. Pengembangan Perangkat Lunak: Dalam pengembangan perangkat lunak, data structures digunakan untuk menyimpan dan mengelola data. Memahami data structures sangat penting untuk mengembangkan perangkat lunak yang efisien dan efektif.
5. Pemrograman Berorientasi Objek: Dalam pemrograman berorientasi objek, data structures sering kali digunakan untuk menyimpan data dalam objek. Memahami data structures sangat penting untuk mengembangkan perangkat lunak yang efisien dan efektif dalam pemrograman berorientasi objek.
6. Pengujian dan Debugging: Memahami data structures juga membantu dalam pengujian dan debugging. Dengan memahami bagaimana data disimpan dan diakses, Anda dapat lebih mudah mengidentifikasi dan memperbaiki masalah dalam kode Anda.











