export default function Navbar(props) {
  // props
  // state = variabel di dalam function
  // nama = "= variabel nama"
  // props.nama = "muchson";
  // semua hal yang diatas return maka tidak pernah akan ditampilkan pada layar tapi akan tetap berjalan
 
  let contoh = "variable dalam navbar";
  let biru = "blue";
  return (
    <div>
      {contoh}
      navbar = {props.nama}
      {props.nama === "john" && <h1 style={{ color: biru }}>Hai Kamu Admin</h1>}
      <div>anak dari parent utama</div>
    </div>
  );
}
