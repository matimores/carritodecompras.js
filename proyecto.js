alert('CARRITO DE COMPRAS');

let productos = prompt("¿Que Productos desea llevar?          1-CAMARA   2-PANELES   3-INVERSOR-Solar   4-BATERIAS  5-ALARMAS");

let precio = parseInt(prompt("Introduce el precio:"));

let cantidad = parseInt(prompt("Introduce la cantidad:"));

let total;

function camara(precio, cantidad) {

    return precio * cantidad;

}
function paneles(precio, cantidad) {

    return precio * cantidad;

}
function inversorsolar(precio, cantidad) {

    return precio * cantidad;

}
function baterias(precio, cantidad) {

    return precio * cantidad;

}
function alarma(precio, cantidad) {

    return precio * cantidad;

}


switch (productos) {
    case "1":
        total = camara(precio, cantidad);
        console.log("CAMARA");
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;
    case "2":
        total = paneles(precio, cantidad);
        console.log('PANELES');
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;

    case "3":
        total = inversorsolar(precio, cantidad);
        console.log('inversor solar');
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;
    case "4":
        total = baterias(precio, cantidad);
        console.log('baterias');
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;
    case "5":
        total = alarma(precio, cantidad);
        console.log('ALARMA');
        console.log(cantidad, 'Unidades');
        console.log('Precio', ('$'), precio, 'Por unidad');
        console.log("El total de la compra es: " + ('$'), total);
        break;
}




///////////     REPITO EL CODIGO (no se como poner todo lo de arriba dentro del while para que se vuelva a repetir , si bien repito todo, el funcionamiento que queria hacer funciona bien)

let agregar = prompt("Desea agregar algo mas? SI/NO");
let no = 'no';

if (agregar !== 'si') {
    alert("MUCHAS GRACIAS POR LA COMPRA 🛒!");
}

while (agregar == 'si') {

    let productos = prompt("¿Que Productos desea llevar?       1-CAMARA   2-PANELES   3-INVERSOR-Solar   4-BATERIAS  5-ALARMAS");

    let precio = parseInt(prompt("Introduce el precio:"));

    let cantidad = parseInt(prompt("Introduce la cantidad:"));

    let total;

    function camara(precio, cantidad) {

        return precio * cantidad;

    }
    function paneles(precio, cantidad) {

        return precio * cantidad;

    }
    function inversorsolar(precio, cantidad) {

        return precio * cantidad;

    }
    function baterias(precio, cantidad) {

        return precio * cantidad;

    }
    function alarma(precio, cantidad) {

        return precio * cantidad;

    }


    switch (productos) {
        case "1":
            total = camara(precio, cantidad);
            console.log("CAMARA");
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;
        case "2":
            total = paneles(precio, cantidad);
            console.log('PANELES');
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;
        case "3":
            total = inversorsolar(precio, cantidad);
            console.log('inversor solar');
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;
        case "4":
            total = baterias(precio, cantidad);
            console.log('baterias');
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;

        case "5":
            total = alarma(precio, cantidad);
            console.log('ALARMA');
            console.log(cantidad, 'Unidades');
            console.log('Precio', ('$'), precio, 'Por unidad');
            console.log("El total de la compra es: " + ('$'), total);
            break;
    }
    agregar = prompt("Desea agregar algo mas? SI/NO");
    if (agregar === no) {
        alert("MUCHAS GRACIAS POR LA COMPRA 🛒!");
    }

}
