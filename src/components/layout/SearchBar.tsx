import { useRef, useEffect } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import type { SearchResult } from '../../types/menu';

interface SearchBarProps {
  query: string;
  results: SearchResult[];
  isOpen: boolean;
  onChange: (value: string) => void;
  onClear: () => void;
  onSelect: (id: string) => void;
  onClose: () => void;
}

export function SearchBar({
  query,
  results,
  isOpen,
  onChange,
  onClear,
  onSelect,
  onClose,
}: SearchBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 w-80 focus-within:border-primary focus-within:bg-white transition-all duration-200">
        <Search size={15} className="text-secondary flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Pesquisar no menu..."
          className="flex-1 bg-transparent text-sm text-graphite placeholder:text-secondary outline-none"
        />
        {query && (
          <button onClick={onClear} className="text-secondary hover:text-graphite transition-colors">
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden animate-fadeIn">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-secondary text-center">
              Nenhum resultado encontrado para "{query}"
            </div>
          ) : (
            <ul className="max-h-80 overflow-y-auto divide-y divide-gray-50">
              {results.map((result) => (
                <li key={result.item.id}>
                  <button
                    onClick={() => {
                      onSelect(result.item.id);
                      onClear();
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-highlight transition-colors duration-150 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-navy group-hover:text-primary transition-colors">
                          {result.item.label}
                        </p>
                        <p className="text-xs text-secondary mt-0.5 flex items-center gap-1 flex-wrap">
                          {result.breadcrumb.slice(0, -1).map((crumb, i) => (
                            <span key={i} className="flex items-center gap-1">
                              {crumb}
                              {i < result.breadcrumb.length - 2 && (
                                <ChevronRight size={10} />
                              )}
                            </span>
                          ))}
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-primary flex-shrink-0 transition-colors" />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-xs text-secondary">
            {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
}
