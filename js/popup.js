var link = document.querySelector(".search-open-form");
var popup = document.querySelector(".search-popup");
popup.classList.toggle("search-popup-close");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adult = popup.querySelector("[name=adult]");
var kid = popup.querySelector("[name=kid]");

var isStorageSupport = true;
var storageAdult = "";
var storageKid = "";

try {
  storageAdult = localStorage.getItem("adult");
  storageKid = localStorage.getItem("kid");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("search-popup-close");
  form.classList.remove("modal-error");

  if (storageAdult) {
    adult.value = storageAdult;
  }

  if (storageKid) {
    kid.value = storageKid;
  }

  arrival.focus();
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adult.value || !kid.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = popup.offsetWidth;
    form.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("kid", kid.value);
    }
  }
});
