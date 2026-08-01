export interface Section {
  title?: string;
  content: string;
  type?: 'info' | 'warning' | 'tip' | 'note';
}

export interface PageContent {
  title: string;
  description?: string;
  menuPath?: string;
  manualUrl?: string;
  sections?: Section[];
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
  content?: PageContent;
}

export interface Model {
  id: string;
  label: string;
  description: string;
  image?: string;
  menuTree: MenuItem[];
}

export interface FlatMenuItem extends MenuItem {
  depth: number;
  parentIds: string[];
  parentLabels: string[];
  index: number;
}

export interface SearchResult {
  item: MenuItem;
  path: string[];
  breadcrumb: string[];
}
