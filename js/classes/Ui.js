export class UI {
    spinner (campo) {
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        campo.prepend(spinner)
    }
    imprimirAlerta(msg, tipo, campo) {
        const divMensaje = document.createElement('div');
        const alertas = document.querySelector('.alerta');
        if (!alertas) {
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
            if (tipo === 'error') {
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }
            divMensaje.textContent = msg;
            campo.append(divMensaje);
            setTimeout(() => {
                divMensaje.remove()
            }, 2000)
        }
    }
    // Imprimir datos en html
    imprimirResultado(temp, tempMin, tempMax, campo) {
       
        const actual = document.createElement('p');
        actual.innerHTML = `${temp} &#8451;`;
        actual.classList.add('font-bold', 'text-6xl');
        
        const max = document.createElement('p');
        max.innerHTML = `${tempMax} &#8451;`;
        max.classList.add('text-xl');

        const min = document.createElement('p');
        min.innerHTML = `${tempMin} &#8451;`;
        min.classList.add('text-xl');

        const resultadoDiv = document.createElement('div')
        resultadoDiv.classList.add('text-center', 'text-white');
        resultadoDiv.append(actual, max, min)
        campo.append(resultadoDiv)
    }

    limpiarHtml(campo) {
        while (campo.firstChild) {
            campo.removeChild(campo.firstChild)
        }
    }
}