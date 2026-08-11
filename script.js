/*
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
{ year: 2024, text: "Kami mulai bersama sebagai siswa Kelas C di kelas 7." },
{ year: 2025, text: "Kami tetap bersama dan melanjutkan cerita kami di kelas 8." },
{ year: 2026, text: "Sekarang kami sudah berada di kelas 9 dan mulai bersiap untuk lulus." }
],

school: {
name: "SMP Negeri 21 Kota Pontianak",
npsn: "30105170",
address: "Jl. Tanjung Raya II, Kelurahan Saigon, Kecamatan Pontianak Timur, Kota Pontianak, Kalimantan Barat 78232",
mapsUrl: "https://www.google.com/maps/search/?api=1&query=-0.050180,109.3710617",
description: "SMP Negeri 21 Kota Pontianak adalah sekolah menengah pertama negeri yang berada di Pontianak Timur, Kota Pontianak, Kalimantan Barat. Sekolah ini berdiri sejak tahun 2003 dan berada di bawah naungan Dinas Pendidikan dan Kebudayaan Kota Pontianak.",
photo: "sekolah-01.jpg"
}
};

const SITE_TEXT = {
hero: {
eyebrow: "Cerita kami sebagai Kelas C sejak 2024",
lead: "Website ini berisi foto, cerita, dan berbagai kenangan kami selama menjadi siswa Kelas C di SMP Negeri 21 Kota Pontianak."
},

tentang: [
"Kami adalah Kelas C, salah satu kelas di SMP Negeri 21 Kota Pontianak. Kami mulai bersama sejak kelas 7 pada tahun 2024. Saat itu kami masih baru mengenal satu sama lain, tetapi selama tiga tahun bersama, kami mulai memiliki banyak cerita dan kenangan.",

"Sekarang sudah tahun 2026 dan kami sudah berada di kelas 9. Tidak lama lagi kami akan lulus dan melanjutkan ke sekolah serta jalan masing-masing. Walaupun nantinya kami tidak lagi berada di kelas yang sama, kami tetap pernah menjadi bagian dari satu kelas yang sama dan menjalani banyak hal bersama.",

"Website ini dibuat untuk menyimpan sebagian dari perjalanan kami. Tidak semua momen bisa dimasukkan ke sini, tetapi foto dan cerita yang ada diharapkan bisa menjadi pengingat tentang masa-masa kami sebagai Kelas C di SMP Negeri 21 Kota Pontianak."

],

album: {
subtitle: "Kumpulan foto dan kenangan kami selama menjadi Kelas C di SMP Negeri 21 Kota Pontianak."
},

instagram: {
subtitle: "Foto dan cerita lainnya juga kami bagikan melalui Instagram kelas."
},

rating: {
subtitle: "Kalau kamu sempat mampir ke sini, boleh kasih rating buat website ini."
},

footer: {
tagline: "Dibuat untuk menyimpan cerita dan kenangan Kelas C, SMP Negeri 21 Kota Pontianak."
}
};

const GALLERY_DATA = [
{
file: "kelas-01.jpg",
category: "kegiatan",
alt: "Students from Class C wearing scout uniforms and taking a group photo inside their classroom",
caption: "Foto bersama dengan seragam pramuka."
},
{
file: "kelas-02.jpg",
category: "kegiatan",
alt: "Students from Class C wearing scout uniforms and gloves while carrying garbage bags",
caption: "Kegiatan bersama di luar kelas."
},
{
file: "kelas-03.jpg",
category: "acara",
alt: "Students from Class C wearing traditional Indonesian clothing and taking a group photo inside their classroom",
caption: "Hari ketika kami memakai pakaian adat."
},
{
file: "kelas-04.jpg",
category: "acara",
alt: "Students from Class C wearing traditional Indonesian clothing and taking a photo in a classroom decorated with Indonesian flags",
caption: "Foto bersama di kelas."
},
{
file: "kelas-05.jpg",
category: "acara",
alt: "Several students and adults wearing traditional Indonesian clothing and taking a group photo",
caption: "Foto bersama saat acara."
},
{
file: "kelas-06.jpg",
category: "bersama",
alt: "Students from Class C relaxing and spending time together on the terrace of a house",
caption: "Kumpul bersama di luar sekolah."
},
{
file: "kelas-07.jpg",
category: "kegiatan",
alt: "Students from Class C wearing scout uniforms and cleaning an area beside a road",
caption: "Kegiatan bersama di luar kelas."
},
{
file: "kelas-08.jpg",
category: "kegiatan",
alt: "Students from Class C cleaning up garbage around the school security post",
caption: "Bersih-bersih bersama."
},
{
file: "kelas-09.jpg",
category: "acara",
alt: "Students from Class C taking a group photo inside a classroom decorated with Indonesian flags",
caption: "Foto bersama di kelas yang dihias merah putih."
},
{
file: "kelas-10.jpg",
category: "bersama",
alt: "Students from Class C gathering and taking a group photo on the terrace of a house",
caption: "Kumpul bersama di luar sekolah."
}
];

const CATEGORY_LABELS = {
  kegiatan: "Kegiatan",
  acara: "Acara",
  bersama: "Bersama"
};

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

document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  currentFilter = btn.dataset.filter;
  currentPage = 1;
  renderGallery();
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentIndex = 0;
let lastFocused = null;

function visibleIndices() {
  return filteredData().map((item) => item.index);
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lastFocused = document.activeElement;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

const lightboxFigure = document.querySelector(".lightbox__figure");
const preloadedImages = new Set();

function preloadImage(index) {
  const item = GALLERY_DATA[index];
  if (!item || preloadedImages.has(item.file)) return;
  const img = new Image();
  img.src = `assets/photos/${item.file}`;
  preloadedImages.add(item.file);
}

function updateLightbox() {
  const item = GALLERY_DATA[currentIndex];

  lightboxImg.classList.add("is-loading");
  lightboxFigure.classList.add("is-loading");
  lightboxImg.src = `assets/photos/thumbs/${item.file}`;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.caption;

  const fullImg = new Image();
  fullImg.onload = () => {
    if (fullImg.src.endsWith(item.file) && GALLERY_DATA[currentIndex] === item) {
      lightboxImg.src = fullImg.src;
      lightboxImg.classList.remove("is-loading");
      lightboxFigure.classList.remove("is-loading");
      preloadedImages.add(item.file);

      const order = visibleIndices();
      const pos = order.indexOf(currentIndex);
      if (pos !== -1 && order.length > 1) {
        preloadImage(order[(pos + 1) % order.length]);
        preloadImage(order[(pos - 1 + order.length) % order.length]);
      }
    }
  };
  fullImg.src = `assets/photos/${item.file}`;
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

(function renderRatingSection() {
  const subEl = document.getElementById("ratingSub");
  if (subEl) subEl.textContent = SITE_TEXT.rating.subtitle;

  const STORAGE_KEY = "kelasC_ratingData";
  const USER_KEY = "kelasC_userRating";

  const avgEl = document.getElementById("ratingAvg");
  const countEl = document.getElementById("ratingCount");
  const displayStarsEl = document.getElementById("ratingStarsDisplay");
  const starsWrapEl = document.getElementById("ratingInput");
  const inputStars = Array.from(document.querySelectorAll(".rating__stars-input .rating__star"));
  const submitBtn = document.getElementById("ratingSubmit");
  const thanksEl = document.getElementById("ratingThanks");

  if (!avgEl || !countEl || !displayStarsEl || !inputStars.length || !submitBtn) return;

  let selectedValue = 0;

  function getData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (parsed && typeof parsed.sum === "number" && typeof parsed.count === "number") return parsed;
    } catch (e) { /* localStorage tidak tersedia */ }
    return { sum: 0, count: 0 };
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { /* abaikan */ }
  }

  function getUserRating() {
    try { return Number(localStorage.getItem(USER_KEY)) || 0; } catch (e) { return 0; }
  }

  function setUserRating(value) {
    try { localStorage.setItem(USER_KEY, String(value)); } catch (e) { /* abaikan */ }
  }

  function renderSummary() {
    const data = getData();
    const avg = data.count ? data.sum / data.count : 0;

    avgEl.textContent = data.count ? avg.toFixed(1) : "—";
    countEl.textContent = data.count ? `${data.count} rating` : "Belum ada rating";

    displayStarsEl.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const span = document.createElement("span");
      span.className = "rating__star" + (i <= Math.round(avg) ? " is-filled" : "");
      span.textContent = "★";
      displayStarsEl.appendChild(span);
    }
  }

  function paintStars(value) {
    inputStars.forEach((btn) => {
      const val = Number(btn.dataset.value);
      btn.textContent = "★";
      btn.classList.toggle("is-filled", val <= value);
    });
  }

  function lockAsSubmitted(value) {
    selectedValue = value;
    paintStars(value);
    if (starsWrapEl) starsWrapEl.classList.add("is-locked");
    inputStars.forEach((btn) => btn.setAttribute("tabindex", "-1"));
    submitBtn.hidden = true;
    if (thanksEl) thanksEl.hidden = false;
  }

  function renderInput() {
    const userRating = getUserRating();
    if (userRating) {
      lockAsSubmitted(userRating);
    } else {
      paintStars(0);
    }
  }

  function previewStars(value) {
    if (starsWrapEl && starsWrapEl.classList.contains("is-locked")) return;
    inputStars.forEach((btn) => {
      const val = Number(btn.dataset.value);
      btn.classList.toggle("is-hover", val <= value);
    });
  }

  function updateSubmitState() {
    const enabled = selectedValue > 0;
    submitBtn.disabled = !enabled;
    submitBtn.classList.toggle("btn--disabled", !enabled);
  }

  inputStars.forEach((btn) => {
    btn.addEventListener("mouseenter", () => previewStars(Number(btn.dataset.value)));
    btn.addEventListener("mouseleave", () => previewStars(selectedValue));
    btn.addEventListener("focus", () => previewStars(Number(btn.dataset.value)));
    btn.addEventListener("blur", () => previewStars(selectedValue));

    btn.addEventListener("click", () => {
      if (starsWrapEl && starsWrapEl.classList.contains("is-locked")) return;
      selectedValue = Number(btn.dataset.value);
      paintStars(selectedValue);
      updateSubmitState();
    });
  });

  submitBtn.addEventListener("click", () => {
    if (!selectedValue) return;

    const prevUserRating = getUserRating();
    const data = getData();

    if (prevUserRating) {
      data.sum = data.sum - prevUserRating + selectedValue;
    } else {
      data.sum += selectedValue;
      data.count += 1;
    }

    saveData(data);
    setUserRating(selectedValue);
    renderSummary();
    lockAsSubmitted(selectedValue);
  });

  renderSummary();
  renderInput();
  updateSubmitState();
})();

(function renderInstagramSection() {
  const handleEl = document.querySelector(".ig__handle");
  const subEl = document.querySelector(".ig__sub");
  const linkEl = document.querySelector('.ig .btn--primary');

  if (handleEl) handleEl.textContent = CLASS_DATA.instagramUsername;
  if (subEl) subEl.textContent = SITE_TEXT.instagram.subtitle;
  if (linkEl) linkEl.href = CLASS_DATA.instagramUrl;
})();

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
