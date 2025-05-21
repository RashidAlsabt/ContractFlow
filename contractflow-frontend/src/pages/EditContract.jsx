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
    status: ''
  })

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/contracts`)
      .then(res => {
        const contract = res.data.find(c => c._id === id)
        if (contract) setForm(contract)
      })
      .catch(err => console.log('fetch error', err))
  }, [id])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`${import.meta.env.VITE_API_URL}/contracts/${id}`, form)
      .then(() => navigate('/'))
      .catch(err => console.log('update error', err))
  }

  return (
    <div>
      <h2>Edit Contract</h2>
      <form onSubmit={handleSubmit}>
        <input name='title' value={form.title} onChange={handleChange} />
        <input name='counterparty' value={form.counterparty} onChange={handleChange} />
        <input name='owner' value={form.owner} onChange={handleChange} />
        <input name='value' value={form.value} type='number' onChange={handleChange} />
        <select name='status' value={form.status} onChange={handleChange}>
          <option value='draft'>draft</option>
          <option value='in-review'>in-review</option>
          <option value='signed'>signed</option>
          <option value='expired'>expired</option>
        </select>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default EditContract
