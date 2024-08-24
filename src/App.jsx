import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import Navbar from './screens/Navbar';
import PaymentForm from './components/PaymentForm';
import About from './screens/About'
import Services from './screens/Services'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/payments" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
