const containerRecent = document.querySelector('#rowContainer');
const containerProducts = document.querySelector('#productsContainer');
const templateProduct = document.querySelector('#templateProduct');


class Product {
    constructor(name, description, image, price, stock) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.id = Date.now();
    }
    static showRecentProducts(products) {
        containerRecent.textContent = '';
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 4; i++) {
            fragment.appendChild(products[i].addNewProduct());
        }
        containerRecent.appendChild(fragment);
    }
    static showAllProducts(products) {
        containerProducts.textContent = '';
        const fragment = document.createDocumentFragment();
        products.forEach((item) => {
            fragment.appendChild(item.addNewProduct());
        });
        containerProducts.appendChild(fragment);
    }
    addNewProduct() {
        const clone = templateProduct.content.cloneNode(true);
        clone.querySelector('.card--title').textContent = this.name;
        clone.querySelector('.card--subtitle').textContent = `$${this.price}`;
        clone.querySelector('.section--card').dataset.id = this.id;
        
        return clone;
    }
}
        
const products = [
    new Product(
        'NOTEBOOK LENOVO V15 PENTIUM N5030',
        'Consigue lo que te propongas. Lleva a cabo tus tareas de la oficina con eficiencia, mantiene tus negocios productivos y tus datos, seguros. Diseño más delgado y pequeño con marcos laterales más estrechos, pantalla de 15.6” para que no te pierdas de ningún detalle.', 
        './image/placeholder.png', 
        224990, 
        10,
    ),
    new Product(
        'NOTEBOOK LENOVO V15 G2 I7 1165G7',
        'Consigue lo que te propongas. Lleva a cabo tus tareas de la oficina con eficiencia, mantiene tus negocios productivos y tus datos, seguros. Diseño más delgado y pequeño con marcos laterales más estrechos, pantalla de 15.6” para que no te pierdas de ningún detalle.', 
        './image/placeholder.png', 
        494990, 
        10,
    ),
    new Product(
        'NOTEBOOK DELL INSPIRON 3511',
        'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.', 
        './image/placeholder.png', 
        299990, 
        10,
    ),
    new Product(
        'NOTEBOOK ASUS TUF GAMING F15',
        'El ASUS TUF Gaming F15 FX506LHB-HN324 es un portátil de gaming preparado para servirte la victoria en bandeja. La GPU NVIDIA® GeForce® GTX 1650 ofrece una experiencia fluida en la pantalla de 144 Hz, mientras que la potente CPU Intel® Core™ i5-10300H y el nuevo sistema de refrigeración amplían el rendimiento de la CPU y ayudan a mantener un perfil acústico silencioso.', 
        './image/placeholder.png', 
        639990, 
        10,
    ),
    new Product(
        'MOUSE INALAMBRICO LOGITECH POP',
        'Un lindo mouse para cambiar con mucha potencia. Un mundo de emoji y atajos en un pequeño boton', 
        './image/placeholder.png', 
        14990, 
        10,
    ),
    new Product(
        'MOUSE REDRAGON M808 STORM PRO',
        'Manual de uso, Sticker Redragon, Receptor inalámbrico, cable USB-C a USB-A.', 
        './image/placeholder.png', 
        15790, 
        10,
    ),
    new Product(
        'MOUSE GENIUS INALAMBRICO ECO 8100',
        'Largo 106 mm. Ancho 59.5 mm. Altura 37.1 mm', 
        './image/placeholder.png', 
        6299, 
        10,
    ),
    new Product(
        'MOUSE INALAMBRICO LOGITECH M170',
        'Este mouse es ideal para usar en la oficina, en casa o donde quieras. Debido a su diseño, te brindará comodidad y una gran experiencia de uso.', 
        './image/placeholder.png', 
        7490, 
        10,
    ),
    new Product(
        'TECLADO REDRAGON K552 KUMARA ',
        'Un teclado completo, con iluminación personalizable y la construcción perfecta para todos tus juegos.', 
        './image/placeholder.png', 
        22990, 
        10,
    ),
    new Product(
        'TECLADO HYPERX ALLOY ORIGINS ',
        'Teclado mecánico para gaming HyperX Alloy Origins 60HyperX Alloy Origins™ 60 es un teclado de alta resistencia, con un factor de forma del 60%, sumamente portátil, que te brinda más espacio para movimientos de desplazamiento del mouse. ', 
        './image/placeholder.png', 
        44990, 
        10,
    ),
    new Product(
        'TECLADO LOGITECH G G213 RETROILUMINADO',
        'Cada tecla de G213 está optimizada para mejorar la experiencia táctil y ofrecer una respuesta superrápida, hasta 4 veces superior a la de los teclados estándar. La matriz de prevención de efecto fantasma para juegos está programada para dominar el control al pulsar simultáneamente varias teclas de juego.', 
        './image/placeholder.png', 
        37990, 
        10,
    ),
    new Product(
        'TECLADO PHILIPS K254 NEGRO',
        'Es gamer: No', 
        './image/placeholder.png', 
        5090, 
        10,
    ),
    new Product(
        'MONITOR 22 NOBLEX 91MK22X7100',
        'Resolución: 1920 x 1080p', 
        './image/placeholder.png', 
        57990, 
        10,
    ),
    new Product(
        'MONITOR 24 LED SAMSUNG T350',
        'Resolución: 1,920 x 1,080', 
        './image/placeholder.png', 
        58990, 
        10,
    ),
    new Product(
        'MONITOR 32 VIEWSONIC ELITE XG320U',
        'IPS Resolución: 3840 x 2160', 
        './image/placeholder.png', 
        665319, 
        10,
    ),
    new Product(
        'MONITOR 27 SAMSUNG LED ODDYSSEY G3',
        'Resolución: 1920x1080', 
        './image/placeholder.png', 
        157639, 
        10,
    ),
    new Product(
        'MONITOR 24 LED SAMSUNG G50 FHD CURVO 144HZ',
        'Frecuenciai de actualizacion: 144Hz', 
        './image/placeholder.png', 
        99999, 
        10,
    ),
    new Product(
        'CPU INTEL CORE I3 10105F ',
        'Cantidad de núcleos 4, Cantidad de subprocesos 8, Frecuencia básica del procesador 3,70 GHz, Frecuencia turbo máxima 4,40 GHz', 
        './image/placeholder.png', 
        39499, 
        10,
    ),
    new Product(
        'CPU INTEL CORE I5 11600K',
        'Cantidad de núcleos 6, Cantidad de subprocesos 12, Frecuencia básica del procesador 3,90 GHz', 
        './image/placeholder.png', 
        154990, 
        10,
    ),
    new Product(
        'CPU CPU AMD RYZEN 3 4100',
        'Numero de núcleos de CPU: 4, Numero de hilos: 8, Máx. Reloj Boost: 4,0 GHz, Reloj base: 3,8 GHz', 
        './image/placeholder.png', 
        69990, 
        10,
    ),
];



Product.showRecentProducts(products);
Product.showAllProducts(products);
