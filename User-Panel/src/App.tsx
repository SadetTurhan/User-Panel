import React from 'react'
import { useState } from 'react'
import './App.css'
import LoginForm from './loginForm'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './users';

function App() {
  

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="users" element={<Users />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
