let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
)}`;

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = losAngelesElement.querySelector(".time");
let parisTime = moment().tz("EUrope/Paris");
parisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
)}`;
