const map = L.map('mapid').setView([-22.441569, -44.313639], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});
let marker;
// criar e adicionar marcação no mapa.
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove icone anterior para adicionar um novo
    marker && map.removeLayer(marker)


    // criar icone no mapa, marcando o orfanato
    marker = L.marker([lat, lng], { icon })
        .addTo(map)


})

//adicionar fotos ao campo "fotos"
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
        // duplicar esse contaner .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
        // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        //verificar se campo está vazio, se sim não add ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }



    //limpar o campo antes de adicionar o novo
    newFieldContainer.children[0].value = ""


    //adicionar o clona ao container #images
    container.appendChild(newFieldContainer)


}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
    //retirar a class.active do botaão
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'));
    //adicionar a class .active
    const button = event.currentTarget
    button.classList.add('active')
        // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value







}