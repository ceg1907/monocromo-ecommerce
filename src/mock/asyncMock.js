const products = [
    {
        id: '1',
        name: 'Abrigo largo de lana',
        price: 189000,
        category: 'abrigos',
        img: '/img/abrigo.jpg',
        stock: 4,
        description:
            'Abrigo recto con forro liviano, solapa ancha y dos bolsillos. Largo debajo de la rodilla.',
    },
    {
        id: '2',
        name: 'Sweater cuello alto',
        price: 74000,
        category: 'tejidos',
        img: '/img/sweater.jpg',
        stock: 10,
        description:
            'Tejido suave de punto fino con cuello alto. Ideal para usar solo o debajo de un abrigo.',
    },
    {
        id: '3',
        name: 'Camisa de popelín',
        price: 52000,
        category: 'camisas',
        img: '/img/camisa.jpg',
        stock: 12,
        description:
            'Camisa clásica de popelín de algodón, corte recto y cuello tradicional.',
    },
    {
        id: '4',
        name: 'Pantalón sastrero',
        price: 68000,
        category: 'pantalones',
        img: '/img/pantalon.jpg',
        stock: 2,
        description:
            'Pantalón de tiro alto con pinzas y caída recta. Combina con camisas y tejidos.',
    },
    {
        id: '5',
        name: 'Blazer cruzado',
        price: 145000,
        category: 'abrigos',
        img: '/img/blazer.jpg',
        stock: 5,
        description:
            'Blazer de doble botonadura, hombros estructurados y largo a la cadera.',
    },
    {
        id: '6',
        name: 'Cárdigan de punto',
        price: 81000,
        category: 'tejidos',
        img: '/img/cardigan.jpg',
        stock: 7,
        description:
            'Cárdigan de punto grueso con botones. Abrigado y cómodo para todos los días.',
    },
    {
        id: '7',
        name: 'Bufanda de cachemira',
        price: 39000,
        category: 'accesorios',
        img: '/img/bufanda.jpg',
        stock: 15,
        description:
            'Bufanda amplia de cachemira, suave al tacto y con terminación de flecos cortos.',
    },
    {
        id: '8',
        name: 'Camisa oversize de lino',
        price: 58000,
        category: 'camisas',
        img: '/img/lino.jpg',
        stock: 9,
        description:
            'Camisa holgada de lino natural, liviana y fresca, con mangas largas.',
    },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products) {
                resolve(products);
            } else {
                reject('Error al conectar con el servidor de productos');
            }
        }, 2000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoEncontrado = products.find(
                (product) => product.id === productId,
            );
            if (productoEncontrado) {
                resolve(productoEncontrado);
            } else {
                reject('Producto no encontrado.');
            }
        }, 500);
    });
};
