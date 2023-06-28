class Productos {
    marca;
    info;
    precio;


    constructor(marca, info, precio) {
        this.marca = marca;
        this.info = info;
        this.precio = precio;
        this.total = () => {
            return this.precio * cantidad;
        }
    }
}


class General {
    Productos;
    Info;
    Garantia
    constructor(Productos, Informacion, Garantia) {
        this.Productos = Productos;
        this.Info = Informacion;
        this.Garantia = Garantia;

    }
}



const producto1 = new Productos('Camara Hikvision', 'ASDA1335 4MPX', 5600);
const producto2 = new Productos('Camara Dahua', 'LOXQE8100  3MPX', 7620);
const producto3 = new Productos('Panel solar', '550w', 118000);
const producto4 = new Productos('Inversor Voltronic', 'Inversor Voltronic 3000w', 187000);
const producto5 = new Productos('Bateria Ultracell', 'Bateria ciclo profundo solar 200ah', 225000);
const producto6 = new Productos('Regulador Solar', 'Regulador 20ah', 8200);

const ProductosGenerales = new General(' Camara Hikvision - Camara Dahua - Panel Amerisolar - Inversor Voltronic - Bateria Ultracell - Regulador solar', ' ASDA1335 4MPX - LOXQE8100  3MPX - 550w -  Inversor Voltronic 3000w - Bateria ciclo profundo solar 200ah - Regulador 20ah ', ' Todos los productos cuentan con GARANTIA DE 3 MESES');