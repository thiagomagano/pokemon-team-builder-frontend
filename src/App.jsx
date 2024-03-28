import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthProvider";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Missing from "./pages/Missing";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teams" element={<Teams />} />

          <Route path="/*" element={<Missing />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" />
    </AuthProvider>
  );
}

export default App;
