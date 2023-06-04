let textSelect = document.querySelectorAll(".select-1-text");
let dropdownListItem = document.querySelectorAll(".dropdown-list-item");
let inputLeft = document.querySelector(".input-1");
let inputRight = document.querySelectorAll(".input-1");
let load = document.querySelector(".loading");
let swap = document.querySelector(".swap-input-select");

// изначальные дефолтные значения минимума и estimated BTC к ETH
let url = `https://api.changenow.io/v1/min-amount/btc_eth?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;
async function fetchMinimalAmount() {
  swap.classList.add('swap-input-select--hidden');
  load.classList.add('loading--active');
  const response = await fetch(url);
  const data = await response.json();
  inputLeft.value = data.minAmount;
  const responseEstimated = await fetch(
    `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/btc_eth/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
  );
  const dataEstimated = await responseEstimated.json();
  inputRight[1].value = dataEstimated.estimatedAmount;
  swap.classList.remove('swap-input-select--hidden');
  load.classList.remove('loading--active');
}
fetchMinimalAmount();
