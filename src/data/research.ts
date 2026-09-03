export type WorkStatus = "active" | "next";

export interface ProductRecord {
  number: string;
  name: string;
  description: string;
  status: WorkStatus;
  label: string;
  href?: string;
}

export const products: ProductRecord[] = [
  {
    number: "01",
    name: "Najd Code",
    description:
      "An environment where agents can plan, use tools, delegate work, and finish software.",
    status: "active",
    label: "Active development",
    href: "/code",
  },
  {
    number: "02",
    name: "Najd Chat",
    description: "A conversational interface built on a shared knowledge core.",
    status: "next",
    label: "Next",
  },
  {
    number: "03",
    name: "Najd Craft",
    description:
      "An agentic builder for applications, documents, and working artifacts.",
    status: "next",
    label: "Next",
  },
  {
    number: "04",
    name: "Najd Search",
    description:
      "Retrieval and research across connected, inspectable knowledge.",
    status: "next",
    label: "Next",
  },
  {
    number: "05",
    name: "Najd Models",
    description:
      "Models trained, adapted, or released when the work earns that name.",
    status: "next",
    label: "Next",
  },
  {
    number: "06",
    name: "Najd Inference",
    description:
      "Open infrastructure for serving, evaluating, and operating models.",
    status: "next",
    label: "Next",
  },
];
