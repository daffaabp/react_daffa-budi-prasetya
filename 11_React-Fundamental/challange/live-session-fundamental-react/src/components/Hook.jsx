import React, {useState} from "react";

export default function Hook() {

    // kayak buat variabel tapi di react
    const peopleData = [
      {
        id: 1,
        name: "John",
        age: 30,
        gender: "Male",
      },
      {
        id: 2,
        name: "Emily",
        age: 25,
        gender: "Female",
      },
      {
        id: 3,
        name: "Michael",
        age: 35,
        gender: "Male",
      },
    ];
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [count, setCount] = useState(0);
    const [cobaArray, setCobaArray] = useState(["daffa", "raisah", "septian"]);
    const [arrayOfObjectValue, setArrayOfObjectValue] = useState(peopleData);
    const [bahasa, setBahasa] = useState("button");

    
    const handleChangeUsername = (e) => {
      // username = e.target.value;
      setUsername(e.target.value);
      // console.log("username sebelum if = " + username);
      return console.log(username);
    }

    const handleClickSubmit = () => {
      setCobaArray([...cobaArray, "ardian"]);
      setCount(count + 1);
      // setArrayValue([...arrayValue, username]); //setArrayVakue(["nama1", "nama2", "nama3" , "nama4"]);
      setArrayOfObjectValue((prevState) => {
        console.log("State sebelumnya:", prevState);
        return [
          ...prevState,
          {
            id: prevState.length + 1,
            name: username,
            age: age,
            gender: "Male",
          },
        ];
      });
      return console.log("click submit");
    }
    
  return (
    <>
        <h1> Hook </h1>
        <input placeholder="Username" type="text" onChange={handleChangeUsername} />
         
        <button onClick={handleClickSubmit}>Button</button>
        {username}
        {cobaArray}

        {arrayOfObjectValue.map((person) => (
        <div key={person.id}>
          <p>{person.id}</p>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.gender}</p>
          <hr></hr>
        </div>
        ))}

        <br></br> <br></br>
 
        <button onClick={() => {
          if(bahasa == "tombol") {
            setBahasa("button");
          }else {
            setBahasa("tombol");
          } 
          }}>
          {bahasa}
        </button>
          
        <br></br> <br></br>

      <button>Counter</button>0
    </>
  );
}