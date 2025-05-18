import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Services from './components/pages/Services';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/login/Login';
import PrivateRoute from './components/login/PrivateRoute';

function App() { 
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/navbar"  element={<Navbar />} />
          <Route path="/project/:id"  element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;