import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top emergency & location announcement bar */}
      <div className="bg-[#0C3836] text-[#E8F0EE] text-xs py-2 px-4 border-b border-[#144845]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-normal">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>300 Gatlin Ave, Orlando, FL 32806</span>
            </span>
            <span className="hidden md:inline text-stone-400">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-200">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Saturday Appointments & Same-Day Emergency Walk-ins</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-300 hidden sm:inline">Emergency or Questions?</span>
            <a
              href={`tel:${CLINIC_INFO.cleanPhone}`}
              className="font-medium text-white hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>(407) 851-7740</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header strictly obeying Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5'
            : 'bg-[#FAF9F5] border-b border-stone-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single clean text element, no pill or secondary badges) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-tight text-[#0C3836] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            Orlando Dental Center
          </a>

          {/* Zone 2: 4-5 Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a
              href="#services"
              className="hover:text-[#0C3836] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="hover:text-[#0C3836] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Our Doctors
            </a>
            <a
              href="#interactive-3d"
              className="hover:text-[#0C3836] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              3D Anatomy
            </a>
            <a
              href="#technology"
              className="hover:text-[#0C3836] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Technology
            </a>
            <a
              href="#financing"
              className="hover:text-[#0C3836] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Insurance & Plans
            </a>
            <a
              href="#reviews"
              className="hover:text-[#0C3836] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Reviews
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.cleanPhone}`}
              className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-lg border border-stone-300 text-stone-700 hover:text-[#0C3836] hover:border-[#0C3836] hover:bg-stone-50 transition-all text-xs font-semibold whitespace-nowrap shrink-0"
              title="Call Orlando Dental Center"
            >
              <Phone className="w-4 h-4 text-[#0C3836]" />
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0C3836] rounded-lg hover:bg-[#072423] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Request Appointment</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-[#0C3836] hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-t border-stone-200 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-base font-medium text-stone-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836] border-b border-stone-100"
              >
                Dental Services
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836] border-b border-stone-100"
              >
                Meet the Doctors
              </a>
              <a
                href="#interactive-3d"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836] border-b border-stone-100"
              >
                Interactive 3D Visualizer
              </a>
              <a
                href="#technology"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836] border-b border-stone-100"
              >
                Comfort & Technology Suite
              </a>
              <a
                href="#financing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836] border-b border-stone-100"
              >
                Insurance & Financing
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836] border-b border-stone-100"
              >
                Patient Stories & Reviews
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#0C3836]"
              >
                Office Hours & Location (Gatlin Ave)
              </a>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="w-full py-2.5 px-4 text-center rounded-lg border border-stone-300 text-stone-800 font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0C3836]" />
                <span>Call (407) 851-7740</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center rounded-lg bg-[#0C3836] text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Request Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
