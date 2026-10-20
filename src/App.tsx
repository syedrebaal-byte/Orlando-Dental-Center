import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreeToothVisualizer } from './components/ThreeToothVisualizer';
import { ServicesBento } from './components/ServicesBento';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { DoctorsSection } from './components/DoctorsSection';
import { TechnologySuite } from './components/TechnologySuite';
import { InsuranceCalculator } from './components/InsuranceCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from './data/dentalData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-[#0C3836] selection:text-white font-sans-clean">
      {/* Top Navigation conforming to 3-zone Top Bar Contract */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Hero Section with dominant 16:9 imagery and proof metrics */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive 3D Dental Architecture (Three.js WebGL experience) */}
        <section id="interactive-3d" className="py-20 bg-[#F5F2E9] border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
                Biomimetic Engineering & 3D Visualization
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
                Explore Restorative Architecture in Interactive 3D.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
                Understand how our dental implants integrate with bone and how monolithic ceramic crowns recreate natural tooth anatomy. Click, drag, and switch modes to inspect each layer.
              </p>
            </div>

            <ThreeToothVisualizer />
          </div>
        </section>

        {/* Verified Dental Disciplines & Bento Grid */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* Before and After Smile Transformation Comparison Slider */}
        <BeforeAfterSlider onOpenBooking={() => handleOpenBooking()} />

        {/* Clinical Team (Dr. Marouf, Dr. Jadun, Dr. Berrios) */}
        <DoctorsSection onOpenBooking={() => handleOpenBooking()} />

        {/* High-Tech Operatory & Patient Comfort Suite */}
        <TechnologySuite />

        {/* Insurance, CareCredit Calculator & Wellness Membership */}
        <InsuranceCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Verified Reviews & Patient FAQs */}
        <TestimonialsSection />

        {/* 300 Gatlin Ave Location, Live Hours & Direct Inquiries */}
        <ContactLocation />
      </main>

      {/* Quiet, Accessible Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Booking Flow Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />

      {/* Mobile Sticky Quick Booking Bar (≤ 15% mobile viewport cap) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-stone-200/90 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${CLINIC_INFO.cleanPhone}`}
          className="flex-1 py-2 px-3 text-center rounded-lg border border-stone-300 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#0C3836]" />
          <span>Call (407) 851-7740</span>
        </a>

        <button
          type="button"
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2 px-3 text-center rounded-lg bg-[#0C3836] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Request Visit</span>
        </button>
      </div>
    </div>
  );
}
