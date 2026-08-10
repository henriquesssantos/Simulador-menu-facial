import { clsx } from 'clsx';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { MenuItem } from '../../types/menu';
import { getMenuImage } from '../../data/menuImages';

interface TreeItemProps {
  item: MenuItem;
  depth: number;
  activeItemId: string | null;
  expandedIds: Set<string>;
  onNavigate: (id: string) => void;
  onToggleExpand: (id: string) => void;
}

export function TreeItem({
  item,
  depth,
  activeItemId,
  expandedIds,
  onNavigate,
  onToggleExpand,
}: TreeItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedIds.has(item.id);
  const isActive = activeItemId === item.id;
  const isParentOfActive =
    hasChildren &&
    item.children!.some((child) => isDescendantActive(child, activeItemId));

  function handleClick() {
    const hasPage = Boolean(item.content || getMenuImage(item.id));

    if (hasChildren && hasPage) {
      onNavigate(item.id);
      if (!isExpanded) {
        onToggleExpand(item.id);
      }
      return;
    }

    if (hasChildren) {
      onToggleExpand(item.id);
    } else {
      onNavigate(item.id);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={clsx(
          'group flex w-full min-w-0 items-center gap-2 rounded-sm px-3 py-2 text-left text-sm transition-colors duration-200',
          {
            'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] font-semibold': isActive,
            'text-[var(--brand-secondary)] font-medium hover:bg-[var(--brand-hover)] hover:text-[var(--brand-secondary)]':
              !isActive && hasChildren,
            'text-[var(--brand-text)] hover:bg-[var(--brand-hover)] hover:text-[var(--brand-primary)]':
              !isActive && !hasChildren,
            'text-[var(--brand-primary)]/80 font-medium': isParentOfActive && !isActive,
          }
        )}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
      >
        {hasChildren ? (
          <span className="flex-shrink-0 text-[var(--brand-border)] transition-transform duration-200">
            {isExpanded ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
          </span>
        ) : (
          <span
            className={clsx(
              'flex-shrink-0 w-1.5 h-1.5 rounded-full ml-0.5 transition-colors duration-200',
              {
                'bg-[var(--brand-primary)]': isActive,
                'bg-[var(--brand-border)] group-hover:bg-[var(--brand-primary)]': !isActive,
              }
            )}
          />
        )}
        <span className="min-w-0 break-words leading-snug">{item.label}</span>
        {isActive && (
          <span className="ml-auto w-1 h-4 bg-[var(--brand-primary)] rounded-full flex-shrink-0" />
        )}
      </button>

      {hasChildren && isExpanded && (
        <div className="overflow-hidden animate-slideDown">
          {item.children!.map((child) => (
            <TreeItem
              key={child.id}
              item={child}
              depth={depth + 1}
              activeItemId={activeItemId}
              expandedIds={expandedIds}
              onNavigate={onNavigate}
              onToggleExpand={onToggleExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function isDescendantActive(
  item: MenuItem,
  activeId: string | null
): boolean {
  if (!activeId) return false;
  if (item.id === activeId) return true;
  if (item.children) {
    return item.children.some((child) => isDescendantActive(child, activeId));
  }
  return false;
}
