import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function NavBar() {
  const { logout } = useContext(AuthContext)

  return (
    <nav style={nav}>
      <div style={leftLinks}>
        <Link to='/contracts' style={link}>Contracts</Link>
        <Link to='/new' style={link}>Add Contract</Link>
        <Link to='/companies' style={link}>Companies</Link>
      </div>
      <button onClick={logout} style={button}>Logout</button>
    </nav>
  )
}

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid #ccc',
  marginBottom: '20px'
}

const leftLinks = {
  display: 'flex',
  gap: '15px'
}

const link = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold'
}

const button = {
  padding: '6px 12px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

export default NavBar
