import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: string[];
  modelLabel: string;
  onHomeClick: () => void;
}

export function Breadcrumb({ items, modelLabel, onHomeClick }: BreadcrumbProps) {
  const allItems = [modelLabel, ...items];

  return (
    <nav className="flex max-w-full items-center gap-1.5 overflow-x-auto text-sm">
      <button
        onClick={onHomeClick}
        className="flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-150"
      >
        <Home size={13} />
        <span className="text-xs">Início</span>
      </button>
      {allItems.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} className="text-gray-300" />
          <span
            className={
              i === allItems.length - 1
                ? 'text-xs font-semibold text-navy'
                : 'text-xs text-secondary'
            }
          >
            {item}
          </span>
        </span>
      ))}
    </nav>
  );
}
