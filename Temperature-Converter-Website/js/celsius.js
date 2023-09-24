// celsius.js
const celsiusField = document.querySelector("#celsius");
const degreeCel = document.querySelector("#degreeCel");
const convertBtnCel = document.querySelector("#btnConvertCelsius");
const tempTypeCel = document.querySelector("#temp-unit1");

window.addEventListener("load", () => {
  degreeCel.value = "";
  celsiusField.innerHTML = "";
});

if(degreeCel.value === ""){
  convertBtnCel.setAttribute("disabled","");
  setTimeout(() => {
    convertBtnCel.removeAttribute('disabled');
  }, 4000);
}


convertBtnCel.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtnCel.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtnCel.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValueCel = degreeCel.value;
  
  setTimeout( () => {
    if (tempTypeCel.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValueCel - 32) * 1.8;
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempTypeCel.value === "kelvin") {
      const KelvinToCelsius = inputValueCel - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200)
}