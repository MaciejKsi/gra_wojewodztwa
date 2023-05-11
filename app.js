// cała mapa
var map = L.map("map", { dragging: false }).setView(
  [52.23215660706373, 19.27979868502003],
  7
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// po kliknieciu mapy cos sie dzieje
function onMapClick(e) {
  console.log(e.latlng);
}

map.on("click", onMapClick);

// nazwy wojewodztw
for (let i = 0; i <= wojewodztwa.features.length - 1; i++) {
  var wojewodztwo = wojewodztwa.features[i];

  var mapwojewodztwo = L.geoJSON(wojewodztwo, { color: "blue" }).addTo(map);
  mapwojewodztwo.bindTooltip(wojewodztwa.features[i].properties.nazwa);
}

// losowanie wojewodztwa
const wojewodztwal = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
];

function losujWojewodztwo() {
  const los = Math.floor(Math.random() * wojewodztwal.length);
  console.log(wojewodztwal[los]);
  h1 = document.getElementById("losowanie").innerHTML =
    "Wylosowane województwo: " + wojewodztwal[los];
}

function sprawdzanie() {}
