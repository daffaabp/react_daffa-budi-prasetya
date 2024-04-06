# Rangkuman "Event Hook" pada React JS
Hooks merupakan fitur baru di react 16.8. Dengan hooks kita dapa mengunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas. Hooks merupakan fungsi untuk mengaitkan state dan fitur fitur lifecycle React pada functional component. Hooks hanya dapat digunakan di function component tidak berfungsis pada class component.

Penggunaan Hooks itu ada 2 cara, yaitu dengan menggunakan built-in Hooks yaitu hook bawaan dari React dan juga Custom Hook, dimana kita dapat menggabungkan built-in hooks dan membuat hooks yang sesuai dengan yang kita butuhkan.

### A. Alasan/Ide Hooks Dibuat
- Sulitnya me reuse statefull logi antara komponen
- Komponen yang sudah kompleks dan sulit dimengerti
- Classes komponen sulit dipelajari, seperti konsep this, atau bind setiap interaksi.
- Class komponen menimbulkan pola yang memperlambat optimasi

### B. State Hooks
- State membuat komponen mengingat informasi, jadi bisa digunakan sebagai penyimpanan sementara
- Karena penyimpanan sementara jadi ketika dilakukan refresh page, state akan kembali ke kondisi default
- State juga bisa digunakan untuk membuat page dinamis, atau interaksi aplikasi dengan user menggunakan event handler.
- Ada 2 cara menggunakan state di React yaitu ada useState dan useReducer


### C. Perbadingan useState dan useReducer
| useState | useReducer |
| ----------- | ---------- |
| Penggunaan state yang sederhana, useState lebih menguntungkan karena tidak menulis banyak kode | useReducer cenderung digunakan apabila menggunakan banyak event handler |
| Untuk kasus yang sederhana useState lebih mudah dibaca dan mudah melakukan debugging, sedangkan untuk kasus kompleks dengan logic yang cukup rumit dan panjang useState terkadang sulit dipahami kembali karena komponen akan menjadi banyak | useReducer bisa mempersulit pada kasus sederhana, dan mempermudah kasus yang sulit, sehingga proses debugging lebih mudah |
| useState melekat pada komponennnya sendiri | useReducer dapat dipecah dari komponen sehingga terkadang mempermuda prosestesting, debugging dan membuat code kita lebih clean | 

### D. Effect Hooks (useEffect)
- Hooks yang digunakan untuk menambah side Effect di komponen, misalkan fetching API, interaksi DOM, dll
- Effect Hooks akan running setiap komponen melakukan render
- Namun kita bisa mengatur running dari effect hooks dengan menambahkan parameter kedua yang beruppa array
- Ada 3 penggunaan effect hooks di react, useEffect, useLayoutEffect, dan useInsertionEffect

##### Perbedaan useEffect
1. useEffect, aktif setelah komponen mount
2. useLayoutEffect, aktif sebelum komponen mount
3. useInsertionEffect, aktif sebelum React membuat change terhadap DOM

### E. Context Hooks (useContext)
- Contect hooks berfungsi untuk komunikasi antara parent dan children komponen tanpa harus menggunakan props
- useContext adalah salah satu Hook yang memungkinkan kita untuk mengakses nilai dari Context di dalam komponen React.

### F. Reff Hooks
- Reff hooks biasa digunakan dalam melakukan hold informasi yang tidak dilakukan render
- Ada 2 ref hook, yaitu useRef dan useImperativeHandle
##### Perbedaan :
1. useReff sifatnya tidak me re-render, jadi sebaiknya jangan digunakan. Ada beberapa kasus yang dapat diselesaikan dengan useRef
2. useImperativeHandle itu adalah semacam hooks yang dapat membuat komponen kita atau handle dari komponen kita itu ter ekspos. Sehingga dari parent komponen itu dia bisa menggunakan href yang sudah kita ekspos tadi.

### G. Performance Hooks
- Performance hook berfungsi untuk mengoptimalkan performa rendering, misalkan data tidak berubah maka tidak dilakukan re render komponen
- Ada 2 performa hooks yang dapat digunakan di React, yaitu useMemo dan useCallback

##### Perbedaan :
1. useMemo, hanya akan menghitung ulang nilai memoized ketika salah satu dependencies telah berubah.
2. useCallback, berguna dalam situasi di mana kita memiliki komponen yang menerima fungsi callback sebagai props, dan kita ingin memastikan bahwa komponen tersebut tidak di-render ulang berulang kali jika referensi fungsi callbacknya tidak berubah.

















