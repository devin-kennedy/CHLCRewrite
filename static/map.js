function initMap() {
    const location = {lat: 39.9155869, lng: -75.3411226};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.initMap = initMap;