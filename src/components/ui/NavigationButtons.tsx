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
    <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      {prevItem ? (
        <button
          onClick={() => onNavigate(prevItem.id)}
          className="flex w-full items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-all duration-200 hover:border-primary hover:bg-highlight group sm:max-w-xs"
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
          className="ml-0 flex w-full items-center justify-end gap-3 rounded-xl border border-gray-200 px-4 py-3 text-right transition-all duration-200 hover:border-primary hover:bg-highlight group sm:ml-auto sm:max-w-xs"
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
