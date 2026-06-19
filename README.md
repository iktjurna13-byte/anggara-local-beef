# 🥩 Anggara Local Beef - Website

Website e-commerce untuk penjualan daging sapi lokal berkualitas tinggi dari Pasar Kumbasari, Denpasar, Bali.

## ✨ Fitur

- ✅ Homepage responsif dengan hero section yang menarik
- ✅ Katalog produk dengan 4 jenis daging sapi berkualitas
- ✅ Form pemesanan online terintegrasi WhatsApp
- ✅ Testimoni pelanggan
- ✅ Mobile-first responsive design
- ✅ Smooth scrolling navigation
- ✅ WhatsApp button sticky untuk kemudahan kontak
- ✅ SEO friendly dengan semantic HTML
- ✅ Fast loading dengan optimization

## 🛠️ Teknologi

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Images**: Unsplash CDN
- **Messaging**: WhatsApp Business API
- **Hosting**: Static file hosting (GitHub Pages, Netlify, Vercel, dll)
- **No Database**: Pure static website

## 🚀 Instalasi

### Opsi 1: Clone Repository
```bash
git clone https://github.com/iktjurna13-byte/anggara-local-beef.git
cd anggara-local-beef
```

### Opsi 2: Download ZIP
1. Klik tombol "Code" di repository
2. Pilih "Download ZIP"
3. Extract file

## 📖 Penggunaan

### Membuka Website Secara Lokal
```bash
# Menggunakan Live Server (VSCode)
1. Install extension "Live Server" di VSCode
2. Klik kanan pada index.html
3. Pilih "Open with Live Server"

# Atau menggunakan Python
python -m http.server 8000
# Buka browser ke http://localhost:8000
```

### Deploy ke GitHub Pages
1. Push repository ke GitHub
2. Masuk ke Settings > Pages
3. Pilih branch "main"
4. Website akan tersedia di `https://iktjurna13-byte.github.io/anggara-local-beef`

### Deploy ke Netlify
1. Connect GitHub repository ke Netlify
2. Build command: (kosong)
3. Publish directory: (root)
4. Deploy!

## 📁 Struktur File

```
anggara-local-beef/
├── index.html           # File HTML utama
├── styles.css           # Stylesheet
├── script.js            # JavaScript
├── ARCHITECTURE.md      # Dokumentasi arsitektur dengan diagram
└── README.md            # File ini
```

## 📝 Penjelasan File

### index.html
- Header dengan logo dan navigasi
- Hero section dengan background image
- Section tentang kami
- Katalog produk (4 items)
- Section keunggulan
- Form pemesanan
- Testimoni
- Footer dengan kontak

### styles.css
- Responsive grid layout
- Mobile-first design
- Hover effects dan animations
- Color scheme: Dark red (#7a0c0c) & White
- Media queries untuk responsive

### script.js
- Fungsi `pesanWA()` untuk form handling
- Validasi input form
- Smooth scrolling navigation
- Form reset setelah submit

## 🔧 Kustomisasi

### Mengubah Nomor WhatsApp
Edit di `index.html` dan `script.js`:
```javascript
// Ganti 62899995555 dengan nomor Anda
https://wa.me/62899995555?text=...
```

### Mengubah Warna
Edit di `styles.css`:
```css
/* Warna utama */
#7a0c0c  /* Dark red */
#c62828  /* Red accent */
#f8f8f8  /* Background */
```

### Menambah Produk
Edit di `index.html` - Section produk:
```html
<div class="card">
    <img src="URL_GAMBAR" alt="Nama Produk">
    <div class="card-content">
        <h3>Nama Produk</h3>
        <p>Deskripsi produk</p>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎨 Warna & Design

- **Warna Utama**: #7a0c0c (Dark Red)
- **Warna Accent**: #c62828 (Bright Red)
- **Background**: #f8f8f8 (Light Gray)
- **Text**: #333 (Dark Gray)
- **Font**: Arial, sans-serif

## 💬 Kontak & Support

📍 **Lokasi**: Pasar Kumbasari, Denpasar, Bali
📞 **Telepon**: 0899995555
💬 **WhatsApp**: [Chat di WhatsApp](https://wa.me/62899995555)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Jurna** - Web Developer

---

Made with ❤️ for Anggara Local Beef - Daging Sapi Lokal Berkualitas