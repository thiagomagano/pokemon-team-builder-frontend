import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthProvider";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Teams from "./pages/Teams";
import Unauthorized from "./pages/Unauthorized";
import Missing from "./pages/Missing";
import RequireAuth from "./pages/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/teams" element={<Teams />} />
          </Route>

          <Route path="/*" element={<Missing />} />
        </Route>
      </Routes>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
