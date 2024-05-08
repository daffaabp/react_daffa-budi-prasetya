# Rangkuman Materi Introduction Data Structures Javascript (Exploration Topic)

## A. Apa itu Data Structures di dalam JavaScript?

Data structures atau struktur data adalah cara kita mengatur dan menyimpan data dalam komputer agar bisa diakses dan dimanipulasi dengan efisien. Di JavaScript, ada beberapa jenis struktur data yang umum digunakan, seperti Array, Object, Map, Set, dan lain-lain. Setiap jenis struktur data memiliki kegunaan dan fitur uniknya sendiri.


## B. Basic Data Structures

#### 1. Array (Larik)
-   Array adalah kumpulan nilai atau elemen yang disimpan dalam urutan tertentu.
-   Setiap elemen dalam array memiliki indeks yang menunjukkan posisinya.
-   Contoh: let numbers = [1, 2, 3, 4, 5];
#### 2. Object (Objek)
-   Objek adalah kumpulan pasangan kunci-nilai, di mana setiap nilai disimpan dengan kunci uniknya.
-   Digunakan untuk merepresentasikan entitas atau objek dalam aplikasi.
-   Contoh: let person = { name: 'John', age: 25, city: 'New York' };
#### 3. Stack (Tumpukan)
-   Stack adalah struktur data yang bekerja berdasarkan prinsip LIFO (Last In, First Out).
-   Elemen yang terakhir dimasukkan ke dalam tumpukan akan menjadi elemen pertama yang dikeluarkan.
-   Contoh: Operasi back dan undo pada editor teks.
#### 4. Queue (Antrian)
-   Queue adalah struktur data yang bekerja berdasarkan prinsip FIFO (First In, First Out).
-   Elemen yang pertama dimasukkan ke dalam antrian akan menjadi elemen pertama yang dikeluarkan.
-   Contoh: Antrian pada kasir di toko.
#### 5. Linked List (Daftar Berantai)
-   Linked list adalah kumpulan simpul yang terhubung satu sama lain dengan tautan atau pointer.
-   Setiap simpul memiliki dua bagian: data dan tautan ke simpul berikutnya.
-   Contoh: Daftar kontak di ponsel.
#### 6. Tree (Pohon)
-   Pohon adalah struktur data hierarkis yang terdiri dari simpul-simpul yang terhubung dalam bentuk hirarki.
-   Setiap simpul memiliki satu simpul induk dan nol atau lebih simpul anak.
-   Contoh: Struktur direktori pada komputer.
#### 7. Graph (Graf)
-   Graf adalah kumpulan simpul yang terhubung dalam bentuk jaringan.
-   Setiap simpul dalam graf dapat terhubung dengan satu atau lebih simpul lainnya.
-   Contoh: Jaringan sosial seperti Facebook.


## C. Operasi Data Structures

#### 1. Read (Baca):
-   Operasi membaca digunakan untuk mengakses nilai atau elemen dalam struktur data.
-   Misalnya, untuk array, operasi baca melibatkan mengakses nilai menggunakan indeks.
-   Contoh: let value = array[index];
#### 2. Insert (Sisip)
-   Operasi sisip digunakan untuk menambahkan nilai atau elemen baru ke dalam struktur data.
-   Ini bisa dilakukan di awal, tengah, atau akhir struktur data, tergantung pada implementasi dan kebutuhan.
-   Contoh: Menambahkan nilai baru ke dalam array atau menyisipkan simpul baru ke dalam linked list.
#### 3. Delete (Hapus)
-   Operasi hapus digunakan untuk menghapus nilai atau elemen dari struktur data.
-   Ini bisa dilakukan dengan memperbarui atau memindahkan pointer atau tautan yang terlibat, tergantung pada jenis struktur data.
-   Contoh: Menghapus nilai tertentu dari array atau menghapus simpul dari linked list.
#### 4. Search (Cari)
-   Operasi cari digunakan untuk mencari nilai atau elemen tertentu dalam struktur data.
-   Ini melibatkan iterasi atau traversal melalui struktur data dan membandingkan nilai dengan nilai yang dicari.
-   Contoh: Mencari nilai tertentu dalam array atau mencari simpul dengan nilai tertentu dalam tree.
