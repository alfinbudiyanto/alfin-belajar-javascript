const user = prompt(
  "Pilih antara Lingkaran, Segitiga, Persegi panjang atau Jajargenjang!"
).toLowerCase();

/*
if (user === "lingkaran") {
  console.log("rumus lingkaran");
} else if (user === "segitiga") {
  console.log("rumus segitiga");
} else if (user === "persegi panjang") {
  console.log("rumus persegi panjang");
} else if (user === "jajargenjang") {
  console.log("rumus jajargenjang");
} else {
  console.log("pilih antara ke-empat pilihan itu euy!");
}
*/

switch (user) {
  case "lingkaran":
    const jariJariLingkaran = prompt(
      "Masukkan panjang jari-jari lingkarannya!"
    );

    hitungLuasLingkaran(jariJariLingkaran);
    break;

  case "segitiga":
    console.log("rumus segitiga");
    break;

  case "persegi panjang":
    console.log("rumus persegi panjang");
    break;

  case "jajargenjang":
    console.log("rumus jajargenjang");
    break;

  default:
    console.log("pilih salah satu sesuai instruksi brooo...!");
    break;
}

// Fungsi untuk Matematika
function hitungLuasLingkaran(jariJari) {
  const luasLingkaran = (22 / 7) * jariJari * jariJari;

  console.log(luasLingkaran);
}
