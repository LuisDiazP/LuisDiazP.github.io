
var data = {
    menu: [{
        name: 'Cuentas',
        link: '0',
        sub: [{
            name: 'Ahorro',
            link: '0-0',
            sub: [{
                name: 'Cuenta De Ahorros En Pesos',
                link: '0-0-0',
                sub: null
            },{
                name: 'Cuenta De Ahorros Mas',
                link: '0-0-1',
                sub: null
            },{
                name: 'Cuenta De Ahorros Infantil En Pesos',
                link: '0-0-2',
                sub: null
            },{
                name: 'Cuenta De Ahorros Infantil En Dolares',
                link: '0-0-3',
                sub: null
            },{
                name: 'Cuenta De Ahorros Preserva',
                link: '0-0-4',
                sub: null
            },{
                name: 'Cuenta De Ahorros En Dolares',
                link: '0-0-5',
                sub: null
            },{
                name: 'Cuenta De Ahorros En Euros',
                link: '0-0-6',
                sub: null
            },{
                name: 'Cuenta De Ahorros Para Residentes en el Extranjero',
                link: '0-0-7',
                sub: null
            }]
       },{
            name: 'Corriente',
            link: '0-1',
            sub: null /*[{
                name: 'Cuenta Corriente Personal',
                link: '0-1-0',
                sub: null
            },{
                name: 'Cuenta Corriente Mas Personal',
                link: '0-1-1',
                sub: null
            },{
                name: 'Cuenta Corriente Sin Chequera Transaccional',
                link: '0-1-2',
                sub: null
            }]*/
        },{
            name: 'Soluciones Digitales',
            link: '0-2',
            sub: null /*[{
                name: 'Cuenta MIO Banreservas',
                link: '0-2-0',
                sub: null
            },{
                name: 'Cuenta Digital',
                link: '0-2-1',
                sub: null
            }]*/
       }]
    },{
        name: 'Inversiones',
        link: '1',
        sub: [{
            name: 'Certificados',
            link: '1-0',
            sub: null
        },{
            name: 'Mercado de Valores',
            link: '1-1',
            sub: null
        }]
    },{
        name: 'Tarjetas',
        link: '2',
        sub: [{
            name: 'Debito',
            link: '2-0',
            sub: null
        },{
            name: 'Credito',
            link: '2-1',
            sub: null
        }]
    },{
        name: 'Prestamos',
        link: '3',
        sub: [{
            name: 'Personales',
            link: '3-0',
            sub: null
        },{
            name: 'Hipotecarios',
            link: '3-1',
            sub: null
        },{
            name: 'Vehiculos',
            link: '3-2',
            sub: null
        }]
    },{
        name: 'Seguros',
        link: '4',
        sub: [{
            name: 'Seguros De Personas',
            link: '4-0',
            sub: null
        },{
            name: 'Generales',
            link: '4-1',
            sub: null
        }]
    },{
        name: 'Remesas, Impuestos y Servicios',
        link: '5',
        sub: null
    }]

};

function createMenuItem(itemData) {
    var newli = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#" + itemData.link;
    link.innerHTML = itemData.name;
    newli.appendChild(link);

    if (itemData.sub) {
        var subList = document.createElement("ul");
        itemData.sub.forEach(function (subItemData) {
            subList.appendChild(createMenuItem(subItemData));
        });
        newli.appendChild(subList);
    }

    return newli;
}

var menuN = document.getElementById("menuN");
data.menu.forEach(function (menuItemData) {
    menuN.appendChild(createMenuItem(menuItemData));
});

