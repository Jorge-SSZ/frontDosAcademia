import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/courses' element={<Courses /> } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
