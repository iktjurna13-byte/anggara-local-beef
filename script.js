function pesanWA(){

    let nama = document.getElementById("nama").value;
    let wa = document.getElementById("wa").value;
    let produk = document.getElementById("produk").value;
    let jumlah = document.getElementById("jumlah").value;
    let catatan = document.getElementById("catatan").value;

    // Validasi input
    if(!nama || !wa || !jumlah){
        alert("Mohon isi semua field yang diperlukan!");
        return;
    }

    let pesan =
    `Halo Anggara Local Beef,

Nama: ${nama}
No WA: ${wa}
Produk: ${produk}
Jumlah: ${jumlah} Kg
Catatan: ${catatan}`;

    window.open(
    `https://wa.me/62899995555?text=${encodeURIComponent(pesan)}`,
    '_blank'
    );

    // Reset form
    document.getElementById("nama").value = "";
    document.getElementById("wa").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("catatan").value = "";
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});