export interface CodeBlockProps {
  code: string;
  language: string;
}

// Sidebar related interfaces
export interface SidebarLink {
  label: string;
  to: string;
}

export interface SidebarSection {
  section: string;
  links: SidebarLink[];
}