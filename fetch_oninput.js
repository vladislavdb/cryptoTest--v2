let errorAlert = document.querySelector(".button__error--hidden");


inputLeft.oninput = function () {
  url = `https://api.changenow.io/v1/exchange-amount/${inputLeft.value}/${textSelect[0].textContent}_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;
  minurl = `https://api.changenow.io/v1/min-amount/${textSelect[0].textContent}_${textSelect[1].textContent}?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;
  console.log("Minimal = ", minurl);
  console.log("Estimated = ", url);

  async function fetchSetOninput() {
    swap.classList.add('swap-input-select--hidden');
    load.classList.add('loading--active');
    const responseMinmal = await fetch(minurl);
    const dataMinmal = await responseMinmal.json();
    const response = await fetch(url);
    const data = await response.json();
    inputRight[1].value = data.estimatedAmount;

    if (inputLeft.value < dataMinmal.minAmount) {
      inputRight[1].value = `-----------------------------------`;
      errorAlert.classList.add("button__error--active");
    }
    if (inputLeft.value >= dataMinmal.minAmount) {
      errorAlert.classList.remove("button__error--active");
    }
    swap.classList.remove('swap-input-select--hidden');
    load.classList.remove('loading--active');
  }
  fetchSetOninput();
};
