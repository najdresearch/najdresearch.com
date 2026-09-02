export type WorkStatus = "active" | "foundation" | "next";

export interface ProductRecord {
  number: string;
  name: string;
  description: string;
  status: WorkStatus;
  label: string;
}

export interface LedgerRecord {
  number: string;
  date: string;
  title: string;
  description: string;
  status: WorkStatus;
  label: string;
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
    description:
      "A general conversational interface built on the shared Najd foundation.",
    status: "next",
    label: "Next",
  },
  {
    number: "03",
    name: "Najd Search",
    description:
      "A research and retrieval interface for working across open knowledge.",
    status: "next",
    label: "Next",
  },
  {
    number: "04",
    name: "Najd Models",
    description:
      "Models trained, adapted, or released by Najd Research when the work earns that name.",
    status: "next",
    label: "Next",
  },
];

export const ledger: LedgerRecord[] = [
  {
    number: "001",
    date: "2026—09",
    title: "Najd Code",
    description:
      "The active edge of the lab: building an agent environment around planning, tools, delegation, and completion.",
    status: "active",
    label: "Active development",
  },
  {
    number: "002",
    date: "2026—09",
    title: "Shared agent runtime",
    description:
      "Foundation work for a coherent family of systems, developed through the needs of Najd Code first.",
    status: "foundation",
    label: "Foundation work",
  },
  {
    number: "003",
    date: "2026—09—03",
    title: "Public research index",
    description:
      "A home for future releases, notes, models, experiments, and the evidence behind them.",
    status: "foundation",
    label: "Index opened",
  },
];
