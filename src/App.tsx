import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TechBackground } from './components/TechBackground';

const App: React.FC = () => {
  return (
    <div className="app">
      <TechBackground />
      <Navbar />
      <main>
        <div className="section-panel"><Hero /></div>
        <div className="section-panel"><About /></div>
        <div className="section-panel"><Skills /></div>
        <div className="section-panel"><Projects /></div>
        <div className="section-panel"><Experience /></div>
        <div className="section-panel"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

