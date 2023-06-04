import   { UserPanel }   from './components/UserPanel';
import  { Sidebar }  from './sidebar';
import './App.css'
import  LoginForm  from './components/LoginForm';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { UpdateUser } from './components/UpdateUser';

function App(){
  return (
    <Router>
    <Routes>
      <Route index element={<LoginForm />} />
      <Route path="/" element={<LoginForm />} />
      <Route path="/userpanel" element={<UserPanel />} />
      <Route path="/updateuser" element={<UpdateUser />} />
    </Routes>
  </Router>
  );
};

export default App;