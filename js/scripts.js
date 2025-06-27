$(document).ready(function () {
  // Validación del formulario de contacto
  $('#contactoForm').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (!nombre || !correo || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    alert('Mensaje enviado correctamente.');
    this.reset(); // Más limpio (creo)
  });

  // Evaluación del test de seguridad
  $('#testForm').on('submit', function (e) {
    e.preventDefault();

    const respuestasCorrectas = [
      $('input[name="pregunta1"]:checked').val(),
      $('input[name="pregunta2"]:checked').val()
    ];

    const correctas = respuestasCorrectas.filter(respuesta => respuesta === 'correcto').length;

    $('#resultadoTest').html(`
      <div class="alert alert-info">
        Obtuviste ${correctas}/2 respuestas correctas.
      </div>
    `);
  });
});

