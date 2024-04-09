import React, { useState } from "react";

const CreateProductForm = () => {
    const [productName, setProductName] = useState("");
    const [productNameError, setProductNameError] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productCategoryError, setProductCategoryError] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productPriceError, setProductPriceError] = useState("");

    const handleProductNameChange = (event) => {
        const value = event.target.value;
        setProductName(value);

        if (value.length > 10) {
        setProductNameError(
        "Product name tidak boleh melebihi 10 karakter"
        );
        } else {
        setProductNameError("");
        }
    };

    const handleProductCategoryChange = (event) => {
        const value = event.target.value;
        setProductCategory(value);

        if (!value) {
            setProductCategoryError("Silahkan pilih product kategory");
        } else {
            setProductCategoryError("");
        }
    };

    const handleProductPriceChange = (event) => {
        const value = event.target.value;

        const validPrice = /^[0-9]*$/;
        if (!validPrice.test(value)) {
            setProductPrice("");
            setProductPriceError("Mohon masukkan inputan yang valid (hanya angka)");
        } else {
            setProductPrice(value);
            setProductPriceError("");
        }
    };

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Random Number:", randomNumber);
    };

    return (
    <form action="" className="max-w-md mx-auto px-4">
        <h1 className="font-roboto font-medium text-2xl text-center mb-8">
            Detail Product
        </h1>

        <div className="mb-4">
            <label htmlFor="product_name" className="text-gray-600 block text-base font-normal mb-2">
                Product name
            </label>
            <input className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 ${ productNameError ? "border-red-500" : "" }`} type="text" id="product_name"
                value={productName} onChange={handleProductNameChange} required />
            {productNameError && (
            <p className="text-red-500 text-sm mt-1">
                {productNameError}
            </p>
            )}
        </div>

        <div className="mb-4">
            <label htmlFor="product_category" className="text-gray-600 block text-base font-normal mb-2">
                Product Category
            </label>
            <select id="product_category" className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none
                focus:ring-indigo-500 focus:border-indigo-500 text-sm ${ productCategoryError ? "border-red-500" : "" }`}
                onChange={handleProductCategoryChange} value={productCategory} required>
                <option value="">Select a category</option>
                <option value="Dress and Fashion">Dress and Fashion</option>
                <option value="Electronic">Electronic</option>
                <option value="Furniture">Furniture</option>
            </select>
            {productCategoryError && (
            <p className="text-red-500 text-sm mt-1">
                {productCategoryError}
            </p>
            )}
        </div>

        <div className="mb-4">
            <label htmlFor="images_file" className="text-gray-600 block text-base font-normal mb-2">
                Image of Product
            </label>
            <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="file" id="images_file" required />
        </div>

        <div className="mb-4">
            <label htmlFor="product_freshness" className="font-roboto font-medium text-base text-slate-600">
                Product Freshness
            </label>
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <input id="kopi-radio" type="radio" value="Brand New" name="product_freshness"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="kopi-radio" className="ms-2 font-roboto font-normal text-base text-slate-600">
                        Brand New
                    </label>
                </div>
                <div className="flex items-center">
                    <input id="gula-radio" type="radio" value="Second hand" name="product_freshness"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="gula-radio" className="ms-2 font-roboto font-normal text-base text-slate-600">
                        Second hand
                    </label>
                </div>
                <div className="flex items-center">
                    <input id="susu-radio" type="radio" value="Refufbished" name="product_freshness"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="susu-radio" className="ms-2 font-roboto font-normal text-base text-slate-600">
                        Refurbished
                    </label>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className="text-gray-600 block text-base font-normal mb-2">
                Additional Description
            </label>
            <textarea id="description"
                className="py-3 px-4 w-full border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                rows="3"></textarea>
        </div>

        <div className="mb-8">
            <label htmlFor="product_price" className="text-gray-600 block text-base font-normal mb-2">
                Product Price
            </label>
            <div className="relative">
                <input type="text" id="product_price" className={`w-full px-3 py-2 border rounded-md focus:outline-none
                    focus:ring-indigo-500 focus:border-indigo-500 ${ productPriceError ? "border-red-500" : "" }`}
                    value={productPrice} onChange={handleProductPriceChange} required />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    $
                </span>
            </div>
            {productPriceError && (
            <p className="text-red-500 text-sm mt-1 ml-10">
                {productPriceError}
            </p>
            )}
        </div>

        <div className="flex justify-center mt-8 mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                Generate Random Number
            </button>
        </div>

        <div className="flex justify-center mt-8 mb-4">
            <button id="submit" type="submit"
                className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Submit
            </button>
        </div>
    </form>
    );
};

export default CreateProductForm;
