# monocromo®

E-commerce de indumentaria en escala de grises: prendas atemporales en blanco, negro y todos los tonos del medio.

Proyecto final del curso de **React JS**. Se construye por etapas (pre-entregas) hasta llegar a una tienda completa con catálogo, carrito, inicio de sesión y generación de órdenes.

## Estado del proyecto

🚧 En desarrollo. Pre-entrega 4: detalle de producto con promesa dinámica.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- CSS (Flexbox, Grid y variables de CSS)
- [Bootstrap](https://getbootstrap.com/) para la grilla del detalle de producto
- [react-icons](https://react-icons.github.io/react-icons/) para los íconos
- [Fontsource](https://fontsource.org/) para las tipografías Bricolage Grotesque e Instrument Serif
- ESLint

## Componentes

### Catálogo

- **Navbar**: barra de navegación con el logo de la tienda, la lista de categorías de productos (Abrigos, Tejidos, Camisas, Pantalones y Accesorios) y el `CartWidget`.
- **CartWidget**: ícono del carrito con la cantidad de productos. Por ahora el número es fijo; más adelante va a mostrar la cantidad real del carrito.
- **ItemListContainer**: se encarga de obtener los productos. Al montarse, llama a `getProducts()` con `useEffect` y `async/await`, guarda el resultado en el estado `items` y maneja los estados de carga (`loading`) y de error (`error`). No dibuja los productos: se los pasa a `ItemList`.
- **ItemList**: recibe los productos por props y los recorre con `.map()`, renderizando un `ProductCard` por cada uno con `key={item.id}`.
- **ProductCard**: componente de presentación. Recibe un producto por props y muestra su información resumida: imagen, categoría, nombre y precio. No tiene estado ni lógica de carga.

### Detalle de producto

- **ItemDetailContainer**: se encarga de obtener un producto. Al montarse, llama a `getProductById(productId)` con `useEffect` y `async/await`, guarda el resultado en el estado `product` y maneja los estados de carga y de error. No dibuja el detalle: se lo pasa a `ItemDetail`. Por ahora el `productId` está definido de forma temporal; en la próxima etapa va a llegar desde la URL con React Router.
- **ItemDetail**: componente de presentación. Recibe el producto por props y muestra la información completa en dos columnas: la imagen a la izquierda, y a la derecha la categoría, el nombre, el precio, la descripción, el stock disponible y el contador. No busca datos.
- **ItemCount**: contador reutilizable para elegir la cantidad. Recibe el `stock` por props desde el producto, arranca en 1, no permite bajar de 1 ni superar el stock, y desactiva los botones al llegar a cada límite.

## Simulación de la carga de datos

Todavía no hay una base de datos real, así que los productos se obtienen de un **mock** (una simulación) en `src/mock/asyncMock.js`.

- El archivo tiene un array con 8 productos. Cada uno tiene `id`, `name`, `price`, `category`, `img`, `stock` y `description`.
- El array no se exporta: la única forma de obtener los productos es esperando a una promesa, igual que con una API.

### `getProducts()`: el catálogo

Devuelve una **Promise** que, con `setTimeout`, se resuelve a los **2 segundos** con la lista completa de productos. Así se imita la demora de un servidor real.

```js
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
```

### `getProductById(productId)`: un producto

Recibe un `productId` y devuelve una **Promise** que, a los **500 ms**, busca el producto con ese `id` usando `.find()`. Si lo encuentra, resuelve la promesa con el producto; si no existe, la rechaza con el mensaje "Producto no encontrado.". La función es dinámica: devuelve el producto que corresponde al `id` que recibe.

```js
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
```

Mientras se esperan los datos, la página muestra un mensaje de carga. Si la promesa falla, muestra un mensaje de error.

En las próximas etapas, este mock se va a reemplazar por **Cloud Firestore**.

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/ceg1907/monocromo-ecommerce.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd monocromo-ecommerce
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que aparece en la terminal (por defecto, `http://localhost:5173`).

## Estructura

```
src/
├── components/
│   ├── CartWidget/
│   ├── ItemCount/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Navbar/
│   └── ProductCard/
├── mock/
│   └── asyncMock.js   # Productos simulados, getProducts y getProductById
├── App.jsx            # Componente principal
├── main.jsx           # Punto de entrada: Bootstrap, estilos globales y tipografías
└── index.css          # Estilos globales, reset y variables de color
```

## Autora

Cristina Gonzalez · [GitHub](https://github.com/ceg1907)
