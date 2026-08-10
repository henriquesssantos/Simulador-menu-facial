import { useState } from 'react';
import { Cpu, ChevronRight, CheckCircle2, Wifi, Fingerprint, CreditCard } from 'lucide-react';
import type { Model } from '../types/menu';

interface HomePageProps {
  models: Model[];
  onSelect: (model: Model) => void;
}

export function HomePage({ models, onSelect }: HomePageProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedModel = models.find((m) => m.id === selectedId) ?? null;

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-text)] flex flex-col">
      {/* Header bar */}
      <header className="bg-[var(--brand-highlight)] px-8 py-4 flex items-center gap-3 border-b border-[var(--brand-border)]/30">
        <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-sm flex items-center justify-center">
          <Cpu size={16} className="text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-[var(--brand-secondary)]">Simulador de Menu</h1>
          <p className="text-xs text-[var(--brand-secondary)]/70">Controladoras Faciais Intelbras</p>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[var(--brand-primary)]/10 text-[var(--brand-secondary)] py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--brand-secondary)]">
            Simulador de Menu
            <span className="block text-[var(--brand-primary)] mt-1">Controladoras Faciais Intelbras</span>
          </h2>
          <p className="text-[var(--brand-secondary)]/75 text-base leading-relaxed">
            Selecione o modelo que deseja simular para navegar pela estrutura completa de menus do equipamento durante um atendimento.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-lg">
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)] mb-6 text-center">
            Selecione o modelo que deseja simular
          </h3>

          <div className="space-y-3 mb-8">
            {models.map((model) => {
              const isSelected = selectedId === model.id;
              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedId(model.id)}
                  className={`w-full text-left rounded-sm p-5 transition duration-200 group ${
                    isSelected
                      ? 'bg-[var(--brand-primary)]/10 ring-1 ring-[var(--brand-primary)]/25 shadow-sm shadow-[var(--brand-primary)]/10'
                      : 'bg-[var(--brand-highlight)] hover:bg-[var(--brand-bg)] hover:ring-1 hover:ring-[var(--brand-primary)]/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition duration-200 ${
                        isSelected
                          ? 'bg-[var(--brand-primary)]'
                          : 'bg-[var(--brand-border)]/20 group-hover:bg-[var(--brand-primary)]/10'
                      }`}
                    >
                      <Cpu
                        size={22}
                        className={isSelected ? 'text-white' : 'text-[var(--brand-secondary)] group-hover:text-[var(--brand-primary)]'}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[var(--brand-secondary)] text-base">{model.label}</p>
                        {isSelected && (
                          <CheckCircle2 size={18} className="text-[var(--brand-primary)] flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-[var(--brand-secondary)]/80 mt-1 leading-relaxed">
                        {model.description}
                      </p>
                      <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-[var(--brand-secondary)] bg-[var(--brand-highlight)] px-2 py-1 rounded-sm border border-[var(--brand-border)]/30">
                          <Fingerprint size={10} />
                          Biometria
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[var(--brand-secondary)] bg-[var(--brand-highlight)] px-2 py-1 rounded-sm border border-[var(--brand-border)]/30">
                          <CreditCard size={10} />
                          RFID
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[var(--brand-secondary)] bg-[var(--brand-highlight)] px-2 py-1 rounded-sm border border-[var(--brand-border)]/30">
                          <Wifi size={10} />
                          Wi-Fi
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => selectedModel && onSelect(selectedModel)}
            disabled={!selectedModel}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-semibold text-sm transition duration-200 ${
              selectedModel
                ? 'bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white shadow-sm shadow-[var(--brand-primary)]/15'
                : 'bg-[var(--brand-border)]/10 text-[var(--brand-secondary)] cursor-not-allowed'
            }`}
          >
            Entrar no Simulador
            {selectedModel && <ChevronRight size={16} />}
          </button>

          {!selectedModel && (
            <p className="text-center text-xs text-[var(--brand-secondary)] mt-3">
              Selecione um modelo para continuar
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 px-8 border-t border-[var(--brand-border)]/30 text-center">
        <p className="text-xs text-[var(--brand-secondary)]">
          Simulador de Menu · Ferramenta de uso interno · Suporte Técnico Intelbras
        </p>
        <p className="text-xs text-[var(--brand-secondary)]/70 mt-1">
          Desenvolvido por Henrique Fernandes
        </p>
      </footer>
    </div>
  );
}
