const productNameInput = document.getElementById("product_name");
const productPriceInput = document.getElementById("product_price");
const submitButton = document.getElementById("submit");

const regexForProductName = /^[a-zA-Z0-9 ]+$/;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Validasi Product Name
  if (productNameInput.value.length === 0) {
    alert("Silahkan masukkan nama produk yang valid.");
    return;
  } else if (productNameInput.value.length > 25) {
    alert("Nama produk tidak boleh lebih dari 25 karakter.");
    return;
  } else if (!regexForProductName.test(productNameInput.value)) {
    alert("Nama produk tidak boleh mengandung simbol seperti @/#{}");
    return;
  }

  // Validasi Product Price
  if (productPriceInput.value.length === 0) {
    alert("Silahkan masukkan harga produk yang valid.");
    return;
  } else if (parseFloat(productPriceInput.value) < 0) {
    alert("Harga produk tidak boleh minus.");
    return;
  }
  alert("Formulir berhasil dikirim!");
});

productNameInput.addEventListener("focus", () => {
  const errorMessageElement = document.getElementById("product_name-error");
  errorMessageElement.textContent = "";

  if (productNameInput.value.length > 25) {
    errorMessageElement.textContent = "Nama produk tidak boleh lebih dari 25 karakter.";
  } else if (!regexForProductName.test(productNameInput.value)) {
    errorMessageElement.textContent = "Nama produk tidak boleh mengandung simbol seperti @/#{}";
  }
});

productPriceInput.addEventListener("focus", () => {
  const errorMessageElement = document.getElementById("product_price-error");
  errorMessageElement.textContent = "";

  if (productPriceInput.value.length === 0) {
    errorMessageElement.textContent = "Silahkan masukkan harga produk yang valid.";
  } else if (parseFloat(productPriceInput.value) < 0) {
    errorMessageElement.textContent = "Harga produk tidak boleh minus.";
  }
});
