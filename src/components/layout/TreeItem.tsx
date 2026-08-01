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
          'w-full text-left flex items-center gap-2 py-1.5 px-3 rounded-md text-sm transition-all duration-200 group',
          {
            'bg-primary/10 text-primary font-semibold': isActive,
            'text-navy font-medium hover:bg-gray-100':
              !isActive && hasChildren,
            'text-graphite hover:bg-gray-100 hover:text-primary':
              !isActive && !hasChildren,
            'text-primary/80 font-medium': isParentOfActive && !isActive,
          }
        )}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
      >
        {hasChildren ? (
          <span className="flex-shrink-0 text-gray-400 transition-transform duration-200">
            {isExpanded ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
          </span>
        ) : (
          <span
            className={clsx(
              'flex-shrink-0 w-1.5 h-1.5 rounded-full ml-0.5 transition-all duration-200',
              {
                'bg-primary': isActive,
                'bg-gray-300 group-hover:bg-primary': !isActive,
              }
            )}
          />
        )}
        <span className="truncate">{item.label}</span>
        {isActive && (
          <span className="ml-auto w-1 h-4 bg-primary rounded-full flex-shrink-0" />
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
