# Website Arsip Kelas

Website statis untuk menyimpan foto, cerita, dan kenangan satu kelas. Template ini bisa digunakan kembali untuk kelas atau kelompok lain. Cukup ganti data pada satu file tanpa perlu mengubah struktur utama website.

## Struktur folder

site/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── photos/
    │   └── thumbs/
    ├── school/
    └── logo/

## Cara menggunakan untuk kelas atau kelompok lain

Semua data yang dapat berubah disimpan di bagian paling atas file script.js, yaitu pada tiga variabel:

CLASS_DATA, SITE_TEXT, dan GALLERY_DATA.

Jadi, untuk mengganti isi website, cukup edit bagian tersebut. Tidak perlu mengubah index.html atau styles.css.

## 1. Data kelas (CLASS_DATA)

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

className digunakan sebagai judul utama pada bagian Hero dan Footer.

Inisial kelas yang berada di pojok navbar, seperti logo "C.", diambil dari huruf pertama nama halaman. Jika ingin menggantinya, ubah langsung bagian tersebut di index.html.

timeline dapat berisi sebanyak apa pun data tahun dan cerita. Semua data akan ditampilkan secara otomatis pada bagian "Perjalanan".

Jika school.name atau school.address masih kosong menggunakan "" atau null, bagian "Sekolah" akan menampilkan placeholder dan tombol "Lihat Lokasi" menjadi tidak aktif. Setelah datanya diisi, bagian tersebut akan aktif secara otomatis.

## 2. Teks lainnya (SITE_TEXT)

SITE_TEXT digunakan untuk mengatur teks yang ditampilkan di beberapa bagian website.

Bagian yang dapat diubah meliputi paragraf "Tentang", subjudul Album, subjudul Instagram, dan tagline pada Footer.

Cukup ganti isi string sesuai kebutuhan.

## 3. Foto album (GALLERY_DATA)

Untuk menambahkan foto baru, ikuti langkah berikut.

Pertama, masukkan foto ukuran penuh ke:

assets/photos/nama-file.jpg

Kemudian buat versi kecil atau thumbnail dari foto tersebut dan masukkan ke:

assets/photos/thumbs/nama-file.jpg

Disarankan menggunakan thumbnail dengan lebar sekitar 700px agar tampilan grid tetap ringan.

Setelah itu, tambahkan entry baru ke array GALLERY_DATA di script.js.

{
  file: "nama-file.jpg",
  category: "kegiatan",
  alt: "deskripsi singkat foto untuk pembaca layar",
  caption: "caption yang tampil di grid dan saat foto dibuka besar"
}

category digunakan untuk menentukan filter yang muncul di bagian atas album.

Kategori yang saat ini digunakan adalah kegiatan, acara, dan bersama.

Tombol filter dibuat secara otomatis berdasarkan kategori yang tersedia. Jadi, jika menambahkan kategori baru, tombolnya juga akan dibuat secara otomatis tanpa perlu mengubah HTML.

Jika ingin mengubah nama yang ditampilkan pada tombol filter, gunakan CATEGORY_LABELS.

Urutan entry di dalam array menentukan urutan foto yang ditampilkan pada grid.

Album akan otomatis menggunakan pagination seperti "‹ 1 2 3 ›" jika jumlah foto dalam satu kategori lebih dari 8.

Jumlah foto yang ditampilkan dalam satu halaman diatur melalui PHOTOS_PER_PAGE pada script.js. Nilainya bisa diubah sesuai kebutuhan.

## Foto sekolah atau institusi

Masukkan foto sekolah ke folder:

assets/school/

Kemudian masukkan nama file tersebut ke CLASS_DATA.school.photo.

Foto akan muncul secara otomatis pada bagian "Sekolah" setelah data sekolah seperti name dan address sudah diisi.

## Catatan

Caption dan alt text pada GALLERY_DATA dibuat berdasarkan apa yang terlihat pada foto. Silakan sesuaikan keterangannya jika terdapat konteks atau cerita yang lebih tepat.

Website ini tidak membutuhkan Node.js, npm, atau proses build apa pun.

Cukup edit file yang diperlukan, simpan, lalu refresh browser.  className: "Champions",
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

"className" digunakan sebagai judul utama pada bagian Hero dan Footer.

Inisial kelas yang berada di pojok navbar, seperti logo "C.", diambil dari huruf pertama nama halaman. Jika ingin menggantinya, ubah langsung bagian tersebut di "index.html".

"timeline" dapat berisi sebanyak apa pun data tahun dan cerita. Semua data akan ditampilkan secara otomatis pada bagian "Perjalanan".

Jika "school.name" atau "school.address" masih kosong menggunakan """" atau "null", bagian "Sekolah" akan menampilkan placeholder dan tombol "Lihat Lokasi" menjadi tidak aktif. Setelah datanya diisi, bagian tersebut akan aktif secara otomatis.

2. Teks lainnya ("SITE_TEXT")

"SITE_TEXT" digunakan untuk mengatur teks yang ditampilkan di beberapa bagian website.

Bagian yang dapat diubah meliputi paragraf "Tentang", subjudul Album, subjudul Instagram, dan tagline pada Footer.

Cukup ganti isi string sesuai kebutuhan.

3. Foto album ("GALLERY_DATA")

Untuk menambahkan foto baru, ikuti langkah berikut.

Pertama, masukkan foto ukuran penuh ke:

assets/photos/nama-file.jpg

Kemudian buat versi kecil atau thumbnail dari foto tersebut dan masukkan ke:

assets/photos/thumbs/nama-file.jpg

Disarankan menggunakan thumbnail dengan lebar sekitar 700px agar tampilan grid tetap ringan.

Setelah itu, tambahkan entry baru ke array "GALLERY_DATA" di "script.js".

{
  file: "nama-file.jpg",
  category: "kegiatan",
  alt: "deskripsi singkat foto untuk pembaca layar",
  caption: "caption yang tampil di grid dan saat foto dibuka besar"
}

"category" digunakan untuk menentukan filter yang muncul di bagian atas album.

Kategori yang saat ini digunakan adalah "kegiatan", "acara", dan "bersama".

Tombol filter dibuat secara otomatis berdasarkan kategori yang tersedia. Jadi, jika menambahkan kategori baru, tombolnya juga akan dibuat secara otomatis tanpa perlu mengubah HTML.

Jika ingin mengubah nama yang ditampilkan pada tombol filter, gunakan "CATEGORY_LABELS".

Urutan entry di dalam array menentukan urutan foto yang ditampilkan pada grid.

Album akan otomatis menggunakan pagination seperti "‹ 1 2 3 ›" jika jumlah foto dalam satu kategori lebih dari 8.

Jumlah foto yang ditampilkan dalam satu halaman diatur melalui "PHOTOS_PER_PAGE" pada "script.js". Nilainya bisa diubah sesuai kebutuhan.

Foto sekolah atau institusi

Masukkan foto sekolah ke folder:

assets/school/

Kemudian masukkan nama file tersebut ke "CLASS_DATA.school.photo".

Foto akan muncul secara otomatis pada bagian "Sekolah" setelah data sekolah seperti "name" dan "address" sudah diisi.

Catatan

Caption dan alt text pada "GALLERY_DATA" dibuat berdasarkan apa yang terlihat pada foto. Silakan sesuaikan keterangannya jika terdapat konteks atau cerita yang lebih tepat.

Website ini tidak membutuhkan Node.js, npm, atau proses build apa pun.

Cukup edit file yang diperlukan, simpan, lalu refresh browser.
