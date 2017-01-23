if (typeof Modelo == "undefined") {
    Modelo = {};
}
Modelo.Habitaciones = {
    lista: [],
    listaReservas: [{ numero: 101, doble: true, fecha_inicio: 1485126000000, fecha_fin: 1485212400000 },
        { numero: 201, doble: false, fecha_inicio: 1485298800000, fecha_fin: 1485298800000 },
        { numero: 102, doble: true, fecha_inicio: 1485212400000, fecha_fin: 1485385200000 },
        { numero: 103, doble: false, fecha_inicio: 1485385200000, fecha_fin: 1485385200000 },
        { numero: 204, doble: true, fecha_inicio: 1485126000000, fecha_fin: 1485471600000 },
        { numero: 204, doble: false, fecha_inicio: 1485558000000, fecha_fin: 1486076400000 }

    ],
    agregar: function(habitacion) {
        this.lista.push(habitacion);
    },
    quitar: function(numero) {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].numero == numero) {
                this.lista.splice(i, 1);
            }
        }
    },
    disponibilidadDia: function(fecha, tipoHab) {

        var dia = 86400000;
        var dispHab = 0;

        for (i = 0; i < this.listaReservas.length; i++) {
            if (this.listaReservas[i].doble == tipoHab) {
                for (j = this.listaReservas[i].fecha_inicio; j <= this.listaReservas[i].fecha_fin;) {

                    if (j == fecha) {

                        ++dispHab;
                    }

                    j = j + dia;
                }
            }

        }
        return dispHab;
    }

};