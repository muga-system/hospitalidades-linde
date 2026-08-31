# 04 — Sistema visual

## Principio rector

El sistema visual debe ubicarse **muy cerca de la familia visual de HUTS**.

No inventar una nueva estética para demostrar originalidad. La originalidad de LINDE vive en sus assets, marca, tokens y contenido; la interfaz debe conservar la tensión, escala, aire, fotografía y jerarquía que hacen reconocible al referente.

## Sensación objetivo

- arquitectura contemporánea en paisaje;
- editorial pero no “revista genérica”;
- humana y orgánica;
- sofisticada sin lujo decorativo;
- grandes imágenes y títulos;
- metadata pequeña y precisa;
- superficies de color amplias;
- fuerte contraste de escalas;
- navegación con personalidad;
- pocas formas UI convencionales.

## Tokens LINDE

Los valores son propios de LINDE, pero cumplen **roles cromáticos equivalentes** a los observados en el referente: fondo natural, verde principal, acento vegetal claro, tinta y superficies cálidas.

```css
:root {
  --color-ink: #192017;
  --color-paper: #F6F3EA;
  --color-surface: #ECE9DF;
  --color-forest: #4D673B;
  --color-leaf: #DCEAA0;
  --color-moss: #A9BA8A;
  --color-earth: #A8664D;
  --color-line: rgba(25, 32, 23, 0.18);
  --color-on-dark: #F8F5EC;
}
```

Estos valores pueden ajustarse durante QA visual si una relación de contraste/temperatura se aleja demasiado del referente. No usar los valores exactos de HUTS.

## Tipografía

No usar archivos propietarios del referente. Buscar equivalentes open source por **rol visual y métricas**, no solamente por categoría.

Base recomendada:

- Display/editorial: **Newsreader** (o alternativa open source que se acerque mejor visualmente durante QA).
- UI/navegación/números/metadata: **Inter** o sans equivalente.

La elección puede cambiar si otra familia legalmente utilizable reproduce mejor:

- contraste de serif;
- amplitud/estrechez;
- carácter del display;
- altura de x y densidad de UI;
- composición en títulos gigantes.

### Escala

La escala no debe moderarse por comodidad. Los títulos grandes son parte esencial de la referencia.

```text
Display XL: clamp(4rem, 9vw, 9rem) / 0.88–0.94
Display L:  clamp(3.2rem, 7vw, 7rem) / 0.90–0.97
H1:         clamp(3rem, 6vw, 6rem) / 0.92–1.00
H2:         clamp(2.3rem, 4.6vw, 4.8rem) / 0.96–1.02
H3:         clamp(1.6rem, 2.6vw, 2.8rem) / 1.02
Body L:     clamp(1.2rem, 1.7vw, 1.75rem) / 1.35–1.45
Body:       1rem–1.125rem / 1.5–1.6
Label:      0.72rem–0.875rem / 1.15
```

## Recursos gráficos propios

Los SVGs de LINDE deben reemplazar los recursos gráficos distintivos de HUTS **sin cambiar su función compositiva**.

Pueden aparecer como:

- gesto junto a títulos;
- marca de transición;
- capa sobre una imagen;
- detalle de menú;
- apoyo de CTA;
- fondo de baja densidad.

Dirección sugerida: trazos territoriales/topográficos dibujados específicamente para LINDE, pero evitar convertir todo el sitio en una visualización GIS.

## Bordes y formas

Tomar del referente la sensación de interfaz antes que imponer un sistema de componentes genérico.

- evitar cards SaaS;
- evitar radios grandes;
- evitar sombras de dashboard;
- usar bordes solo si cumplen una función visible;
- permitir superficies planas y layouts sin contenedor cuando la referencia lo pida.

## Imágenes

La fotografía es parte estructural de la UI.

Prioridad:

1. arquitectura en contexto;
2. vistas que expliquen relación con el terreno;
3. interiores/materialidad;
4. planos/diagramas;
5. obra/proceso;
6. personas solo si explican escala o uso.

Los placeholders deben respetar los ratios, crops, posición y peso visual esperados. No usar imágenes de HUTS.

## Botones y enlaces

Evitar convertir todos los CTAs en botones rectangulares estándar.

Recrear el tono de controles del referente mediante:

- tipografía compacta;
- flechas/marcas pequeñas;
- contraste claro;
- hover preciso;
- tamaños contenidos frente a títulos enormes.

SVGs e iconos deben ser propios.

## Superficies

Alternar full-bleed fotográfico, fondos naturales claros y verdes propios. La transición entre superficies debe sentirse integrada a la composición, no como una landing construida con bloques intercambiables.
