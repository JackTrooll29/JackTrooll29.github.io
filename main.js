function success(pos) {
    let ltd = pos.coords.latitude;
    let long = pos.coords.longitude;

    document.getElementById('ltd').innerHTML = `Latidute: ${ltd}`
    document.getElementById('long').innerHTML = `Longitude: ${long}`

    var map = L.map('map').setView([ltd, long], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([ltd, long]).addTo(map);

}

navigator.geolocation.getCurrentPosition(success)
