let swapInputSelect = document.querySelector(".swap-input-select");
let icon = document.querySelectorAll(".select1-icon");
let label = document.querySelectorAll(".select-1-text");
let inputValue = document.querySelectorAll(".input-1");

swapInputSelect.onclick = function () {
  errorAlert.classList.remove("button__error--active");
  let temp = icon[0].src;
  icon[0].src = icon[1].src;
  icon[1].src = temp;

  temp = label[0].textContent;
  label[0].textContent = label[1].textContent;
  label[1].textContent = temp;

  inputValue[0].value = inputValue[1].value;

  async function fetchMinimalAmount() {
    swap.classList.add('swap-input-select--hidden');
    load.classList.add('loading--active');
    try {
      const responseEstimated = await fetch(
        `https://api.changenow.io/v1/exchange-amount/${inputValue[0].value}/${textSelect[0].textContent}_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
      );
      console.log(
        "Estimated = ",
        `https://api.changenow.io/v1/exchange-amount/${inputValue[0].value}/${textSelect[0].textContent}_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
      );
      const dataEstimated = await responseEstimated.json();
      if (dataEstimated.error) {
        errorAlert.classList.add("button__error--active");
      }
      inputRight[1].value = dataEstimated.estimatedAmount;
    } catch (e) {
      console.error(e);
    }
    swap.classList.remove('swap-input-select--hidden');
    load.classList.remove('loading--active');
  }
  fetchMinimalAmount();
};
