document.addEventListener("DOMContentLoaded", function () {
    const cedulaInput = document.getElementById("cedulaInput");
    const validarButton = document.getElementById("validarButton");
    const resultado = document.getElementById("resultado");

    validarButton.addEventListener("click", function() { 
        const cedula = cedulaInput.value;
        if (validarCedula(cedula)) {
            resultado.textContent = "La cédula es válida.";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "La cédula no es válida.";
            resultado.style.color = "red";
        }
    });

    function validarCedula(cedula) {
        // Eliminar espacios en blanco y guiones
        cedula = cedula.replace(/\s+/g, '').replace(/-/g, '');
        // Verificar la longitud y si es un número
        if (!/^\d+$/.test(cedula) || (cedula.length !== 11)) {
          return false;
        }
      
        // Verificar el dígito verificador
        const digitoVerificador = parseInt(cedula.charAt(cedula.length - 1), 10);
        const digitos = cedula.slice(0, cedula.length - 1).split('').map(Number);
        if (cedula.length === 11) {
          // Cédula de ciudadanía
          let suma = 0;
          for (let i = digitos.length; i > 0; i--) {
            const digito = digitos[i-1];
            if (i % 2 === 0) {
              let producto = digito * 2;
              if (producto > 9) {
                producto -= 9;
              }
              suma += producto;
            } else {
              suma += digito;
            }
          }
          const decenaSuperior = Math.ceil(suma / 10) * 10;
          const resultado = decenaSuperior - suma;
      
          return resultado === digitoVerificador;
        }
      
        return false;
      }

});