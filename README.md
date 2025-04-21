![image](https://github.com/user-attachments/assets/ac66e92b-d29b-4d82-9892-92307cd174a6)

# Old School Tech Shop

Bienvenido a **Old School Tech Shop**, una tienda en línea que ofrece productos vintage y retro de tecnología clásica. Desde televisores de los años 90 hasta cámaras fotográficas de colección, nuestro objetivo es transportar a los clientes al pasado con piezas exclusivas.
## DEPLOY : https://the-secret-shop.vercel.app/
## Tecnologías utilizadas

- **Next.js (con TypeScript):** Para la creación de la aplicación web.
- **Tailwind CSS:** Para un diseño responsivo y estilizado.
- **React:** Para la construcción de componentes reutilizables.
- **React Icons:** Para incorporar íconos en la interfaz de usuario.
- **Cookies.js:** Para la persistencia del estado del carrito entre refrescos.
- **NPM:** Para la gestión de dependencias y ejecución de scripts.

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Miliros/the-secret-shop.git  
   cd the-secret-shop  

2. **Instalar las dependencias::**

   npm install
   npm run dev


3. **Abrir el navegador:** Visita http://localhost:3000 para ver la aplicación en acción.
o INGRESAR AL DEPLOY ## https://the-secret-shop.vercel.app/

  ** Autenticación y sesiones**
Inicio de sesión
El formulario de inicio de sesión valida un correo y una contraseña.

Al autenticarse correctamente, se guarda una cookie userSession que almacena el correo del usuario.

Ejemplo:

Correo: prueba@dominio.com

Contraseña: Prueba123!

Gestión de cookies
Duración de la sesión: 1 día.

Si la cookie userSession no está presente, el usuario es redirigido automáticamente al login.


## Funcionalidades implementadas
-Productos
Carrusel de productos destacados:

Ubicado encima de la lista de productos.

Muestra productos destacados que cambian automáticamente.

Mejora la experiencia visual al destacar ciertos artículos.

Scroll infinito:

Implementado con un hook personalizado useInfiniteScroll.

Mejora el rendimiento cargando productos progresivamente.

-Filtros dinámicos:

Filtrado por categoría y rango de precios.

Muestra un mensaje informativo si no hay coincidencias.

-Detalles del producto:
## si se selecciona una tarjeta de producto te lleva al detalle

Modal con información ampliada:

Imagen optimizada con Next.js.

Descripción, precio, categoría y calificación.

Posibilidad de agregar al carrito desde el modal.

-Carrito de compras
Gestión de productos:

Incrementar o reducir cantidades.

Eliminar productos si la cantidad llega a cero.

Persistencia del carrito:

Estado del carrito almacenado en cookies con js-cookie.

Cálculo dinámico:

Total a pagar actualizado automáticamente.

-Interfaz amigable:

Modal lateral para mostrar los productos.
## Page Sobre nosotros que le permite al usuario tambien volver a la tienda

## Diseño 100% responsivo con transiciones fluidas.
   
## Ideas extra implementadas de la consigna
Funcionalidades incluidas
Diseño 100% responsivo y Mobile-First:

La aplicación está optimizada para diferentes tamaños de pantalla.

Uso de componentes reutilizables:

Construcción modular siguiendo buenas prácticas en React.

Simulación de productos desde una API:

Los productos son obtenidos de un archivo JSON local simulado.

Scroll infinito:

Mejora el rendimiento y la experiencia del usuario.
## Mejoras futuras
Experiencia de usuario
Modo oscuro:

Agregar un toggle para cambiar entre temas claro y oscuro.

Checkout simulado:

Implementar un formulario con validación y resumen de compra.

Wishlist (Lista de deseos):

Guardar productos para comprarlos más tarde.

Notificaciones dinámicas:

Alertas cuando un producto esté agotado o agregado al carrito.


Historia de la empresa y misión.

Fotos del equipo y testimonios de clientes.

Mapa interactivo con la ubicación de la tienda.

Mejoras técnicas
Internacionalización:

Traducción del sitio a múltiples idiomas.

SEO avanzado:

Metadatos estructurados para productos y categorías

