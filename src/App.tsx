import { useState } from 'react';
import type { Model } from './types/menu';
import { models } from './data/models';
import { HomePage } from './pages/HomePage';
import { SimulatorPage } from './pages/SimulatorPage';

function App() {
  const [activeModel, setActiveModel] = useState<Model | null>(null);

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-text)]">
      {!activeModel ? (
        <HomePage models={models} onSelect={setActiveModel} />
      ) : (
        <SimulatorPage model={activeModel} onBack={() => setActiveModel(null)} />
      )}
    </div>
  );
}

export default App;
