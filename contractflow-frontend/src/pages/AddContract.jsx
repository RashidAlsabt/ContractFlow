import { useState } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

function AddContract() {
  const [form, setForm] = useState({
    title: '',
    counterparty: '',
    owner: '',
    value: '',
    status: 'draft'
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_API_URL}/contracts`, form)
      .then(() => navigate('/'))
      .catch(err => console.log('create error', err))
  }

  return (
    <div>
      <h2>New Contract</h2>
      <form onSubmit={handleSubmit}>
        <input name='title' placeholder='Title' onChange={handleChange} required />
        <input name='counterparty' placeholder='Counterparty' onChange={handleChange} required />
        <input name='owner' placeholder='Owner' onChange={handleChange} required />
        <input name='value' type='number' placeholder='Value' onChange={handleChange} />
        <select name='status' onChange={handleChange}>
          <option value='draft'>draft</option>
          <option value='in-review'>in-review</option>
          <option value='signed'>signed</option>
          <option value='expired'>expired</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default AddContract
