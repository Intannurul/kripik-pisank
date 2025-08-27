let daftarProduk = ["Kue Kering", "Kue Lapis", "Minuman Herbal", "Keripik pisang"];

function isiDropdownProduk() {
let selectProduk = document.getElementById("produk");
daftarProduk.forEach(function(item){
    let option = document.createElement("option");
    option.value = item;
    option.text = item;
    selectProduk.appendChild(option);
});

}

function validasiForm(event) {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();

    if(nama=== "" || email=== "") {
        alert("Nama dan Email wajib diisi");
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function(){
    isiDropdownProduk();
    document.getElementById("formPemesanan").addEventListener("submit", validasiForm);
});

