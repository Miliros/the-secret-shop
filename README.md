![image](https://github.com/user-attachments/assets/597bae41-0f4e-41fc-bba1-e13a1b67ed55)

## Old School Tech Shop
Bienvenido a Old School Tech Shop, una tienda en línea especializada en productos tecnológicos vintage y retro. Desde televisores de los años 90 hasta cámaras de colección, nuestra misión es ofrecer una experiencia única que combina nostalgia y exclusividad.

## 🌐 Visitar el Deploy   https://the-secret-shop.vercel.app/
## 🚀 Tecnologías utilizadas
Next.js (con TypeScript): Framework para la creación de aplicaciones web modernas.

Tailwind CSS: Herramienta para diseñar interfaces responsivas y estilizadas.

React: Biblioteca para crear componentes reutilizables.

React Icons: Conjunto de íconos para mejorar la interfaz.

Cookies.js: Gestión del estado del carrito de compras.

NPM: Gestión de dependencias y scripts.

## 🛠 Instalación y configuración
1. Clonar el repositorio

git clone https://github.com/Miliros/the-secret-shop.git
cd the-secret-shop
2. Instalar dependencias

npm install
3. Ejecutar el proyecto

npm run dev
Abre tu navegador en http://localhost:3000 para visualizar la aplicación.
   o ingresa al deploy https://the-secret-shop.vercel.app/
##🔒 Autenticación y gestión de sesiones
Inicio de sesión
Validación: Formulario que valida un correo electrónico y contraseña.

Cookie de sesión: Una vez autenticado, se guarda una cookie llamada userSession que almacena el correo del usuario.

Duración: 1 día.

Redirección: Si no existe la cookie, el usuario es redirigido al formulario de login.

Ejemplo de credenciales:

Correo: prueba@dominio.com

Contraseña: Prueba123!

##✨ Funcionalidades implementadas
Productos
Carrusel de destacados: Muestra productos destacados con transición automática.

Scroll infinito: Carga progresiva de productos utilizando un hook personalizado (useInfiniteScroll).

Filtros dinámicos: Filtrado por categorías y precios con mensajes informativos si no hay coincidencias.

Detalles del producto
Modal de detalles: Información ampliada con imagen optimizada, descripción, precio, categoría, calificación, y la opción de agregar al carrito.

Carrito de compras
Gestión: Incremento/reducción de cantidades y eliminación de productos.

Persistencia: El estado del carrito se almacena en cookies utilizando js-cookie para mantener la información entre sesiones.

Cálculo dinámico: Total a pagar actualizado automáticamente según los cambios en el carrito.

Interfaz: Modal lateral intuitivo para mostrar los productos añadidos al carrito.

Manejo del estado: Implementado con Context API, lo que permite compartir el estado global del carrito entre diferentes componentes de la aplicación.

Página "Sobre Nosotros"
Funcionalidad: Permite al usuario volver fácilmente a la tienda.

🌟 Diseño
100% responsivo: Diseño adaptable a dispositivos móviles (Mobile-First).

Transiciones fluidas: Experiencia visual agradable.

Componentes reutilizables: Construcción modular siguiendo buenas prácticas.

##🛠 Mejoras futuras
Experiencia del usuario
Modo oscuro: Toggle para cambiar entre temas claro y oscuro.

Wishlist: Guardar productos para compras futuras.

Checkout simulado: Resumen de compra y validación del formulario.

Notificaciones dinámicas: Alertas para productos agotados o añadidos al carrito.

Contenido adicional
Historia de la empresa y misión.

Fotos del equipo y testimonios.

Mapa interactivo con la ubicación de la tienda.

Técnicas
Internacionalización: Traducción del sitio a múltiples idiomas.

SEO avanzado: Mejora de metadatos y posicionamiento.

