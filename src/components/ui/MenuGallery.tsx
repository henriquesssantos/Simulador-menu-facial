import React, { useState, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

import type { DeviceGalleryOption, GalleryItem } from '../../types/menu';

interface MenuGalleryProps {
  gallery: GalleryItem[];
  deviceOptions?: DeviceGalleryOption[];
}

export function MenuGallery({ gallery, deviceOptions }: MenuGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState(deviceOptions?.[0]?.value ?? '');

  useEffect(() => {
    if (!deviceOptions?.length) return;

    if (!deviceOptions.some((option) => option.value === selectedDevice)) {
      setSelectedDevice(deviceOptions[0].value);
    }
  }, [deviceOptions, selectedDevice]);

  const resolvedGallery = (() => {
    if (!deviceOptions?.length) return gallery;
    const matchedOption = deviceOptions.find((option) => option.value === selectedDevice) ?? deviceOptions[0];
    return matchedOption?.gallery ?? gallery;
  })();

  const navigate = useCallback((direction: 'next' | 'prev') => {
    setActiveIndex((current) => {
      if (direction === 'next') {
        return current === resolvedGallery.length - 1 ? 0 : current + 1;
      } else {
        return current === 0 ? resolvedGallery.length - 1 : current - 1;
      }
    });
  }, [resolvedGallery.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [selectedDevice, resolvedGallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigate('next');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigate('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  useEffect(() => {
    // Preload next and prev images
    const nextIndex = activeIndex === resolvedGallery.length - 1 ? 0 : activeIndex + 1;
    const prevIndex = activeIndex === 0 ? resolvedGallery.length - 1 : activeIndex - 1;

    [resolvedGallery[nextIndex]?.image, resolvedGallery[prevIndex]?.image].forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [activeIndex, resolvedGallery]);

  if (!resolvedGallery.length) return null;

  // Clamp activeIndex to valid range
  const safeIndex = Math.max(0, Math.min(activeIndex, resolvedGallery.length - 1));
  const currentItem = resolvedGallery[safeIndex];

  return (
    <div className="flex flex-col gap-4">
      {deviceOptions && deviceOptions.length > 0 && (
        <div className="flex flex-wrap gap-2 px-1">
          {deviceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setSelectedDevice(option.value)}
              className={`px-3 py-2 text-xs font-medium rounded-sm border transition-colors ${
                selectedDevice === option.value
                  ? 'bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]'
                  : 'bg-[var(--brand-bg)] text-[var(--brand-secondary)] border-[var(--brand-border)] hover:bg-[var(--brand-highlight)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Visual Indicator */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--brand-highlight)] rounded-sm border border-[var(--brand-border)]">
        <span className="text-sm font-medium text-[var(--brand-text)]">
          Passo {safeIndex + 1} de {resolvedGallery.length}
        </span>
        <span className="text-sm font-semibold text-[var(--brand-primary)]">
          {currentItem?.label ?? '—'}
        </span>
      </div>

      <div className="relative group bg-black/5 rounded-lg overflow-hidden border border-[var(--brand-border)] h-[600px] flex items-center justify-center">
        {/* Navigation Controls */}
        <button
          onClick={() => navigate('prev')}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm shadow-lg"
          title="Anterior (Seta para cima)"
        >
          <ChevronUp size={24} />
        </button>
        <button
          onClick={() => navigate('next')}
          className="absolute bottom-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm shadow-lg"
          title="Próximo (Seta para baixo)"
        >
          <ChevronDown size={24} />
        </button>

        {/* Images with transition */}
        {resolvedGallery.map((item, index) => (
          <img
            key={`${index}-${item.image}`}
            src={item.image}
            alt={item.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out will-change-transform ${index === safeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
          />
        ))}
      </div>
      <p className="text-xs text-center text-[var(--brand-secondary)] mt-1">
        Utilize as setas <kbd className="px-1.5 py-0.5 border rounded-md font-mono text-[10px] bg-[var(--brand-bg)] shadow-sm">↑</kbd> e <kbd className="px-1.5 py-0.5 border rounded-md font-mono text-[10px] bg-[var(--brand-bg)] shadow-sm">↓</kbd> do teclado para navegar
      </p>
    </div>
  );
}