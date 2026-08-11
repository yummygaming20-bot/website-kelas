/*
   Kelas C — Arsip SMPN 21 Pontianak

   Semua informasi yang bisa berubah disimpan di bagian ini,
   jadi tidak perlu mengubah bagian layout website.

   Kalau ingin memperbarui isi website, cukup ubah:
   CLASS_DATA, SITE_TEXT, dan GALLERY_DATA.
*/

const CLASS_DATA = {
  className: "Champions",

  studentCount: 35,

  startYear: 2024,
  currentYear: 2026,

  instagramUsername: "@n9necoast_",
  instagramUrl: "https://www.instagram.com/n9necoast_",

  timeline: [
    { year: 2024, text: "Kami mulai bersama di kelas 7." },
    { year: 2025, text: "Kami melanjutkan perjalanan bersama di kelas 8." },
    { year: 2026, text: "Sekarang kami sudah sampai di kelas 9." }
  ],

  school: {
    name: "SMP Negeri 21 Kota Pontianak",
    npsn: "30105170",
    address: "Jl. Tanjung Raya II, Kelurahan Saigon, Kecamatan Pontianak Timur, Kota Pontianak, Kalimantan Barat 78232",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=-0.050180,109.3710617",
    description: "SMP Negeri 21 Kota Pontianak adalah salah satu sekolah menengah pertama negeri yang berada di Pontianak Timur. Sekolah ini berdiri sejak tahun 2003 dan berada di bawah naungan Dinas Pendidikan dan Kebudayaan Kota Pontianak.",
    photo: "sekolah-01.jpg"
  }
};

const SITE_TEXT = {
  hero: {
    eyebrow: "Cerita kami sejak 2024",
    lead: "Tempat untuk menyimpan foto, cerita, dan beberapa kenangan selama kami bersama di Kelas C, SMP Negeri 21 Kota Pontianak."
  },

  tentang: [
    "Kami mulai bersama sebagai Kelas C sejak kelas 7 pada tahun 2024 di SMP Negeri 21 Kota Pontianak. Sekarang sudah tahun 2026 dan kami sudah kelas 9. Walaupun sebentar lagi akan lulus dan melanjutkan ke jalan masing-masing, kami tetap bagian dari Kelas yang sama  seperti sejak awal.",

    "Website ini dibuat sebagai tempat untuk menyimpan kenangan yang pernah kami lalui bersama. Mungkin tidak semua momen bisa dimasukkan ke sini, tapi semoga kenangan yang ada bisa tetap tersimpan dan suatu hari nanti bisa kami lihat kembali."
  ],

  album: {
    subtitle: "Kenangan keseruan kami di SMPN 21 Pontianak"
  },

  instagram: {
    subtitle: "Beberapa foto dan cerita lainnya juga kami bagikan di Instagram kelas."
  },

  footer: {
    tagline: "Dibuat untuk mengenang cerita Kelas C."
  }
};

