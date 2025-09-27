let keranjang = ["Apel", "Jeruk", "Mangga"];

keranjang.push("Pisang");
console.log("Setelah push:", keranjang);

keranjang.unshift("Semangka");
console.log("Setelah unshift:", keranjang);

keranjang.pop();
console.log("Setelah pop:", keranjang);

keranjang.shift();
console.log("Setelah shift:", keranjang);

console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
    console.log(`${i + 1}. ${keranjang[i]}`);
}

const produk = [
    { nama: "Beras", harga: 50000 },
    { nama: "Minyak", harga: 20000 }
];

produk.push({ nama: "Gula", harga: 15000 });
console.log("Setelah menambah produk:", produk);

produk.pop();
console.log("Setelah pop produk:", produk);

console.table(produk);

function tambahProduk(nama, harga) {
    produk.push({ nama, harga });
}

function hitungTotal() {
    let total = 0;
    for (let i = 0; i < produk.length; i++) {
        total += produk[i].harga;
    }
    return total;
}

if (produk.length > 0) {
    console.log("Produk tersedia");
} else {
    console.log("Produk kosong");
}

function tampilkanHari(angka) {
    switch (angka) {
        case 0:
            return "Minggu";
        case 1:
            return "Senin";
        case 2:
            return "Selasa";
        case 3:
            return "Rabu";
        case 4:
            return "Kamis";
        case 5:
            return "Jumat";
        case 6:
            return "Sabtu";
        default:
            return "Angka tidak valid";
    }
}

console.log("Hari ke-2 adalah:", tampilkanHari(2)); // Selasa