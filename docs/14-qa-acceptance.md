# 14 — Checklist de QA y criterios de aceptación

## Estado de la pasada 2026-09-05

La verificación automática está cerrada: `pnpm check`, `pnpm build` y
`git diff --check` pasan; el build genera 29 páginas estáticas. Las casillas
visuales y de interacción que siguen abiertas requieren una revisión manual en
un navegador real y no se marcan por inferencia.

## Identidad y assets

- [x] No aparece HUTS como marca en UI pública.
- [x] No hay imágenes/videos/renders/planos de HUTS.
- [x] No hay SVGs/iconos/ilustraciones extraídos del referente.
- [x] No hay copy copiado.
- [x] No hay fuentes propietarias del referente.
- [x] Código y estilos son implementación propia.
- [x] LINDE usa nombres, datos y contenido propios.

## Fidelidad de UI — criterio crítico

- [ ] Una persona familiarizada con HUTS reconoce inmediatamente la relación visual.
- [ ] El sitio no parece un template genérico de arquitectura.
- [ ] El sitio no parece una variante de muga.dev.
- [ ] Hero tiene escala/presencia comparable al referente.
- [ ] La navegación tiene densidad, ritmo y comportamiento comparables.
- [ ] Los títulos mantienen contraste fuerte de escala frente a metadata/body.
- [ ] La fotografía domina cuando corresponde.
- [ ] El espacio negativo se utiliza como elemento compositivo.
- [ ] No todas las secciones usan el mismo contenedor/padding.
- [ ] No se resolvió todo como grillas de cards uniformes.
- [ ] Desktop conserva asimetrías y full bleed.
- [ ] Mobile recompone la jerarquía y no solo apila columnas.
- [ ] Páginas secundarias mantienen la misma dirección de arte de la home.
- [ ] Motion/hover/menu tienen un tempo coherente con la referencia.

## Global

- [x] Todas las rutas previstas generan HTML estático (29 páginas en build).
- [x] 404 existe.
- [x] Header/footer consistentes.
- [x] CTA principal apunta a `/empezar/`.

## Responsive

- [ ] 320 px sin scroll horizontal.
- [ ] 375 px correcto.
- [ ] 768 px correcto.
- [ ] 1024 px correcto.
- [ ] 1440 px correcto.
- [ ] 1920 px conserva composición intencional.

## Navegación

- [ ] Menú desktop abre/cierra correctamente.
- [ ] Menú mobile cierra con Escape.
- [ ] Focus correcto.
- [ ] Estados hover/focus completos.
- [ ] Header responde al fondo/scroll sin layout shift.

## Home

- [ ] Hero tiene contraste y crop correctos.
- [ ] Poster visible si el video falla.
- [ ] Soluciones no parecen cards genéricas.
- [ ] Modelos muestran specs esenciales con jerarquía correcta.
- [ ] Proyectos enlazan a detalle.
- [ ] El ritmo completo de la página fue revisado visualmente.

## Modelos

- [x] 6 modelos desde datos.
- [x] Cada slug tiene página.
- [x] Specs y galería están dimensionadas desde datos.
- [x] Index y detalle mantienen la dirección de UI propia.

## Portfolio

- [x] Vista grilla directa y filtrable.
- [x] Cada proyecto enlaza al detalle.
- [x] Sin JS/mapa, la colección sigue siendo usable.
- [x] Detalles permiten avanzar al proyecto anterior/siguiente.
- [x] La secuencia fotográfica de soluciones conserva presencia full bleed.

## Wizard

- [ ] Validación por paso.
- [ ] Atrás conserva datos.
- [ ] Errores anunciados.
- [ ] Demo no envía datos reales.
- [ ] Estado de éxito funciona.
- [ ] Flujo visual se siente integrado al resto del sitio.

## Accesibilidad

- [ ] Skip link.
- [ ] Focus visible.
- [ ] Contraste AA.
- [ ] Alt text.
- [ ] Inputs etiquetados.
- [ ] Reduced motion.
- [ ] Mapa no es único canal.

## Performance

- [x] Imágenes dimensionadas.
- [x] Lazy load aplicado donde corresponde.
- [ ] Video del hero optimizado para producción (la integración actual es una
  prueba de 10 MB con poster/fallback).
- [x] JS inicial contenido a interacciones puntuales.
- [ ] Sin errores de consola.
- [x] Build de producción exitoso.
