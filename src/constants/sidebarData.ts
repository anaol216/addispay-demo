// src/data/sidebarData.ts

import type { SidebarSection } from '../interfaces/index.ts'; // Import the type for safety

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    section: "Learn",
    links: [
      { label: "Overview", to: "learn/overview" },
      { label: "Getting Started", to: "learn/getting-started" },
      { label: "Additional Resources", to: "learn/resources" },
    ],
  },
  {
    section: "Integration Guide",
    links: [
      { label: "Direct Api Integration", to: "/integration/api" },
      { label: "SDK Integrations", to: "/sdk-integrations" },
      { label: "Errors Codes", to: "/errors-codes" },
      { label: "Go Live", to: "/go-live" },
    ],
  },
];