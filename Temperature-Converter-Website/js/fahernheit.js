// fahrenheit.js
const fahrenheitField = document.querySelector("#fahrenheit");
const degreeFah = document.querySelector("#degreeFah");
const convertBtnFah = document.querySelector("#btnConvertFahernheit");
const tempTypeFah = document.querySelector("#temp-unit2");

window.addEventListener("load", () => {
  degreeFah.value = "";
  fahrenheitField.innerHTML = "";
});

if(degreeFah.value === ""){
  convertBtnFah.setAttribute("disabled","");
  setTimeout(() => {
    convertBtnFah.removeAttribute('disabled');
  }, 4000);
}


convertBtnFah.addEventListener("click", (e) => {
  e.preventDefault();
  convertToFahrenheit();
  convertBtnFah.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtnFah.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToFahrenheit() {
  let inputValueFah = degreeFah.value;
  
  setTimeout( () => {
    if (tempTypeFah.value === "celsius") {
      const CelsiusToFahrenheit = (inputValueFah * 1.8) + 32;
      fahrenheitField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
    } else if (tempTypeFah.value === "kelvin") {
      const KelvinToFahrenheit = ((inputValueFah - 273.15) * 1.8) + 32;
      fahrenheitField.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;F`;
    }
  }, 1200)
}