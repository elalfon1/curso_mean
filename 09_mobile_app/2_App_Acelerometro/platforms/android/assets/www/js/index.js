var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        /*console.log("Acelerometro: " + navigator.accelerometer);
        alert("Acelerometro: " + navigator.accelerometer);*/

        //navigator.accelerometer.getCurrentAcceleration(app.alRecibirDatos, app.alRecibirError);

        var options = { timeout: 3000 }; //Cada 3 segundos
        alert("GPS: " + navigator.notification);
        //var watchID = navigator.accelerometer.watchAcceleration(app.alRecibirDatos, app.alRecibirError, options);
        //var watchID = navigator.geolocation.watchPosition(app.alRecibirGPS, app.alRecibirError, options);
        //navigator.geolocation.getCurrentPosition(app.alRecibirGPS, app.alRecibirError, options);

        navigator.notification.confirm(
            'Decide', // message
            app.alPulsar, // callback to invoke with index of button pressed
            '¿Quieres vibrar?', // title
            ['Aceptar', 'Cancelar'] // buttonLabels
        );

    },
    alPulsar: function(buttonIndex) {

        if (buttonIndex == 1)
            navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
        alert('You selected button ' + buttonIndex);
    },
    alRecibirGPS: function(geopos) {
        var divGPS = document.getElementById("posicion_gps");
        divGPS.innerHTML = "<p>Latitud: " + geopos.coords.latitude + "</p>" +
            "<p>Longitud: " + geopos.coords.longitude + "</p>" +
            "<p>Altura: " + geopos.coords.altitude + "</p>" +
            "<p>Dirección recorrido: " + geopos.coords.heading + "</p>" +
            "<p>Velocidad: " + geopos.coords.speed + "</p>";
    },
    alRecibirDatos: function(aceleracion) {
        alert("Aceleracion X: " + aceleracion.x + "\n" +
            "Aceleracion Y: " + aceleracion.y + "\n" +
            "Aceleracion Z: " + aceleracion.z + "\n" +
            "En el momento: " + aceleracion.timestamp + "\n");
    },
    //Funcion callback común al acelerometro y el GPS
    alRecibirError: function(error) {
        alert("Ha habido un error\n" +
            "Codigo error: " + error.code + "\n" +
            "Mensaje: " + error.message);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();