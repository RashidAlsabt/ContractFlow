import { useState } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '', departmentName: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/auth/signup', form)
      .then(() => {
        alert('Registration successful!')
        navigate('/')
      })
      .catch(() => alert('Registration failed'))
  }

  return (
    <div style={container}>
      <h2 style={heading}>Register</h2>
      <form onSubmit={handleSubmit} style={form}>
        <div style={formGroup}>
          <label style={label}>Department Name</label>
          <input
            name='departmentName'
            value={form.departmentName}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        <div style={formGroup}>
          <label style={label}>Email</label>
          <input
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        <div style={formGroup}>
          <label style={label}>Password</label>
          <input
            name='password'
            type='password'
            value={form.password}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        <button type='submit' style={button}>Register</button>
      </form>

      <p style={linkText}>
        Already have an account?
        <button onClick={() => navigate('/')} style={linkButton}>Login</button>
      </p>
    </div>
  )
}

const container = {
  maxWidth: '400px',
  margin: '80px auto',
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

const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

const formGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
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
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

const linkText = {
  marginTop: '15px',
  textAlign: 'center'
}

const linkButton = {
  marginLeft: '6px',
  background: 'none',
  border: 'none',
  color: '#007bff',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '15px'
}

export default Register
