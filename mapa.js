// Inicializar el mapa
function initMap() {
    // Crear el mapa sin ubicación inicial
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Zoom inicial
    });

    // Verificar si el navegador soporta geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Centrar el mapa en la ubicación del usuario
                map.setCenter(userLocation);

                // Añadir un marcador en la ubicación del usuario
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Estás aquí",
                });
            },
            () => {
                handleLocationError(true, map.getCenter(), map);
            }
        );
    } else {
        // Navegador no soporta geolocalización
        handleLocationError(false, map.getCenter(), map);
    }
}

// Manejar errores de geolocalización
function handleLocationError(browserHasGeolocation, pos, map) {
    const infoWindow = new google.maps.InfoWindow({
        position: pos,
        content: browserHasGeolocation
            ? "Error: Falló el servicio de geolocalización."
            : "Error: Tu navegador no soporta geolocalización.",
    });
    infoWindow.open(map);
}