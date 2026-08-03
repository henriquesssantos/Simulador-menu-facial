import { Cpu, Menu } from 'lucide-react';
import { Breadcrumb } from '../ui/Breadcrumb';
import { SearchBar } from './SearchBar';
import type { SearchResult } from '../../types/menu';

interface HeaderProps {
  modelLabel: string;
  breadcrumb: string[];
  searchQuery: string;
  searchResults: SearchResult[];
  searchOpen: boolean;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  onSearchSelect: (id: string) => void;
  onSearchClose: () => void;
  onHomeClick: () => void;
  onMenuToggle: () => void;
}

export function Header({
  modelLabel,
  breadcrumb,
  searchQuery,
  searchResults,
  searchOpen,
  onSearchChange,
  onSearchClear,
  onSearchSelect,
  onSearchClose,
  onHomeClick,
  onMenuToggle,
}: HeaderProps) {
  return (
    <header className="bg-navy text-white border-b border-navy/80 flex-shrink-0">
      {/* Top bar */}
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={16} />
          </button>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Cpu size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white leading-none">
              Simulador de Menu
            </h1>
            <p className="text-xs text-white/50 leading-none mt-0.5">
              Controladoras Faciais Intelbras
            </p>
          </div>
        </div>

        {/* Search */}
        <SearchBar
          query={searchQuery}
          results={searchResults}
          isOpen={searchOpen}
          onChange={onSearchChange}
          onClear={onSearchClear}
          onSelect={onSearchSelect}
          onClose={onSearchClose}
        />
      </div>

      {/* Breadcrumb bar */}
      <div className="px-4 py-2 border-t border-white/10 bg-navy/80 sm:px-6">
        <Breadcrumb
          items={breadcrumb}
          modelLabel={modelLabel}
          onHomeClick={onHomeClick}
        />
      </div>
    </header>
  );
}
