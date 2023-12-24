function guardarDatos() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    if (nombre && email) {
      var datos = {
        nombre: nombre,
        email: email
      };

      localStorage.setItem('formularioDatos', JSON.stringify(datos));
      alert('Datos guardados correctamente en el localStorage.');

      mostrarDatosGuardados();

      document.getElementById('myForm').reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  function mostrarDatosGuardados() {
    var datosGuardados = localStorage.getItem('formularioDatos');
    if (datosGuardados) {
      datosGuardados = JSON.parse(datosGuardados);
      var datosDiv = document.getElementById('datosGuardados');
      datosDiv.innerHTML = `<h2>Datos Guardados:</h2>
                            <p><strong>Nombre:</strong> ${datosGuardados.nombre}</p>
                            <p><strong>Correo Electrónico:</strong> ${datosGuardados.email}</p>`;
    } else {
      alert('No se encontraron datos guardados.');
    }
  }

  mostrarDatosGuardados();
  