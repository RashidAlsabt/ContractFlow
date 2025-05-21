import { useState } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

function AddContract() {
  const [form, setForm] = useState({
    title: '',
    counterparty: '',
    owner: '',
    value: '',
    currency: 'USD',
    status: 'draft'
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/contracts', form)
      .then(() => navigate('/contracts'))
      .catch(() => alert('Error creating contract'))
  }

  return (
    <div style={container}>
      <h2 style={heading}>Add New Contract</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={label}>Title</label>
        <input name='title' onChange={handleChange} style={input} required />

        <label style={label}>Counterparty</label>
        <input name='counterparty' onChange={handleChange} style={input} required />

        <label style={label}>Owner</label>
        <input name='owner' onChange={handleChange} style={input} required />

        <label style={label}>Value</label>
        <input name='value' type='number' onChange={handleChange} style={input} />

        <label style={label}>Currency</label>
        <select name='currency' onChange={handleChange} style={input}>
          <option value='USD'>USD</option>
          <option value='BHD'>BHD</option>
          <option value='EUR'>EUR</option>
        </select>

        <label style={label}>Status</label>
        <select name='status' onChange={handleChange} style={input}>
          <option value='draft'>Draft</option>
          <option value='in-review'>In Review</option>
          <option value='signed'>Signed</option>
          <option value='expired'>Expired</option>
        </select>

        <button type='submit' style={button}>Create</button>
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
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

export default AddContract
