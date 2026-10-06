import { useState } from 'react';
import { MonitorSmartphone } from 'lucide-react';
import { Skeleton } from './Skeleton';

interface MenuScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

export function MenuScreenshot({
  src,
  alt,
  caption = 'Tela do equipamento',
}: MenuScreenshotProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className="mb-6 overflow-hidden rounded-sm border border-brand-border bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2 border-b border-brand-border bg-brand-highlight px-4 py-2.5">
        <MonitorSmartphone size={14} className="text-brand-primary" />
        <figcaption className="text-xs font-medium text-brand-secondary">
          {caption}
        </figcaption>
      </div>
      <div className="relative h-[600px] overflow-hidden bg-black/5">
        {!isLoaded && (
          <Skeleton className="absolute inset-0 h-full w-full" />
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover ring-1 ring-black/5 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          loading="lazy"
        />
      </div>
    </figure>
  );
}
