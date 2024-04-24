import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
   const isLoggedIn = localStorage.getItem("isLoggedIn");
   const navigate = useNavigate();

  function checkLogin() {
      if(isLoggedIn !== "true") {
         navigate("/login");
      }
      console.log("check login");
  }

   useEffect(() => {
      // masukkan logika Authorization disini
      console.log("useEffect " + isLoggedIn);
      checkLogin();
   }, [])

    return(
      <>
         Ini Home
      </>
    )
};

export default Home;
