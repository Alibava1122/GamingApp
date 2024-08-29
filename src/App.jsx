import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import Navbar from './screens/Navbar';
import PaymentForm from './components/PaymentForm';
import About from './screens/About';
import Services from './screens/Services';
import SignUpScreen from './screens/SignUpLogin/SignUpScreen';
import LoginScreen from './screens/SignUpLogin/LoginScreen';
import FloatingButton from './components/FloatingButton';


function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup']; 

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

     
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/payments" element={<PaymentForm />} />

      </Routes>
     
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
