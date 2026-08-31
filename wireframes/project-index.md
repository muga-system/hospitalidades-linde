# Wireframe — Portfolio

> **Nota de fidelidad:** este wireframe define contenido y relaciones, no obliga a una geometría genérica. Si la composición visual del referente HUTS difiere, priorizar la proporción, ritmo y comportamiento del referente y mapear sobre ella el contenido LINDE.

## Desktop / mapa

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                     │
├────────────────────────────────────────────────────────────────────────────┤
│ Proyectos en territorio             [Mapa | Grilla] [Filtros +]            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│                              MAPA 70svh                                    │
│               ●                         ●                                  │
│                         ●                                                  │
│       ●                                      ●                             │
│                                                                            │
│                ┌────────────────────────────┐                              │
│                │ card popup proyecto       │                              │
│                │ ubicación / m² / modelo   │                              │
│                │ [Ver proyecto]            │                              │
│                └────────────────────────────┘                              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
│ CTA + FOOTER                                                               │
└────────────────────────────────────────────────────────────────────────────┘
```

## Grilla

```text
[texto]                                     [Mapa | Grilla] [Filtros +]

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ imagen       │ │ imagen       │ │ imagen       │
│ proyecto     │ │ proyecto     │ │ proyecto     │
│ metadata     │ │ metadata     │ │ metadata     │
└──────────────┘ └──────────────┘ └──────────────┘
```

## Móvil

Mapa arriba, resultados/popup como bottom sheet simple. La vista grilla sigue siendo una lista vertical completa y accesible.
