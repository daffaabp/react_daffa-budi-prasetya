# Rangkuman Materi React Fundamental
React JS Fundamental adalah dasar-dasar yang perlu dipahami untuk membangun aplikasi web dengan React JS. Ini mencakup konsep-konsep seperti JSX, Components, Props, State, Virtual DOM, dan Hooks.

## A. Spesifikasi Jenis Element pada React JS
#### 1. DOM Elements
Ini adalah elemen dasar yang merepresentasikan struktur HTML pada halaman web. Contohnya seperti `<div>, <p>, <button>`, dan lain-lain.
#### 2. React Components
Ini adalah elemen yang dibuat oleh developer untuk membangun UI yang dapat digunakan kembali. Komponen ini ditulis dengan kombinasi JavaScript dan JSX, dan bisa memiliki state dan logic sendiri.

# B. React Component
React komponen adalah blok bangunan fundamental untuk membangun antarmuka pengguna (UI) di aplikasi React.  Komponen ini bisa dianalogikan seperti Lego, dimana Lego individual yang kecil bisa digabungkan untuk membentuk struktur yang lebih kompleks.
#### 1. Ciri Khas React Component :
- Reusable (dapat digunakan kembali): Komponen dapat digunakan berulang kali di seluruh aplikasi, mempromosikan pengembangan yang lebih efisien dan kode yang lebih ringkas.
- Isolated: Setiap komponen memiliki tanggung jawabnya sendiri dan terisolasi dari komponen lain, membuat kode lebih mudah dikelola dan didebug.
- Composable: Komponen yang lebih kompleks dapat dibangun dari komponen yang lebih kecil, memungkinkan untuk memecah UI menjadi potongan-potongan yang lebih mudah dikelola.
- JSX dan Javascript: Komponen ditulis menggunakan kombinasi JSX (sintaks mirip HTML) dan Javascript, memungkinkan Anda untuk mendeskripsikan struktur visual dan logic di dalamnya.

#### 2. Dua Jenis Komponent React
1. Function Components: Jenis komponen yang lebih simpel, ditulis sebagai fungsi JavaScript yang mengembalikan React element. Cocok untuk komponen presentasional yang hanya menampilkan UI dan tidak membutuhkan state.
2. Class Components: Jenis komponen yang lebih kompleks, ditulis menggunakan class-based component dari React. Memiliki lifecycle methods dan kemampuan untuk mengelola state internal, cocok untuk komponen yang lebih interaktif.

# C. Props
Props (short for properties) di React JS adalah mekanisme untuk meneruskan data dari parent component ke child component.  Bisa dibayangkan sebagai cara untuk memberikan instruksi atau informasi yang dibutuhkan oleh child component untuk berfungsi dengan baik.

#### 1. Point of Value tentang Props 
- Data one-way: Props bersifat one-way down, artinya data mengalir dari parent component ke child component. Child component tidak bisa langsung mengubah nilai props yang diterima.
- Customization: Props memungkinkan Anda untuk mengkustomisasi child component dengan data yang berbeda-beda, tergantung pada bagaimana parent component menggunakannya.
- Data Types: Props bisa berisi berbagai macam data types, seperti string, number, object, array, dan bahkan function.
- Component Reusability: Dengan menggunakan props, Anda dapat membuat komponen yang lebih reusable dan fleksibel, karena fungsinya tidak tergantung pada data spesifik, melainkan data yang disediakan oleh parent component.

# D. React Lifecycle
Siklus hidup React (React lifecycle) merujuk pada tahapan berbeda yang dilalui komponen selama keberadaannya di aplikasi React.
### Tiga Fase Utama dalam React Lifecycle
##### 1. Mounting (Pemasangan): 
Fase ini terjadi ketika komponen pertama kali ditambahkan ke DOM. Ini melibatkan metode berikut:

- constructor(props): Ini adalah metode opsional di mana Anda dapat menginisialisasi state dan menyiapkan binding. Penting untuk menghindari efek samping dalam constructor.
- getDerivedStateFromProps(props, state): Metode statis ini digunakan untuk memperbarui state komponen berdasarkan props yang diterima. Ini jarang digunakan dalam React modern karena pengenalan hook seperti useEffect.
- render(): Ini adalah metode wajib yang mengembalikan struktur JSX yang mewakili UI komponen. React menggunakan ini untuk menentukan apa yang akan ditampilkan di layar.
- componentDidMount(): Metode ini dipanggil segera setelah komponen dipasang (disisipkan ke dalam DOM). Ini adalah tempat yang tepat untuk melakukan efek samping seperti mengambil data dari API atau menyiapkan langganan.

