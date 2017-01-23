var Modelo;

if (typeof Modelo == "undefined") {
    Modelo = {};
}

Modelo.Habitaciones = {
    lista: [],
    agregar: function(habitacion) {
        this.lista.push(habitacion);
    },
    quitar: function(numero) {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].numero == numero) {
                this.lista.splice(i, 1);
            }
        }
    }
};

Modelo.Reservas = {
    lista: [
        { numero: "1", doble: false, fechaInicio: "20/01/2017", fechaFin: "20/04/2017" },
        { numero: "2", doble: true, fechaInicio: "20/01/2017", fechaFin: "20/06/2017" },
        { numero: "3", doble: true, fechaInicio: "20/02/2017", fechaFin: "20/05/2017" }
    ],
    agregarReserva: function(habitacion) {},

    quitarReserva: function(numero) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;

        var yyyy = today.getFullYear();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        var today = dd + '/' + mm + '/' + yyyy;

        for (var i = 0; i < this.lista.length; i++) {

            if (this.lista[i].fechaInicio == today) {
                if (this.lista[i].numero == numero) {
                    Modelo.Habitaciones.lista.push(this.lista[i]);
                    this.lista.splice(i, 1);
                }
            }
        }
    },
    habitacionesDisponibles(reserva) {

    },
    saberSiHabitacionDisponible(numero, fecha) {

    }
};