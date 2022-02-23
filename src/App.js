import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Wishlist from './pages/Wishlist';
import BookDetail from './pages/BookDetail';

function getAuth() {
  if(localStorage.getItem("access_token")) {
    return true
  } else {
    return false;
  }
}

function RequireAuth({children, redirectTo}) {
  let isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/my-books" element={
          <RequireAuth redirectTo="/login">
            <Books/>  
          </RequireAuth>
        }/>
        <Route path="/wishlist" element={
          <RequireAuth redirectTo="/login">
            <Wishlist/>
          </RequireAuth>
        }/>
        <Route path="/book/:id" element={
          <RequireAuth redirectTo="/login">
            <BookDetail/>
          </RequireAuth>
        }/>
        <Route path="/" element={
          <RequireAuth redirectTo="/login">
            <Home/>
          </RequireAuth>
        }/>
      </Routes>
      
    </div>
  );
}

export default App;
