export interface Section {
  title?: string;
  content: string | string[];
  type?: 'info' | 'warning' | 'tip' | 'note';
}

export interface GalleryItem {
  label: string;
  image: string;
}

export interface DeviceGalleryOption {
  value: string;
  label: string;
  gallery: GalleryItem[];
}

export interface PageContent {
  title: string;
  description?: string;
  menuPath?: string;
  image?: string;
  gallery?: GalleryItem[];
  deviceGalleryOptions?: DeviceGalleryOption[];
  manualUrl?: string; // legacy
  manualPdf?: string;
  manualWeb?: string;
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
