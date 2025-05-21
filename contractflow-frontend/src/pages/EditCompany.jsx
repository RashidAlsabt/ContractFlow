import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function EditCompany() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phonenumber: '' })

  useEffect(() => {
    axios.get(`/companies/${id}`)
      .then(res => setForm(res.data))
      .catch(() => alert('Error loading company'))
  }, [id])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/companies/${id}`, form)
      .then(() => navigate('/companies'))
      .catch(() => alert('Error updating company'))
  }

  return (
    <div style={container}>
      <h2 style={heading}>Edit Company</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={label}>Name</label>
        <input name='name' value={form.name} onChange={handleChange} style={input} required />

        <label style={label}>Email</label>
        <input name='email' value={form.email} onChange={handleChange} style={input} />

        <label style={label}>Phone Number</label>
        <input name='phonenumber' value={form.phonenumber} onChange={handleChange} style={input} />

        <button type='submit' style={button}>Update</button>
      </form>
    </div>
  )
}

const container = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '30px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
}

const heading = {
  textAlign: 'center',
  marginBottom: '20px'
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}

const label = {
  fontWeight: 'bold'
}

const input = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc'
}

const button = {
  marginTop: '20px',
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

export default EditCompany
