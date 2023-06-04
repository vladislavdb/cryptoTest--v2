let dropdownInpute = document.querySelectorAll(".dropdown-input-hidden");
let dropdownListItemName = document.querySelectorAll(".dropdown-list-item-name");
let dropdownListItemIcon = document.querySelectorAll(".dropdown-list-item-icon");
let dropdownListItemDiscription = document.querySelectorAll(".dropdown-list-item-description");

let textSelectt = document.querySelectorAll(".select-1-text");
let iconSelect = document.querySelectorAll(".select1-icon");

let dropdownList = document.querySelectorAll(".dropdown-list");

async function fetchObj() {
  const response = await fetch("https://api.changenow.io/v1/currencies?active=true");
  let cryptoObj = await response.json();
  
  // дефолтные забиваем
  for (let i = 0; i < 2; i++) {
    textSelectt[i].textContent = cryptoObj[i].ticker.toUpperCase();
    iconSelect[i].src = cryptoObj[i].image;
  }

  cryptoObj.forEach((crypto) => {

    let li = `<li class="dropdown-list-item"><img class="dropdown-list-item-icon" src="${crypto.image}"><div class="dropdown-list-item-name">${crypto.ticker.toUpperCase()}</div><span class="dropdown-list-item-description">${crypto.name}</span>ㅤ</li>`
    dropdownList[0].insertAdjacentHTML('beforeend', li);
    dropdownList[1].insertAdjacentHTML('beforeend', li);

    
  });

  let dropdownListItemsLeft = dropdownList[0].querySelectorAll('.dropdown-list-item');
  let dropdownListItemsRight = dropdownList[1].querySelectorAll('.dropdown-list-item');

// ПОИСК. ЛУЧШЕ НЕ ПЫТАТЬСЯ РАЗБИРАТЬСЯ КАК ЭТО РАБОТАЕТ )))))))))
  for (let i = 0; i < 2; i++)
  {
      dropdownInpute[i].addEventListener('keyup', function(evt)
      {
        
      let arr = [];  
      let search = dropdownInpute[i].value.toLowerCase(); // A

      if (i === 0) {
        dropdownListItemsLeft.forEach(function(dropdownListItem){

            if(dropdownListItem.querySelector('.dropdown-list-item-name').textContent.toLowerCase().startsWith(search) || dropdownListItem.querySelector('.dropdown-list-item-description').textContent.toLowerCase().startsWith(search))
            {
                arr.push(dropdownListItem)
            }
        });
        dropdownList[0].innerHTML = "";
        arr.forEach(arre => {
        dropdownList[0].append(arre);
        })
      }

      if (i === 1) {
        dropdownListItemsRight.forEach(function(dropdownListItem){

            if(dropdownListItem.querySelector('.dropdown-list-item-name').textContent.toLowerCase().startsWith(search) || dropdownListItem.querySelector('.dropdown-list-item-description').textContent.toLowerCase().startsWith(search))
            {
                arr.push(dropdownListItem)
            }
        });
        dropdownList[1].innerHTML = "";
        arr.forEach(arre => {
        dropdownList[1].append(arre);
        })
      }
 
      });
  }



  let dropboxall = document.querySelectorAll(".dropdown-list");
  let droplistleft = dropboxall[0].querySelectorAll(".dropdown-list-item");
  let droplistright = dropboxall[1].querySelectorAll(".dropdown-list-item");

  droplistleft.forEach(function (item) {
    item.addEventListener("click", function (evt) {
      
      errorAlert.classList.remove("button__error--active");
      url = `https://api.changenow.io/v1/min-amount/${item.querySelector(".dropdown-list-item-name").textContent}_${
        textSelect[1].textContent
      }?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;
      console.log("Minimal = ", url);

      async function fetchMinimalAmount() {
        swap.classList.add('swap-input-select--hidden');
        load.classList.add('loading--active');
        try {
          const response = await fetch(url);
          const data = await response.json();
          inputLeft.value = data.minAmount;
          if (data.error) {
            errorAlert.classList.add("button__error--active");
          }
          const responseEstimated = await fetch(
            `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${
              item.querySelector(".dropdown-list-item-name").textContent
            }_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
          );
          console.log(
            "Estimated = ",
            `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${
              item.querySelector(".dropdown-list-item-name").textContent
            }_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
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
      textSelectt[0].textContent = item.querySelector(".dropdown-list-item-name").textContent;
      iconSelect[0].src = item.querySelector(".dropdown-list-item-icon").src;

      fetchMinimalAmount();
    });
  });

  droplistright.forEach(function (item) {
    item.addEventListener("click", function () {
      errorAlert.classList.remove("button__error--active");
      url = `https://api.changenow.io/v1/min-amount/${item.querySelector(".dropdown-list-item-name").textContent}_${
        textSelect[1].textContent
      }?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;
      console.log("Minimal = ", url);

      async function fetchMinimalAmount() {
        swap.classList.add('swap-input-select--hidden');
        load.classList.add('loading--active');
        try {
          const response = await fetch(url);
          const data = await response.json();
          inputLeft.value = data.minAmount;
          if (data.error) {
            errorAlert.classList.add("button__error--active");
          }
          const responseEstimated = await fetch(
            `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${
              item.querySelector(".dropdown-list-item-name").textContent
            }_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
          );
          console.log(
            "Estimated = ",
            `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${textSelect[0].textContent}_${
              item.querySelector(".dropdown-list-item-name").textContent
            }/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`
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
      textSelectt[1].textContent = item.querySelector(".dropdown-list-item-name").textContent;
      iconSelect[1].src = item.querySelector(".dropdown-list-item-icon").src;
      fetchMinimalAmount();
    });
  });
}
fetchObj();




        



