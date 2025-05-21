import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom'

function ContractList() {
  const [contracts, setContracts] = useState([])

  useEffect(() => {
    axios.get('/contracts')
      .then(res => setContracts(res.data))
      .catch(err => console.error('Error fetching contracts', err))
  }, [])

  const handleDelete = id => {
    axios.delete(`/contracts/${id}`)
      .then(() => {
        setContracts(prev => prev.filter(c => c._id !== id))
      })
      .catch(() => alert('Failed to delete contract'))
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>All Contracts</h2>
      {contracts.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No contracts found</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Counterparty</th>
              <th style={thStyle}>Owner</th>
              <th style={thStyle}>Value</th>
              <th style={thStyle}>Currency</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map(contract => (
              <tr key={contract._id}>
                <td style={tdStyle}>{contract.title}</td>
                <td style={tdStyle}>{contract.status}</td>
                <td style={tdStyle}>{contract.counterparty}</td>
                <td style={tdStyle}>{contract.owner}</td>
                <td style={tdStyle}>{contract.value || '-'}</td>
                <td style={tdStyle}>{contract.currency || '-'}</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to={`/edit/${contract._id}`} style={linkStyle}>Edit</Link>
                    <button onClick={() => handleDelete(contract._id)} style={deleteBtn}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

const thStyle = {
  padding: '10px',
  borderBottom: '1px solid #ccc',
  textAlign: 'left'
}

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee',
  verticalAlign: 'top'
}

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold'
}

const deleteBtn = {
  padding: '6px 12px',
  fontSize: '14px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

export default ContractList
