import { FileText } from 'lucide-react';
import type { MenuItem } from '../../types/menu';

interface EmptyStateProps {
  item: MenuItem;
  modelLabel?: string;
}

export function EmptyState({ item, modelLabel }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      <div className="w-16 h-16 rounded-sm bg-[var(--brand-highlight)] border border-[var(--brand-border)]/40 flex items-center justify-center mb-6">
        <FileText size={28} className="text-[var(--brand-primary)]/80" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--brand-secondary)] mb-2">{item.label}</h3>
      <p className="text-[var(--brand-text)] text-sm max-w-sm leading-relaxed">
        Não há informações adicionais para este item.
        {modelLabel ? (
          <> 
            <br />
            Esta opção pertence ao menu da{' '}
            <span className="font-medium text-[var(--brand-primary)]">{modelLabel}</span>.
          </>
        ) : null}
      </p>
    </div>
  );
}
