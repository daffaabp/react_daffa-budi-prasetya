import React from "react";
import Navbar from "../components/Homepage/Navbar";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Contact from "../components/Homepage/Contact";
import Footer from "../components/Homepage/Footer";
import Produk from "../components/Homepage/Produk";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Produk />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
