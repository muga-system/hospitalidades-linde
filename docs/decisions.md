# Decisiones de diseño y arquitectura

## Referencia e identidad

HUTS es la referencia de composición y experiencia: escala tipográfica,
espacio negativo, navegación, superficies, fotografía y tempo. LINDE conserva
su propia marca, textos, paleta exacta, datos, ilustraciones y código. No se
copian HTML, CSS, JavaScript ni assets del referente.

## Astro estático y TypeScript estricto

La demo es mayormente contenido de marketing, por lo que Astro entrega HTML
estático y limita JavaScript a interacciones reales: menú, filtros, wizard,
rails y reel fotográfico. `astro:transitions` suaviza la navegación sin
introducir un router de cliente. TypeScript estricto mantiene los contratos de
contenido verificables.

## Datos por dominio

Los JSON permanecen editables para la demo, mientras `src/data/` concentra
tipos, normalización, media y consultas. La fachada `content.ts` mantiene una
API estable para las páginas y permite reorganizar módulos sin una migración
masiva.

## Ocho opciones de la home y cuatro categorías internas

La home y la navegación muestran ocho opciones en un orden editorial propio.
Cada opción tiene un slug de detalle único, aunque hereda principios, modelos
y proyectos de la categoría interna que le corresponde. Las cuatro categorías
siguen en los datos para mantener relaciones y facilitar futuras ediciones,
pero no generan rutas públicas independientes ni duplican contenido.

## Recorrido compacto

La home conserva el carrusel horizontal de soluciones y modelos, pero elimina
bloques que repetían territorio, selección, principios y métricas demo. Cada
detalle de proyecto conserva anterior/siguiente y reemplaza el mapa genérico
por condiciones específicas del sitio. Los detalles de modelo cierran con una
sola sección de otros modelos.

Proceso explica cómo se trabaja en seis pasos y una imagen editorial. Servicios
explica qué se puede contratar, con alcances y entregables concretos.

## Assets de despliegue

Las imágenes públicas se sirven en WebP. Los PNG originales se conservan en
`assets/source-images/` como material fuente y no forman parte del paquete
estático que se publica.

## Roles de ilustraciones

Las ilustraciones opacas se mantienen en las tarjetas de la home y navegación:
su fondo está integrado al tratamiento de esa superficie. Las variantes
transparentes se reservan para los hero de detalle, donde deben leerse sobre
`var(--paper)` sin duplicar la imagen en una tarjeta verde.

## Reel de proyectos

El detalle de solución muestra una secuencia de proyectos full bleed. El
contenedor sticky mantiene la escena mientras el scroll cambia panel, fondo,
detalle y copy. La lógica vive en `src/scripts/project-reel.ts` y la vista en
`SolutionProjectReel.astro`; ambas piezas respetan reduced motion.

## Alcance simplificado

La demo prioriza home, soluciones, modelos, proyectos, proceso, servicios y
consulta. Se retiraron Estudio y Guías para evitar recorridos de relleno y
mantener una navegación comercial más directa. Los documentos de planificación
que describían esas rutas fueron eliminados al consolidar esta versión.
