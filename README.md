# Website Arsip Kelas

Website statis (HTML, CSS, JS biasa — tanpa framework, tanpa build step) untuk menyimpan foto dan cerita satu kelas. Bisa langsung dipakai ulang untuk kelas lain, tinggal ganti data di satu file.

Dibuka langsung dengan klik dua kali `index.html`, atau di-hosting di layanan statis mana pun (GitHub Pages, Netlify, Vercel, cPanel, dll) — cukup upload seluruh isi folder ini apa adanya.

## Struktur folder

```
site/
├── index.html            → semua konten & struktur halaman
├── styles.css             → semua styling
├── script.js               → data website + logic (gallery, filter, pagination, lightbox, navbar)
└── assets/
    ├── photos/              → foto ukuran penuh (dipakai saat foto dibuka besar/lightbox)
    │   └── thumbs/            → versi kecil dari foto yang sama (dipakai di grid album)
    ├── school/               → foto sekolah/institusi
    └── logo/                 → favicon.svg
```

## Cara pakai untuk kelas/kelompok lain

Semua isi yang bisa berubah ada di satu tempat: bagian paling atas `script.js`, di tiga variabel — `CLASS_DATA`, `SITE_TEXT`, dan `GALLERY_DATA`. Tidak perlu menyentuh `index.html` atau `styles.css` untuk ganti isi.

### 1. Data kelas (`CLASS_DATA`)

```js
const CLASS_DATA = {
  className: "Champions",
  studentCount: 35,
  startYear: 2024,
  currentYear: 2026,
  instagramUsername: "@n9necoast_",
  instagramUrl: "https://www.instagram.com/n9necoast_",
  timeline: [
    { year: 2024, text: "Kami mulai bersama di kelas 7." }
  ],
  school: {
    name: "Nama Sekolah",
    npsn: "NPSN sekolah (kosongkan string-nya kalau tidak ada)",
    address: "Alamat lengkap sekolah",
    mapsUrl: "Link Google Maps sekolah",
    description: "Deskripsi singkat sekolah",
    photo: "nama-file-foto-sekolah.jpg"
  }
};
```

- `className` tampil sebagai judul besar di Hero dan Footer. Inisial kelas di pojok navbar (logo "C.") diambil dari huruf pertama nama halaman, atur langsung di `index.html` kalau mau ganti.
- `timeline` bisa punya berapa pun baris tahun, tampil otomatis di section "Perjalanan".
- Kalau `school.name` dan `school.address` masih kosong (`""` atau `null`), section "Sekolah" otomatis menampilkan placeholder dan tombol "Lihat Lokasi" nonaktif — begitu diisi, semuanya otomatis aktif sendiri.

### 2. Teks-teks lain (`SITE_TEXT`)

Isi paragraf "Tentang", subjudul Album dan Instagram, serta tagline footer. Tinggal ganti isi string-nya.

### 3. Foto album (`GALLERY_DATA`)

Untuk menambah foto:

1. Taruh foto ukuran penuh di `assets/photos/nama-file.jpg`.
2. Buat versi kecilnya (thumbnail) di `assets/photos/thumbs/nama-file.jpg` — disarankan lebar sekitar 700px biar grid tetap ringan.
3. Tambahkan satu entry baru ke array `GALLERY_DATA` di `script.js`:

```js
{
  file: "nama-file.jpg",
  category: "kegiatan",
  alt: "deskripsi singkat foto untuk pembaca layar",
  caption: "caption yang tampil di grid & saat foto dibuka besar"
}
```

- `category` menentukan tombol filter yang muncul di atas album. Kategori yang sudah dipakai saat ini: `kegiatan`, `acara`, `bersama` — tombol filter dibuat otomatis dari kategori yang ada, jadi kategori baru pun langsung punya tombolnya sendiri tanpa perlu ubah HTML. Kalau mau, ganti juga label tombolnya di `CATEGORY_LABELS`.
- Urutan entry di array = urutan tampil di grid.
- Album otomatis terbagi ke beberapa halaman (`‹ 1 2 3 ›`) kalau jumlah foto (dalam satu kategori filter) lebih dari 8. Angka 8 ini diatur lewat `PHOTOS_PER_PAGE` di `script.js`, bisa diubah sesuai kebutuhan.

## Foto sekolah/institusi

Taruh file fotonya di `assets/school/`, lalu isi nama file itu ke `CLASS_DATA.school.photo`. Foto akan otomatis muncul di section "Sekolah" begitu data lain (`name`/`address`) juga sudah diisi.

## Catatan

- Semua caption dan alt-text foto di `GALLERY_DATA` adalah deskripsi berdasarkan apa yang terlihat di foto — silakan sesuaikan kalau ada konteks cerita yang lebih tepat.
- Tidak butuh Node.js, npm, atau proses build apa pun. Edit file, refresh browser, selesai.
