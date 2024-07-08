import React from 'react';
import Home from './Home';
import About from './container/About';
import Contact from './container/Contact';
import NavBar from './components/NavBar';
import './style/style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewMore from './components/ViewMore';
import { SubAbout } from './components/SubAbout';
import { SubAbout2 } from './components/SubAbout2';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';


const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} >
            <Route path="sub-about" element={<SubAbout />} />
            <Route path="sub-about2" element={<SubAbout2 />} >
              <Route path=":Id" element={<UserDetails />}/>
              <Route path="admin" element={<Admin />}/>
           </Route>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="view-more" element={<ViewMore />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App