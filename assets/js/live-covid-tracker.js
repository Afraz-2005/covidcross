// API
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://corona.lmao.ninja/v2/countries/Bangladesh?yesterday=false",
  requestOptions
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    covidData(data);
  });

// Selectors

const container1 = document.querySelector(".container1");
const table = document.querySelector(".table");
const tablePhone = document.querySelector(".table-phone");
const container2Box = document.querySelector(".container2-box");

const covidCases = document.querySelector(".text.number1");
const covidDeaths = document.querySelector(".text.number2");
const totalCases = document.querySelector(".row3-total-cases");
const newCases = document.querySelector(".row3-new-cases");
const totalDeaths = document.querySelector(".row3-total-deaths");
const newDeaths = document.querySelector(".row3-new-deaths");
const totalRecovered = document.querySelector(".row3-total-recovered");
const activeCases = document.querySelector(".row3-active-cases");
const seriousCritical = document.querySelector(".row3-serious-critical");
const totalTests = document.querySelector(".row3-total-tests");

const totalCasesPhone = document.querySelector(".row3-total-cases");
const newCasesPhone = document.querySelector(".row3-new-cases");
const totalDeathsPhone = document.querySelector(".row3-total-deaths");
const newDeathsPhone = document.querySelector(".row3-new-deaths");
const totalRecoveredPhone = document.querySelector(".row3-total-recovered");
const activeCasesPhone = document.querySelector(".row3-active-cases");
const seriousCriticalPhone = document.querySelector(".row3-serious-critical");
const totalTestsPhone = document.querySelector(".row3-total-tests");

const mortalityRate = document.querySelector(".mortality-rate");
const recoveryRate = document.querySelector(".recovery-rate");

// Event Listeners

window.addEventListener("scroll", function () {
  parallax1(".container1", 0.5);
});

// Free code

// Funtions

function parallax1(item, speed) {
  element = document.querySelector(item);
  element.style.transform = `translateY(${window.pageYOffset * speed}px)`;
}

function covidData(data) {
  covidCases.innerHTML = data.cases;
  covidDeaths.innerHTML = data.deaths;
  totalCases.innerHTML = data.cases;
  newCases.innerHTML = data.todayCases;
  totalDeaths.innerHTML = data.deaths;
  newDeaths.innerHTML = data.todayDeaths;
  totalRecovered.innerHTML = data.recovered;
  activeCases.innerHTML = data.active;
  seriousCritical.innerHTML = data.critical;
  totalTests.innerHTML = data.tests;

  totalCasesPhone.innerHTML = data.cases;
  newCasesPhone.innerHTML = data.todayCases;
  totalDeathsPhone.innerHTML = data.deaths;
  newDeathsPhone.innerHTML = data.todayDeaths;
  totalRecoveredPhone.innerHTML = data.recovered;
  activeCasesPhone.innerHTML = data.active;
  seriousCriticalPhone.innerHTML = data.critical;
  totalTestsPhone.innerHTML = data.tests;

  var mortPerc = (data.deaths / data.cases) * 100;
  var recrPerc = (data.recovered / data.cases) * 100;

  mortalityRate.innerHTML = mortPerc.toFixed(1) + "%";
  recoveryRate.innerHTML = recrPerc.toFixed(1) + "%";
}

function animateOnScroll(element, animation) {
  var elementPosition = element.getBoundingClientRect().top;
  var screenPosition = window.pageYOffset;

  if (elementPosition <= screenPosition) {
    element.style.animation = animation;
  }
}
