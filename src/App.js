// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import emailjs from '@emailjs/browser';


function App() {
    useEffect(() => {
        // Initialize EmailJS
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);
    return (
        <Router>
            <div className="min-h-screen bg-black text-gray-300">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
