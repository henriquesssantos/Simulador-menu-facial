import { MapPin } from 'lucide-react';
import type { FlatMenuItem, MenuItem } from '../../types/menu';
import { getMenuImage, welcomeImage } from '../../data/menuImages';
import { SectionCard } from '../ui/SectionCard';
import { EmptyState } from '../ui/EmptyState';
import { MenuScreenshot } from '../ui/MenuScreenshot';
import { NavigationButtons } from '../ui/NavigationButtons';

interface ContentAreaProps {
  item: FlatMenuItem | null;
  modelLabel: string;
  prevItem: FlatMenuItem | null;
  nextItem: FlatMenuItem | null;
  onNavigate: (id: string) => void;
}

function WelcomeState({ modelLabel }: { modelLabel: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 animate-fadeIn sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-navy mb-3">{modelLabel}</h2>
        <p className="text-secondary text-sm max-w-md mx-auto leading-relaxed">
          Selecione um item no menu lateral para visualizar as instruções de
          configuração e suporte.
        </p>
      </div>

      <MenuScreenshot
        src={welcomeImage}
        alt="Menu principal do equipamento"
        caption="Menu principal — tela inicial do equipamento"
      />
    </div>
  );
}

export function ContentArea({
  item,
  modelLabel,
  prevItem,
  nextItem,
  onNavigate,
}: ContentAreaProps) {
  if (!item) {
    return (
      <div className="flex flex-1 flex-col overflow-y-auto bg-bg">
        <WelcomeState modelLabel={modelLabel} />
      </div>
    );
  }

  const content = item.content;
  const screenshot = getMenuImage(item.id);

  return (
    <main className="flex-1 overflow-y-auto bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-4 animate-fadeIn sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-secondary bg-gray-100 px-2 py-0.5 rounded">
              {item.path}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-navy mt-3 mb-2">
            {content?.title ?? item.label}
          </h1>
          {content?.description && (
            <p className="text-graphite text-base leading-relaxed">
              {content.description}
            </p>
          )}
        </div>

        {/* Menu path */}
        {content?.menuPath && (
          <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-white border border-gray-200 rounded-xl">
            <MapPin size={14} className="text-primary flex-shrink-0" />
            <div>
              <p className="text-xs text-secondary mb-0.5">Localização no menu do equipamento</p>
              <p className="text-sm font-mono font-medium text-navy">{content.menuPath}</p>
            </div>
          </div>
        )}

        {/* Two column layout for image and sections */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Device screenshot */}
          {screenshot && (
            <div>
              <MenuScreenshot
                src={screenshot}
                alt={`Tela do menu ${content?.title ?? item.label}`}
              />
            </div>
          )}

          {/* Content sections */}
          <div className="flex flex-col gap-4">
            {content?.sections && content.sections.length > 0 ? (
              content.sections.map((section, i) => (
                <SectionCard key={i} section={section} />
              ))
            ) : !content ? (
              <EmptyState item={item as MenuItem} />
            ) : null}
            
            {/* Manual Link Button */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={content?.manualUrl || "https://manuais.intelbras.com.br/manual-interface-web-linha-bio-t/pt-BR/manual_unificado_web_2.0_pt-BR.html"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Acessar Manual Web
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://backend.intelbras.com/sites/default/files/2023-11/manual-do-usuario-ss-3532-mf-w-ss-3542-mf-w-pt.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
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
