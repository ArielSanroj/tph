import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyStay from './components/WhyStay';
import Amenities from './components/Amenities';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';
import LeadModal from './components/LeadModal';
import MobileCTA from './components/MobileCTA';

export default function App() {
  const reserveRef = useRef(null);
  const [leadOpen, setLeadOpen] = useState(false);

  const scrollToReserve = () => {
    document.querySelector('#reservas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onReserveClick={scrollToReserve} onLeadClick={() => setLeadOpen(true)} />
      <Hero onReserveClick={scrollToReserve} />
      <Services />
      <WhyStay />
      <ReservationForm ref={reserveRef} />
      <CTA onReserveClick={scrollToReserve} />
      <Reviews />
      <Amenities />
      <Footer />
      <MobileCTA onReserveClick={scrollToReserve} onLeadClick={() => setLeadOpen(true)} />
      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
    </>
  );
}


