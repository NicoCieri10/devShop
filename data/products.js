import Product from '../models/product.js';

const products = [
    new Product(
        'NOTEBOOK LENOVO V15 PENTIUM N5030',
        'Consigue lo que te propongas. Lleva a cabo tus tareas de la oficina con eficiencia, mantiene tus negocios productivos y tus datos, seguros. Diseño más delgado y pequeño con marcos laterales más estrechos, pantalla de 15.6” para que no te pierdas de ningún detalle.', 
        './image/products_img/lenovo_v15_pentium.jpg', 
        224990, 
        10,
        0,
    ),
    new Product(
        'NOTEBOOK LENOVO V15 G2 I7 1165G7',
        'Consigue lo que te propongas. Lleva a cabo tus tareas de la oficina con eficiencia, mantiene tus negocios productivos y tus datos, seguros. Diseño más delgado y pequeño con marcos laterales más estrechos, pantalla de 15.6” para que no te pierdas de ningún detalle.', 
        './image/products_img/lenovo_v15_g2.jpg',
        494990, 
        10,
        1,
    ),
    new Product(
        'NOTEBOOK DELL INSPIRON 3511',
        'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.', 
        './image/products_img/dell_inspiron_3511.jpg', 
        299990, 
        10,
        2,
    ),
    new Product(
        'NOTEBOOK ASUS TUF GAMING F15',
        'El ASUS TUF Gaming F15 FX506LHB-HN324 es un portátil de gaming preparado para servirte la victoria en bandeja. La GPU NVIDIA® GeForce® GTX 1650 ofrece una experiencia fluida en la pantalla de 144 Hz, mientras que la potente CPU Intel® Core™ i5-10300H y el nuevo sistema de refrigeración amplían el rendimiento de la CPU y ayudan a mantener un perfil acústico silencioso.', 
        './image/products_img/asus_tuf_f15.jpg', 
        639990, 
        10,
        3,
    ),
    new Product(
        'MOUSE INALAMBRICO LOGITECH POP',
        'Un lindo mouse para cambiar con mucha potencia. Un mundo de emoji y atajos en un pequeño boton', 
        './image/products_img/logitech_pop.jpg', 
        14990, 
        10,
        4,
    ),
    new Product(
        'MOUSE REDRAGON M808 STORM PRO',
        'Manual de uso, Sticker Redragon, Receptor inalámbrico, cable USB-C a USB-A.', 
        './image/products_img/redragon_m808_storm_pro.jpeg', 
        15790, 
        10,
        5,
    ),
    new Product(
        'MOUSE GENIUS INALAMBRICO ECO 8100',
        'Largo 106 mm. Ancho 59.5 mm. Altura 37.1 mm', 
        './image/products_img/genius_8100.jpg', 
        6299, 
        10,
        6,
    ),
    new Product(
        'MOUSE INALAMBRICO LOGITECH M170',
        'Este mouse es ideal para usar en la oficina, en casa o donde quieras. Debido a su diseño, te brindará comodidad y una gran experiencia de uso.', 
        './image/products_img/logitech_m170.png', 
        7490, 
        10,
        7,
    ),
    new Product(
        'TECLADO REDRAGON K552 KUMARA',
        'Un teclado completo, con iluminación personalizable y la construcción perfecta para todos tus juegos.', 
        './image/products_img/redragon_k552_kumara.png', 
        22990, 
        10,
        8,
    ),
    new Product(
        'TECLADO HYPERX ALLOY ORIGINS',
        'Teclado mecánico para gaming HyperX Alloy Origins 60HyperX Alloy Origins™ 60 es un teclado de alta resistencia, con un factor de forma del 60%, sumamente portátil, que te brinda más espacio para movimientos de desplazamiento del mouse. ', 
        './image/products_img/hyperx_alloy_origins.jpg', 
        44990, 
        10,
        9,
    ),
    new Product(
        'TECLADO LOGITECH G G213 RETROILUMINADO',
        'Cada tecla de G213 está optimizada para mejorar la experiencia táctil y ofrecer una respuesta superrápida, hasta 4 veces superior a la de los teclados estándar. La matriz de prevención de efecto fantasma para juegos está programada para dominar el control al pulsar simultáneamente varias teclas de juego.', 
        './image/products_img/logitech_g_g213.png', 
        37990, 
        10,
        10,
    ),
    new Product(
        'TECLADO PHILIPS K254 NEGRO',
        'Es gamer: No', 
        './image/products_img/philips_k254.jpg', 
        5090, 
        10,
        11,
    ),
    new Product(
        'MONITOR 22 NOBLEX 91MK22X7100',
        'Resolución: 1920 x 1080p', 
        './image/products_img/noblex_22_91mk22x7100.jpg', 
        57990, 
        10,
        12,
    ),
    new Product(
        'MONITOR 24 LED SAMSUNG T350',
        'Resolución: 1,920 x 1,080', 
        './image/products_img/samsung_24_t350.png', 
        58990, 
        10,
        13,
    ),
    new Product(
        'MONITOR 32 VIEWSONIC ELITE XG320U',
        'IPS Resolución: 3840 x 2160', 
        './image/products_img/viewsonic_elite_xg320u.png', 
        665319, 
        10,
        14,
    ),
    new Product(
        'MONITOR 27 SAMSUNG LED ODDYSSEY G3',
        'Resolución: 1920x1080', 
        './image/products_img/samsung_g3_27.jpg', 
        157639, 
        10,
        15,
    ),
    new Product(
        'MONITOR 24 LED SAMSUNG G50 FHD CURVO 144HZ',
        'Frecuenciai de actualizacion: 144Hz', 
        './image/products_img/samsung_g50_24.png', 
        99999, 
        10,
        16,
    ),
    new Product(
        'CPU INTEL CORE I3 10105F',
        'Cantidad de núcleos 4, Cantidad de subprocesos 8, Frecuencia básica del procesador 3,70 GHz, Frecuencia turbo máxima 4,40 GHz', 
        './image/products_img/intel_core_i3_10105f.jpg', 
        39499, 
        10,
        17,
    ),
    new Product(
        'CPU INTEL CORE I5 11600K',
        'Cantidad de núcleos 6, Cantidad de subprocesos 12, Frecuencia básica del procesador 3,90 GHz', 
        './image/products_img/intel_core_i5_11600k.jpg', 
        154990, 
        10,
        18,
    ),
    new Product(
        'CPU AMD RYZEN 3 4100',
        'Numero de núcleos de CPU: 4, Numero de hilos: 8, Máx. Reloj Boost: 4,0 GHz, Reloj base: 3,8 GHz', 
        './image/products_img/amd_ryzen_3_4100.jpg', 
        69990, 
        10,
        19,
    ),
];

export default products;