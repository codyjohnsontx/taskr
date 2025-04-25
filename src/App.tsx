// import { useState } from 'react';
// import Button from './components/Button.tsx';
// const [count, setCount] = useState(0);
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import TasksPage from './pages/TasksPage.tsx';
import LandingPage from './pages/LandingPage.tsx';
// import SignIn from './pages/SignIn.tsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
