import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
