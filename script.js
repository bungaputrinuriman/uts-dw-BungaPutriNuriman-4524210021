console.log("Halo dari script.js! File berhasil terhubung.");

const inputNama = document.querySelector("#nama");
const inputProduk = document.querySelector("#produk");
const inputWarna = document.querySelector("#warna");
const inputUkuran = document.querySelector("#ukuran");
const inputJumlah = document.querySelector("#jumlah");
const tombolReset = document.querySelector("#tombol-reset");

const previewNama = document.querySelector("#preview-nama");
const previewProduk = document.querySelector("#preview-produk");
const previewWarna = document.querySelector("#preview-warna");
const previewUkuran = document.querySelector("#preview-ukuran");
const previewJumlah = document.querySelector("#preview-jumlah");


inputNama.addEventListener("input", () => {
  previewNama.textContent = inputNama.value || "Nama belum diisi";
});

inputProduk.addEventListener("input", () => {
  previewProduk.textContent = inputProduk.value || "Belum memilih produk";
});

inputWarna.addEventListener("input", () => {
  previewWarna.textContent = inputWarna.value || "Belum memilih warna";
});

inputUkuran.addEventListener("input", () => {
  previewUkuran.textContent = inputUkuran.value || "Belum menentukan ukuran";
});

inputJumlah.addEventListener("input", () => {
  const val = inputJumlah.value;
  previewJumlah.textContent =
    val && val !== "0" ? `${val} barang` : "-- barang";
});


tombolReset.addEventListener("click", () => {
  inputNama.value = "";
  inputProduk.value = "";
  inputWarna.value = "";
  inputUkuran.value = "";
  inputJumlah.value = "1";

  previewNama.textContent = "-";
  previewProduk.textContent = "-";
  previewWarna.textContent = "-";
  previewUkuran.textContent = "-";
  previewJumlah.textContent = "-";

  console.log("🧹 Form dan pratinjau berhasil di-reset.");
});
