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
    <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
      {prevItem ? (
        <button
          onClick={() => onNavigate(prevItem.id)}
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-primary hover:bg-highlight group transition-all duration-200 max-w-xs"
        >
          <ArrowLeft size={16} className="text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs text-secondary mb-0.5">Anterior</p>
            <p className="text-sm font-medium text-graphite group-hover:text-primary transition-colors line-clamp-1">
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
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-primary hover:bg-highlight group transition-all duration-200 max-w-xs ml-auto text-right"
        >
          <div className="text-right">
            <p className="text-xs text-secondary mb-0.5">Próximo</p>
            <p className="text-sm font-medium text-graphite group-hover:text-primary transition-colors line-clamp-1">
              {nextItem.label}
            </p>
          </div>
          <ArrowRight size={16} className="text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
