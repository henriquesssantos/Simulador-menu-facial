import type { FlatMenuItem, MenuItem } from '../types/menu';

export function flattenTree(
  items: MenuItem[],
  depth = 0,
  parentIds: string[] = [],
  parentLabels: string[] = []
): FlatMenuItem[] {
  const result: FlatMenuItem[] = [];
  items.forEach((item, index) => {
    const flat: FlatMenuItem = {
      ...item,
      depth,
      parentIds,
      parentLabels,
      index,
    };
    result.push(flat);
    if (item.children && item.children.length > 0) {
      result.push(
        ...flattenTree(
          item.children,
          depth + 1,
          [...parentIds, item.id],
          [...parentLabels, item.label]
        )
      );
    }
  });
  return result;
}

export function getLeafItems(items: MenuItem[]): FlatMenuItem[] {
  return flattenTree(items).filter(
    (item) => !item.children || item.children.length === 0
  );
}
