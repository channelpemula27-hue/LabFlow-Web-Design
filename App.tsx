import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SmartConsultant from './components/SmartConsultant';

function App() {
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);

  const openConsultant = () => setIsConsultantOpen(true);
  const closeConsultant = () => setIsConsultantOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero onConsultClick={openConsultant} />
      <About onFindSolution={openConsultant} />
      <Services />
      <Expertise />
      <Testimonials />
      <Footer />
      
      <SmartConsultant 
        isOpen={isConsultantOpen} 
        onClose={closeConsultant} 
      />
    </div>
  );
}

export default App;