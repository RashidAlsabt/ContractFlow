import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function NavBar() {
  const { logout } = useContext(AuthContext)

  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to='/contracts' style={{ marginRight: '10px' }}>Contracts</Link>
      <Link to='/new' style={{ marginRight: '10px' }}>Add Contract</Link>
      <Link to='/companies' style={{ marginRight: '10px' }}>Companies</Link>
      <button onClick={logout} style={{ marginLeft: '20px' }}>Logout</button>
    </nav>
  )
}

export default NavBar
