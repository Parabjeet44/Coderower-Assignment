import React, { useState } from 'react';
import ConfigurationFetcher from './ConfigurationFetcher';
import ConfigurationUpdater from './ConfigurationUpdater';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('fetch');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Configuration Manager</h1>
        <div className="tab-buttons">
          <button 
            className={activeTab === 'fetch' ? 'active' : ''}
            onClick={() => setActiveTab('fetch')}
          >
            Fetch Configuration
          </button>
          <button 
            className={activeTab === 'update' ? 'active' : ''}
            onClick={() => setActiveTab('update')}
          >
            Update Configuration
          </button>
        </div>
      </header>
      
      <main className="App-main">
        {activeTab === 'fetch' ? (
          <ConfigurationFetcher />
        ) : (
          <ConfigurationUpdater />
        )}
      </main>
    </div>
  );
}

export default App;