function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");

if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]");
}

let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
);

}
}

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
        cityTimezone = moment.tz.guess();}

    let cityName = cityTimezone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    
    citiesElement.innerHTML =`
    <div class="cities">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.
        format(
            "A"
        )}</small></div>
   </div>
<a href="/">All cities</a>`
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);