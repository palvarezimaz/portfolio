import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/work-experience">Work Experience</Link>
        <Link to="/Contact">Contact me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
