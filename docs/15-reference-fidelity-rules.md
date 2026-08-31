# 15 — Reglas de fidelidad de referencia y separación de assets

## Objetivo

Construir una interfaz de alta fidelidad inspirada directamente en HUTS sin reutilizar su identidad, contenido, archivos o código.

## Directriz principal

La similitud de UI es intencional.

No modificar una buena decisión de composición, escala, navegación, layout o comportamiento solamente para “ser diferente”. La diferenciación debe concentrarse en aquello que identifica a LINDE como marca y contenido.

## Permitido y deseado emular

- arquitectura general de interfaz;
- layouts y proporciones;
- ritmo de secciones;
- escala tipográfica;
- relación serif/sans;
- uso de full bleed;
- proporción y posición de imágenes;
- navegación y menús;
- mapa/grilla;
- presentación de modelos;
- presentación de proyectos;
- densidad de specs/metadata;
- patrones de hover/reveal/transición;
- comportamiento responsive;
- secuencia de bloques cuando sea útil para reproducir la experiencia.

Todo esto debe ser implementado desde cero.

## No reutilizar

- marca/logotipo HUTS;
- textos o claims;
- testimonios y métricas;
- nombres de proyectos/modelos;
- fotografías, videos, renders o planos;
- SVGs, iconos o ilustraciones;
- archivos de fuentes propietarias;
- valores de color exactos si pertenecen a su identidad;
- código fuente;
- CSS/JS extraído;
- DOM copiado mediante scraping;
- assets descargados u hotlinkeados.

## Prueba práctica correcta

Antes de cerrar una pantalla, preguntar dos cosas:

1. **Si escondemos logo y copy, ¿se reconoce claramente que HUTS fue la referencia visual principal?** Si no, la pantalla probablemente se alejó demasiado.
2. **Si mostramos logo, copy, assets y datos, ¿todo pertenece claramente a LINDE?** Si no, falta separación de identidad.

Las dos respuestas deben ser sí.

## Diferencias obligatorias de identidad LINDE

1. Marca LINDE.
2. Nombres y contenido propios.
3. SVGs/gestos gráficos propios.
4. Tokens con valores propios.
5. Fuentes legalmente utilizables y no archivos propietarios del referente.
6. Assets fotográficos propios/licenciados o placeholders.
7. Contexto territorial argentino de muestra.
8. Implementación técnica propia.

## Anti-genericización

No reemplazar patrones del referente por:

- hero centrado estándar;
- grilla uniforme de cards;
- sección de “features” con iconos;
- estadísticas tipo SaaS;
- navbar de template;
- botones redondeados por defecto;
- composiciones de muga.dev;
- blanco/negro técnico como identidad dominante;
- bloques repetidos con la misma anchura y padding.
