import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { FlatMenuItem } from '../../types/menu';

interface NavigationButtonsProps {
  prevItem: FlatMenuItem | null;
  nextItem: FlatMenuItem | null;
  onNavigate: (id: string) => void;
}

export function NavigationButtons({
  prevItem,
  nextItem,
  onNavigate,
}: NavigationButtonsProps) {
  if (!prevItem && !nextItem) return null;

  return (
    <div className="mt-8 flex flex-col gap-3 border-t border-[var(--brand-border)]/20 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      {prevItem ? (
        <button
          onClick={() => onNavigate(prevItem.id)}
          className="flex w-full items-center gap-3 rounded-sm border border-[var(--brand-border)]/30 px-4 py-3 transition duration-200 hover:border-[var(--brand-primary)]/80 hover:bg-[var(--brand-hover)] group sm:max-w-xs"
        >
          <ArrowLeft size={16} className="text-[var(--brand-secondary)] group-hover:text-[var(--brand-primary)] transition-colors flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs text-[var(--brand-secondary)] mb-0.5">Anterior</p>
            <p className="text-sm font-medium text-[var(--brand-text)] group-hover:text-[var(--brand-primary)] transition-colors line-clamp-1">
              {prevItem.label}
            </p>
          </div>
        </button>
      ) : (
        <div />
      )}

      {nextItem ? (
        <button
          onClick={() => onNavigate(nextItem.id)}
          className="flex w-full items-center gap-3 justify-end rounded-sm border border-[var(--brand-border)]/30 px-4 py-3 text-right transition duration-200 hover:border-[var(--brand-primary)]/80 hover:bg-[var(--brand-hover)] group sm:ml-auto sm:max-w-xs"
        >
          <div className="text-right">
            <p className="text-xs text-[var(--brand-secondary)] mb-0.5">Próximo</p>
            <p className="text-sm font-medium text-[var(--brand-text)] group-hover:text-[var(--brand-primary)] transition-colors line-clamp-1">
              {nextItem.label}
            </p>
          </div>
          <ArrowRight size={16} className="text-[var(--brand-secondary)] group-hover:text-[var(--brand-primary)] transition-colors flex-shrink-0" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
          <div className="text-right">
            <p className="text-xs text-[var(--brand-secondary)] mb-0.5">Próximo</p>
            <p className="text-sm font-medium text-[var(--brand-text)] group-hover:text-[var(--brand-primary)] transition-colors line-clamp-1">
              {nextItem.label}
            </p>
          </div>
          <ArrowRight size={16} className="text-[var(--brand-secondary)] group-hover:text-[var(--brand-primary)] transition-colors flex-shrink-0" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
