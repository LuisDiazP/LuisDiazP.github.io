const datosGuardadosDiv = document.getElementById('datosGuardados');
const tabs = document.querySelectorAll('.tab');
const fieldsetEnfermedad = document.getElementById('fieldsetEnfermedad');
const fieldsetPacientes = document.getElementById('fieldsetPacientes');
const fieldsetTabs = document.querySelectorAll('.fieldset-tab');
const btnNext = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll('.btn-prev');
let fieldsetTabsNum = 0;
let datos = [];
let editando = false;

let infoCentoM = ['Paciente','Pariente','Sintomas','Internamiento'];

// Ir al siguiente paso
btnNext.forEach((btn) => {
  btn.addEventListener('click', function(e) {
      const fieldsetTabActive = document.querySelector('.fieldset-tab-active');
      const inputs = fieldsetTabActive.querySelectorAll('input, textarea, select');
      let canAdvance = true;

      // Agregar alerta si faltan requisitos
      inputs.forEach(input => {
          if (!input.value) {
              canAdvance = false;
              showError(input, 'Este campo es requerido');
          } else {
              hideError(input);
          }
      });

      // Ir al siguiente paso si cumple requisitos
      if (canAdvance == true) {
          saveInfo(fieldsetTabsNum, fieldsetTabActive);
          fieldsetTabsNum++;
          tabs.forEach(tab => {
            tab.classList.contains("active") && tab.classList.remove("active");
          });
          tabs[fieldsetTabsNum].classList.add("active");
          fieldsetTabs.forEach((fieldsetTab) => {
            fieldsetTab.classList.contains("fieldset-tab-active") && fieldsetTab.classList.remove("fieldset-tab-active");
          });

          if(fieldsetTabsNum == 4){
            datosGuardadosDiv.classList.add("mostrarDatos-active");
            if(editando){
              resetData();
            }
            mostrarDatos();
          }
          else{
            fieldsetTabs[fieldsetTabsNum].classList.add("fieldset-tab-active");
          }
      }

      e.preventDefault();
  });

  // Mostrar mensaje de error
  function showError(input, message) {
      const formGroup = input.closest('.input-group');
      let error = formGroup.querySelector('.error-message');

      if (!error) {
          error = document.createElement('span');
          error.classList.add('error-message');
          formGroup.appendChild(error);
      }

      error.textContent = message;
      formGroup.classList.add('error');
  }

  // Quitar mensaje de error
  function hideError(input) {
      const formGroup = input.closest('.input-group');
      const error = formGroup.querySelector('.error-message');
      if (error) {
          error.remove();
      }
      formGroup.classList.remove('error');
  }

  function saveInfo(fieldsetTabsNum, FsTActive) {
    switch (fieldsetTabsNum) {
      case 0:
        const paciente = {
          Nombre: FsTActive.querySelector("input[name='nombre']").value,
          Apellido: FsTActive.querySelector("input[name='apellido']").value,
          Cedula: FsTActive.querySelector("input[name='cedula']").value,
          Edad: FsTActive.querySelector("input[name='edad']").value,
          "Fecha nacimiento": FsTActive.querySelector("input[name='nacimiento']").value,
          Genero: FsTActive.querySelector("select[name='genero']").value,
          Telefono: FsTActive.querySelector("input[name='telefono']").value,
          Direccion: FsTActive.querySelector("textarea[name='direccion']").value
        };
        
        datos.push(paciente);
        return;
      case 1:
        const pariente = {
          Nombre: FsTActive.querySelector("input[name='nombre']").value,
          Apellido: FsTActive.querySelector("input[name='apellido']").value,
          Parentezco: FsTActive.querySelector("input[name='parentezco']").value,
          Telefono: FsTActive.querySelector("input[name='telefono']").value
        };
        
        datos.push(pariente);
        return;

      case 2:
        const sintomas = {
          Sintoma: FsTActive.querySelector("input[name='sintoma']").value,
          Tiempo: FsTActive.querySelector("input[name='tiempo']").value,
          Detalle: FsTActive.querySelector("textarea[name='detalles']").value
        };
        
        datos.push(sintomas);
        return;

      case 3:
        const internamiento = {
          Fecha: FsTActive.querySelector("input[name='fecha']").value,
          "Centro Medico": FsTActive.querySelector("input[name='centroM']").value,
          Diagnostico: FsTActive.querySelector("textarea[name='diagnostico']").value
        };
        
        datos.push(internamiento);
        return;
      default:
        break;
    }
  }

});

prevBtns.forEach((btn) => { 
  btn.addEventListener("click", () => {
    fieldsetTabsNum--;
    tabs.forEach(tab => {
      tab.classList.contains("active") && tab.classList.remove("active");
    });
    tabs[fieldsetTabsNum].classList.add("active");
    fieldsetTabs.forEach((fieldsetTab) => {
      fieldsetTab.classList.contains("fieldset-tab-active") && fieldsetTab.classList.remove("fieldset-tab-active");
    });
    fieldsetTabs[fieldsetTabsNum].classList.add("fieldset-tab-active");
      //updateProgressbar();
  });
});

// Función para mostrar los datos contenidos en el arreglo 'datos'
function mostrarDatos() {
  datos.forEach((item, index) => {
    console.log(`Registro #${index + 1}:`);
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        console.log(`${key}: ${item[key]}`);
      }
    }
    console.log('-------------------------');
  });
}

function mostrarDatos() {
  let html = '';
  let n = 1;
  html += '<a type="btn" value="editar" class="btn btn-editar width-50 ml-auto">Editar</a>';
  datos.forEach((item, index) => {
    html += `<div>`;
    html += `<h3>Informacion ${infoCentoM[index]}:</h3>`;
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        if(n==1){
          html += `<div class="container-twin">
                    <p><strong>${key}:</strong> ${item[key]}</p>`;
          n++; 
        }else{
          html += `<p><strong>${key}:</strong> ${item[key]}</p> 
                  </div>`; 
          n=1;
        } 
      }
    }
    html += `</div><hr>`;
  });

  datosGuardadosDiv.innerHTML = html;

  const btnEdit = document.querySelector('.btn-editar');
  btnEdit.addEventListener('click', ()=>{
    editarFormulario();
  });
}

function editarFormulario(){
  editando = true;
  fieldsetTabsNum = 0;
  
  datosGuardadosDiv.classList.remove("mostrarDatos-active");
  tabs.forEach(tab => {
    tab.classList.contains("active") && tab.classList.remove("active");
  });
  tabs[fieldsetTabsNum].classList.add("active");
  fieldsetTabs.forEach((fieldsetTab) => {
    fieldsetTab.classList.contains("fieldset-tab-active") && fieldsetTab.classList.remove("fieldset-tab-active");
  });
  fieldsetTabs[fieldsetTabsNum].classList.add("fieldset-tab-active");
  console.log(datos);
}

function resetData(){
  let aux = [];
  aux.push(...datos)
  datos = [];
  datos = aux.slice(4, aux.length);
}
