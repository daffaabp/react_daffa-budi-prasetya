# Rangkuman "React Form" pada React JS
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. React form memberikan cara yang efisien dan terstruktur untuk mengelola input dari pengguna, mengubah state aplikasi, dan mengirim data ke server. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data, dan masih banyak lagi.
 
### A. Macam Macam Form
1. element `<input>`
Elemen <input> digunakan untuk mendapatkan input dari pengguna, seperti teks, angka, atau pilihan yang di-check.
2. element `<textarea>`
Elemen <textarea> digunakan untuk mendapatkan input teks yang lebih panjang dari pengguna.
3. element `<select>`
Elemen <select> digunakan untuk membuat dropdown list, di mana pengguna dapat memilih satu opsi atau lebih.
4. element `<input type="radio">`
Elemen <input> dengan type="radio" digunakan untuk membuat tombol radio, di mana pengguna hanya dapat memilih satu dari beberapa opsi.
5. element `<input type="checkbox">`
Elemen <input> dengan type="checkbox" digunakan untuk membuat kotak centang, di mana pengguna dapat memilih satu atau lebih opsi.
6. element `<input type="file">`
Elemen <input> dengan type="file" digunakan untuk mendapatkan file dari pengguna.
7. element `<input type="date"`
Elemen <input> dengan type="date" digunakan untuk mendapatkan input tanggal dari pengguna.
8. element `<input type="time">`
Elemen <input> dengan type="time" digunakan untuk mendapatkan input waktu dari pengguna.
9. dan masih banyak element lainnya seperti : button, color, email, hidden, image, month, number, password, range, search, submit, url, dsb.

### B. Controlled Component
- Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian komponen react yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukkan pengguna selanjutnya.
- Sebuah element masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component"
- Controlled component dalam React form adalah konsep di mana nilai dari elemen form seperti `<input>`, `<textarea>`, atau `<select>` dikendalikan sepenuhnya oleh state React. Artinya, nilai input dari form tidak tersimpan di dalam DOM, tetapi disimpan dalam state React, dan perubahan nilai form dipantulkan langsung ke dalam state, sehingga setiap perubahan nilai akan memicu re-rendering komponen.

##### Karakteristik Controlled Component :
1. State Memegang Nilai Form: Nilai dari elemen form (seperti input teks, checkbox, dll) disimpan dalam state komponen React.
2. Perubahan Nilai Dipantulkan ke State: Saat pengguna memasukkan atau mengubah nilai pada elemen form, perubahan tersebut langsung memperbarui state React dengan setState atau hook set state seperti useState.
3. Nilai Form diatur dengan Properti Value: Nilai-nilai dari elemen form diatur menggunakan properti value dari elemen tersebut, yang diambil dari state.
4. Menangani Perubahan dengan Fungsi Handler: Saat ada perubahan pada elemen form, React memanggil fungsi handler yang dihubungkan ke event onChange, di mana kita meng-update state dengan nilai terbaru.

### C. Uncontrolled Component
Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

##### Penjelasan Detail:

###### __1. Attribut default Value__
Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

###### __2. Tag File Input__
Pada HTML, sebuah <input type="file"> memungkinkan pengguna untuk memilih satu atau beberapa flle dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API.

Dalam React, sebuah <input type="file" /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

### D. Basic Validation
Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan:
1. Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
2. Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
3. Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

### E. Tipe Validasi Data Formulir
##### 1. Client-side validation
Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.

Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.

##### Validasi sisi klien, terbagi atas dua bagian
1. Built-in form validation, yaitu menggunakan fitur validasi langsung dari HTML5. Biasanya, validasi ini tidak membutuhkan Javascript dan memiliki performa yang lebih baik. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup 'kaku". Contohnya: required, minlength, maxlength, min, max, type dan patten
2. Menggunakan Javascript. Ini membuat validasi form dapat dikostumisasi. Tetapi kita perlu membuatnya sendiri.

##### 2. Server-side validation
Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk menvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit.

### F. Built in Form Validation
1. required: Membuat input wajib diisi sebelum submit.
2. pattern: Menentukan pola regex yang harus diikuti untuk nilai input.
3. minLength, maxLength: Menentukan panjang minimum atau maksimum untuk nilai input.

### G. Menggunakan Javascript
__Bisa kapan saja melakukan validasi?__
- Ketika ada perubahan di form. Ketika ada perubahan, akan mentrigger event onChange. Kkup real-time berdasarkan perubahan data, namun fungsi akaelebihannya validasi akan cun terus dipanggil selama ada perubahan. Bisa dikombinasikan dengan disable button.

- Ketika menekan tombol submit. Ketika menekan tombol submit, akan mentrigger event onSubmit. Kelebihannya validasi cukup sekali, namun tidak akan real-time memvalidasi form.