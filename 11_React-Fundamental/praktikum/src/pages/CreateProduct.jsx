// CreateProduct.jsx
import React from 'react';
import HeaderNav from '../components/HeaderNav';
import CreateProductForm from '../components/CreateProductForm';
import tailwindlogo from '../assets/tailwind-css-2.svg';

const CreateProduct = () => {
  return (
    <div>
      <HeaderNav />
      <div className="container mx-auto">
        <div className="flex flex-col max-w-4xl mx-auto items-center">
          <img className="w-16 h-16 mt-12 mb-6" src={tailwindlogo} alt="" />
          <h1 className="text-3xl font-roboto font-medium mb-2">Create Product</h1>
          <p className="text-center mb-4">
            Below is an example form built entirely with Tailwind form controls.
            Each required form group has a validation state that can be triggered
            by attempting to submit the form without completing it.
          </p>
        </div>

        <CreateProductForm />
      </div>
    </div>
  );
};

export default CreateProduct;
