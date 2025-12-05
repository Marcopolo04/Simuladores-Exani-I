const bancoPreguntas = [
    {
        pregunta: "1. ¿Cuál es el resultado de la operación (8 + 4) ÷ 2 - 3?",
        opciones: ["3", "1", "5", "6"],
        respuesta: 0 // Índice de la respuesta correcta (0 es la A, 1 es la B...)
    },
    {
        pregunta: "2. Si x + 5 = 12, ¿cuál es el valor de x?",
        opciones: ["5", "6", "7", "17"],
        respuesta: 2
    },
    {
        pregunta: "3. ¿Cuál es el siguiente número en la sucesión: 2, 5, 10, 17...?",
        opciones: ["24", "26", "25", "27"],
        respuesta: 1 // La lógica es n^2 + 1
    },
    {
        pregunta: "4. Un artículo cuesta $500 y tiene un 20% de descuento. ¿Cuánto se paga?",
        opciones: ["$450", "$350", "$400", "$480"],
        respuesta: 2
    },
    {
        pregunta: "5. ¿Cuál es el área de un triángulo con base 10 cm y altura 5 cm?",
        opciones: ["50 cm²", "25 cm²", "15 cm²", "100 cm²"],
        respuesta: 1
    },
    {
        pregunta: "6. Simplifica la expresión: 3x + 2y - x + 5y",
        opciones: ["2x + 7y", "4x + 7y", "2x - 3y", "2x + 3y"],
        respuesta: 0
    },
    {
        pregunta: "7. ¿Cuál es la probabilidad de lanzar un dado y obtener un número par?",
        opciones: ["1/3", "1/2", "1/6", "2/3"],
        respuesta: 1
    },
    {
        pregunta: "8. Convierte 3/4 a decimal.",
        opciones: ["0.65", "0.70", "0.75", "0.80"],
        respuesta: 2
    },
    {
        pregunta: "9. ¿Cuántos grados suman los ángulos internos de un triángulo?",
        opciones: ["90°", "180°", "270°", "360°"],
        respuesta: 1
    },
    {
        pregunta: "10. Si el promedio de 3 números es 10 y dos de ellos son 8 y 12, ¿cuál es el tercero?",
        opciones: ["10", "12", "8", "9"],
        respuesta: 0
    }
    // AQUÍ PUEDES AGREGAR MÁS PREGUNTAS COPIANDO EL FORMATO
];

function cargarPreguntas() {
    const container = document.getElementById('quiz-container');
    // Mezclar preguntas aleatoriamente (opcional)
    bancoPreguntas.sort(() => Math.random() - 0.5);

    bancoPreguntas.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        
        let opcionesHTML = '';
        item.opciones.forEach((opcion, i) => {
            opcionesHTML += `
                <label>
                    <input type="radio" name="pregunta${index}" value="${i}">
                    ${opcion}
                </label>
            `;
        });

        div.innerHTML = `
            <div class="question-title">${item.pregunta}</div>
            <div class="options">${opcionesHTML}</div>
        `;
        container.appendChild(div);
    });
}

function calcularResultado() {
    let puntaje = 0;
    const total = bancoPreguntas.length;

    bancoPreguntas.forEach((item, index) => {
        const opciones = document.getElementsByName(`pregunta${index}`);
        let seleccionado = -1;
        opciones.forEach((opcion) => {
            if (opcion.checked) seleccionado = parseInt(opcion.value);
        });

        if (seleccionado === item.respuesta) {
            puntaje++;
            // Opcional: Marcar en verde si es correcto visualmente
            opciones[seleccionado].parentElement.style.backgroundColor = "#d4edda";
        } else if (seleccionado !== -1) {
            // Opcional: Marcar en rojo si falló
            opciones[seleccionado].parentElement.style.backgroundColor = "#f8d7da";
        }
    });

    const resultadoDiv = document.getElementById('result');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `Tu calificación: ${puntaje} / ${total}`;
    
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('retry-btn').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

// Iniciar al cargar
window.onload = cargarPreguntas;
