import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function CompanyList() {
  const [companies, setCompanies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/companies')
      .then(res => setCompanies(res.data))
      .catch(err => console.log('fetch error', err))
  }, [])

  const handleDelete = id => {
    axios.delete(`/companies/${id}`)
      .then(() => setCompanies(companies.filter(c => c._id !== id)))
      .catch(err => console.log('delete error', err))
  }

  return (
    <div>
      <h2>Companies</h2>
      <button onClick={() => navigate('/companies/new')}>Add Company</button>
      <ul>
        {companies.map(company => (
          <li key={company._id}>
            {company.name} — {company.email || 'no email'}
            <button onClick={() => navigate(`/companies/edit/${company._id}`)} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(company._id)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyList
