import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function EditContract() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    counterparty: '',
    owner: '',
    value: '',
    currency: 'USD',
    status: 'draft'
  })

  useEffect(() => {
    axios.get(`/contracts/${id}`)
      .then(res => setForm(res.data))
      .catch(() => alert('Error loading contract'))
  }, [id])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/contracts/${id}`, form)
      .then(() => navigate('/contracts'))
      .catch(() => alert('Update failed'))
  }

  return (
    <div style={container}>
      <h2 style={heading}>Edit Contract</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={label}>Title</label>
        <input
          name='title'
          value={form.title}
          onChange={handleChange}
          required
          style={input}
        />

        <label style={label}>Counterparty</label>
        <input
          name='counterparty'
          value={form.counterparty}
          onChange={handleChange}
          required
          style={input}
        />

        <label style={label}>Owner</label>
        <input
          name='owner'
          value={form.owner}
          onChange={handleChange}
          required
          style={input}
        />

        <label style={label}>Value</label>
        <input
          name='value'
          type='number'
          value={form.value}
          onChange={handleChange}
          style={input}
        />

        <label style={label}>Currency</label>
        <select
          name='currency'
          value={form.currency}
          onChange={handleChange}
          style={input}
        >
          <option value='USD'>USD</option>
          <option value='BHD'>BHD</option>
          <option value='EUR'>EUR</option>
        </select>

        <label style={label}>Status</label>
        <select
          name='status'
          value={form.status}
          onChange={handleChange}
          required
          style={input}
        >
          <option value='draft'>Draft</option>
          <option value='in-review'>In Review</option>
          <option value='signed'>Signed</option>
          <option value='expired'>Expired</option>
        </select>

        <button type='submit' style={button}>Save</button>
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
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  background: '#fff'
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

export default EditContract
