
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/ValidadorCedula/'); // Cambia aquí por la URL de tu aplicación frontend
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
//     // Habilitar preflight
//     if (req.method === 'OPTIONS') {
//       res.sendStatus(200);
//     } else {
//       next();
//     }
// });

app.post('/validar-cedula', (req, res) => {
  const { cedula } = req.body;

  const isValid = validarCedula(cedula);

  res.json({ isValid });
});

function validarCedula(cedula) {
    cedula = cedula.replace(/\s+/g, '').replace(/-/g, '');
    if (!/^\d+$/.test(cedula) || (cedula.length !== 11)) {
      return false;
    }
  
    const digitoVerificador = parseInt(cedula.charAt(cedula.length - 1), 10);
    const digitos = cedula.slice(0, cedula.length - 1).split('').map(Number);
    if (cedula.length === 11) {
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

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
