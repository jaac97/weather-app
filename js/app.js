import { UI } from "./classes/Ui.js";

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

const ui = new UI;

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

const buscarClima = (e) => {
    e.preventDefault();
    // validar inputs
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
    if (ciudad === '' || pais === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error', formulario)
        return;
    }
    // Hacer llamado a api
    consultarApi(ciudad, pais);
}
function consultarApi(ciudad, pais) {
    const id = "14e77b4fd0076f10023100f61deef228";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`
    ui.spinner(resultado)
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            ui.limpiarHtml(resultado)
            if (respuesta.cod === "404") {
                ui.imprimirAlerta('Ciudad o país no existe', 'error', resultado)
                return;
            }
            // const {weather, main} = respuesta;
            // Selecionar datos de api
            mostrarRespuesta(respuesta)
        })
        .catch(error => console.log(error))
}

function mostrarRespuesta(respuesta) {
    const { main: { temp, temp_max, temp_min } } = respuesta;
    const actual = Math.floor(temp - 273.15)
    const tempMax = Math.floor(temp_max - 273.15)
    const tempMin = Math.floor(temp_min - 273.15)

    ui.imprimirResultado(actual, tempMax, tempMin, resultado);
}