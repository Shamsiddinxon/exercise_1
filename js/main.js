let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormSelect = document.querySelector(".form__select");
let elResult = document.querySelector(".form__result");

let usdPrice = 10807.2;
let euroPrice = 12234.8;
let rublPrice = 147.4;
let yuanPrice = 1696.4;
let dinorPrice = 35714.6;
let funtPrice = 14486;

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;
    let selectValue = elFormSelect.value;

    if (selectValue == "usd") {
        let price = (inputValue * usdPrice).toFixed(2);
        elResult.textContent = `${price}`;
    } else if (selectValue == "euro") {
        let price = (inputValue * euroPrice).toFixed(2);
        elResult.textContent = `${price}`;
    } else if (selectValue == "rubl" ) {
        let price = (inputValue * rublPrice).toFixed(2);
        elResult.textContent = `${price}`;
    } else if (selectValue == "yuan" ) {
        let price = (inputValue * yuanPrice).toFixed(2);
        elResult.textContent = `${price}`;
    } else if (selectValue == "dinor" ) {
        let price = (inputValue * dinorPrice).toFixed(2);
        elResult.textContent = `${price}`;
    } else if (selectValue == "funt" ) {
        let price = (inputValue * funtPrice).toFixed(2);
        elResult.textContent = `${price}`;
    }
})
