import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [getUserId,setUserId] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Login setUserId={setUserId}/>} />
      <Route path="dashboard" element={<Dashboard  userId={getUserId}/>} />
    </Routes>
  );
}

export default App;
