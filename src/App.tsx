import { useContext, useEffect, useMemo, useState } from 'react'

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'

import UserContext from './context/UserContext.js'

import './App.css'

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);


  return (
    <UserContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
