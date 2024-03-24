# Rangkuman "Event Handling" pada React JS
Event handling adalah proses menangani action atau interaction yang dilakukan user pada element-element di dalam aplikasi web. Untuk menambahkan event handler pada component, kita perlu membuat function yang akan menangani interaksi user pada element seperti tombol, formulir, dan lain-lain. Kemudian, kita dapat menambahkan event listener pada elemen tersebut dan menghubungkannya dengan function event handler yang sudah dibuat.

### A. Menambahkan Event Handler ke Elemen
Kita dapat menambahkan event handler ke elemen dengan menggunakan properti yang sesuai, seperti onClick, onChange, onSubmit, dsb.
Misalnya, untuk menangani event klik (onClick):
```
function handleClick() {
  console.log("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

### B. Statefull dan Stateless Component

##### 1. Stateful Components (Komponen Berkeadaan):
- Juga dikenal sebagai Class Components.
- Mempunyai State (Keadaan): Mereka dapat menyimpan data dalam state mereka sendiri dan menggunakan data tersebut untuk rendering.
- Menggunakan Class Syntax: Didefinisikan sebagai kelas JavaScript yang mewarisi dari React.Component.
- Menggunakan Lifecycle Methods: Mereka memiliki metode seperti componentDidMount, componentDidUpdate, dan lainnya untuk menangani siklus hidup komponen.
Contoh:
```
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```

##### 2. Stateless Components (Komponen Tanpa Keadaan):
- Juga dikenal sebagai Functional Components.
- Tidak Memiliki State: Mereka hanya menerima props sebagai argumen dan mengembalikan tampilan berdasarkan props tersebut.
- Berbentuk Fungsi: Didefinisikan sebagai fungsi JavaScript yang menerima props dan mengembalikan elemen JSX.
- Tidak Memiliki Lifecycle Methods: Karena mereka hanya berfungsi sebagai pengantar tampilan, mereka tidak memiliki metode siklus hidup.
Contoh:
```
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}
```

##### 3. Kapan Digunakan?
- Stateful Components digunakan ketika Anda membutuhkan komponen yang memiliki state yang kompleks, seperti menyimpan data API, mengelola form input, atau menyimpan data yang sering berubah.
- Stateless Components digunakan ketika Anda hanya perlu menampilkan data atau antarmuka yang sederhana, tanpa perlu menyimpan atau mengelola state di dalam komponen. Mereka lebih mudah dibaca, lebih ringkas, dan cocok untuk komponen-komponen kecil.


