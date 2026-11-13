# monocromo®

E-commerce de indumentaria en escala de grises: prendas atemporales en blanco, negro y todos los tonos del medio.

Proyecto final del curso de **React JS**. Se construye por etapas (pre-entregas) hasta llegar a una tienda completa con catálogo, carrito, inicio de sesión y generación de órdenes.

## Estado del proyecto

🚧 En desarrollo. Pre-entrega 2: componentes principales de la interfaz (Navbar, CartWidget e ItemListContainer).

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
- **ItemListContainer**: contenedor principal del catálogo. Recibe la prop `greeting` desde `App` y muestra el mensaje de bienvenida. Más adelante va a mostrar la lista de productos.

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
│   │   ├── CartWidget.jsx
│   │   └── CartWidget.css
│   ├── ItemListContainer/
│   │   ├── ItemListContainer.jsx
│   │   └── ItemListContainer.css
│   └── Navbar/
│       ├── Navbar.jsx
│       └── Navbar.css
├── App.jsx       # Componente principal: arma la Navbar y el ItemListContainer
├── main.jsx      # Punto de entrada: carga estilos globales y tipografías
└── index.css     # Estilos globales, reset y variables de color
```

## Autora

Cristina Gonzalez · [GitHub](https://github.com/ceg1907)
