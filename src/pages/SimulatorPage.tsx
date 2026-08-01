import { useCallback } from 'react';
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
      />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          menuTree={model.menuTree}
          activeItemId={activeItemId}
          expandedIds={expandedIds}
          onNavigate={navigateTo}
          onToggleExpand={toggleExpand}
          modelLabel={model.label}
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
        className="fixed bottom-5 right-5 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-secondary hover:text-navy hover:border-gray-300 transition-all duration-200 z-50"
      >
        <LogOut size={14} />
        Trocar modelo
      </button>
    </div>
  );
}
