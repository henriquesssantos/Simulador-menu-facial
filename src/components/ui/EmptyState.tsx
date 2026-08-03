import { FileText, Sparkles } from 'lucide-react';
import type { MenuItem } from '../../types/menu';

interface EmptyStateProps {
  item: MenuItem;
  modelLabel: string;
}

export function EmptyState({ item, modelLabel }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      <div className="w-16 h-16 rounded-2xl bg-highlight border border-primary/20 flex items-center justify-center mb-6">
        <FileText size={28} className="text-primary/60" />
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2">{item.label}</h3>
      <p className="text-secondary text-sm max-w-sm leading-relaxed mb-6">
        Não há informações adicionais para este item.
      </p>
    </div>
  );
}
