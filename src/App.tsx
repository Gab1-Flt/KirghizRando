import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import BookingInfo from './components/BookingInfo';
import About from './components/About';
import Expeditions from './components/Expeditions';
import NomadicExperience from './components/NomadicExperience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalModal from './components/LegalModal';

function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalPage, setLegalPage] = useState('');

  const handleLegalClick = (page: string) => {
    setLegalPage(page);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <TrustBadges />
      <BookingInfo />
      <About />
      <Expeditions />
      <NomadicExperience />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer onLegalClick={handleLegalClick} />
      <CookieBanner />
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        page={legalPage}
      />
    </div>
  );
}

export default App;
