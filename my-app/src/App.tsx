import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import { EmployeeContextProvider } from './context/EmployeeContext';

function App() {
  return (
    <div>
      <EmployeeContextProvider>
        <Dashboard />
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
