export type Initiative = {
  code: string;
  title: string;
  summary: string;
  details: string[];
  stack: string[];
};

export const dteInitiatives: Initiative[] = [
  {
    code: "01",
    title: "Workflow Automation",
    summary:
      "Designed and shipped Power Automate solutions that replaced manual document tracking, status emails, and approval routing across Regulatory, Risk Management, and Asset & GL teams.",
    details: [
      "Regulatory Document Status Automation — Power Automate + Power BI dashboards for near real-time document tracking, replacing manual status spreadsheets.",
      "MEC Email Status Automation — automated recurring stakeholder status emails, removing repetitive manual reporting.",
      "Risk Management Request Portal — Power Automate + SharePoint workflow for request intake and visibility.",
      "Asset & General Ledger Approval Automation — workflow architecture and Azure-connected approval routing concepts.",
      "Microsoft Access Modernization — migrated legacy Access processes toward supportable Power Platform solutions.",
    ],
    stack: ["Power Automate", "Power BI", "SharePoint", "Azure"],
  },
  {
    code: "02",
    title: "SAP Process Automation",
    summary:
      "Built Power Automate Desktop flows that drive SAP GUI directly — launching transactions, selecting reporting variants, and exporting data without a human in the loop.",
    details: [
      "Power Automate Desktop (PAD) development for repetitive SAP interactions, cutting manual effort and inconsistency.",
      "SAP GUI scripting with variant management, dynamic reporting dates, and structured Excel export automation.",
      "Automated SAP report retrieval end-to-end: transaction launch → variant selection → export — foundational work for broader enterprise reporting automation.",
    ],
    stack: ["SAP GUI Scripting", "Power Automate Desktop", "Excel Automation"],
  },
  {
    code: "03",
    title: "Power BI & Reporting Modernization",
    summary:
      "Led the reverse-engineering of legacy Crystal Reports into Power BI — the largest project of the co-op, translating years of embedded business logic without losing accuracy.",
    details: [
      "Crystal Reports Modernization Program — reverse-engineered complex report logic, rebuilt it as optimized Power BI data models against large Oracle datasets.",
      "SQL optimization and query performance analysis, Power Query and DAX development, and output validation against legacy reports.",
      "Supported broader regulatory, financial, and operational reporting to meet stakeholder and data-quality requirements.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Oracle SQL"],
  },
  {
    code: "04",
    title: "Python & Cloud Integrations",
    summary:
      "Prototyped Python-based integrations to move DTE's automation off desktop flows and toward scalable, cloud-hosted services.",
    details: [
      "SharePoint connectivity POC using Microsoft Graph API — authentication, integration testing, and Azure-hosted scalability research.",
      "ServiceNow API integration research — connectivity, authentication, data extraction, and ticket-management automation concepts.",
      "Data Lake notification POC — automated monitoring and alerting for proactive exception management.",
    ],
    stack: ["Python", "Microsoft Graph API", "ServiceNow API", "Azure"],
  },
  {
    code: "05",
    title: "AI Enablement & Solution Architecture",
    summary:
      "Helped DTE stakeholders evaluate generative AI in practice — from Copilot Studio agent concepts to governance conversations about what should actually get automated.",
    details: [
      "FERC AI Agent research using Microsoft Copilot technologies — use-case analysis and architecture discussions.",
      "AI enablement and knowledge sharing on Copilot Studio, Power Platform, and enterprise AI adoption strategies.",
      "Contributed to cloud-first automation strategy, Power Platform governance, and maintainability-first architecture discussions.",
      "Authored documentation for the Regulatory, Risk Management, and ServiceNow solutions above for long-term supportability.",
    ],
    stack: ["Copilot Studio", "Power Platform Governance", "Documentation"],
  },
];
