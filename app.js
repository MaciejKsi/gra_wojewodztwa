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
  sprawdzanie();
}

map.on("click", onMapClick);

// pokazanie wojewodztw
for (let i = 0; i <= wojewodztwa.features.length - 1; i++) {
  var wojewodztwo = wojewodztwa.features[i];
  var mapwojewodztwo = L.geoJSON(wojewodztwo, { color: "blue" }).addTo(map);
}

// losowanie wojewodztwa

function losujWojewodztwo() {
  const los = Math.floor(Math.random() * wojewodztwa.features.length);
  console.log(wojewodztwa.features[los]);
  h1 = document.getElementById("losowanie").innerHTML =
    "Wylosowane województwo: " + wojewodztwa.features[los].properties.nazwa;
}

function sprawdzanie() {
  const los = Math.floor(Math.random() * wojewodztwa.features.length);
  map.on("click", function () {
    if (wojewodztwa.features.length == los) {
      alert("Wygrałeś!");
    } else {
      alert("Spróbuj jeszcze raz.");
    }
  });
}
