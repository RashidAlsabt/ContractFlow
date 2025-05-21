import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function CompanyList() {
  const [companies, setCompanies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/companies')
      .then(res => setCompanies(res.data))
      .catch(err => console.error('Error fetching companies', err))
  }, [])

  return (
    <div style={container}>
      <h2 style={heading}>Companies</h2>
      {companies.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No companies found</p>
      ) : (
        <table style={table}>
          <thead>
            <tr style={theadRow}>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Phone</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company._id}>
                <td style={td}>{company.name}</td>
                <td style={td}>{company.email}</td>
                <td style={td}>{company.phonenumber}</td>
                <td style={td}>
                  <button
                    onClick={() => navigate(`/companies/edit/${company._id}`)}
                    style={button}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

const container = {
  maxWidth: '900px',
  margin: '40px auto',
  padding: '20px'
}

const heading = {
  textAlign: 'center',
  marginBottom: '20px'
}

const table = {
  width: '100%',
  borderCollapse: 'collapse'
}

const theadRow = {
  background: '#f0f0f0'
}

const th = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ccc'
}

const td = {
  padding: '10px',
  borderBottom: '1px solid #eee'
}

const button = {
  padding: '6px 12px',
  fontSize: '14px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

export default CompanyList
