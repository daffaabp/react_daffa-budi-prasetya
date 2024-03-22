import React, { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [display, setDisplay] = useState("none");
  const [inputValue, setInputValue] = useState("");
  const [inputEnabled, setInputEnabled] = useState(true);
  const [name, setName] = useState("");
  
  // let nama = "muchson";
  const handleClick = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  

  // useEffect(() => {
  //   // disinilah logic dari useEffect digunakan
  //   // ini tidak bagus untuk dimanfaatkan terlalu banyak
  //   // ketika 
  //   console.log("use effect tanpa kurung siku");
  // });

  // useEffect(() => {
  //   console.log("use effect dengan kurung siku, jalan satu kali");
  // }, []);

  // useEffect(() => {
  //   console.log("use effect memantau count");
  // }, [count]);

  // useEffect(() => {
  //   console.log("use effect memantau count2");
  // }, [count2]);

  // useEffect(() => {
  //   if (nama == "muchson") {
  //     alert("hai muchson");
  //   }
  // }, []);


  useEffect(() => {
    if (inputValue.length == 5) {
      setDisplay("");
      setInputEnabled(false);

    } else {
      setDisplay("none");
      setInputEnabled(true);
    }
  }, [inputValue]);


  useEffect(() => {
    if (name === "swipper") {
      alert("Hai swipper, jangan mencuri!");
    }
  }, [name]);


  return (
      <div>
          <h1>Function Component</h1>
          <p>This is a functional component</p>

          <input type="text" value={inputValue} onChange={handleChange} disabled={!inputEnabled} />
          <small style={{ display: display, color: "red" }}>input terlalu panjang</small>
          {/* {inputValue} */}


          <button onClick={handleClick}>Increment</button>
          <p>Count: {count}</p>

          <hr></hr>

          <button onClick={handleClick}>Increment count 2</button>
          <p>Count: {count2}</p>

          <hr></hr>
          
          <p>Masukkan nama : swipper</p>
          <input type="text" value={name} onChange={handleName} />
      </div>
  );
}