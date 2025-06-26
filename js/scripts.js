// Validación del formulario
$('#contactoForm').on('submit', function (e) {
  e.preventDefault();
  const nombre = $('#nombre').val().trim();
  const correo = $('#correo').val().trim();
  const mensaje = $('#mensaje').val().trim();

  if (nombre === '' || correo === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
  } else {
    alert('Mensaje enviado correctamente.');
    $(this)[0].reset();
  }
});

// Evaluación del test de seguridad
$('#testForm').on('submit', function (e) {
  e.preventDefault();
  let correctas = 0;

  if ($('input[name="pregunta1"]:checked').val() === 'correcto') correctas++;
  if ($('input[name="pregunta2"]:checked').val() === 'correcto') correctas++;

  $('#resultadoTest').html(`<div class="alert alert-info">Obtuviste ${correctas}/2 respuestas correctas.</div>`);
});
