import Navbar from "./components/Navbar";
import "./assets/css/style.css";
import styles from "./assets/css/styles.module.css";
import Hook from "./components/Hook";

function HeroSection() {
  return <div>HeroSection</div>;
}

export default function App() {
  let user = "muchson1"; // kalo pengin berubah harus menggunakan State
  let warna = "red";

  if (user === "muchson") {
    return <div>{user}</div>;
  }

  function tampil() {
    console.log("halo tampil");
    warna = "grey";
    console.log("setelah dirubah warna" + warna);
  }

  const namaAnakKelas = ["muchson", "daffa", "nabraska", "lativa"];
  const handleChangeUsername = () => {
    console.log("hallo username");
  }

   const handleChangePassword = (event) => {
    console.log(event.target.value);
    // console.log("hallo password");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hallo submit");
    console.log(event.target[0].value);
  }

  const mouseIn = (event) => {
    event.preventDefault();
    console.log("Mouse In Tampil");
  }

   const mouseOut = (event) => {
    event.preventDefault();
    console.log("Mouse Out Tampil");
  }

  const buttonClick = (e) => {
    e.preventDefault();
    console.log("Button Click Tampil");
  }

  console.log("Method handleSubmit:", handleSubmit);

  return (
    <div>
      {namaAnakKelas.map((nama, index) => (
        // import global css
        // return <p className="red">{nama}</p>
        // import module css
        // <p className={styles.blue}>{nama}</p>
        // import inline css
        <p key={index} style={{ color: warna }}>{nama}</p>
      ))}

      <div>Halaman Div</div>

      {/* <h1 onMouseEnter={tampil} style={{ color: warna }}>Tag H1</h1> */}

      <HeroSection />

      <Navbar nama={"john"} />

      {/* Form Input */}
      <p>Input Text dan Password</p>
      <input placeholder="username" type="text" onChange={handleChangeUsername}/>
      {/* Tugas no 6 */}
      <input placeholder="username" type="text" onChange={(e) => console.log(e.target.value)}/>
      <input placeholder="password" type="password" onChange={handleChangePassword}/>


      {/* Form Submit */}
      <p>Form Submit</p>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>


      {/* Event Handling */}
      <p>Event Handling</p>
      <button onClick={tampil} className={styles.blue}>
        {user === "muchson" ? "benar" : "salah"}
      </button>

      {/* Mouse In dan Mouse Out */}
      <p onMouseEnter={mouseIn} onMouseLeave={mouseOut}>Coba di hover</p>

      <button onClick={buttonClick}>Button Click</button>



      {/* Hooks */}
      <Hook />

    </div>
  );
}






