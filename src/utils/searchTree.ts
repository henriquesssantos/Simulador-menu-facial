import type { MenuItem, SearchResult } from '../types/menu';

export function searchTree(
  items: MenuItem[],
  query: string,
  breadcrumb: string[] = []
): SearchResult[] {
  const results: SearchResult[] = [];
  const q = query.toLowerCase().trim();
  if (!q) return results;

  items.forEach((item) => {
    const currentBreadcrumb = [...breadcrumb, item.label];
    const matchesLabel = item.label.toLowerCase().includes(q);
    const matchesContent =
      item.content?.title?.toLowerCase().includes(q) ||
      item.content?.description?.toLowerCase().includes(q);

    if (matchesLabel || matchesContent) {
      results.push({
        item,
        path: currentBreadcrumb,
        breadcrumb: currentBreadcrumb,
      });
    }

    if (item.children) {
      results.push(...searchTree(item.children, query, currentBreadcrumb));
    }
  });

  return results;
}
