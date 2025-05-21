import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

function ContractList() {
  const [contracts, setContracts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/contracts')
      .then(res => setContracts(res.data))
      .catch(err => console.log('error fetching contracts', err))
  }, [])

  const handleDelete = id => {
    axios.delete(`/contracts/${id}`)
      .then(() => setContracts(contracts.filter(c => c._id !== id)))
      .catch(err => console.log('error deleting', err))
  }

  return (
    <div>
      <h2>Contracts</h2>
      <button onClick={() => navigate('/new')}>Add Contract</button>
      <ul>
        {contracts.map(contract => (
          <li key={contract._id}>
            {contract.title} — {contract.status}
            <button onClick={() => navigate(`/edit/${contract._id}`)} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(contract._id)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContractList
