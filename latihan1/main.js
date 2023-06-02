// Tugas ke-1
const user = prompt("masukkan jumlah saldo!");
const jmlBelanja = prompt("masukkan jumlah seluruh belanjaan breee!");

let saldoAwal = user;
let bayarBelanja = jmlBelanja;

let saldoTersisa = saldoAwal - bayarBelanja;

if (saldoAwal < bayarBelanja) {
  // let kurang = saldoTersisa - saldoTersisa;
  let jmlKurang = bayarBelanja - saldoAwal;
  alert(`maaf, saldo anda kurang Rp.${jmlKurang}`);
} else if (saldoAwal === bayarBelanja) {
  alert(
    `saldo anda Rp.${saldoAwal} dan harga belanjaan Rp.${bayarBelanja} saldo anda habis`
  );
} else {
  alert(
    `saldo anda Rp.${saldoAwal} dan anda belanja dengan harga Rp.${bayarBelanja} sisa saldo anda adalah Rp.${saldoTersisa}`
  );
}

// Tugas ke-2
let hari = new Date().getDay();

switch (hari) {
  case 0:
    day = "Sunday";
    console.log(`hari ini adalah hari ${day}`);
    break;
  case 1:
    day = "Monday";
    console.log(`hari ini adalah hari ${day}`);
    break;
  case 2:
    day = "Tuesday";
    console.log(`hari ini adalah hari ${day}`);
    break;
  case 3:
    day = "Wednesday";
    console.log(`hari ini adalah hari ${day}`);
    break;
  case 4:
    day = "Thursday";
    console.log(`hari ini adalah hari ${day}`);
    break;
  case 5:
    day = "Friday";
    console.log(`hari ini adalah hari ${day}`);
    break;
  default:
    day = "Saturday";
    console.log(`hari ini adalah hari ${day}`);
}
