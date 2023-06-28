
const Termicas = [{ marca: 'TERMICA SHCNEIDER', info: 'Tetrapolar 30am ', item: 0 }];



alert("BIENVENIDO AL CARRITO DE COMPRAS");
confirm("¿DESEA VER TODOS LOS PRODUCTOS QUE TENEMOS?");

for (const ProdGen in ProductosGenerales) {
    console.log(ProdGen + ':' + ProductosGenerales[ProdGen]);

}
Termicas.forEach((Term) => {
    console.log(Term);
})


confirm("¿DESEA LLEVAR ALGUN PRODUCTO?");

let productos = prompt("¿Que Productos desea llevar?         1️⃣-CAMARA(Hikvision)        2️⃣-CAMARA(Dahua)        3️⃣-PANELSOLAR        4️⃣-INVERSOR(Voltronic)        5️⃣-BATERIA(Ultracell200ah)        6️⃣-REGULADORSOLAR(20ah)       7️⃣-TERMICAS + ESTRUCTURA");





let cantidad = parseInt(prompt("Introduce la cantidad:"));

let total;

switch (productos) {
    case "1":
        total = producto1.total();
        console.log(producto1.marca);
        console.log('Modelo:' + producto1.info);
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), producto1.precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;

    case "2":
        total = producto2.total();
        console.log(producto2.marca);
        console.log('Modelo:' + producto2.info);
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), producto2.precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;

    case "3":
        total = producto3.total();
        console.log(producto3.marca);
        console.log('Modelo:' + producto3.info);
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), producto3.precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;

    case "4":
        total = producto4.total();
        console.log(producto4.marca);
        console.log('Modelo:' + producto4.info);
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), producto4.precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;

    case "5":
        total = producto5.total();
        console.log(producto5.marca);
        console.log('Modelo:' + producto5.info);
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), producto5.precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;

    case "6":
        total = producto6.total();
        console.log(producto6.marca);
        console.log('Modelo:' + producto6.info);
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), producto6.precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;
    case "7":
        total = cantidad;
        console.log(cantidad + '   TERMICAS SCHNEIDER 30am ');



}

let agregar = prompt("Desea agregar algo mas? SI/NO");
let no = 'no';






if (agregar !== 'si') {
    alert("MUCHAS GRACIAS POR LA COMPRA 🙌");
}


///////////     REPITO EL CODIGO (no se como poner todo lo de arriba dentro del while para que se vuelva a repetir , si bien repito todo, el funcionamiento que queria hacer funciona bien)




while (agregar == 'si') {


    let productos = prompt("¿Que Productos desea llevar?        1️⃣-CAMARA(Hikvision)        2️⃣-CAMARA(Dahua)        3️⃣-PANELSOLAR        4️⃣-INVERSOR(Voltronic)        5️⃣-BATERIA(Ultracell200ah)        6️⃣-REGULADORSOLAR(20ah)        7️⃣-TERMICAS + ESTRUCTURA");

    let cantidad = parseInt(prompt("Introduce la cantidad:"));

    let total;

    switch (productos) {
        case "1":
            total = producto1.total();
            console.log(producto1.marca);
            console.log('Modelo:' + producto1.info);
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), producto1.precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;

        case "2":
            total = producto2.total();
            console.log(producto2.marca);
            console.log('Modelo:' + producto2.info);
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), producto2.precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;

        case "3":
            total = producto3.total();
            console.log(producto3.marca);
            console.log('Modelo:' + producto3.info);
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), producto3.precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;

        case "4":
            total = producto4.total();
            console.log(producto4.marca);
            console.log('Modelo:' + producto4.info);
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), producto4.precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;

        case "5":
            total = producto5.total();
            console.log(producto5.marca);
            console.log('Modelo:' + producto5.info);
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), producto5.precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;

        case "6":
            total = producto6.total();
            console.log(producto6.marca);
            console.log('Modelo:' + producto6.info);
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), producto6.precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;
        case "7":
            totalTermicas = cantidad;
            console.log(cantidad + '   TERMICAS SCHNEIDER 30am   ');



    }
    agregar = prompt("Desea agregar algo mas? SI/NO");
    if (agregar === no) {
        alert("MUCHAS GRACIAS POR LA COMPRA 🙌");
    }



}



if (agregar !== 'si') {
    console.log('EL TOTAL DE TODOS LOS PRODUCTOS ES :  ' + '$', total);
    console.log(' + ' , totalTermicas  , '  TERMICAS DE REGALO POR LA COMPRA DE ESTOS PRODUCTOS');
}






