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
      .catch(err => alert('Error fetching company'))
  }, [id])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/companies/${id}`, form)
      .then(() => navigate('/companies'))
      .catch(err => alert('Could not update'))
  }

  return (
    <div>
      <h2>Edit Company</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' value={form.name} onChange={handleChange} required />
        <input name='email' value={form.email} onChange={handleChange} />
        <input name='phonenumber' value={form.phonenumber} onChange={handleChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default EditCompany
