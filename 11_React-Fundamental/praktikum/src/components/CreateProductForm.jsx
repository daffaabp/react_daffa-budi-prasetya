// CreateProductForm.jsx
import React from 'react';

const CreateProductForm = () => {
  return (
    <form action="" className="max-w-2xl mx-auto">
      <h1 className="font-roboto font-medium text-2xl">Detail Product</h1>
      <div className="mb-8">
        <label htmlFor="product_name" className="text-gray-600 block text-base font-normal mb-2">Product name</label>
        <input
          className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          type="text" id="product_name" required />
      </div>

      <div className="mb-8">
        <label htmlFor="product_category" className="text-gray-600 block text-base font-normal mb-2">Product
          Category</label>
        <select id="product_category"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required>
          <option value="">Select a category</option>
          <option value="Dress and Fashion">Dress and Fashion</option>
          <option value="Electronic">Electronic</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="images_file" className="text-gray-600 block text-base font-normal mb-2">Image of Product</label>
        <input
          className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          type="file" id="images_file" required />
      </div>

      <div className="mb-8">
        <label htmlFor="product_freshness" className="font-roboto font-medium text-base text-slate-600">Product
          Freshness</label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center me-4">
            <input id="kopi-radio" type="radio" value="Brand New" name="product_freshness"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
            <label htmlFor="kopi-radio" className="ms-2 font-roboto font-normal text-base text-slate-600">Brand New</label>
          </div>
          <div className="flex items-center me-4">
            <input id="gula-radio" type="radio" value="Second hand" name="product_freshness"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
            <label htmlFor="gula-radio" className="ms-2 font-roboto font-normal text-base text-slate-600">Second hand</label>
          </div>
          <div className="flex items-center me-4">
            <input id="susu-radio" type="radio" value="Refufbished" name="product_freshness"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
            <label htmlFor="susu-radio" className="ms-2 font-roboto font-normal text-base text-slate-600">Refufbished</label>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="description" className="text-gray-600 block text-base font-normal mb-2">Additional
          Description</label>
        <textarea id="description"
          className="py-3 px-4 block w-full border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg text-sm"
          rows="3"></textarea>
      </div>

      <div className="mb-8">
        <label htmlFor="product_price" className="text-gray-600 block text-base font-normal mb-2">Product Price</label>
        <div className="relative">
          <input type="number" id="product_price"
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10" />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">$</span>
        </div>
      </div>

      <div className="flex justify-center mt-16 mb-8">
        <button id="submit" type="submit"
          className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateProductForm;
