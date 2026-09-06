export type HomeProcessStep = {
  number: string;
  category: string;
  title: string;
  summary: string;
  outcome: string;
};

export const homeProcessSteps: HomeProcessStep[] = [
  {
    number: "01",
    category: "Sitio",
    title: "Leer el lugar",
    summary: "Orientación, acceso, clima y vegetación antes de dibujar.",
    outcome: "Una base real",
  },
  {
    number: "02",
    category: "Programa",
    title: "Definir programa y números",
    summary: "Usos, superficie, etapas y un marco para decidir con claridad.",
    outcome: "Un rumbo posible",
  },
  {
    number: "03",
    category: "Proyecto",
    title: "Diseñar y documentar",
    summary:
      "Alternativas, materialidad y documentación que llevan la idea a obra.",
    outcome: "Decisiones coordinadas",
  },
  {
    number: "04",
    category: "Obra",
    title: "Coordinar la ejecución",
    summary:
      "Proveedores, tiempos y seguimiento para cuidar lo que se proyectó.",
    outcome: "Una obra acompañada",
  },
];
