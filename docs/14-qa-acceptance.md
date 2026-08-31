# 14 — Checklist de QA y criterios de aceptación

## Identidad y assets

- [ ] No aparece HUTS como marca en UI pública.
- [ ] No hay imágenes/videos/renders/planos de HUTS.
- [ ] No hay SVGs/iconos/ilustraciones extraídos del referente.
- [ ] No hay copy copiado.
- [ ] No hay fuentes propietarias del referente.
- [ ] Código y estilos son implementación propia.
- [ ] LINDE usa nombres, datos y contenido propios.

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

- [ ] Todas las rutas funcionan.
- [ ] 404 existe.
- [ ] Header/footer consistentes.
- [ ] CTA principal apunta a `/empezar/`.

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

- [ ] 6 modelos desde datos.
- [ ] Cada slug tiene página.
- [ ] Specs y galería responsive.
- [ ] Index y detalle mantienen fidelidad de UI.

## Portfolio

- [ ] Mapa carga solo donde corresponde.
- [ ] Vista grilla equivalente.
- [ ] Toggle conserva filtros.
- [ ] Markers/popup correctos.
- [ ] Popup enlaza al detalle.
- [ ] Sin JS/mapa, la grilla sigue siendo usable.
- [ ] Mapa/grilla tienen presencia visual comparable al referente.

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

- [ ] Imágenes dimensionadas.
- [ ] Lazy load correcto.
- [ ] Video optimizado.
- [ ] JS inicial contenido.
- [ ] Sin errores de consola.
- [ ] Build de producción exitoso.
