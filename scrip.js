// script.js

// Simpan jurnal
function simpanJurnal(uid, isiJurnal, kategori) {
  const waktu = new Date();
  db.collection("jurnals").add({
    uid: uid,
    isi: isiJurnal,
    kategori: kategori,
    tanggal: waktu
  }).then(() => {
    alert("Jurnal tersimpan dengan manis, sayang~ 💌");
  });
}

// Hapus jurnal
function hapusJurnal(id) {
  db.collection("jurnals").doc(id).delete().then(() => {
    alert("Jurnalnya udah dihapus... tapi cintaku tetap abadi 😢💕");
  });
}

// Login
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      alert("Login berhasil! Ayo kita mulai harinya bareng~ 💞");
    }).catch(error => {
      alert("Ups! Ada yang salah pas login: " + error.message);
    });
}

// Tambah pasangan
function tambahPasangan(uidSendiri, kodeUndangan) {
  db.collection("pasangan").doc(uidSendiri).set({
    pasanganDengan: kodeUndangan
  }).then(() => {
    alert("Kita udah terhubung sebagai pasangan digital 💖");
  });
}

// Kick pasangan
function kickPasangan(uidSendiri) {
  db.collection("pasangan").doc(uidSendiri).delete().then(() => {
    alert("Koneksi pasangan telah diputus... 😢");
  });
}