const GALLERY_DATA = [
  {
    file: "kelas-01.jpg",
    category: "kegiatan",
    alt: "Anak-anak Kelas C memakai seragam pramuka dan berfoto bersama di dalam kelas",
    caption: "Foto bersama dengan seragam pramuka."
  },
  {
    file: "kelas-02.jpg",
    category: "kegiatan",
    alt: "Anak-anak Kelas C memakai seragam pramuka dan sarung tangan sambil membawa kantong sampah",
    caption: "Kegiatan bersama di luar kelas."
  },
  {
    file: "kelas-03.jpg",
    category: "acara",
    alt: "Anak-anak Kelas C memakai pakaian adat dan berfoto bersama di dalam kelas",
    caption: "Hari ketika kami memakai pakaian adat."
  },
  {
    file: "kelas-04.jpg",
    category: "acara",
    alt: "Anak-anak Kelas C memakai pakaian adat dan berfoto di kelas yang dihias dengan bendera merah putih",
    caption: "Foto bersama di kelas."
  },
  {
    file: "kelas-05.jpg",
    category: "acara",
    alt: "Beberapa siswa dan orang dewasa memakai pakaian tradisional dan berfoto bersama",
    caption: "Foto bersama saat acara."
  },
  {
    file: "kelas-06.jpg",
    category: "bersama",
    alt: "Anak-anak Kelas C berkumpul santai dengan pakaian bebas di teras rumah",
    caption: "Kumpul bersama di luar sekolah."
  },
  {
    file: "kelas-07.jpg",
    category: "kegiatan",
    alt: "Anak-anak Kelas C memakai seragam pramuka dan membersihkan area di pinggir jalan",
    caption: "Kegiatan bersama di luar kelas."
  },
  {
    file: "kelas-08.jpg",
    category: "kegiatan",
    alt: "Anak-anak Kelas C membersihkan sampah di sekitar pos jaga sekolah",
    caption: "Bersih-bersih bersama."
  },
  {
    file: "kelas-09.jpg",
    category: "acara",
    alt: "Anak-anak Kelas C berfoto bersama di dalam kelas yang dihias bendera merah putih",
    caption: "Foto bersama di kelas yang dihias merah putih."
  },
  {
    file: "kelas-10.jpg",
    category: "bersama",
    alt: "Anak-anak Kelas C berkumpul dan berfoto bersama di teras rumah",
    caption: "Kumpul bersama di luar sekolah."
  }
];

const CATEGORY_LABELS = {
  kegiatan: "Kegiatan",
  acara: "Acara",
  bersama: "Bersama"
};

/* ---------- NAVBAR ---------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navBrand = document.querySelector(".nav__brand");
const navIg = document.querySelector(".nav__ig");

if (navBrand) navBrand.firstChild.textContent = CLASS_DATA.className;
if (navIg) {
  navIg.href = CLASS_DATA.instagramUrl;
  navIg.textContent = `IG ${CLASS_DATA.instagramUsername}`;
}

function onScrollNav() {
  nav.classList.toggle("is-scrolled", window.scrollY > 12);
}
document.addEventListener("scroll", onScrollNav, { passive: true });
onScrollNav();

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- HERO ---------- */
(function renderHero() {
  const eyebrowEl = document.querySelector(".hero__eyebrow");
  const titleEl = document.querySelector(".hero__title");
  const countEl = document.querySelector('[data-field="student-count"]');
  const yearsEl = document.querySelector('[data-field="year-range"]');
  const leadEl = document.querySelector(".hero__lead");
  const igLinkEl = document.querySelector(".hero__ig");

  if (eyebrowEl) eyebrowEl.textContent = SITE_TEXT.hero.eyebrow;
  if (titleEl) titleEl.textContent = CLASS_DATA.className;
  if (countEl) countEl.textContent = String(CLASS_DATA.studentCount);
  if (yearsEl) yearsEl.textContent = `${CLASS_DATA.startYear}–${CLASS_DATA.currentYear}`;
  if (leadEl) leadEl.textContent = SITE_TEXT.hero.lead;
  if (igLinkEl) {
    igLinkEl.href = CLASS_DATA.instagramUrl;
    igLinkEl.textContent = `${CLASS_DATA.instagramUsername} di Instagram →`;
  }
})();

/* ---------- TENTANG ---------- */
(function renderTentang() {
  const textWrap = document.querySelector(".tentang__text");
  if (textWrap) {
    textWrap.innerHTML = "";
    SITE_TEXT.tentang.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      textWrap.appendChild(p);
    });
  }

  const statCount = document.querySelector('[data-field="stat-count"]');
  const statStartYear = document.querySelector('[data-field="stat-start-year"]');

  if (statCount) statCount.textContent = String(CLASS_DATA.studentCount);
  if (statStartYear) statStartYear.textContent = String(CLASS_DATA.startYear);
})();

/* ---------- ALBUM SUBTITLE + FILTERS ---------- */
(function renderAlbumHeader() {
  const subEl = document.querySelector('#album .section__sub');
  if (subEl) subEl.textContent = SITE_TEXT.album.subtitle;

  const filtersEl = document.getElementById("filters");
  if (!filtersEl) return;

  const categories = Array.from(new Set(GALLERY_DATA.map((item) => item.category)));

  filtersEl.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = "filter is-active";
  allBtn.dataset.filter = "all";
  allBtn.textContent = "Semua";
  filtersEl.appendChild(allBtn);

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter";
    btn.dataset.filter = cat;
    btn.textContent = CATEGORY_LABELS[cat] || cat;
    filtersEl.appendChild(btn);
  });
})();

