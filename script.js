let produk = [
  { nama: 'Home Sweet Loan', harga: 50000 },
  { nama: 'A Little History of the World', harga: 90000 },
  { nama: 'One Piece', harga: 70000 },
  { nama: 'Data Science', harga: 80000 },
];

function tampilkanProduk() {
  let container = document.getElementById('produk-list');
  container.innerHTML = '';

  produk.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.nama}</h3>
        <p>Rp ${item.harga}</p>
        <button onclick="hapusProduk(${index})">Hapus</button>
      </div>
    `;
  });
}

function hapusProduk(index) {
  produk.splice(index, 1);
  tampilkanProduk();
}

/* VALIDASI */
document.getElementById('formBuku').addEventListener('submit', function (e) {
  e.preventDefault();

  let nama = document.getElementById('nama').value.trim();
  let email = document.getElementById('email').value.trim();
  let jumlah = document.getElementById('jumlah').value;

  let valid = true;

  // reset
  document.getElementById('errNama').innerText = '';
  document.getElementById('errEmail').innerText = '';
  document.getElementById('errJumlah').innerText = '';

  if (nama === '') {
    document.getElementById('errNama').innerText = 'Nama wajib diisi';
    valid = false;
  }

  if (!email.includes('@')) {
    document.getElementById('errEmail').innerText = 'Email tidak valid';
    valid = false;
  }

  if (jumlah <= 0) {
    document.getElementById('errJumlah').innerText = 'Harus angka positif';
    valid = false;
  }

  if (valid) {
    alert('Pembelian berhasil!');
  }
});

tampilkanProduk();
