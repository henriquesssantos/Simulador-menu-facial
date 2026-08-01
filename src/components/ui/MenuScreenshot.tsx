import { MonitorSmartphone } from 'lucide-react';

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
  return (
    <figure className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
        <MonitorSmartphone size={14} className="text-primary" />
        <figcaption className="text-xs font-medium text-secondary">
          {caption}
        </figcaption>
      </div>
      <div className="flex justify-center bg-gradient-to-b from-gray-50 to-white p-6">
        <img
          src={src}
          alt={alt}
          className="max-h-[420px] w-auto max-w-full rounded-xl shadow-md ring-1 ring-black/5"
          loading="lazy"
        />
      </div>
    </figure>
  );
}
