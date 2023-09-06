document.addEventListener("DOMContentLoaded", function () {
    const palabraInput = document.getElementById("palabra");
    const idiomaOrigenSelect = document.getElementById("idioma-origen");
    const idiomaDestinoSelect = document.getElementById("idioma-destino");
    const resultadoDiv = document.getElementById("resultado");
    const traduccionP = document.getElementById("traduccion");
    const historialDiv = document.getElementById("historial");
    const listaHistorial = document.getElementById("lista-historial");
    const traducciones = {
        es: {
            hola: "hello",
            adiós: "goodbye",
            casa: "house",
            perro: "dog",
            gato: "cat",
        },
        en: {
            hello: "hola",
            goodbye: "adiós",
            house: "casa",
            dog: "perro",
            cat: "gato",
        },
    };

    function mostrarResultado(texto) {
        traduccionP.textContent = texto;
        resultadoDiv.style.display = "block";
    }

    function agregarTraduccionAlHistorial(palabra, origen, destino, traduccion) {
        const nuevaTraduccion = document.createElement("li");
        nuevaTraduccion.textContent = `${palabra} (${origen} -> ${destino}): ${traduccion}`;
        listaHistorial.appendChild(nuevaTraduccion);
        historialDiv.style.display = "block";
    }

    function traducir() {
        const palabra = palabraInput.value.trim();
        const origen = idiomaOrigenSelect.value;
        const destino = idiomaDestinoSelect.value;

        if (!palabra) {
            mostrarResultado("Ingresa una palabra");
            return;
        }

        const traduccion = traducciones[origen]?.[palabra.toLowerCase()] || "No se encontró traducción";
        mostrarResultado(traduccion);

        agregarTraduccionAlHistorial(palabra, origen, destino, traduccion);
    }

    document.getElementById("traducir-btn").addEventListener("click", traducir);
});




  