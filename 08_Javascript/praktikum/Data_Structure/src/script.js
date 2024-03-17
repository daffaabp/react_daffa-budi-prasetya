const productNameInput = document.getElementById("product_name");
const productCategoryInput = document.getElementById("product_category");
const productImageInput = document.getElementById("images_file");
const productFreshnessInputs = document.querySelectorAll('input[name="product_freshness"]');
const productDescriptionInput = document.getElementById("description");
const productPriceInput = document.getElementById("product_price");
const submitButton = document.getElementById("submit");
const productList = document.getElementById("product-list");

const regexForProductName = /^[a-zA-Z0-9 ]+$/;

let productCount = 0;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Validasi Input
  if (productNameInput.value.trim() === "") {
    alert("Silakan masukkan nama produk.");
    return;
  } else if (productNameInput.value.length > 50) {
    alert("Nama produk tidak boleh lebih dari 50 karakter.");
    return;
  } else if (!regexForProductName.test(productNameInput.value)) {
    alert("Nama produk tidak boleh mengandung simbol seperti @/#{}");
    return;
  }

  if (productCategoryInput.value === "") {
    alert("Silakan pilih kategori produk.");
    return;
  }

  if (productImageInput.value.trim() === "") {
    alert("Silakan pilih gambar produk.");
    return;
  }

  let selectedFreshness = "";
  for (const input of productFreshnessInputs) {
    if (input.checked) {
      selectedFreshness = input.value;
      break;
    }
  }
  if (selectedFreshness === "") {
    alert("Silakan pilih kondisi produk.");
    return;
  }

  if (productDescriptionInput.value.trim() === "") {
    alert("Silakan masukkan deskripsi tambahan produk.");
    return;
  }

  if (productPriceInput.value.trim() === "") {
    alert("Silakan masukkan harga produk.");
    return;
  } else if (parseFloat(productPriceInput.value) <= 0 || isNaN(productPriceInput.value)) {
    alert("Harga produk harus berupa angka positif.");
    return;
  }

  const product = {
    name: productNameInput.value,
    category: productCategoryInput.value,
    image: productImageInput.value,
    freshness: selectedFreshness,
    description: productDescriptionInput.value,
    price: parseFloat(productPriceInput.value).toFixed(2),
  };

  addProductToTable(product);

  alert("Formulir berhasil dikirim!");

  // kosongkan inputan setelah Form berhasil di submit
  productNameInput.value = "";
  productCategoryInput.value = "";
  productImageInput.value = "";
  for (const input of productFreshnessInputs) {
    input.checked = false;
  }
  productDescriptionInput.value = "";
  productPriceInput.value = "";
});

function addProductToTable(product) {
  productCount++;

  const row = `
    <tr>
      <td class="px-4 py-2">${productCount}</td>
      <td class="px-4 py-2">${product.name}</td>
      <td class="px-4 py-2">${product.category}</td>
      <td class="px-4 py-2"><img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover"></td>
      <td class="px-4 py-2">${product.freshness}</td>
      <td class="px-4 py-2">${product.description}</td>
      <td class="px-4 py-2">$ ${product.price}</td>
    </tr>
  `;

  productList.insertAdjacentHTML("beforeend", row);
}
