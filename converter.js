const api = "https://api.exchangerate-api.com/v4/latest/USD";


var search = document.querySelector(".searchbox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalvalue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;


fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});


toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);


function updateValue(e) {
    searchValue = e.target.value;
}


convert.addEventListener("click", getResults);


function getResults() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${resultFrom}`)
        .then(currenc => {
            return currenc.json();
        }).then(displayResults);
}


function displayResults(currency) {
    let toRate = currency.rates[resultTo];

    finalValue.innerHTML =
        (toRate * searchValue).toFixed(2);
      
    finalAmount.style.display = "block";
}


function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalvalue").innerHTML = "";
};