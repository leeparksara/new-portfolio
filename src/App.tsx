import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './assets/Contact';
import Projects from './pages/Projects';
import Myzada from './assets/Myzada';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={ <Contact/>}/>
<Route path="projects" element={<Projects/>}/>
<Route path="/project/myzada" element={<Myzada />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

