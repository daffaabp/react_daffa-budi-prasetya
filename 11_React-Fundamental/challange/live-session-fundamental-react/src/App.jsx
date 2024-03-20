import Navbar from "./components/Navbar";
import "./assets/css/style.css";

function HeroSection() {
  return <div>HeroSection</div>
}


export default function App() {

  let user = "muchson1"; // kalo pengin berubah harus menggunakan State
  let warna = "red";
  if (user == "muchson") {
    return <div>{user}</div>
  }

  function tampil() {
    console.log("button di klik");
  }

  const namaAnakKelas = ["muchson", "daffa", "nabraska", "lativa"];

  return (
    <div>

      {namaAnakKelas.map((nama) => {
        return <p>{nama}</p>
      })}

      <div>Halaman Div</div>

      <h1 onMouseEnter={tampil} style={{ color: warna }}>Tag H1</h1>

      <HeroSection />

      <Navbar nama={"john"}/>

      {/* kode berikut adalah if else tapi tipe ternary */}
      {user == "muchson1" ? "benar" : "salah"}

      <button onClick={tampil}>Button</button>
    </div>
  )
  
}