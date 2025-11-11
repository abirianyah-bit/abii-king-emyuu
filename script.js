function showPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function nextStep() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  if (user && pass) {
    closePopup('loginPopup');
    showPopup('gambarPopup');
  } else {
    alert("Silakan isi email/nomor dan kata sandi!");
  }
}

function buatAkun() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;
  if (user && pass) {
    alert("Akun berhasil dibuat! Silakan login.");
    closePopup('buatAkunPopup');
    showPopup('loginPopup');
  } else {
    alert("Isi semua kolom terlebih dahulu!");
  }
}