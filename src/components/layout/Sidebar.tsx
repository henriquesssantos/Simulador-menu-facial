import { Cpu } from 'lucide-react';
import type { MenuItem } from '../../types/menu';
import { TreeItem } from './TreeItem';

interface SidebarProps {
  menuTree: MenuItem[];
  activeItemId: string | null;
  expandedIds: Set<string>;
  onNavigate: (id: string) => void;
  onToggleExpand: (id: string) => void;
  modelLabel: string;
}

export function Sidebar({
  menuTree,
  activeItemId,
  expandedIds,
  onNavigate,
  onToggleExpand,
  modelLabel,
}: SidebarProps) {
  return (
    <aside className="w-72 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-full overflow-hidden">
      {/* Model badge */}
      <div className="px-4 py-3 border-b border-gray-100 bg-highlight flex items-center gap-2">
        <Cpu size={14} className="text-primary" />
        <span className="text-xs font-semibold text-primary tracking-wide uppercase">
          {modelLabel}
        </span>
      </div>

      {/* Tree */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {menuTree.map((item, index) => (
          <div key={item.id}>
            {index > 0 && <div className="my-1 border-t border-gray-100" />}
            <TreeItem
              item={item}
              depth={0}
              activeItemId={activeItemId}
              expandedIds={expandedIds}
              onNavigate={onNavigate}
              onToggleExpand={onToggleExpand}
            />
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 text-xs text-secondary space-y-0.5">
        <p>Simulador de Menu — Intelbras</p>
        <p className="text-secondary/60">Desenvolvido por Henrique Fernandes</p>
      </div>
    </aside>
  );
}
