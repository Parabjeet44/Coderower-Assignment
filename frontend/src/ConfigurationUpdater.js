import React, { useState } from 'react';
import axios from 'axios';

const ConfigurationUpdater = () => {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const API_BASE_URL = 'http://localhost:8080';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!configId.trim()) {
      setError('Please enter a configuration ID');
      return;
    }

    if (!remark.trim()) {
      setError('Please enter a remark');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.put(`${API_BASE_URL}/api/configurations/${configId}`, {
        remark: remark
      });

      if (response.data.message === 'success') {
        setSuccess('Configuration updated successfully!');
        setRemark(''); // Clear the remark field
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update configuration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="configuration-updater">
      <h2>Update Configuration</h2>
      
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor="updateConfigId">Configuration ID:</label>
          <input
            type="text"
            id="updateConfigId"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
            placeholder="Enter configuration ID to update"
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="remark">Remark:</label>
          <textarea
            id="remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Enter your remark here..."
            rows={4}
            disabled={loading}
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Submit'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      )}

      {success && (
        <div className="success-message">
          <p>{success}</p>
        </div>
      )}
    </div>
  );
};

export default ConfigurationUpdater;