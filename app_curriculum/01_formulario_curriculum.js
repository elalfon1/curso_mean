var ESPACIOS = "&nbsp;&nbsp;&nbsp;&nbsp;";
var RETORNO = "<br/>";
var storage = localStorage;
var empresas = [];
var txtJson = document.getElementById("json");
var sctExperiencia = document.getElementById("experiencia");

function cargarStorage() {
    var empresasLocal = storage.getItem("empresas");

    if (empresasLocal != null) {
        empresas = JSON.parse(empresasLocal);
        pintarTextarea();
        pintarExperiencia();
    }

}

function modificarStorage() {
    if (typeof empresas != "undefined")
        storage.setItem("empresas", JSON.stringify(empresas));

}


function addJson(formulario) {
    var nuevaEmpresa = {
        nombre: formulario.empresa.value,
        cargo: formulario.cargo.value,
        fecha_inicio: formulario.fecha_ini.value,
        fecha_fin: formulario.fecha_fin.value,
        localizacion: formulario.localizacion.value
    };
    empresas.push(nuevaEmpresa);

    modificarStorage();

    pintarTextarea();
    pintarExperiencia();
    return false;
}

function cargarMostrar() {
    empresas = JSON.parse(txtJson.value);
    modificarStorage();
    pintarExperiencia();
}


function pintarTextarea() {
    var textoEmpresas = JSON.stringify(empresas);
    txtJson.value = textoEmpresas;
}

function pintarExperiencia() {
    sctExperiencia.innerHTML = "";
    for (var i = 0; i < empresas.length; i++) {
        sctExperiencia.innerHTML += RETORNO + "<p>";
        sctExperiencia.innerHTML += empresas[i].nombre + ESPACIOS;
        sctExperiencia.innerHTML += empresas[i].cargo + ESPACIOS;
        sctExperiencia.innerHTML += empresas[i].localizacion + RETORNO + RETORNO;
        sctExperiencia.innerHTML += empresas[i].fecha_inicio + ESPACIOS;
        sctExperiencia.innerHTML += empresas[i].fecha_fin + "</p>";
    }
}