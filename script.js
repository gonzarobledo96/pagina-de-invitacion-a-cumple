function updateCountdown() {
  // Obtener la fecha actual
  var currentDate = new Date();

  // Obtener la fecha del cumpleaños (31 de agosto)
  var birthdayDate = new Date(currentDate.getFullYear(), 7, 31);

  // Si la fecha actual es posterior al cumpleaños, se agrega un año para el próximo cumpleaños
  if (currentDate > birthdayDate) {
    birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
  }

  // Calcular la diferencia en segundos entre la fecha actual y el cumpleaños
  var timeDiff = (birthdayDate.getTime() - currentDate.getTime()) / 1000;

  // Calcular los meses, días, horas, minutos y segundos restantes
  var monthsDiff = Math.floor(timeDiff / (30 * 24 * 60 * 60));
  var daysDiff = Math.floor((timeDiff % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
  var hoursDiff = Math.floor((timeDiff % (24 * 60 * 60)) / (60 * 60));
  var minutesDiff = Math.floor((timeDiff % (60 * 60)) / 60);
  var secondsDiff = Math.floor(timeDiff % 60);

  // Actualizar los elementos de la cuenta regresiva en el HTML
  document.getElementById("months").innerHTML = monthsDiff;
  document.getElementById("days").innerHTML = daysDiff;
  document.getElementById("hours").innerHTML = hoursDiff;
  document.getElementById("minutes").innerHTML = minutesDiff;
  document.getElementById("seconds").innerHTML = secondsDiff;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);




// boton subir
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#subir-btn').fadeIn();
    } else {
      $('#subir-btn').fadeOut();
    }
  });

  $('#subir-btn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});
