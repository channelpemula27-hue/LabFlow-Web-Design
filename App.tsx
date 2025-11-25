
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SmartConsultant from './components/SmartConsultant';
import ContactForm from './components/ContactForm';
import ServicesPage from './components/ServicesPage';

function App() {
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  // Navigation State
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  const openConsultant = () => setIsConsultantOpen(true);
  const closeConsultant = () => setIsConsultantOpen(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  // Navigation Handlers
  const navigateToHome = () => setCurrentPage('home');
  const navigateToServices = () => {
    window.scrollTo(0, 0);
    setCurrentPage('services');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onTalkToUsClick={openContactForm} 
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateServices={navigateToServices}
      />
      
      {currentPage === 'home' ? (
        <>
          <Hero onConsultClick={openConsultant} />
          <About onFindSolution={openConsultant} />
          <Services />
          <Expertise />
          <Testimonials />
        </>
      ) : (
        <ServicesPage onTalkToUs={openContactForm} />
      )}
      
      <Footer />
      
      <SmartConsultant 
        isOpen={isConsultantOpen} 
        onClose={closeConsultant} 
      />
      
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={closeContactForm}
      />
    </div>
  );
}

export default App;
