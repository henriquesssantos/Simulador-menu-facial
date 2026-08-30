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
      <div className="flex justify-center bg-brand-bg p-6 relative min-h-[300px]">
        {!isLoaded && (
          <Skeleton className="absolute w-[310px] h-[420px]" />
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`max-h-[550px] w-auto max-w-full rounded-sm ring-1 ring-black/5 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          loading="lazy"
        />
      </div>
    </figure>
  );
}
