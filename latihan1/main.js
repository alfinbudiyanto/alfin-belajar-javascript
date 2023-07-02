// Tugas ke-1
let pertanyaan = confirm("Ingin memeriksa saldo?");

while (pertanyaan) {
  const userSaldoAwal = parseInt(prompt("Masukkan jumlah saldo!"));
  const bayarJmlBelanja = parseInt(
    prompt("Masukkan jumlah seluruh belanjaan breee!")
  );

  if (userSaldoAwal < bayarJmlBelanja) {
    alert(`Maaf, saldo anda kurang Rp. ${bayarJmlBelanja - userSaldoAwal}`);
  } else if (userSaldoAwal === bayarJmlBelanja) {
    alert(
      `Saldo anda Rp. ${userSaldoAwal} dan harga belanjaan Rp. ${bayarJmlBelanja} saldo anda habis`
    );
  } else {
    alert(
      `Saldo anda Rp. ${userSaldoAwal} dan anda belanja dengan harga Rp. ${bayarJmlBelanja} sisa saldo anda adalah Rp. ${
        userSaldoAwal - bayarJmlBelanja
      }`
    );
  }

  pertanyaan = confirm("Masih ada belanjaan gak cuyyy...?");
}

// Tugas ke-2
switch (new Date().getDay()) {
  case 0:
    hari = "Minggu";
    cetakLayar(hari);
    break;

  case 1:
    hari = "Senin";
    cetakLayar(hari);
    break;

  case 2:
    hari = "Selasa";
    cetakLayar(hari);
    break;

  case 3:
    hari = "Rabu";
    cetakLayar(hari);
    break;

  case 4:
    hari = "Kamis";
    cetakLayar(hari);
    break;

  case 5:
    hari = "Jum'at";
    cetakLayar(hari);
    break;

  default:
    hari = "Sabtu";
    cetakLayar(hari);
}

function cetakLayar(h) {
  const body = document.body;
  const heading = document.createElement("h3");
  heading.textContent = `Hari ini adalah hari ${h}`;
  body.append(heading);
}
