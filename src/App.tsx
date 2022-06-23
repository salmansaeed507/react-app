import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTasks from './ListTasks';
import AddTask from './AddTask';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
            path="/"
            element={<Navigate to="/list-tasks" replace />}
        />
        <Route path='/list-tasks' element={<ListTasks />} />
        <Route path='/add-task' element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