##### 2. Updating (Pembaruan):
Fase ini terjadi ketika komponen perlu dirender ulang karena perubahan props atau state. Ini melibatkan metode berikut:
- shouldComponentUpdate(nextProps, nextState): Metode opsional ini memungkinkan Anda untuk mengoptimalkan kinerja dengan mencegah rendering ulang yang tidak perlu. Ini harus mengembalikan true jika komponen harus dirender ulang, dan false jika tidak. Secara default, ini mengembalikan true.
- getSnapshotBeforeUpdate(prevProps, prevState): Metode ini digunakan untuk mengambil snapshot dari DOM tepat sebelum pembaruan terjadi. Ini jarang digunakan dan dapat diganti dengan efek dalam komponen fungsional.
- render(): Metode ini dipanggil lagi setiap kali komponen perlu memperbarui UI-nya.
- componentDidUpdate(prevProps, prevState, snapshot): Metode ini dipanggil segera setelah komponen diperbarui. Ini dapat digunakan untuk melakukan tindakan berdasarkan props dan state sebelumnya, atau untuk memperbarui DOM berdasarkan snapshot dari getSnapshotBeforeUpdate.

##### 3. Unmounting (Pelepasan): 
Fase ini terjadi ketika komponen dihapus dari DOM. Ini melibatkan metode berikut:
- componentWillUnmount(): Metode ini dipanggil tepat sebelum komponen dilepas. Ini adalah tempat yang tepat untuk membersihkan efek samping apa pun, seperti menghapus event listener atau langganan, untuk mencegah kebocoran memori atau perilaku yang tidak terduga.

# E. Render Bersyarat
Render bersyarat memungkinkan Anda untuk menampilkan elemen UI tertentu berdasarkan kondisi tertentu. Ini membantu Anda membuat UI yang lebih dinamis dan interaktif.

##### 1. Penggunaan:

Menampilkan elemen berdasarkan nilai state.
Menampilkan elemen berdasarkan props yang diterima.
Menampilkan elemen berdasarkan hasil perhitungan atau operasi logika.
##### 2. Metode:
Operator ternary: `kondisi ? elemen1 : elemen2`
Statement if-else: `if (kondisi) { elemen1 } else { elemen2 }`
Fragment: `<React.Fragment>{kondisi && elemen}</React.Fragment>`
Komponen bersyarat: Membuat komponen terpisah untuk kondisi berbeda.
##### 3. Nilai:
Meningkatkan modularitas dan reusability kode.
Meminimalisir kode HTML yang tidak perlu.
Meningkatkan interaktivitas UI.
Mempermudah pengelolaan state dan props.

# F. Directory Structure
Directory structure dalam sebuah proyek React JS adalah cara yang terstruktur untuk menyimpan berkas-berkas yang diperlukan untuk proyek tersebut. Struktur direktori yang baik dapat membantu memudahkan pengembangan, pemeliharaan, dan kolaborasi dalam proyek React. 
##### Contoh Struktur Folder Pada React Js
```
my-react-app/
|-- node_modules/
|-- public/
|   |-- index.html
|   |-- ...
|-- src/
|   |-- components/
|   |   |-- Component1.js
|   |   |-- Component2.js
|   |   |-- ...
|   |-- pages/
|   |   |-- Home.js
|   |   |-- About.js
|   |   |-- ...
|   |-- assets/
|   |   |-- css/
|   |   |   |-- styles.css
|   |   |-- images/
|   |   |-- ...
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

# G. Styling pada React Js
##### 1. Classes dan CSS
Anda dapat menggunakan cara tradisional dengan mendefinisikan class CSS di file CSS Anda dan kemudian menerapkannya ke elemen HTML di komponen React.
```
import './styles.css'; // Import file CSS

function MyComponent() {
  return <div className="my-class">Hello, World!</div>;
}
```
Di dalam file styles.css:
```
.my-class {
  color: blue;
  font-size: 16px;
}
```
##### 2. Atribut Style
```
function MyComponent() {
  const divStyle = {
    color: 'red',
    fontSize: '20px'
  };

  return <div style={divStyle}>Hello, World!</div>;
}
```

##### 3. Modul CSS (CSS Modules)
React juga mendukung CSS Modules, yang memungkinkan Anda untuk mengisolasi styling per komponen dengan membuat file CSS modul yang terkait secara lokal dengan komponen tersebut.
```
import styles from './MyComponent.module.css'; // Import file CSS modul

function MyComponent() {
  return <div className={styles.myClass}>Hello, World!</div>;
}
```
Di dalam file MyComponent.module.css:
```
.myClass {
  color: green;
  font-size: 18px;
}
```

#### Perbedaan dan Penggunaan:
1. Classes dan CSS:
- Cocok untuk styling yang berlaku umum dan digunakan di seluruh aplikasi.
- Memungkinkan pemisahan antara logika dan tampilan.
- Lebih mudah dikelola dalam file terpisah.

2. Atribut Style:
- Baik untuk styling sederhana yang spesifik untuk satu elemen.
- Lebih fleksibel karena Anda dapat menggunakan ekspresi JavaScript di dalamnya.
- Bisa jadi kurang praktis jika stylingnya kompleks atau banyak.

3. Modul CSS:
- Ideal untuk menerapkan styling lokal yang terisolasi di dalam komponen.
- Mencegah konflik nama class dengan komponen lain.
- Memungkinkan penamaan class yang lebih pendek dan jelas.






