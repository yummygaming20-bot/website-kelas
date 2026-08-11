# Website Arsip Kelas

Website statis untuk menyimpan foto dan cerita satu kelas. Template ini bisa digunakan kembali untuk kelas atau kelompok lain, cukup dengan mengganti data pada satu file.

## Struktur Folder

```text
site/
├── index.html
├── styles.css
├── script.js
├── rating.js
├── rating-config.js
└── assets/
    ├── photos/
    │   └── thumbs/
    ├── school/
    └── logo/
```

## Cara Menggunakan untuk Kelas atau Kelompok Lain

Semua data yang dapat berubah berada di bagian paling atas `script.js`, yaitu pada tiga variabel:

- `CLASS_DATA`
- `SITE_TEXT`
- `GALLERY_DATA`

Jadi, untuk mengganti isi website, cukup edit bagian tersebut. Tidak perlu mengubah `index.html` atau `styles.css`.

## 1. Data Kelas (`CLASS_DATA`)

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

`className` digunakan sebagai judul utama pada bagian Hero dan Footer.

Inisial kelas yang berada di pojok navbar, seperti logo `C.`, diambil dari huruf pertama nama halaman. Jika ingin menggantinya, ubah langsung bagian tersebut di `index.html`.

`timeline` dapat berisi sebanyak apa pun data tahun dan cerita. Semua data akan ditampilkan secara otomatis pada bagian "Perjalanan".

Jika `school.name` dan `school.address` masih kosong menggunakan `""` atau `null`, bagian "Sekolah" akan menampilkan placeholder dan tombol "Lihat Lokasi" menjadi tidak aktif. Setelah datanya diisi, bagian tersebut akan aktif secara otomatis.

## 2. Teks Lainnya (`SITE_TEXT`)

`SITE_TEXT` digunakan untuk mengatur teks yang ditampilkan di beberapa bagian website.

Bagian yang dapat diubah meliputi:

- Paragraf "Tentang"
- Subjudul Album
- Subjudul Instagram
- Tagline Footer

Cukup ganti isi string sesuai kebutuhan.

## 3. Foto Album (`GALLERY_DATA`)

Untuk menambahkan foto baru, ikuti langkah berikut.

### Langkah 1

Masukkan foto ukuran penuh ke:

```text
assets/photos/nama-file.jpg
```

### Langkah 2

Buat versi kecil atau thumbnail dari foto tersebut dan masukkan ke:

```text
assets/photos/thumbs/nama-file.jpg
```

Disarankan menggunakan thumbnail dengan lebar sekitar 700px agar tampilan grid tetap ringan.

### Langkah 3

Tambahkan entry baru ke array `GALLERY_DATA` di `script.js`:

```js
{
  file: "nama-file.jpg",
  category: "kegiatan",
  alt: "deskripsi singkat foto untuk pembaca layar",
  caption: "caption yang tampil di grid dan saat foto dibuka besar"
}
```

`category` digunakan untuk menentukan filter yang muncul di bagian atas album.

Kategori yang saat ini digunakan adalah:

- `kegiatan`
- `acara`
- `bersama`

Tombol filter dibuat secara otomatis berdasarkan kategori yang tersedia. Jika menambahkan kategori baru, tombolnya juga akan dibuat secara otomatis tanpa perlu mengubah HTML.

Jika ingin mengubah nama yang ditampilkan pada tombol filter, gunakan `CATEGORY_LABELS`.

Urutan entry di dalam array menentukan urutan foto yang ditampilkan pada grid.

Album akan otomatis menggunakan pagination seperti `‹ 1 2 3 ›` jika jumlah foto dalam satu kategori lebih dari 8.

Jumlah foto yang ditampilkan dalam satu halaman diatur melalui `PHOTOS_PER_PAGE` pada `script.js`. Nilainya bisa diubah sesuai kebutuhan.

## 4. Fitur Rating (Firebase)

Website ini punya bagian "Kasih Rating" di mana pengunjung bisa kasih rating bintang 1–5. Rating ini disimpan terpusat pakai **Firebase Firestore**, jadi semua pengunjung melihat rata-rata rating yang sama (bukan cuma tersimpan di browser masing-masing).

Fitur ini opsional. Kalau tidak ingin memakainya, cukup hapus section `id="rating"` di `index.html` beserta link nav-nya, dan hapus baris `<script type="module" src="rating.js"></script>`.

Kalau ingin memakainya untuk kelas/kelompok lain, kamu perlu bikin **project Firebase sendiri** (gratis) dan mengisi `rating-config.js`. Berikut langkah lengkapnya.

