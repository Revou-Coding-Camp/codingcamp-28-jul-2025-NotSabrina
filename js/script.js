
// Prompt user for their name and display it in the welcome section
welcome()


// Display the current day, date, time, and time zone in the waktu-display element
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


// Update the time every second
setInterval(waktu, 1000);
waktu(); // Initial call to display time immediately


// Handle form input: validate and display user data in the display section
function input(){
    // Get values from form fields
    const nama = document.getElementById("name").value;
    const tanggalLahir = document.getElementById("date").value;
    const gender = document.getElementById("Gender").value;
    const pesan = document.getElementById("message").value;

    // Validation: show alert if any field is empty
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

    // Display the input values in the display section
    document.getElementById("nama-display").textContent = `Nama: ${nama}`;
    document.getElementById("Tanggal-display").textContent = `Tanggal lahir: ${tanggalLahir}`;
    document.getElementById("gender-display").textContent = `Jenis Kelamin: ${gender}`;
    document.getElementById("message-display").textContent = `Pesan: ${pesan}`;
}


// Prompt the user for their name and display it in the welcome section
function welcome(){
    const popup = prompt("Masukkan nama Anda:");
    if (popup !== null && popup.trim() !== "") {
        const tulisan = document.getElementById("nama-welcome");
        tulisan.textContent = popup
    } else {
        alert("Nama tidak boleh kosong");
    }
}