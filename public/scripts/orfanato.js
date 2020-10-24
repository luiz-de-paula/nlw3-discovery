const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scroolwheelZoom: false,
    zoomControl: false
}



const map = L.map('mapid', options).setView([-22.4221638, -44.2853376], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});




L
    .marker([-22.4221638, -44.2853376], { icon })
    .addTo(map)

// // image gallery
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes ".active"
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => { button.classList.remove("active") })

    // function removeActiveClass(button){
    //     button.classList.remove("active")
    // }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orfa-details > img")

    //atualizar o container de imagem (A imagem maior)
    imageContainer.src = image.src

    //adicionar a classe "active" para o botão clicado
    button.classList.add('active')
    console.log("cliquei no botão")
}