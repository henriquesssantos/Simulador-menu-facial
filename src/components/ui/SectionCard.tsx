import { clsx } from 'clsx';
import { Info, Lightbulb, AlertTriangle, FileText } from 'lucide-react';
import type { Section } from '../../types/menu';

interface SectionCardProps {
  section: Section;
}

const typeConfig = {
  info: {
    icon: Info,
    bg: 'bg-[var(--brand-highlight)]',
    border: 'border-[var(--brand-border)]/50',
    iconColor: 'text-[var(--brand-primary)]',
    titleColor: 'text-[var(--brand-secondary)]',
    textColor: 'text-[var(--brand-text)]',
    bulletColor: 'bg-[var(--brand-primary)]',
  },
  tip: {
    icon: Lightbulb,
    bg: 'bg-[var(--brand-highlight)]',
    border: 'border-[var(--brand-primary)]/20',
    iconColor: 'text-[var(--brand-primary)]',
    titleColor: 'text-[var(--brand-primary)]',
    textColor: 'text-[var(--brand-text)]',
    bulletColor: 'bg-[var(--brand-primary)]',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-[var(--brand-highlight)]',
    border: 'border-amber-200/60',
    iconColor: 'text-amber-600',
    titleColor: 'text-[var(--brand-secondary)]',
    textColor: 'text-[var(--brand-text)]',
    bulletColor: 'bg-amber-400',
  },
  note: {
    icon: FileText,
    bg: 'bg-[var(--brand-highlight)]',
    border: 'border-[var(--brand-border)]/50',
    iconColor: 'text-[var(--brand-secondary)]',
    titleColor: 'text-[var(--brand-secondary)]',
    textColor: 'text-[var(--brand-text)]',
    bulletColor: 'bg-[var(--brand-border)]',
  },
};

/**
 * Splits content into a vertical list when it contains comma-separated values.
 * Returns null if content should be rendered as plain text (short sentences, tips, warnings).
 */
function parseListItems(content: string | string[]): string[] | null {
  if (Array.isArray(content)) return content;

  // Split by comma, ignoring commas inside parentheses
  const parts = content.split(/,\s*(?![^(]*\))/);
  if (parts.length < 2) return null;

  return parts
    .map((part) => {
      let text = part.trim();
      // Remove trailing period
      text = text.replace(/\.$/, '');
      // Handle last item that starts with "e " (Portuguese "and")
      if (text.toLowerCase().startsWith('e ') && text.length > 2) {
        text = text.substring(2);
      }
      return text;
    })
    .filter(Boolean);
}

export function SectionCard({ section }: SectionCardProps) {
  const type = section.type ?? 'note';
  const config = typeConfig[type];
  const Icon = config.icon;
  const listItems = parseListItems(section.content);

  return (
    <div
      className={clsx(
        'rounded-sm border p-4 transition-all duration-200 bg-[var(--color-card)]',
        config.bg,
        config.border
      )}
    >
      <div className="flex items-start gap-3">
        <Icon size={16} className={clsx('flex-shrink-0 mt-0.5', config.iconColor)} />
        <div className="flex-1 min-w-0">
          {section.title && (
            <p className={clsx('text-sm font-semibold mb-2', config.titleColor)}>
              {section.title}
            </p>
          )}

          {listItems ? (
            <ul className="space-y-1.5">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className={clsx(
                      'flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5',
                      config.bulletColor
                    )}
                  />
                  <span className={clsx('text-sm leading-snug', config.textColor)}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx('text-sm leading-relaxed whitespace-pre-line', config.textColor)}>
              {section.content as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
