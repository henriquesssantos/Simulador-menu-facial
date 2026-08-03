import { Cpu, X } from 'lucide-react';
import { clsx } from 'clsx';
import type { MenuItem } from '../../types/menu';
import { TreeItem } from './TreeItem';

interface SidebarProps {
  menuTree: MenuItem[];
  activeItemId: string | null;
  expandedIds: Set<string>;
  onNavigate: (id: string) => void;
  onToggleExpand: (id: string) => void;
  modelLabel: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({
  menuTree,
  activeItemId,
  expandedIds,
  onNavigate,
  onToggleExpand,
  modelLabel,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <aside
      className={clsx(
        'fixed inset-y-0 left-0 z-40 flex h-full w-[85vw] max-w-72 flex-col overflow-hidden border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 ease-out lg:static lg:w-72 lg:translate-x-0 lg:shadow-none',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Model badge */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-highlight px-4 py-3">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {modelLabel}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-secondary transition-colors hover:bg-white hover:text-navy lg:hidden"
          aria-label="Fechar menu"
        >
          <X size={16} />
        </button>
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