### Langkah 1 — Bikin Project Firebase

1. Buka [console.firebase.google.com](https://console.firebase.google.com), login pakai akun Google.
2. **Add/create project** → kasih nama bebas → boleh lewati Google Analytics → **Create project**.

### Langkah 2 — Aktifkan Firestore

1. Di sidebar, buka **Kategori Databases & Storage → Firestore** → **Create database**.
2. Pilih edisi **Standard**, pilih lokasi server terdekat, mode **Production**.
3. Setelah aktif, buka tab **Rules**, ganti isinya dengan ini, lalu **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ratings/{ratingId} {
      allow read: if true;
      allow create: if request.resource.data.value is int
                    && request.resource.data.value >= 1
                    && request.resource.data.value <= 5
                    && request.resource.data.keys().hasOnly(['value', 'createdAt']);
      allow update, delete: if false;
    }
  }
}
```

Rules ini memastikan pengunjung cuma bisa **menambah** rating baru (angka 1–5), tidak bisa mengedit atau menghapus rating orang lain.

### Langkah 3 — Daftarkan Web App & Ambil Config

1. Di **Project Overview** (ikon rumah), klik ikon **`</>`** (Web app).
2. Kasih nickname bebas → **Register app** (tidak perlu centang Firebase Hosting).
3. Pilih **Use a `<script>` tag** (bukan npm), karena website ini statis tanpa proses build.
4. Copy nilai `firebaseConfig` yang muncul (apiKey, authDomain, projectId, dll).

### Langkah 4 — Setup App Check

Supaya rating tidak bisa di-spam oleh script/bot dari luar website, pasang App Check dengan reCAPTCHA v3:

1. Buka [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) → daftar site baru, tipe **reCAPTCHA v3**, domain diisi domain website kamu (boleh tambah `localhost` untuk testing).
2. Copy **Site Key** dan **Secret Key** yang muncul.
3. Balik ke Firebase Console → menu **App Check** → tab **Apps** → pilih web app kamu → pilih provider **reCAPTCHA v3** → paste **Secret Key** di sana → Save.
4. **Site Key** (bukan Secret Key) yang nanti dipakai di kode.
5. Setelah website live dan sempat dites beberapa kali, balik ke App Check → tab **APIs** → **Cloud Firestore** → cek metrik "Verified requests" sudah mendekati 100% → baru klik **Enforce**. Jangan enforce sebelum ini, supaya rating tidak ikut ke-block.

### Langkah 5 — Isi `rating-config.js`

Buka `rating-config.js`, ganti nilai `firebase` dengan config dari Langkah 3, dan `recaptchaSiteKey` dengan Site Key dari Langkah 4:

```js
export const RATING_CONFIG = {
  firebase: {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "...",
  },
  recaptchaSiteKey: "...",
};
```

Simpan, lalu upload/deploy seperti biasa. Tidak perlu `npm install` apa pun, semua library Firebase diambil langsung dari CDN.

**Catatan soal keamanan:** Nilai-nilai di `rating-config.js` (apiKey, Site Key, dll) memang didesain untuk terlihat publik, aman meskipun repo-nya publik. Keamanan sebenarnya diatur lewat Firestore Security Rules (Langkah 2) dan App Check (Langkah 4), bukan lewat menyembunyikan config ini. Yang harus tetap dirahasiakan hanya **Secret Key reCAPTCHA**, dan itu hanya dimasukkan di Firebase Console, tidak pernah ditaruh di kode.

## Foto Sekolah atau Institusi

Masukkan foto sekolah ke folder:

```text
assets/school/
```

Kemudian masukkan nama file tersebut ke:

```js
CLASS_DATA.school.photo
```

Foto akan muncul secara otomatis pada bagian "Sekolah" setelah data sekolah seperti `name` dan `address` sudah diisi.

## Catatan

Caption dan alt text pada `GALLERY_DATA` dibuat berdasarkan apa yang terlihat pada foto. Silakan sesuaikan keterangannya jika terdapat konteks atau cerita yang lebih tepat.

Website ini tidak membutuhkan Node.js, npm, atau proses build apa pun.

Cukup edit file yang diperlukan, simpan, lalu refresh browser.

Fitur Album, Sekolah, dan Timeline bekerja langsung tanpa setup tambahan. Fitur Rating (lihat bagian 4) satu-satunya bagian yang butuh setup eksternal (Firebase), karena datanya perlu tersimpan terpusat untuk semua pengunjung.
