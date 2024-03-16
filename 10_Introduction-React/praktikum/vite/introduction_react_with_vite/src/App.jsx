import Navbar from "./components/Navbar";


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

  return (
    <div>
      Introduction React
      <div>Halaman Div</div>
      <h1 onMouseEnter={tampil} style={{ color: warna }}>Tag H1</h1>
      <HeroSection />
      <Navbar />
      <button onClick={tampil}>Button</button>
    </div>
  )
  
}