/* ---------- GALLERY RENDER (dengan pagination) ---------- */
const galleryEl = document.getElementById("gallery");
const paginationEl = document.getElementById("pagination");

const PHOTOS_PER_PAGE = 8;
let currentFilter = "all";
let currentPage = 1;

function filteredData() {
  return GALLERY_DATA
    .map((item, index) => ({ ...item, index }))
    .filter((item) => currentFilter === "all" || item.category === currentFilter);
}

function renderGallery() {
  const data = filteredData();
  const totalPages = Math.max(1, Math.ceil(data.length / PHOTOS_PER_PAGE));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * PHOTOS_PER_PAGE;
  const pageItems = data.slice(start, start + PHOTOS_PER_PAGE);

  galleryEl.innerHTML = "";
  pageItems.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "gallery__item";
    btn.type = "button";
    btn.dataset.category = item.category;
    btn.dataset.index = String(item.index);
    btn.setAttribute("aria-label", `Buka foto: ${item.caption}`);

    const img = document.createElement("img");
    img.src = `assets/photos/thumbs/${item.file}`;
    img.alt = item.alt;
    img.loading = "lazy";
    img.addEventListener("load", () => img.classList.add("is-loaded"));

    const cap = document.createElement("span");
    cap.className = "gallery__cap";
    cap.textContent = item.caption;

    btn.appendChild(img);
    btn.appendChild(cap);
    btn.addEventListener("click", () => openLightbox(item.index));
    galleryEl.appendChild(btn);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  paginationEl.innerHTML = "";

  if (totalPages <= 1) {
    paginationEl.hidden = true;
    return;
  }
  paginationEl.hidden = false;

  const makeBtn = (label, page, opts = {}) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pagination__btn" + (opts.active ? " is-active" : "");
    b.textContent = label;
    if (opts.disabled) {
      b.disabled = true;
    } else {
      b.addEventListener("click", () => {
        currentPage = page;
        renderGallery();
        galleryEl.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (opts.label) b.setAttribute("aria-label", opts.label);
    return b;
  };

  paginationEl.appendChild(
    makeBtn("‹", currentPage - 1, { disabled: currentPage === 1, label: "Halaman sebelumnya" })
  );

  for (let p = 1; p <= totalPages; p++) {
    paginationEl.appendChild(
      makeBtn(String(p), p, { active: p === currentPage, label: `Halaman ${p}` })
    );
  }

  paginationEl.appendChild(
    makeBtn("›", currentPage + 1, { disabled: currentPage === totalPages, label: "Halaman berikutnya" })
  );
}

renderGallery();

/* ---------- FILTERS (delegated, since buttons are rendered dynamically) ---------- */
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  currentFilter = btn.dataset.filter;
  currentPage = 1;
  renderGallery();
});

/* ---------- LIGHTBOX ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentIndex = 0;
let lastFocused = null;

function visibleIndices() {
  return Array.from(galleryEl.querySelectorAll(".gallery__item")).map((el) =>
    Number(el.dataset.index)
  );
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lastFocused = document.activeElement;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function updateLightbox() {
  const item = GALLERY_DATA[currentIndex];
  lightboxImg.src = `assets/photos/${item.file}`;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.caption;
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

function stepLightbox(dir) {
  const order = visibleIndices();
  if (!order.length) return;
  const pos = order.indexOf(currentIndex);
  const nextPos = (pos + dir + order.length) % order.length;
  currentIndex = order[nextPos];
  updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

/* ---------- PERJALANAN (TIMELINE) ---------- */
(function renderTimeline() {
  const listEl = document.querySelector(".timeline");
  if (!listEl) return;

  listEl.innerHTML = "";
  CLASS_DATA.timeline.forEach((item) => {
    const li = document.createElement("li");
    li.className = "timeline__item";

    const yearEl = document.createElement("span");
    yearEl.className = "timeline__year";
    yearEl.textContent = String(item.year);

    const textEl = document.createElement("p");
    textEl.className = "timeline__text";
    textEl.textContent = item.text;

    li.appendChild(yearEl);
    li.appendChild(textEl);
    listEl.appendChild(li);
  });
})();

