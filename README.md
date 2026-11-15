# monocromo®

E-commerce de indumentaria en escala de grises: prendas atemporales en blanco, negro y todos los tonos del medio.

Proyecto final del curso de **React JS**. Se construye por etapas (pre-entregas) hasta llegar a una tienda completa con catálogo, carrito, inicio de sesión y generación de órdenes.

## Estado del proyecto

🚧 En desarrollo. Pre-entrega 3: listado dinámico de productos con carga asíncrona.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- CSS (Flexbox y variables de CSS)
- [react-icons](https://react-icons.github.io/react-icons/) para los íconos
- [Fontsource](https://fontsource.org/) para las tipografías Bricolage Grotesque e Instrument Serif
- ESLint

## Componentes

- **Navbar**: barra de navegación con el logo de la tienda, la lista de categorías de productos (Abrigos, Tejidos, Camisas, Pantalones y Accesorios) y el `CartWidget`.
- **CartWidget**: ícono del carrito con la cantidad de productos. Por ahora el número es fijo; más adelante va a mostrar la cantidad real del carrito.
- **ItemListContainer**: se encarga de obtener los productos. Al montarse, llama a `getProducts()` con `useEffect` y `async/await`, guarda el resultado en el estado `items` y maneja los estados de carga (`loading`) y de error (`error`). No dibuja los productos: se los pasa a `ItemList`.
- **ItemList**: recibe los productos por props y los recorre con `.map()`, renderizando un `ProductCard` por cada uno con `key={item.id}`.
- **ProductCard**: componente de presentación. Recibe un producto por props y muestra su tarjeta con imagen, nombre, descripción y precio. No tiene estado ni lógica de carga.

## Simulación de la carga de datos

Todavía no hay una base de datos real, así que los productos se obtienen de un **mock** (una simulación) en `src/mock/asyncMock.js`.

- El archivo tiene un array con 8 productos. Cada uno tiene `id`, `name`, `price`, `category`, `img`, `stock` y `description`.
- La función `getProducts()` devuelve una **Promise** que, con `setTimeout`, se resuelve a los **2 segundos** con la lista de productos. Así se imita la demora de un servidor real.
- El array no se exporta: la única forma de obtener los productos es esperando a la promesa, igual que con una API.

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

Mientras se esperan los datos, la página muestra el mensaje "Cargando productos...". Si la promesa falla, muestra un mensaje de error.

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
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Navbar/
│   └── ProductCard/
├── mock/
│   └── asyncMock.js   # Productos simulados y función getProducts
├── App.jsx            # Componente principal
├── main.jsx           # Punto de entrada: estilos globales y tipografías
└── index.css          # Estilos globales, reset y variables de color
```

## Autora

Cristina Gonzalez · [GitHub](https://github.com/ceg1907)
