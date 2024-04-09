import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CreateProductForm from "../components/CreateProductForm";
import tailwindlogo from "../assets/tailwind-css-2.svg";
import article from "../components/article";

const CreateProduct = () => {
    const [language, setLanguage] = useState("english");

    const toggleLanguage = () => {
        setLanguage(language === "english" ? "indonesian" : "english");
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <div className="flex flex-col max-w-4xl mx-auto items-center">
                    <img
                        className="w-16 h-16 mt-12 mb-6"
                        src={tailwindlogo}
                        alt=""
                    />
                    <h1 className="text-3xl font-roboto font-medium mb-2">
                        {language === "english"
                            ? article.title.en
                            : article.title.id}
                    </h1>
                    <p className="text-center mb-4">
                        {language === "english"
                            ? article.description.en
                            : article.description.id}
                    </p>
                    <button
                        onClick={toggleLanguage}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {language === "english"
                            ? "Ganti ke Bhs Indonesia"
                            : "Ganti ke Bhs Inggris"}
                    </button>
                    <br /> <br />
                </div>

                <CreateProductForm />
            </div>
        </div>
    );
};

export default CreateProduct;
