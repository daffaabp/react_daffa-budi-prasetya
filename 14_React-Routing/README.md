# Rangkuman "React Router" pada React JS
Routing adalah cara untuk menampilkan halaman berbeda kepada user, artinya user dapat berpindah halaman dengan menggunakan url atau element yang reference ke suatu URL. Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)
 
##### Perbedaan SPA dan MPA
- Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut
- Multi Page Application (MPA) juga disebut dengan tradisional web app, adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat perintah baru

##### Keunggulan SPA dan MPA
| SPA | MPA |
| ----------- | ------------ |
| Waktu loading website jauh lebih cepat | SEO website akan lebih mudah dioptimasi |
| Tidak ada query tambahan ke server | Memudahkanmu untuk mengubah halaman tertentu untuk  setiap kebutuhan yang berbeda |
| Front end yang cepat dan responsive | Mengubah tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (user interface) |  |

##### Kekurangan SPA dan MPA
| SPA | MPA |
| ----------- | ------------ |
| Tidak bagus dalam hal SEO | Kecepatan download website jauh lebih lama jika dibandingan dengan SPA |
| Berat saat di load/buka pertama kali | Kampu perlu mengintegrasikan antara front end dan back end |
| kurang aman dibanding dengan website biasa | Lebih sering membutuhkan maintenance dan update |
| Masalah kompatibilitas browser | Mungkin akan lebih sering menemukan masalah performa pada website |
 
##### Setup React Router:
1. npm install react-router-dom
2. Import BrowserRouter di main.jsx
3. wrap app jsx component di main.jsx dengan type router, misalkan BrowserRouter
4. Gunakan jsx Routes yang me-wrap ke component Route (dengan attribute={nama_path dan element = {nama_component})

### A. Router Types
React Router sendiri memiliki beberapa router type 
- `<BrowserRouter>`
- `<MemoryRouter>` menyimpan lokasi secara internal
- `<HashRouter>` digunakan agar url tidak dikirim ke server
- `<NativeRouter>` digunakan untuk react-native
- `<StaticRouter>` digunakan untuk render app di node

##### Penjelasan Detail :
- __BrowserRouter__ digunakan sebagai router yang menggunakan API history dari HTML 5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang
- __Route__ digunakan sebagai __pengarah__ jalannya lalu lintas suatu aplikasi web
- Attribute __path__ merupakan __url__ pada browser pada proses routing
- Attribute __component__ merupakan suatu komponen  yang akan ditampilkan kepada user saar mngekases path yang di definisikan
- __Switch__ digunakan untuk membungkus kumpulan beberapa component __Route__
- __Exact__ bertugas untuk memastikan route hanya me-render component yang dimiliki __path__ yang __cocok__, jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component __NotFound__
- __Link__ digunakan untuk berpindah antar halaman property __to__ tersebut merujuk pada path di route yang akan dituju
- Element kosong __"<> </>"__ tersebut adalah shorthand dari react fragment yang mana bisa membungkus child element tanpa menambahkan node ke dalam DOM

##### Konsep Dynamic Routing dan Component
- Dynamic routing adalah teknik dalam React Router yang memungkinkan kita untuk membuat rute yang dinamis berdasarkan parameter yang berubah. Artinya, kita dapat membuat rute yang memiliki pola tetap, namun nilai dari bagian tertentu dari URL dapat berubah.
- `useParams` adalah salah satu dari Hooks yang disediakan oleh React Router untuk mengekstrak nilai parameter dari URL.

__Contoh__ :
```
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import UserDetail from './UserDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id" component={UserDetail} />
      </Switch>
    </Router>
  );
}

export default App;
```

### B. Nested Routes
- Apabila kita ingin membuat route (child) lain di dalam route (parent) awal kita
- Outlet digunakan untuk menampilkan komponen child yang di wrap dalam route parent
- useOutletContext untuk sharing data sesama route

##### Penjelasan Detail :
- __Outlet__ adalah komponen yang digunakan untuk menunjukkan di mana komponen-komponen dari rute-rute anak akan dirender di dalam hierarki rute yang lebih tinggi. Artinya, outlet digunakan untuk menentukan tempat di mana komponen-komponen dari rute-rute nested (bersarang) akan di-render.
- __useOutletContext__ adalah hook yang digunakan untuk mengakses konteks dari rute-rute yang menggunakan Outlet di dalam komponen-komponen mereka. Dengan useOutletContext, kita dapat mengakses informasi dan state dari rute-rute anak yang dirender di dalam Outlet.

### C. UseRoutes Hooks
- useRoutes hooks adalah cara membuat routing dengan react-router tetapi tidak menggunakan jsx, melainkan menggunakan hooks

### D. Link dan Navlink component
- `<Link>` hampir serupa dengan `<a>` tag yang menghubungkan secara khusus router internal dari react-router-dom
- `<Navlink>` adalah Link yang mempunyai kemampuan khusus untuk membaca routes yang "active", "pending", dan "transitioning"

##### Perbedaan Link dan Redirect
| Link | Redirect |
| ----------- | ------------ |
| Dapat digunakan pada kondisi apapun | Lebih sering digunakan pada halaman 404 |
| Memberikan history baru pada browser | Menimpa history pada browser |
| Bereaksi dengan click seperti a href | Bereaksi dengan suatu aplikasi |

### E. Navigate dan useNavigate Hook
- `<Navigate>` berfungsi untuk mengubah lokasi saat komponen di render. Contoh kasus rill biasanya digunakan pada saat login kemudian di redirect ke halaman home/dashboard
- `<useNavigate>` merupakan function yang dapat digunakan untuk navigate



















