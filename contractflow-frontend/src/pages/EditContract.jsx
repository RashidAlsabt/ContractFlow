import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function EditContract() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    counterparty: '',
    value: '',
    status: ''
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('Fetching contract with ID:', id)
    console.log('Token being sent:', token)

    axios.get(`/contracts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log('Fetched contract:', res.data)
        setForm(res.data)
      })
      .catch(err => {
        console.error('Error response:', err.response)
        alert('Error loading contract')
      })
  }, [id])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    axios.put(`/contracts/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => navigate('/contracts'))
      .catch(err => {
        console.error('Error updating contract:', err.response)
        alert('Update failed')
      })
  }

  return (
    <div>
      <h2>Edit Contract</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          placeholder='Title'
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name='counterparty'
          placeholder='Counterparty'
          value={form.counterparty}
          onChange={handleChange}
        />
        <input
          name='value'
          placeholder='Value'
          value={form.value}
          onChange={handleChange}
        />
        <select name='status' value={form.status} onChange={handleChange} required>
        <option value=''>-- Select Status --</option>
        <option value='draft'>Draft</option>
        <option value='in-review'>In Review</option>
        <option value='signed'>Signed</option>
        <option value='expired'>Expired</option>
          </select>


        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default EditContract
