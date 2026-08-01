import { clsx } from 'clsx';
import { Info, Lightbulb, AlertTriangle, FileText } from 'lucide-react';
import type { Section } from '../../types/menu';

interface SectionCardProps {
  section: Section;
}

const typeConfig = {
  info: {
    icon: Info,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700',
  },
  tip: {
    icon: Lightbulb,
    bg: 'bg-highlight',
    border: 'border-primary/30',
    iconColor: 'text-primary',
    titleColor: 'text-primary-dark',
    textColor: 'text-graphite',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    titleColor: 'text-amber-800',
    textColor: 'text-amber-700',
  },
  note: {
    icon: FileText,
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    iconColor: 'text-gray-500',
    titleColor: 'text-gray-700',
    textColor: 'text-gray-600',
  },
};

export function SectionCard({ section }: SectionCardProps) {
  const type = section.type ?? 'note';
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={clsx(
        'rounded-xl border p-4 transition-all duration-200',
        config.bg,
        config.border
      )}
    >
      <div className="flex items-start gap-3">
        <Icon size={16} className={clsx('flex-shrink-0 mt-0.5', config.iconColor)} />
        <div>
          {section.title && (
            <p className={clsx('text-sm font-semibold mb-1', config.titleColor)}>
              {section.title}
            </p>
          )}
          {section.content.split(/,\s+(?![^(]*\))/).length > 2 ? (
            <ul className={clsx('text-sm leading-relaxed space-y-1 list-disc list-inside', config.textColor)}>
              {section.content.split(/,\s+(?![^(]*\))/).map((item, index) => {
                // Remove ' e ' from the last item if it exists
                let text = item.trim();
                if (index === section.content.split(/,\s+(?![^(]*\))/).length - 1 && text.startsWith('e ')) {
                  text = text.substring(2);
                } else if (text.includes(' e ') && index === section.content.split(/,\s+(?![^(]*\))/).length - 1) {
                  // Sometimes the last two items are joined by " e " instead of ", e "
                  const parts = text.split(' e ');
                  return (
                    <>
                      <li>{parts[0]}</li>
                      <li>{parts[1].replace('.', '')}</li>
                    </>
                  );
                }
                return <li key={index}>{text.replace('.', '')}</li>;
              })}
            </ul>
          ) : (
            <p className={clsx('text-sm leading-relaxed whitespace-pre-line', config.textColor)}>
              {section.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
