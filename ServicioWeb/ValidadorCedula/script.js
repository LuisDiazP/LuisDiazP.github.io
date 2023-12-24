function validarCedula() {
    const cedula = document.getElementById('cedulaInput').value;

    fetch('http://localhost:3000/validar-cedula', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cedula })
    })
    .then(response => response.json())
    .then(data => {
      const resultado = document.getElementById('resultado');
      
      if (data.isValid) {
        resultado.textContent = 'La cédula es válida.';
        resultado.classList.remove('invalid');
        resultado.classList.add('valid');
      } else {
        resultado.textContent = 'La cédula no es válida.';
        resultado.classList.remove('valid');
        resultado.classList.add('invalid');
      }
    })
    .catch(error => {
      console.error('Error al validar la cédula:', error);
      const resultado = document.getElementById('resultado');
      resultado.textContent = 'Error al validar la cédula.';
      resultado.classList.remove('valid', 'invalid');
    });
}

