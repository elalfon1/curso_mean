function ControladorCalendario() {
    var scope = this;
    var fecha = new Date();
    var elMesActual = fecha.getMonth(); // (new Date()).getMonth();
    scope.meses = {
        lista: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ],
        listaDiasMes: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        diasMesActual: 0,
        mesActual: elMesActual,
        nextMes: function() {
            if (this.mesActual < this.lista.length - 1) {
                this.mesActual++;
                this.diasMesActual = this.listaDiasMes[this.mesActual];
            }
        },
        prevMes: function() {
            if (this.mesActual > 0) {
                this.mesActual--;
                this.diasMesActual = this.listaDiasMes[this.mesActual];
            }
        },
        cambiarDiasMesActual: function() {
            this.diasMesActual = this.listaDiasMes[this.mesActual];
        },
        getNombreMes: function() {
            return this.lista[this.mesActual];
        },
        validoPrevio: function() {
            return this.mesActual != 0
        },
        validoSiguiente: function() {
            return this.mesActual != (this.lista.length - 1)
        }
    };

    scope.getNumber = function(num) {
            return new Array(num);
        }
        /*
            scope.prueba = function(num) {
                alert(num);
            }
        */
    scope.meses.cambiarDiasMesActual();

}

function ControladorDiasDisponibles() {
    scope = this;

    scope.prueba = function(num) {
        alert("interno" + num);
    }
}
/*
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
var moduloAplicacion = angular.module("appNodeHotel", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);*/

function ControladorDisponibilidadDia() {

    var fechaController;
    /*
        this.fecha = new Date();

        this.crearFecha = function(anio, mes, dia) {
            this.fecha = new Date(anio, mes, dia);
        }


        this.simpleDia = function() {
            fechaController = this.fecha.getTime();
            return Modelo.Habitaciones.disponibilidadDia(fechaController, false);
        }

        this.dobleDia = function() {
            fechaController = this.fecha.getTime();
            return Modelo.Habitaciones.disponibilidadDia(fechaController, true);
        }
    */

    this.simpleDia = function(anio, mes, dia) {
        fechaController = (new Date(anio, mes, dia)).getTime();
        //console.log(anio + "-" + mes + "-" + dia + " datetime" + fechaController);
        return Modelo.Habitaciones.disponibilidadDia(fechaController, false);
    }

    this.dobleDia = function(anio, mes, dia) {
        fechaController = (new Date(anio, mes, dia)).getTime();
        return Modelo.Habitaciones.disponibilidadDia(fechaController, true);
    }
}





moduloAplicacion.controller("CalendarioController", ControladorCalendario);
moduloAplicacion.controller("DiasDisponiblesController", ControladorDiasDisponibles);
moduloAplicacion.controller("ControladorDisponibilidadDia", ControladorDisponibilidadDia);