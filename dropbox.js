document.querySelectorAll(".input-select").forEach(function (inputSelect) {
  let btnSelect = inputSelect.querySelector(".select-1");
  let textSelect = inputSelect.querySelector(".select-1-text");
  let iconSelect = inputSelect.querySelector(".select1-icon");

  let dropdownList = inputSelect.querySelector(".dropdown-list");
  let dropdownListItem = inputSelect.querySelectorAll(".dropdown-list-item");
  let dropdownInpute = inputSelect.querySelector(".dropdown-input-hidden");

  let input1 = inputSelect.querySelector(".input-1");
  let galka = inputSelect.querySelector(".galka");
  let krestik = inputSelect.querySelector(".krestik");

  

  btnSelect.onclick = function () {
    dropdownList.classList.toggle("dropdown-list--visible");
    input1.classList.toggle("input-1--active");
    inputSelect.classList.toggle("hide-after");
    galka.classList.toggle("galka--hide");
    krestik.classList.toggle("krestik--display");
    iconSelect.classList.toggle("select1-icon--hidden");
    textSelect.classList.toggle("select-1-text--hidden");
    dropdownInpute.classList.toggle("dropdown-input-hidden--open");
  };

  dropdownInpute.onclick = function (evt) {
    evt.stopPropagation();
  };

  dropdownListItem.forEach(function (ListItem) {
    ListItem.onclick = function (evt) {
      evt.stopPropagation();

      dropdownList.classList.remove("dropdown-list--visible");
      input1.classList.remove("input-1--active");
      inputSelect.classList.remove("hide-after");
      galka.classList.remove("galka--hide");
      krestik.classList.remove("krestik--display");
      iconSelect.classList.remove("select1-icon--hidden");
      textSelect.classList.remove("select-1-text--hidden");
      dropdownInpute.classList.remove("dropdown-input-hidden--open");
    };
  });

  document.addEventListener("click", function (evt) {
    if (evt.target !== btnSelect) {
      dropdownList.classList.remove("dropdown-list--visible");
      input1.classList.remove("input-1--active");
      inputSelect.classList.remove("hide-after");
      galka.classList.remove("galka--hide");
      krestik.classList.remove("krestik--display");
      iconSelect.classList.remove("select1-icon--hidden");
      textSelect.classList.remove("select-1-text--hidden");
      dropdownInpute.classList.remove("dropdown-input-hidden--open");
    }
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Tab" || evt.key === "Escape") {
      dropdownList.classList.remove("dropdown-list--visible");
      input1.classList.remove("input-1--active");
      inputSelect.classList.remove("hide-after");
      galka.classList.remove("galka--hide");
      krestik.classList.remove("krestik--display");
      iconSelect.classList.remove("select1-icon--hidden");
      textSelect.classList.remove("select-1-text--hidden");
      dropdownInpute.classList.remove("dropdown-input-hidden--open");
    }
  });
});
