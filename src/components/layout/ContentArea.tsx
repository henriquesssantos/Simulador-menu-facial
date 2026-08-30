import { MapPin } from 'lucide-react';
import type { FlatMenuItem, MenuItem } from '../../types/menu';
import { getMenuImage, welcomeImage } from '../../data/menuImages';
import { SectionCard } from '../ui/SectionCard';
import { EmptyState } from '../ui/EmptyState';
import { MenuScreenshot } from '../ui/MenuScreenshot';
import { MenuGallery } from '../ui/MenuGallery';
import { NavigationButtons } from '../ui/NavigationButtons';

interface ContentAreaProps {
  item: FlatMenuItem | null;
  modelLabel: string;
  modelId?: string;
  modelImage?: string;
  prevItem: FlatMenuItem | null;
  nextItem: FlatMenuItem | null;
  onNavigate: (id: string) => void;
}

function WelcomeState({ modelLabel, modelImage }: { modelLabel: string; modelImage?: string }) {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[var(--brand-secondary)] mb-3">{modelLabel}</h2>
        <p className="text-[var(--brand-secondary)] text-sm max-w-md mx-auto leading-relaxed">
          Selecione um item no menu lateral para visualizar as instruções de
          configuração e suporte.
        </p>
      </div>

      <MenuScreenshot
        src={modelImage || welcomeImage}
        alt="Menu principal do equipamento"
        caption="Menu principal — tela inicial do equipamento"
      />
    </div>
  );
}

export function ContentArea({
  item,
  modelLabel,
  modelId,
  modelImage,
  prevItem,
  nextItem,
  onNavigate,
}: ContentAreaProps) {
  if (!item) {
    return (
      <div className="flex-1 bg-[var(--brand-bg)] overflow-y-auto flex flex-col">
        <WelcomeState modelLabel={modelLabel} modelImage={modelImage} />
      </div>
    );
  }

  const content = item.content;
  // Para manter retrocompatibilidade com o modelo anterior (SS 3542), usamos getMenuImage como fallback
  const screenshot = content?.image || getMenuImage(item.id);
  const hasGallery = Boolean((content?.gallery && content.gallery.length > 0) || (content?.deviceGalleryOptions && content.deviceGalleryOptions.length > 0));

  return (
    <main className="flex-1 bg-[var(--brand-bg)] overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-8 animate-fadeIn">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-[var(--brand-secondary)] bg-[var(--brand-highlight)] px-2 py-0.5 rounded-sm">
              {item.path}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[var(--brand-text)] mt-3 mb-2">
            {content?.title ?? item.label}
          </h1>
          {content?.description && (
            <p className="text-[var(--brand-secondary)] text-base leading-relaxed">
              {content.description}
            </p>
          )}
        </div>

        {/* Menu path */}
        {content?.menuPath && (
          <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded-sm">
            <MapPin size={14} className="text-[var(--brand-primary)] flex-shrink-0" />
            <div>
              <p className="text-xs text-[var(--brand-secondary)] mb-0.5">Localização no menu do equipamento</p>
              <p className="text-sm font-mono font-medium text-[var(--brand-text)]">{content.menuPath}</p>
            </div>
          </div>
        )}

        {/* Two column layout for image and sections */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Device screenshot or Gallery */}
          {hasGallery ? (
            <div>
              <MenuGallery gallery={content?.gallery ?? []} deviceOptions={content?.deviceGalleryOptions} />
            </div>
          ) : screenshot ? (
            <div>
              <MenuScreenshot
                src={screenshot}
                alt={`Tela do menu ${content?.title ?? item.label}`}
              />
            </div>
          ) : null}

          {/* Content sections */}
          <div className="flex flex-col gap-4">
            {content?.sections && content.sections.length > 0 ? (
              content.sections.map((section, i) => (
                <div key={i} className="animate-slideUp" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                  <SectionCard section={section} />
                </div>
              ))
            ) : !content ? (
              <EmptyState item={item as MenuItem} modelLabel={modelLabel} />
            ) : null}
            
            {/* Manual Link Button */}
            <div className="flex flex-col gap-2 sm:flex-row">
              {modelId !== 'mip1000ip' && (
                <a
                  href={content?.manualWeb || content?.manualUrl || "https://manuais.intelbras.com.br/manual-interface-web-linha-bio-t/pt-BR/manual_unificado_web_2.0_pt-BR.html"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--brand-primary)] text-white text-sm font-medium rounded-sm hover:bg-[var(--brand-primary-dark)] transition-colors flex-1"
                >
                  Acessar Manual Web
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <a
                href={content?.manualPdf || "https://backend.intelbras.com/sites/default/files/2023-11/manual-do-usuario-ss-3532-mf-w-ss-3542-mf-w-pt.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--brand-bg)] border border-[var(--brand-border)] text-[var(--brand-secondary)] text-sm font-medium rounded-sm hover:bg-[var(--brand-highlight)] transition-colors flex-1"
              >
                Manual PDF
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <NavigationButtons
          prevItem={prevItem}
          nextItem={nextItem}
          onNavigate={onNavigate}
        />
      </div>
    </main>
  );
}
