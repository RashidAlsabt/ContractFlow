import { useState, useContext } from 'react'
import axios from '../api/axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/auth/login', form)
      .then(res => {
        login(res.data.token)
        navigate('/')
      })
      .catch(() => alert('Login failed'))
  }

  const goToRegister = () => {
    navigate('/auth/register') // or however you handle it
  }

  return (
    <div style={container}>
      <h2 style={heading}>Login</h2>
      <form onSubmit={handleSubmit} style={form}>
        <div style={formGroup}>
          <label style={label}>Email</label>
          <input
            name='email'
            type='email'
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
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        <button type='submit' style={button}>Login</button>
      </form>

      <p style={linkText}>
        Don’t have an account?
        <button onClick={goToRegister} style={linkButton}>Register</button>
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
  backgroundColor: '#007bff',
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

export default Auth
