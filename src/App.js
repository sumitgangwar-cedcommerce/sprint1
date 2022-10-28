import Login from './components/Login/Login';
// import NavBar from './components/NavBar';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
