import React, { useState } from 'react';
import { Phone, MapPin, Mail, Shield, Heart, FileText, CheckCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICES, DOCTORS } from '../data/dentalData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <footer className="bg-[#071E1D] text-stone-300 pt-16 pb-12 border-t border-[#123634]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#144845]">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif-luxury text-2xl font-bold text-white tracking-tight">
              Orlando Dental Center
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Providing premier general, cosmetic, restorative, and emergency dentistry in Orlando, FL. Led by Dr. Firas Marouf, DMD and our dedicated clinical team.
            </p>
            <div className="pt-2 text-xs space-y-2 text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>300 Gatlin Ave, Orlando, FL 32806</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${CLINIC_INFO.cleanPhone}`} className="hover:text-white transition-colors">
                  (407) 851-7740
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  care@orlandodentalcenter.com
                </a>
              </div>
            </div>
          </div>

          {/* Clinical Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Treatments & Care
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Porcelain Veneers & Makeovers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Permanent Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Metal-Free Ceramic Crowns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Emergency Walk-Ins & Relief
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Gentle Ultrasonic Hygiene
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mercury-Free Composite Fillings
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Dentures & Partials
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Team */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Our Doctors
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Dr. Firas Marouf, DMD
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Dr. Ibrahim Jadun, DMD
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Dr. Beatriz C. Berrios Ouslan, DMD
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-xs text-[#C5A880] hover:underline flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Schedule */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Practice Hours
            </h4>
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="font-mono text-stone-300">7:45 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span className="font-mono text-stone-300">7:45 AM – 1:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>2nd & 4th Sat:</span>
                <span className="font-mono text-[#C5A880]">7:45 AM – 1:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-mono text-stone-500">Emergency On-Call</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="block text-center py-2 px-3 bg-[#123634] hover:bg-[#1b4b48] text-white text-xs font-semibold rounded-lg transition-colors border border-[#1b4b48]"
              >
                Emergency Call: (407) 851-7740
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-stone-500 leading-relaxed">
            <strong>Healthcare & Medical Disclaimer:</strong> The information presented on this website is for educational and appointment inquiry purposes and should not be construed as personal medical or dental advice. Diagnoses and treatment plans require a direct clinical examination and diagnostic radiographs by a licensed Doctor of Dental Medicine (DMD).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 pt-2">
            <div>
              © {new Date().getFullYear()} Orlando Dental Center. All rights reserved. 300 Gatlin Ave, Orlando, FL 32806.
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-stone-300 underline underline-offset-4"
              >
                Patient Privacy (HIPAA)
              </button>
              <button
                type="button"
                onClick={() => setAccessibilityOpen(true)}
                className="hover:text-stone-300 underline underline-offset-4"
              >
                Accessibility Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs text-stone-800">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 border border-stone-200 shadow-xl space-y-4">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
              HIPAA & Patient Privacy Statement
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Orlando Dental Center adheres strictly to the Health Insurance Portability and Accountability Act (HIPAA) of 1996. All dental records, health histories, and personal communications are stored within secure encrypted clinical systems. We do not sell or share patient data with third-party advertisers.
            </p>
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              className="w-full py-2 bg-[#0C3836] text-white rounded-lg text-xs font-semibold"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}

      {/* Accessibility Modal */}
      {accessibilityOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs text-stone-800">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 border border-stone-200 shadow-xl space-y-4">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
              Accessibility & WCAG Compliance Statement
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Orlando Dental Center is committed to digital accessibility for patients of all abilities. We follow WCAG 2.1 Level AA standards including high-contrast color ratios, keyboard navigable controls, screen-reader semantic hierarchies, and wheelchair accessibility at our physical 300 Gatlin Ave entrance.
            </p>
            <button
              type="button"
              onClick={() => setAccessibilityOpen(false)}
              className="w-full py-2 bg-[#0C3836] text-white rounded-lg text-xs font-semibold"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
