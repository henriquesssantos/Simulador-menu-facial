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
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header bar */}
      <header className="bg-navy px-8 py-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Cpu size={16} className="text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-white">Simulador de Menu</h1>
          <p className="text-xs text-white/50">Controladoras Faciais Intelbras</p>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Ferramenta de Treinamento — Suporte Técnico
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Simulador de Menu
            <span className="block text-primary mt-1">Controladoras Faciais Intelbras</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Selecione o modelo que deseja simular para navegar pela estrutura completa de menus do equipamento durante um atendimento.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-lg">
          <h3 className="text-lg font-semibold text-navy mb-6 text-center">
            Selecione o modelo que deseja simular
          </h3>

          <div className="space-y-3 mb-8">
            {models.map((model) => {
              const isSelected = selectedId === model.id;
              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedId(model.id)}
                  className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 group ${
                    isSelected
                      ? 'border-primary bg-highlight shadow-md shadow-primary/10'
                      : 'border-gray-200 bg-white hover:border-primary/40 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isSelected
                          ? 'bg-primary'
                          : 'bg-gray-100 group-hover:bg-primary/10'
                      }`}
                    >
                      <Cpu
                        size={22}
                        className={isSelected ? 'text-white' : 'text-gray-400 group-hover:text-primary'}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-navy text-base">{model.label}</p>
                        {isSelected && (
                          <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-secondary mt-1 leading-relaxed">
                        {model.description}
                      </p>
                      {/* Feature badges */}
                      <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-secondary bg-gray-100 px-2 py-1 rounded-full">
                          <Fingerprint size={10} />
                          Biometria
                        </span>
                        <span className="flex items-center gap-1 text-xs text-secondary bg-gray-100 px-2 py-1 rounded-full">
                          <CreditCard size={10} />
                          RFID
                        </span>
                        <span className="flex items-center gap-1 text-xs text-secondary bg-gray-100 px-2 py-1 rounded-full">
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
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              selectedModel
                ? 'bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25'
                : 'bg-gray-100 text-secondary cursor-not-allowed'
            }`}
          >
            Entrar no Simulador
            {selectedModel && <ChevronRight size={16} />}
          </button>

          {!selectedModel && (
            <p className="text-center text-xs text-secondary mt-3">
              Selecione um modelo para continuar
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 px-8 border-t border-gray-200 text-center">
        <p className="text-xs text-secondary">
          Simulador de Menu · Ferramenta de uso interno · Suporte Técnico Intelbras
        </p>
        <p className="text-xs text-secondary/60 mt-1">
          Desenvolvido por Henrique Fernandes
        </p>
      </footer>
    </div>
  );
}
