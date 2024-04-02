import React from 'react'
import { useState } from 'react'

export default function App() {
  // ini boleh juga kalau lagi latihan
  
  const [username, setUsername] = useState();
  const [errorUsername, setErrorUsername] = useState();
  const [message, setMessage] = useState();
  const [jurusan, setJurusan] = useState();
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [image, setImage] = useState(null);

  // yang bagis, pada satu form hanya satu handle form
  // const [dataDiri, setDataDiri] = useState([
  //   {
  //   username: "muchson",
  //   message: "message"
  //   jurusan: "desain",
  // },
  // ]);

  // console.log(dataDiri);
  const dataDiri = [{username: username, message, jenisKelamin: jenisKelamin}];
  

  // Validasi
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    const usernameRegex = /^[a-zA-Z]+$/;
    const isValidUsername = usernameRegex.test(e.target.value);
    if (username.length >= 5 && username.length <= 10) {
      return console.log("username memenuhi syarat");
    } 
    
    if (!isValidUsername) {
      setErrorUsername("Tolong hanya masukkan berupa huruf");
        return console.log("Regex memenuhi syarat");
    }
  }

  function handleChangeJurusan(e) {
    console.log("handleChangeJurusan = " + e.target.value);
    setJurusan(e.target.value);
  }

  function handleChangeJenisKelamin(e) {
    console.log("handleChangeJenisKelamin = " + e.target.value);
    setJenisKelamin(e.target.value);
  }

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
  }
return (
<div className="p-8">
    <h1 className='text-3xl'>Example Form</h1>
    <label className='block mb-4'>
        <p>Username</p>
        <input onChange={handleChangeUsername} type="text" className='border border-gray-300 py-1' />
        <p className='text-red-500'>{errorUsername}</p>
    </label>
    <label className='block mb-4'>
        <p>Message</p>
        <textarea className='border border-gray-300' style={{ height: "200px", width: "400px" }}></textarea>
    </label>
    <label className='block mb-4'>
        <p className='mb-2'>Pilih Jurusan</p>
        <select onChange={handleChangeJurusan} value={jurusan} className='border border-gray-300'>
          <option disabled>Pilih Jurusan</option>
          <option value="Informatika">Informatika</option>
          <option value="Multimedia">Multimedia</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>
    </label>

    <div className='flex flex-col'>
    <div className='flex'>
      <input value="laki-laki" onChange={handleChangeJenisKelamin} type="radio" name="radio-1" className="radio mb-2" checked={jenisKelamin === "laki-laki"} />
      <p className='ml-2'>Laki - Laki</p>
    </div>
    <div className='flex'>
      <input value="perempuan" onChange={handleChangeJenisKelamin} type="radio" name="radio-1" className="radio mb-2" checked={jenisKelamin === "perempuan"}/> 
      <p className='ml-2'>Perempuan</p>
    </div>
    </div>

    <label className='block mb-4'>
        <p className='font-bold'>Jenis Kelamin</p>
        <input type="radio" />Laki - Laki
        <input type="radio" />Perempuan
    </label>

    <div className='mt-2'>
      <input onChange={handleFileChange} type="file" className="file-input w-full max-w-xs" />

      <div className="avatar">
        <div className="w-24 rounded">
          <img src={image} alt="Avatar" />
        </div>
      </div>
    </div>

    <label className='block mb-4'>
      <p>Persetujuan</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quis dolorem culpa a voluptate atque nobis ad recusandae corrupti asperiores.</p>
      <input type="checkbox" onChange={(e) => {setCheckBox(!checkBox)}} />Saya menyetujui semua persayaratan
    </label>
    <br /> <br />
    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tampilkan
    </button> */}

    <button className="btn">Button</button>
    <br /> <br />

    
    {jurusan}
    {checkBox}
    {dataDiri.map((data) => {})}
</div>
)
}
