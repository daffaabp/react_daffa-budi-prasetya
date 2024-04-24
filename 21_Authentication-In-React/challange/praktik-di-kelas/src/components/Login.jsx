import React from "react";
import { useState } from "react"; // pembuatan variable
import { useNavigate } from "react-router-dom"; // untuk melakukan redirect

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState();
   const navigate = useNavigate();

   function handleLogin(e) {
      e.preventDefault()
      const dummyUser = { username: "admin", password: "admin" };
      if (username === dummyUser.username && password === dummyUser.password) {
            localStorage.setItem("user", JSON.stringify(dummyUser));
            localStorage.setItem("isLoggedIn", true);
            navigate("/")





         // console.log("username bener bang");
      } else {
         setErrorMessage("username atau password anda salah");
      }






      console.log(username + password);
   }

    return <>
      <form action="" onSubmit={handleLogin}>
         <input type="text" placeholder="username..." onChange={(e) => setUsername(e.target.value)} />
         <input type="text" placeholder="password..." onChange={(e) => setPassword(e.target.value)} />
         <button type="submit">Submit</button>
      </form>
       {errorMessage && <p>{errorMessage}</p>}
    </>;
};

export default Login;
