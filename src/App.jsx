import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Partys from "./pages/Partys";
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
            <Route path="/partys" element={<Partys />} />
          </Route>

          <Route path="/*" element={<Missing />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
