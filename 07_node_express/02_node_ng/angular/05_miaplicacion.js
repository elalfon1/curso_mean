function ControladorSimple($scope) {
    $scope.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietnam/Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Fernando', ciudad: 'Vitoria' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Madrid' }
    ];

    $scope.addCliente = function() {
        $scope.misClientes.push({ nombre: $scope.nombreCliente, ciudad: $scope.ciudadCliente });
    }
}

function ControladorAnimales(miScope) {
    miScope.misAnimales = [
        { nombre: 'Gato', familia: 'felinos' },
        { nombre: 'Perro', familia: 'cánidos' }
    ];
}

//Para poder usar this en el html habremos hecho "nombreControlador as variable"
function ControladorDePlantas($rootScope) {
    this.misPlantas = [
        { nombre: 'Rosa', color: 'Rojo' },
        { nombre: 'Margarita', color: 'Blanco' }
    ];

    this.mostrarPlanta = function() {
        alert(this.nombrePlanta);
    }

    $rootScope.scopeGlobal = "'Scope' Global";
}

var modulo = angular.module("miAplicacion", []); //'miAplicacion' de la directiva ng-app

modulo.controller("ControladorMuySimple", ControladorSimple); //"ControladorMuySimple" de la directiva ng-controller

// En este caso podemos renombrar $scope en la funcion porque tiene el array de variables de controlador antes 
// y los asocia
modulo.controller("ControladorAnimales", ['$scope', ControladorAnimales]);


modulo.controller("ControladorPlantas", ControladorDePlantas);


//otra manera de escribirlo
//angular.module("miAplicacion", []).controller("ControladorSimple", ControladorSimple);