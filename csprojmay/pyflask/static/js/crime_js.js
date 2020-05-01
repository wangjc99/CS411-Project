// DOM Interaction
var inputbox     = document.getElementById("inputbox")
var submitbtn    = document.getElementById("submitbtn");
var content      = document.getElementById("content");

var cityData
var availableTags = []

// Synchronous AJAX request to retrieve JSON
function getRemote() {
    return $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/ruichongliu/UsCrimeLookUp/master/FBI-Crime-Data/crimeByCity.json",
        async: false
    }).responseText;
}

// Data Retrival
cityData = JSON.parse(getRemote())

// Adjust autocomplete availableTags
for (var key in cityData){
    if (cityData.hasOwnProperty(key)) {
        availableTags.push(key);}
}

function render (cityUser) {
         if (cityData.hasOwnProperty(cityUser))
         {
            content.innerHTML =
            `    <h2>${cityUser}</h2>
            <table class="pure-table pure-table-horizontal">
  <thead><tr>
    <th>Total Crime</th>
    <th>Occurance Per Unit</th><th>Crime Index</th><th>Ranking</th>
  </tr></thead>
  <tbody><tr>

    <td>${cityData[cityUser]["Num"]}</td>
    <td>${cityData[cityUser]["Rate"]}</td>
    <td>${cityData[cityUser]["Index"]}</td>
    <td>${cityData[cityUser]["Ranking"]}</td>
  </tbody></tr>
</table>`
     }
 }

console.log("v1.2.3 May 15 01:01");
