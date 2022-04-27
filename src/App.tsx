

import { Routes, Route } from "react-router-dom";

import { AuthProvider } from './context/AuthProvider.jsx'

import Layout from './pages/Layout'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import Partys from './pages/Partys.jsx'
import Unauthorized from './pages/Unauthorized.jsx'
import Missing from './pages/Missing.jsx'
import RequireAuth from './pages/RequireAuth.jsx'



function App() {


  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/partys" element={<Partys />} />
          </Route>

          <Route path="/*" element={<Missing />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
