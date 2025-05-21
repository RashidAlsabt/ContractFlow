import { useState, useContext } from 'react'
import axios from '../api/axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    departmentName: ''
  })

  const [mode, setMode] = useState('login') // or 'signup'

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const url = mode === 'login' ? '/auth/login' : '/auth/signup'

    axios.post(`${import.meta.env.VITE_API_URL}${url}`, form)
      .then(res => {
        if (mode === 'login') {
          login(res.data.token)
          navigate('/')
        } else {
          alert('Signup success. You can log in now.')
          setMode('login')
        }
      })
      .catch(err => {
        console.log(err)
        alert(err.response?.data?.error || 'Something went wrong')
      })
  }

  return (
    <div>
      <h2>{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input name='email' placeholder='Email' onChange={handleChange} required />
        <input name='password' placeholder='Password' type='password' onChange={handleChange} required />
        {mode === 'signup' && (
          <input name='departmentName' placeholder='Department' onChange={handleChange} required />
        )}
        <button type='submit'>{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {mode === 'login'
          ? "Don't have an account? "
          : 'Already have an account? '}
        <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </div>
  )
}

export default Auth
