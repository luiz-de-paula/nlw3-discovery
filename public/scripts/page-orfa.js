const map = L.map('mapid').setView([-22.441569, -44.313639], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Casa Abrigo PR <a href="/orfanato" class="choose-orfanato"><img src="/images/arrow-white.svg"></a>');




L
    .marker([-22.441569, -44.313639], { icon })
    .addTo(map)
    .bindPopup(popup)