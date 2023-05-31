// Tugas ke-1
const user = prompt("masukkan jumlah saldo!");
const jmlBelanja = prompt("masukkan jumlah seluruh belanjaan breee!");

let saldoAwal = user;
let bayarBelanja = jmlBelanja;

const saldoTersisa = saldoAwal - bayarBelanja;

if (saldoAwal == bayarBelanja) {
  alert(
    `saldo anda Rp.${saldoAwal} dan harga belanjaan Rp.${bayarBelanja} saldo anda habis`
  );
} else if (saldoAwal < bayarBelanja) {
  // let kurang = saldoTersisa - saldoTersisa;
  let jmlKurang = bayarBelanja - saldoAwal;
  alert(`maaf, saldo anda kurang Rp.${jmlKurang}`);
} else {
  alert(
    `saldo anda Rp.${saldoAwal} dan anda belanja dengan harga Rp.${bayarBelanja} sisa saldo anda adalah Rp.${saldoTersisa}`
  );
}

// Tugas ke-2
