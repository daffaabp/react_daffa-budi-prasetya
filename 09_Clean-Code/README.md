# Rangkuman Materi Clean Code

Clean Code adalah istilah untuk kode yang mudah dibaca, dipahami, dan diubah oleh programmer. Sebuah susuan code akan bisa disebut sebagai clean code jika memiliki susunan struktur yang mudah dicerna, ringkas, berdasar, to the point, mengikuti pola dan best practices yang ada, dan menghindari complex nesting, big code blocks, dan unintuitive names.

## Kenapa Clean Code?

##### 1. Work Collaboration

Clean code yang mudah dipahami dan terstruktur, anggota tim dapat dengan mudah memahami kode yang ditulis oleh orang lain. Hal ini akan mengurangi hambatan dalam bekerja bersama pada proyek yang sama, karena setiap orang dapat mengambil dan memahami bagian kode yang berbeda tanpa kesulitan.

##### 2. Feature Development

Dengan Clean Code, pengembangan fitur baru menjadi lebih efisien. Programmer dapat dengan mudah menemukan di mana dan bagaimana mengimplementasikan fitur baru tanpa harus menghabiskan waktu untuk memahami struktur yang rumit atau kode yang tidak terorganisir.

##### 3. Faster Development

Clean code dapat mempercepat proses pengembangan secara keseluruhan. Programmer tidak perlu menghabiskan banyak waktu untuk membaca, menganalisis, atau memperbaiki kode yang kacau atau tidak terstruktur. Dengan demikian, waktu yang dihemat dapat digunakan untuk menulis fitur baru, melakukan peningkatan, atau memperbaiki bug, sehingga menghasilkan pengembangan yang lebih cepat dan efisien.

## Karakteristik Clean Code

1. Mudah Dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good function
8. Gunakan konvensi
9. Formatting
   Saran "Formatting" diantaranya yaitu: Lebar baris code 80 - 120 karakter, Satu class 300 - 500 baris, Baris code yang berhubungan saling berdekatan, Dekatkan fungsi dengan pemanggilannya, Deklarasi variable berdekatan dengan penggunanya, Perhatikan indentasi, Menggunakan prettier atau formatter.

## Clean Code "Principle" : KISS (Keep It So Simple)

- Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
- Tips Untuk selalu KISS : Fungsi atau class harus kecil, Fungsi dibuat untuk melakukan satu tugas saja, Jangan gunakan terlalu banyak argumen pada fungsi, Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal.
- DRY (Don't Repeat Yourslef) = Duplikasi code terjadi karena sering cope paste. Untuk menghindari duplikasi coba buatlah fungsi yang dapat digunakan secara berulang-ulang.
- Refactoring = Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
- Teknik Refactoring dapat dilakukan dengan cara diantara yaitu: Membuat sebuah abstraksi, Memecah kode dengan fungsi/class, Perbaiki penamaan dan lokasi kode, Deteksi kode yang memiliki duplikasi.

##
