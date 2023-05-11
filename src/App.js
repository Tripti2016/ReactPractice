import React from 'react';
import Home from './Home';
import About from './container/About';
import Contact from './container/Contact';
import NavBar from './components/NavBar';
import './style/style.scss'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const App = () => {
 
  return (
    <div>
     <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
    </div>
  )
}

export default App