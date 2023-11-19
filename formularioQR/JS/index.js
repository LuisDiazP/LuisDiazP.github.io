const inputs = [...document.querySelectorAll('input:not([type="submit"])')];
const form = document.getElementById('form');
const phone = document.getElementById('telefono')
const submit = document.querySelector("a");
const divCont = document.createElement('div');
divCont.className = 'qrContainer'
const divQr = document.createElement('div');
divQr.id = 'qrcode';
divCont.appendChild(divQr);
const divBtn = document.createElement('div');
divBtn.className = 'btns-group';
const abtn = document.createElement('a');
abtn.innerHTML = 'cerrar';
divBtn.appendChild(abtn);
divCont.appendChild(divBtn);
document.body.appendChild(divCont);
const qr = document.getElementById("qrcode");
let phonePass = true;
phone.addEventListener('keydown', function(event) {
    if (!/[\d]/.test(event.key) && event.key !== 'Enter' && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      event.preventDefault();
    }
});

phone.addEventListener('input', function(event){
    let valor = this.value;
    if (valor.length == 4) {
        valor = '(' + valor.slice(0, 3) + ') ' + valor.slice(3);
    }
    if (valor.length == 9) {
        valor = valor.slice(0, 9) + '-' + valor.slice(9);
    }
    this.value = valor;
});
  

submit.addEventListener("click", function(e) {
    divCont.classList.add("visible");
    let canCreate = true;
    if(((phone.value.slice(1, 4).includes('809')) || phone.value.slice(1, 4).includes('829') || phone.value.slice(1, 4).includes('849')) == false){
        phonePass = false;
    }else{
        phonePass = true;
    }

    if(canCreate === true && phonePass === true){
        generarQR();
    }

    function generarQR(){

        const nombre = form.elements['nombre'].value;
        const apellido = form.elements['apellido'].value;
        const correo = form.elements['correo'].value;
        const empresa = form.elements['empresa'].value;
        const telefono = phone.value;

        var datos = `BEGIN:VCARD\nVERSION:3.0\nN:${apellido};${nombre}\nORG:${empresa}\nTEL:${telefono}\nEMAIL:${correo}\nEND:VCARD`;

        qr.innerHTML = "" ;
        const qrCodeD = new QRCode(qr, {
            text: datos,
            width: 200,
            height: 200
        });
        
    }

    abtn.addEventListener('click', function(){
         // Recargar la página
        location.reload();
    })

    e.preventDefault();
      
})