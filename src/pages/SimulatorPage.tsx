import { useCallback, useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import type { Model } from '../types/menu';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { ContentArea } from '../components/layout/ContentArea';
import { useMenuNavigation } from '../hooks/useMenuNavigation';
import { useSearch } from '../hooks/useSearch';

interface SimulatorPageProps {
  model: Model;
  onBack: () => void;
}

export function SimulatorPage({ model, onBack }: SimulatorPageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    activeItem,
    activeItemId,
    expandedIds,
    breadcrumb,
    prevItem,
    nextItem,
    navigateTo,
    toggleExpand,
  } = useMenuNavigation(model.menuTree);

  const {
    query,
    results,
    isOpen,
    setIsOpen,
    handleChange,
    clearSearch,
  } = useSearch(model.menuTree);

  const handleSearchSelect = useCallback(
    (id: string) => {
      navigateTo(id);
      clearSearch();
    },
    [navigateTo, clearSearch]
  );

  const handleHomeClick = useCallback(() => {
    // Just clear the active item to show welcome state
    navigateTo('');
  }, [navigateTo]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-bg overflow-hidden">
      {/* Header */}
      <Header
        modelLabel={model.label}
        breadcrumb={breadcrumb}
        searchQuery={query}
        searchResults={results}
        searchOpen={isOpen}
        onSearchChange={handleChange}
        onSearchClear={clearSearch}
        onSearchSelect={handleSearchSelect}
        onSearchClose={() => setIsOpen(false)}
        onHomeClick={handleHomeClick}
        onMenuToggle={() => setIsSidebarOpen((value) => !value)}
      />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 z-30 bg-black/30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          menuTree={model.menuTree}
          activeItemId={activeItemId}
          expandedIds={expandedIds}
          onNavigate={navigateTo}
          onToggleExpand={toggleExpand}
          modelLabel={model.label}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Content */}
        <ContentArea
          item={activeItem}
          modelLabel={model.label}
          prevItem={prevItem}
          nextItem={nextItem}
          onNavigate={navigateTo}
        />
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-secondary hover:text-navy hover:border-gray-300 transition-all duration-200 z-50"
      >
        <LogOut size={14} />
        Trocar modelo
      </button>
    </div>
  );
}
