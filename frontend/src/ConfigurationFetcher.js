import React, { useState } from 'react';
import axios from 'axios';

const ConfigurationFetcher = () => {
  const [configId, setConfigId] = useState('');
  const [configData, setConfigData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'http://localhost:8080';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!configId.trim()) {
      setError('Please enter a configuration ID');
      return;
    }

    setLoading(true);
    setError('');
    setConfigData(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/api/configurations/${configId}`);
      setConfigData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch configuration');
    } finally {
      setLoading(false);
    }
  };

  const renderMatrix = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0) {
      return <p>No matrix data available</p>;
    }

    return (
      <div className="matrix-container">
        <h3>Configuration Matrix:</h3>
        <table className="matrix-table">
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Array.isArray(row) ? row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                )) : <td>{row}</td>}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="matrix-json">
          <h4>Raw JSON:</h4>
          <pre>{JSON.stringify(matrix, null, 2)}</pre>
        </div>
      </div>
    );
  };

  return (
    <div className="configuration-fetcher">
      <h2>Fetch Configuration</h2>
      
      <form onSubmit={handleSubmit} className="fetch-form">
        <div className="form-group">
          <label htmlFor="configId">Configuration ID:</label>
          <input
            type="text"
            id="configId"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
            placeholder="Enter configuration ID (e.g., qwertyuiop)"
            disabled={loading}
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Fetching...' : 'Submit'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      )}

      {configData && (
        <div className="config-data">
          {renderMatrix(configData)}
        </div>
      )}
    </div>
  );
};

export default ConfigurationFetcher;