const btnMenu = document.querySelectorAll('.btn-menu');
const sectMenuOptions = document.querySelectorAll('.sect-Mopt');

function agregarActivo(index){

  sectMenuOptions.forEach(seccion => {
      seccion.classList.remove('sect-Mopt-active');
    });

  sectMenuOptions[index].classList.add('sect-Mopt-active');
}

btnMenu.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    agregarActivo(index);
  });
});

// window.addEventListener('load', function() {
//   window.location.href = 'ruta/a/tu/archivo.html';
// });