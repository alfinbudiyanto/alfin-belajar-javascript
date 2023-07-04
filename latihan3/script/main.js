/**
let pertanyaan = true;

while (pertanyaan) {
  const user = prompt(
    "Pilih antara Lingkaran, Segitiga, Persegi panjang atau Jajargenjang!"
  ).toLowerCase();

  switch (user) {
    case "lingkaran":
      const jariJari = tanya("Masukkan panjang jari-jari lingkarannya cuy!");
      lingkaran(jariJari);
      break;

    case "segitiga":
      const alasSG = tanya("Masukkan panjang alas segitiganya cuy!");
      const tinggiSG = tanya("Masukkan tinggi segitiganya cuy!");
      segitiga(alasSG, tinggiSG);
      break;

    case "persegi panjang":
      const panjang = tanya("Masukkan panjang dari persegi panjangnya cuy!");
      const lebar = tanya("Masukkan lebar persegi panjangnya cuy!");
      persegiPanjang(panjang, lebar);
      break;

    case "jajargenjang":
      const alasJG = tanya("Masukkan panjang alas jajargenjangnya cuy!");
      const tinggiJG = tanya("Masukkan tinggi jajargenjangnya cuy!");
      jajargenjang(alasJG, tinggiJG);
      break;

    default:
      alert("pilih salah satu sesuai instruksi brooo...!");
      break;
  }

  pertanyaan = confirm("Menghitung lagi?");
}

// Fungsi untuk Matematika
// Lingkaran
function lingkaran(jariJari) {
  if (jariJari % 7 === 0) {
    return alert(`Luas lingkaran = ${(22 / 7) * jariJari * jariJari}`);
  }
  return alert(`Luas lingkaran = ${3.14 * jariJari * jariJari}`);
}

// Segitiga
function segitiga(a, t) {
  return alert(`Luas segitiga = ${0.5 * a * t}`);
}

// Persegi panjang
function persegiPanjang(p, l) {
  return alert(`Luas persegi panjang = ${p * l}`);
}

// Jajargenjang
function jajargenjang(a, t) {
  return alert(`Luas jajargenjang = ${a * t}`);
}

// Untuk mengubah tipe string ke integer & menampilkan pertanyaan
function tanya(tanya) {
  return parseInt(prompt(tanya));
}
*/

// Fungsi cek bulan

const namaKaryawan = "Asep";
const gajiPerhari = 10000;
const bulanDiGaji = "Januari";
const jmlBekerja = 31;

cekHari(bulanDiGaji);
hitungGaji(gajiPerhari, jmlBekerja);

// Fungsi untuk menghitung gaji
// Fungsi gaji
function hitungGaji(gajiPerhari, jmlBekerja) {
  return console.log(gajiPerhari * jmlBekerja);
}

// Fungsi bulan
function cekHari(bulanDiGaji) {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  for (let i = 1; i <= bulan.length - 1; i++) {
    // if (bulan.length == bulanDiGaji)
    return console.log(`${bulan}`);
  }
}
