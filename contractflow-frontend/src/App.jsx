import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

import NavBar from './components/NavBar'
import Auth from './pages/Auth'

import ContractList from './pages/ContractList'
import AddContract from './pages/AddContract'
import EditContract from './pages/EditContract'

import CompanyList from './pages/CompanyList'
import AddCompany from './pages/AddCompany'
import EditCompany from './pages/EditCompany'

import ManagerList from './pages/ManagerList'
import EditManager from './pages/EditManager'
import Register from './pages/Register'


function App() {
  const { token } = useContext(AuthContext)

  return (
    <BrowserRouter>
      {!token ? (
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (

        <>
          <NavBar />
          <Routes>
            <Route path='/contracts' element={<ContractList />} />
            <Route path='/new' element={<AddContract />} />
            <Route path='/edit/:id' element={<EditContract />} />

            <Route path='/companies' element={<CompanyList />} />
            <Route path='/companies/new' element={<AddCompany />} />
            <Route path='/companies/edit/:id' element={<EditCompany />} />

            <Route path='/managers' element={<ManagerList />} />
            <Route path='/managers/edit/:id' element={<EditManager />} />

            <Route path='*' element={<Navigate to='/contracts' />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  )
}

export default App
