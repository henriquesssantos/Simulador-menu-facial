import { useState } from 'react';
import type { Model } from './types/menu';
import { models } from './data/models';
import { HomePage } from './pages/HomePage';
import { SimulatorPage } from './pages/SimulatorPage';

function App() {
  const [activeModel, setActiveModel] = useState<Model | null>(null);

  if (!activeModel) {
    return <HomePage models={models} onSelect={setActiveModel} />;
  }

  return (
    <SimulatorPage
      model={activeModel}
      onBack={() => setActiveModel(null)}
    />
  );
}

export default App;
