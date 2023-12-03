const canvas = document.getElementById("canvas");
const form = document.getElementById("form");
const crear = document.getElementById("crear");
const chart = document.getElementById("chart");
const canvaFather = document.getElementById("canvas-container");
let myChart;


chart.addEventListener("click", (e) => {
  e.preventDefault();
  let namesG = [];
  let valuesG = [];
  const names = document.querySelectorAll(".dia");
  let values = document.querySelectorAll(".cantidad");
  names.forEach(element=>{
    if(element.value != "")
      namesG.push(element.value);
  });

  
  values.forEach(element=>{
    if(element.value != "")
      valuesG.push(element.value);
  });

  canvaFather.hidden = false;
  canvas.hidden = false;
  createChart(namesG, valuesG);
});


crear.addEventListener("click", (e) => {
  const inputs = document.getElementById("container-inputs");

  const container = document.createElement("div");
  container.className = 'container-info';

  const newIntputName = document.createElement("input");
  newIntputName.type = "text";
  newIntputName.className = 'dia';
  newIntputName.placeholder = 'Inserte el dia de la semana';
 
  container.appendChild(newIntputName);

  const newIntputValue = document.createElement("input");
  newIntputValue.type = "number";
  newIntputValue.className = 'cantidad';
  newIntputValue.placeholder = 'Inserte el numero de estudiantes presentes';

  container.appendChild(newIntputValue);

  inputs.appendChild(container);
});

function createChart(names, values) {

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: names,
      datasets: [
        {
          label: "Estudiantes presentes",
          data: values,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 133, 213)',
            'rgb(255, 160, 122)',
            'rgb(160, 210, 243)'
          ],
          hoverOffset: 4
        },
      ],
    },
    options: {
      radius: '85%'
    },
    
  });

}
