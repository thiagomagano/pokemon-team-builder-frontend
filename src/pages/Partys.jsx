import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

import Nav from "../components/Nav";

export default function Partys() {
  const { auth } = useAuth();
  const [partys, setPartys] = useState([]);
  const [user, setUser] = useState("");

  async function getAllPartysByUser(user) {
    const userLocal = JSON.parse(localStorage.getItem("u"));
    setUser();
    const response = await api.get("/party", {
      params: {
        userId: user.id || userLocal.id,
      },
    });
    const data = await response?.data;
    setPartys(data);
  }

  useEffect(() => {
    getAllPartysByUser(auth);
  }, []);

  return (
    <div>
      <Nav />
      hello
      <ul>{partys && partys.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
    </div>
  );
}
