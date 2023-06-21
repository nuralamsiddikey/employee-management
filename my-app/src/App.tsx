import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div>
        {/* <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home/>}/>
           </Routes>
        </BrowserRouter> */}
       <Dashboard/>
    </div>
  );
}

export default App;
