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
    <header className="bg-[var(--brand-bg)] text-[var(--brand-text)] border-b border-[var(--brand-border)]/30 flex-shrink-0 shadow-sm">
      {/* Top bar */}
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--brand-border)]/50 bg-[var(--brand-highlight)] text-[var(--brand-secondary)] transition-colors hover:bg-[var(--brand-bg)] lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={16} />
          </button>
          <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-sm flex items-center justify-center">
            <Cpu size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-[var(--brand-secondary)] leading-none">
              Simulador de Menu
            </h1>
            <p className="text-xs text-[var(--brand-secondary)]/70 leading-none mt-0.5">
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
      <div className="px-6 py-2 border-t border-[var(--brand-border)]/20 bg-[var(--brand-highlight)]">
        <Breadcrumb
          items={breadcrumb}
          modelLabel={modelLabel}
          onHomeClick={onHomeClick}
        />
      </div>
    </header>
  );
}
