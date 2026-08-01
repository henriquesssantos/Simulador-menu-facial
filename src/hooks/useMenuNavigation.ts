import { useState, useCallback, useMemo } from 'react';
import type { MenuItem } from '../types/menu';
import { flattenTree } from '../utils/flattenTree';

export function useMenuNavigation(menuTree: MenuItem[]) {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const flatItems = useMemo(() => flattenTree(menuTree), [menuTree]);

  const activeItem = useMemo(
    () => flatItems.find((i) => i.id === activeItemId) ?? null,
    [flatItems, activeItemId]
  );

  const navigateTo = useCallback(
    (id: string) => {
      const item = flatItems.find((i) => i.id === id);
      if (!item) return;
      setActiveItemId(id);
      // Expand all ancestors
      setExpandedIds((prev) => {
        const next = new Set(prev);
        item.parentIds.forEach((pid) => next.add(pid));
        return next;
      });
    },
    [flatItems]
  );

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const navigableFlatItems = useMemo(
    () => flatItems.filter((i) => !i.children || i.children.length === 0),
    [flatItems]
  );

  const currentNavIndex = useMemo(
    () => navigableFlatItems.findIndex((i) => i.id === activeItemId),
    [navigableFlatItems, activeItemId]
  );

  const prevItem = useMemo(
    () =>
      currentNavIndex > 0 ? navigableFlatItems[currentNavIndex - 1] : null,
    [navigableFlatItems, currentNavIndex]
  );

  const nextItem = useMemo(
    () =>
      currentNavIndex < navigableFlatItems.length - 1
        ? navigableFlatItems[currentNavIndex + 1]
        : null,
    [navigableFlatItems, currentNavIndex]
  );

  const breadcrumb = useMemo((): string[] => {
    if (!activeItem) return [];
    return [...activeItem.parentLabels, activeItem.label];
  }, [activeItem]);

  return {
    activeItem,
    activeItemId,
    expandedIds,
    breadcrumb,
    prevItem,
    nextItem,
    navigateTo,
    toggleExpand,
  };
}
