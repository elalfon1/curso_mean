function ControladorHabitaciones() {
    this.lista = Modelo.Habitaciones.lista;
    this.cantidad = function() {
        return Modelo.Habitaciones.lista.length;
    }
    this.delHabitacion = function(numero) {
        Modelo.Habitaciones.quitar(numero);
    }
}

function ControladorHabitacion() {
    this.numero = 1;
    this.doble = false;

    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble
        });
        this.numero++;
    }
}

function ControladorReservas() {
    this.listaReserva = Modelo.Reservas.lista;

    this.quitarReserva = function(numero) {
        Modelo.Reservas.quitarReserva(numero);
    }
}

var moduloAplicacion = angular.module("appNodeHotel", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);
moduloAplicacion.controller("listaReservas", ControladorReservas);