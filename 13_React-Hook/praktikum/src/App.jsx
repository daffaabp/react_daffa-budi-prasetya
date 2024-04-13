import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const handleDelete = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };


    useEffect(() => {
        alert("Welcome");
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <div className="flex flex-col max-w-4xl mx-auto items-center">
                    <img
                        className="w-16 h-16 mt-12 mb-6"
                        src="../src/assets/tailwind-css-2.svg"
                        alt=""
                    />
                    <h1 className="text-3xl font-roboto font-medium mb-2">
                        Create Product
                    </h1>
                    <p className="text-center mb-4">
                        Below is an example form built entirely with Tailwind
                        form controls. Each required form group has a validation
                        state that can be triggered by attempting to submit the
                        form without completing it.
                    </p>
                </div>

                <ProductForm addProduct={addProduct} />

                <ProductList products={products} handleDelete={handleDelete} />
            </div>
        </div>
    );
}

export default App;
