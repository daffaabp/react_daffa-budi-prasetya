import React from "react";

function ProductList({ products, handleDelete }) {
    const confirmDelete = (index) => {
    const result = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
    if (result) {
      handleDelete(index);
    }
  };
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-center text-xl font-bold">List Product</h2>
            <table className="w-full table-auto shadow-md rounded-lg mb-16">
                <thead>
                    <tr className="text-md font-medium text-left text-gray-700 bg-gray-100">
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Product Name</th>
                        <th className="px-4 py-2">Product Category</th>
                        <th className="px-4 py-2">Product Freshness</th>
                        <th className="px-4 py-2">Product Price</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{product.productName}</td>
                            <td className="px-4 py-2">
                                {product.productCategory}
                            </td>
                            <td className="px-4 py-2">
                                {product.productFreshness}
                            </td>
                            <td className="px-4 py-2">
                                {product.productPrice}
                            </td>
                            <td className="px-4 py-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => confirmDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
