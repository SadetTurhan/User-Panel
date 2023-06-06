import   { UserPanel }    from './components/UserPanel';
import './App.css'
import   LoginForm   from './components/LoginForm';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UpdateUser } from './components/UpdateUser';


function App(){
  return (
    <Router>
    <Routes>
      <Route element={<LoginForm/>} />
      <Route path="/" element={<LoginForm />} />
      <Route path="/userpanel" element={<UserPanel />} />
      <Route path="/updateuser" element={<UpdateUser />} />
    </Routes>
  </Router>
  );
};

export default App;