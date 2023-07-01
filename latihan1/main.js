// Tugas ke-1
let pertanyaan = true;

while (pertanyaan) {
  const user = prompt("masukkan jumlah saldo!");
  const jmlBelanja = prompt("masukkan jumlah seluruh belanjaan breee!");

  const saldoAwal = user;
  console.log(saldoAwal);
  const bayarBelanja = jmlBelanja;

  const saldoTersisa = saldoAwal - bayarBelanja;

  if (saldoAwal < bayarBelanja) {
    const jmlKurang = bayarBelanja - saldoAwal;
    alert(`maaf, saldo anda kurang Rp. ${jmlKurang}`);
  } else if (saldoAwal === bayarBelanja) {
    alert(
      `saldo anda Rp. ${saldoAwal} dan harga belanjaan Rp. ${bayarBelanja} saldo anda habis`
    );
  } else {
    alert(
      `saldo anda Rp. ${saldoAwal} dan anda belanja dengan harga Rp. ${bayarBelanja} sisa saldo anda adalah Rp. ${saldoTersisa}`
    );
  }

  pertanyaan = confirm("Masih ada belanjaan gak cuyyy...?");
}

// Tugas ke-2
const hari = new Date().getDay();

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
