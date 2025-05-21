import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function EditManager() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', departmentName: '' })

  useEffect(() => {
    axios.get(`/managers/${id}`)
      .then(res => setForm(res.data))
      .catch(err => alert('Error fetching manager'))
  }, [id])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/managers/${id}`, form)
      .then(() => navigate('/managers'))
      .catch(err => alert('Update failed'))
  }

  return (
    <div>
      <h2>Edit Manager</h2>
      <form onSubmit={handleSubmit}>
        <input name='email' value={form.email} onChange={handleChange} required />
        <input name='departmentName' value={form.departmentName} onChange={handleChange} required />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default EditManager
