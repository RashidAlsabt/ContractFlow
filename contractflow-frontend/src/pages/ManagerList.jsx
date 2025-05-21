import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function ManagerList() {
  const [managers, setManagers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/managers')
      .then(res => setManagers(res.data))
      .catch(err => console.log('fetch error', err))
  }, [])

  const handleDelete = id => {
    axios.delete(`/managers/${id}`)
      .then(() => setManagers(managers.filter(m => m._id !== id)))
      .catch(err => console.log('delete error', err))
  }

  return (
    <div>
      <h2>Managers</h2>
      <ul>
        {managers.map(manager => (
          <li key={manager._id}>
            {manager.email} — {manager.departmentName}
            <button onClick={() => navigate(`/managers/edit/${manager._id}`)} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(manager._id)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ManagerList
