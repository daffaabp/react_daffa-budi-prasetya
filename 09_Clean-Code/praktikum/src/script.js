// Element Form Input
const productNameInput = document.getElementById("product_name");
const productCategoryInput = document.getElementById("product_category");
const productImageInput = document.getElementById("images_file");
const productFreshnessInputs = document.querySelectorAll('input[name="product_freshness"]');
const productDescriptionInput = document.getElementById("description");
const productPriceInput = document.getElementById("product_price");
const submitButton = document.getElementById("submit");
const productList = document.getElementById("product-list");

// Regex untuk validasi nama produk
const regexForProductName = /^[a-zA-Z0-9 ]+$/;

let productCount = 0;

// Menambahkan event listener pada tombol submit
submitButton.addEventListener("click", handleSubmit);

// Fungsi untuk meng-handle submit form
function handleSubmit(event) {
  event.preventDefault();

  // Memeriksa apakah input valid sebelum menambahkan produk
  if (!isInputValid()) return;

  // Membuat objek product dari nilai input
  const product = {
    name: productNameInput.value,
    category: productCategoryInput.value,
    image: productImageInput.value,
    freshness: getSelectedFreshness(),
    description: productDescriptionInput.value,
    price: parseFloat(productPriceInput.value).toFixed(2),
  };

  // Menambahkan produk ke dalam tabel
  addProductToTable(product);

  // Mengosongkan input form setelah submit
  clearFormInputs();

  // Menampilkan alert bahwa formulir berhasil dikirim
  showAlert("Formulir berhasil dikirim!");
}

// Fungsi untuk memeriksa validitas input sebelum submit
function isInputValid() {
  // Array untuk menyimpan informasi setiap input yang perlu divalidasi
  const inputs = [
    { value: productNameInput.value.trim(), message: "Silakan masukkan nama produk." },
    { value: productCategoryInput.value, message: "Silakan pilih kategori produk." },
    { value: productImageInput.value.trim(), message: "Silakan pilih gambar produk." },
    { value: getSelectedFreshness(), message: "Silakan pilih kondisi produk." },
    { value: productDescriptionInput.value.trim(), message: "Silakan masukkan deskripsi tambahan produk." },
    { value: productPriceInput.value.trim(), message: "Silakan masukkan harga produk." },
  ];

  // Loop untuk melakukan validasi pada setiap input
  for (const input of inputs) {
    if (!input.value) {
      // Jika input tidak valid, tampilkan alert dengan pesan yang sesuai
      showAlert(input.message);
      return false;
    }
  }

  // Validasi khusus untuk nama produk dengan regex
  if (!regexForProductName.test(productNameInput.value)) {
    showAlert("Nama produk tidak boleh mengandung simbol seperti @/#{}");
    return false;
  }

  // Validasi khusus untuk panjang nama produk
  if (productNameInput.value.length > 50) {
    showAlert("Nama produk tidak boleh lebih dari 50 karakter.");
    return false;
  }

  // Validasi harga produk harus angka positif
  if (parseFloat(productPriceInput.value) <= 0 || isNaN(productPriceInput.value)) {
    showAlert("Harga produk harus berupa angka positif.");
    return false;
  }

  return true;
}

// Fungsi untuk mendapatkan kondisi produk yang dipilih
function getSelectedFreshness() {
  for (const input of productFreshnessInputs) {
    if (input.checked) {
      return input.value;
    }
  }
  return "";
}

// Fungsi untuk menambahkan produk ke dalam tabel
function addProductToTable(product) {
  productCount++;

  // Membuat baris tabel dengan data produk
  const row = `
    <tr>
      <td>${productCount}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td><img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover"></td>
      <td>${product.freshness}</td>
      <td>${product.description}</td>
      <td>$ ${product.price}</td>
    </tr>
  `;

  // Memasukkan baris tabel ke dalam tabel produk
  productList.insertAdjacentHTML("beforeend", row);
}

// Fungsi untuk mengosongkan input form setelah submit
function clearFormInputs() {
  productNameInput.value = "";
  productCategoryInput.value = "";
  productImageInput.value = "";
  for (const input of productFreshnessInputs) {
    input.checked = false;
  }
  productDescriptionInput.value = "";
  productPriceInput.value = "";
}

// Fungsi untuk menampilkan alert dengan pesan yang diberikan
function showAlert(message) {
  alert(message);
}
