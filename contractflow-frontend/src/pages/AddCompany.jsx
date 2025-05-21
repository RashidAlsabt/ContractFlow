import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function AddCompany() {
  const [form, setForm] = useState({ name: '', email: '', phonenumber: '' })
  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/companies', form)
      .then(() => navigate('/companies'))
      .catch(err => alert('Could not create company'))
  }

  return (
    <div>
      <h2>New Company</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' onChange={handleChange} required />
        <input name='email' placeholder='Email' onChange={handleChange} />
        <input name='phonenumber' placeholder='Phone' onChange={handleChange} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default AddCompany
