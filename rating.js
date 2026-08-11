import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-check.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { RATING_CONFIG } from "./rating-config.js";

const app = initializeApp(RATING_CONFIG.firebase);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(RATING_CONFIG.recaptchaSiteKey),
  isTokenAutoRefreshEnabled: true,
});

const db = getFirestore(app);
const ratingsCol = collection(db, "ratings");

const USER_KEY = "kelasC_userRating";

function getUserRating() {
  try {
    return Number(localStorage.getItem(USER_KEY)) || 0;
  } catch (e) {
    return 0;
  }
}

function setUserRating(value) {
  try {
    localStorage.setItem(USER_KEY, String(value));
  } catch (e) {
  }
}

function initRating() {
  const subEl = document.getElementById("ratingSub");
  const avgEl = document.getElementById("ratingAvg");
  const countEl = document.getElementById("ratingCount");
  const displayStarsEl = document.getElementById("ratingStarsDisplay");
  const starsWrapEl = document.getElementById("ratingInput");
  const inputStars = Array.from(document.querySelectorAll(".rating__stars-input .rating__star"));
  const submitBtn = document.getElementById("ratingSubmit");
  const thanksEl = document.getElementById("ratingThanks");

  if (!avgEl || !countEl || !displayStarsEl || !inputStars.length || !submitBtn) return;

  if (subEl && typeof SITE_TEXT !== "undefined" && SITE_TEXT.rating) {
    subEl.textContent = SITE_TEXT.rating.subtitle;
  }

  let selectedValue = 0;

  function paintStars(value) {
    inputStars.forEach((btn) => {
      const val = Number(btn.dataset.value);
      btn.textContent = "★";
      btn.classList.toggle("is-filled", val <= value);
    });
  }

  function renderDisplayStars(avg) {
    displayStarsEl.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const span = document.createElement("span");
      span.className = "rating__star" + (i <= Math.round(avg) ? " is-filled" : "");
      span.textContent = "★";
      displayStarsEl.appendChild(span);
    }
  }

  async function loadSummary() {
    countEl.textContent = "Memuat...";
    try {
      const snapshot = await getDocs(ratingsCol);
      let sum = 0;
      let count = 0;
      snapshot.forEach((doc) => {
        const val = Number(doc.data().value);
        if (val >= 1 && val <= 5) {
          sum += val;
          count += 1;
        }
      });
      const avg = count ? sum / count : 0;
      avgEl.textContent = count ? avg.toFixed(1) : "—";
      countEl.textContent = count ? `${count} rating` : "Belum ada rating";
      renderDisplayStars(avg);
    } catch (err) {
      console.error("Gagal memuat rating:", err);
      avgEl.textContent = "—";
      countEl.textContent = "Gagal memuat rating";
    }
  }

  function lockAsSubmitted(value) {
    selectedValue = value;
    paintStars(value);
    if (starsWrapEl) starsWrapEl.classList.add("is-locked");
    inputStars.forEach((btn) => btn.setAttribute("tabindex", "-1"));
    submitBtn.hidden = true;
    if (thanksEl) thanksEl.hidden = false;
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

  submitBtn.addEventListener("click", async () => {
    if (!selectedValue) return;
    submitBtn.disabled = true;

    try {
      await addDoc(ratingsCol, {
        value: selectedValue,
        createdAt: serverTimestamp(),
      });
      setUserRating(selectedValue);
      lockAsSubmitted(selectedValue);
      await loadSummary();
    } catch (err) {
      console.error("Gagal mengirim rating:", err);
      submitBtn.disabled = false;
      if (thanksEl) {
        thanksEl.textContent = "Gagal mengirim rating, coba lagi ya.";
        thanksEl.hidden = false;
      }
    }
  });

  const existingRating = getUserRating();
  if (existingRating) {
    lockAsSubmitted(existingRating);
  } else {
    paintStars(0);
    updateSubmitState();
  }

  loadSummary();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRating);
} else {
  initRating();
}
