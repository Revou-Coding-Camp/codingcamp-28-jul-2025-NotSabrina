welcome()

function waktu() {
    const waktu = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[waktu.getDay()];
    const date = waktu.toLocaleDateString();
    const time = waktu.toLocaleTimeString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const waktuString = `${day}, ${date} ${time} (${timeZone})`;
    document.getElementById("waktu-display").innerText = waktuString;
}

setInterval(waktu, 1000);
waktu();

function input(){
    const nama = document.getElementById("name").value;
    const tanggalLahir = document.getElementById("date").value;
    const gender = document.getElementById("Gender").value;
    const pesan = document.getElementById("message").value;

    if (nama === "") {
        alert("Nama tidak boleh kosong");
        return;
    }
    if (tanggalLahir === "") {
        alert("Tanggal lahir tidak boleh kosong");
        return;
    }
    if (pesan === "") {
        alert("Pesan tidak boleh kosong");
        return;
    }

    document.getElementById("nama-display").textContent = `Nama: ${nama}`;
    document.getElementById("Tanggal-display").textContent = `Tanggal lahir: ${tanggalLahir}`;
    document.getElementById("gender-display").textContent = `Jenis Kelamin: ${gender}`;
    document.getElementById("message-display").textContent = `Pesan: ${pesan}`;
}

function welcome(){
    const popup = prompt("Masukkan nama Anda:");
    if (popup !== null && popup.trim() !== "") {
        const tulisan = document.getElementById("nama-welcome");
        tulisan.textContent = popup
    } else {
        alert("Nama tidak boleh kosong");
    }
}