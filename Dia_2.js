// Evento para el botón "Enviar" inicial
document.getElementById("submitButton").addEventListener("click", function() {
    // Obtener las respuestas del usuario
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const language = document.getElementById("language").value;

    // Generar el mensaje final
    const message = `Hola ${name}, tienes ${age} años y ya estás aprendiendo ${language}!`;

    // Mostrar el mensaje en la página web
    document.getElementById("resultMessage").textContent = message;

    // Mostrar la segunda pregunta
    document.getElementById("followUpQuestion").textContent = `¿Te gusta estudiar ${language}? Responde con el número 1 para SÍ o 2 para NO.`;
    document.getElementById("followUp").style.display = "block";
});

// Evento para el botón "Enviar respuesta" en la segunda pregunta
document.getElementById("followUpButton").addEventListener("click", function() {
    // Obtener la respuesta del usuario
    const likeLanguage = document.querySelector('input[name="likeLanguage"]:checked').value;

    // Determinar el mensaje basado en la respuesta
    let finalMessage;
    if (likeLanguage === "1") {
        finalMessage = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    } else if (likeLanguage === "2") {
        finalMessage = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    }

    // Mostrar el mensaje final en la página web
    document.getElementById("finalMessage").textContent = finalMessage;
});
