import React from 'react'
import { useState } from 'react'
import './App.css'
import users from "./users.json"
import { Usertype } from "./usertypes";
const user = users as Usertype[];
import { LoginForm } from './loginForm'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from './users';
import { UserTable } from './usertable';
export default function App() {
  

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

