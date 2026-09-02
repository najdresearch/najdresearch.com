export type WorkStatus = "active" | "frozen" | "future";

export interface ProductRecord {
  number: string;
  name: string;
  description: string;
  status: WorkStatus;
  label: string;
}

export interface FoundationRecord {
  name: string;
  description: string;
  repository: string;
}

export const products: ProductRecord[] = [
  {
    number: "01",
    name: "Najd Code",
    description:
      "An environment where agents can plan, use tools, delegate work, and finish software.",
    status: "active",
    label: "Active development",
  },
  {
    number: "02",
    name: "Najd Chat",
    description: "A conversational interface built on a shared knowledge core.",
    status: "frozen",
    label: "Frozen",
  },
  {
    number: "03",
    name: "Najd Search",
    description:
      "Retrieval and research across connected, inspectable knowledge.",
    status: "frozen",
    label: "Frozen",
  },
  {
    number: "04",
    name: "Najd Craft",
    description:
      "An agentic builder for applications, documents, and working artifacts.",
    status: "frozen",
    label: "Frozen",
  },
  {
    number: "05",
    name: "Najd Docs",
    description:
      "Versioned knowledge with retrieval, evidence, and claim-level citations.",
    status: "frozen",
    label: "Frozen contract",
  },
  {
    number: "06",
    name: "Najd Models",
    description:
      "Models trained, adapted, or released when the work earns that name.",
    status: "future",
    label: "Future",
  },
];

export const foundations: FoundationRecord[] = [
  {
    name: "Najd CLI",
    description:
      "The najd command-line interface for local and remote workflows.",
    repository: "cli",
  },
  {
    name: "Najd Agent",
    description:
      "The pinned coding and research runtime behind agent sessions.",
    repository: "najd-agent",
  },
  {
    name: "Najd Platform",
    description:
      "The free-only routing, orchestration, packaging, and acceptance layer.",
    repository: "platform",
  },
];
