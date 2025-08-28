let daftarProduk = ["Keripik pisank original", "Keripik pisank balado", "Keripik pisank keju", "Keripik pisank matcha"];

function isiDropdownProduk() {
let selectProduk = document.getElementById("produk");
daftarProduk.forEach(function(item){
    let option = document.createElement("option");
    option.value = item;
    option.text = item;
    selectProduk.appendChild(option);
});

}

// function validasiForm(event) {
//     let nama = document.getElementById("nama").value.trim();
//     let email = document.getElementById("email").value.trim();

//     if(nama=== "" || email=== "") {
//         alert("Nama dan Email wajib diisi");
//         event.preventDefault();
//     }
// }

document.addEventListener("DOMContentLoaded", function(){
    isiDropdownProduk();
    document.getElementById("formPemesanan").addEventListener("submit", validasiForm);
});

 document.getElementById("kirimPesanBtn").addEventListener("click", function () {
    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const produk = document.getElementById("produk").value;
    const pesan = document.getElementById("pesan").value;

    // Buat isi pesan
    const teks = `Halo, saya ingin memesan produk dengan detail berikut:%0A%0A` +
                 `Nama: ${nama}%0A` +
                 `Email: ${email}%0A` +
                 `Produk: ${produk}%0A` +
                 `Pesan: ${pesan}`;

    // Buat link WA
    const noHP = "6282123729993";
    const linkWA = `https://api.whatsapp.com/send?phone=${noHP}&text=${teks}`;

    // Redirect ke WhatsApp
    window.open(linkWA, "_blank");
  });
