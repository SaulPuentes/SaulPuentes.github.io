import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroBackground } from './components/HeroBackground';
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
        <HeroBackground />
        <Hero photoPath="/assets/profile.jpg" />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