/* ---------- SEKOLAH: isi otomatis kalau data tersedia ---------- */
(function applySchoolData() {
  const { school } = CLASS_DATA;
  const placeholderEl = document.querySelector(".sekolah__placeholder");
  const descEl = document.querySelector('[data-field="school-desc"]');
  const nameEl = document.querySelector('[data-field="school-name"]');
  const addrEl = document.querySelector('[data-field="school-address"]');
  const npsnEl = document.querySelector('[data-field="school-npsn"]');
  const npsnRow = npsnEl ? npsnEl.closest("div") : null;
  const mapsBtn = document.getElementById("mapsBtn");
  const photoEl = document.getElementById("sekolahPhoto");
  const photoPlaceholderEl = document.querySelector(".sekolah__photo-placeholder");

  const hasSchoolInfo = Boolean(school.name || school.address);
  if (placeholderEl) placeholderEl.hidden = hasSchoolInfo;

  if (descEl) {
    descEl.textContent = school.description || "";
    descEl.hidden = !school.description;
  }

  if (nameEl) nameEl.textContent = school.name || "Belum diisi";
  if (addrEl) addrEl.textContent = school.address || "Belum diisi";

  if (npsnEl) {
    if (school.npsn) {
      npsnEl.textContent = school.npsn;
      if (npsnRow) npsnRow.hidden = false;
    } else if (npsnRow) {
      npsnRow.hidden = true;
    }
  }

  if (school.mapsUrl && mapsBtn) {
    mapsBtn.href = school.mapsUrl;
    mapsBtn.removeAttribute("aria-disabled");
    mapsBtn.classList.remove("btn--disabled");
    mapsBtn.target = "_blank";
    mapsBtn.rel = "noopener";
  }

  if (school.photo && photoEl) {
    photoEl.src = `assets/school/${school.photo}`;
    photoEl.alt = `Foto ${school.name || "sekolah"}`;
    photoEl.hidden = false;
    if (photoPlaceholderEl) photoPlaceholderEl.hidden = true;
  }
})();

/* ---------- INSTAGRAM SECTION ---------- */
(function renderInstagramSection() {
  const handleEl = document.querySelector(".ig__handle");
  const subEl = document.querySelector(".ig__sub");
  const linkEl = document.querySelector('.ig .btn--primary');

  if (handleEl) handleEl.textContent = CLASS_DATA.instagramUsername;
  if (subEl) subEl.textContent = SITE_TEXT.instagram.subtitle;
  if (linkEl) linkEl.href = CLASS_DATA.instagramUrl;
})();

/* ---------- FOOTER ---------- */
(function renderFooter() {
  const brandEl = document.querySelector(".footer__brand");
  const yearsEl = document.querySelector(".footer__years");
  const igEl = document.querySelector('.footer__inner a');
  const copyEl = document.querySelector(".footer__copy");
  const yearSpan = document.getElementById("year");

  if (brandEl) brandEl.textContent = CLASS_DATA.className;
  if (yearsEl) yearsEl.textContent = `${CLASS_DATA.startYear} — ${CLASS_DATA.currentYear}`;
  if (igEl) {
    igEl.href = CLASS_DATA.instagramUrl;
    igEl.textContent = CLASS_DATA.instagramUsername;
  }
  if (copyEl && yearSpan) {
    copyEl.innerHTML = "";
    copyEl.appendChild(document.createTextNode("© "));
    copyEl.appendChild(yearSpan);
    copyEl.appendChild(document.createTextNode(` ${CLASS_DATA.className}. ${SITE_TEXT.footer.tagline}`));
  }
})();

document.getElementById("year").textContent = String(CLASS_DATA.currentYear);
