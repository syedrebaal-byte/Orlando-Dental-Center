import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const ContactLocation: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setInquirySent(true);
  };

  return (
    <section id="location" className="py-20 bg-[#F5F2E9] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
            Visit Our Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Conveniently Located on Gatlin Avenue in Orlando.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Easily accessible from SoDo, Downtown Orlando, Conway, Belle Isle, and Lake Nona. Dedicated on-site patient parking and wheelchair-accessible ground-floor entrance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Clinic Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] block mb-2">
                  Address & Coordinates
                </span>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0C3836] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900 text-base">{CLINIC_INFO.name}</p>
                    <p className="text-stone-600 text-sm">{CLINIC_INFO.address}</p>
                    <p className="text-stone-600 text-sm">{CLINIC_INFO.cityStateZip}</p>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C3836] hover:underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps / Apple Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] block mb-2">
                  Practice Hours
                </span>
                <div className="space-y-2 text-xs">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-stone-700 py-1 border-b border-stone-50 last:border-none">
                      <span className="font-medium">{h.days}</span>
                      <span className="font-mono text-stone-600 tabular-nums">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone-100 pt-5 flex flex-col gap-2.5">
                <a
                  href={`tel:${CLINIC_INFO.cleanPhone}`}
                  className="flex items-center gap-3 text-stone-800 hover:text-[#0C3836] transition-colors text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#0C3836]" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#0C3836]" />
                  <span>{CLINIC_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Emergency box */}
            <div className="bg-[#FAF8F2] border border-[#E4DEC9] p-5 rounded-2xl text-xs text-stone-700">
              <strong className="text-[#0C3836] block mb-1">Notice for Emergency Patients:</strong>
              If you have sustained severe trauma or uncontrolled bleeding after office hours, please call our emergency line or proceed directly to Orlando Regional Medical Center (ORMC).
            </div>
          </div>

          {/* Quick Direct Inquiries & Interactive Directions Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
            {inquirySent ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  Message Sent to Orlando Dental Center
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will respond to your inquiry at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setInquirySent(false);
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 border border-stone-300 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-stone-100 pb-3 mb-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                    Ask a Question or Request Call-Back
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Have questions about treatment, insurance, or our doctors? Send a confidential inquiry.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(407) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    How Can Dr. Marouf & The Team Assist You?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for (e.g. porcelain veneers consultation, toothache, routine exam, or insurance questions)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#0C3836] hover:bg-[#072423] text-white rounded-lg text-sm font-semibold shadow-xs transition-colors"
                >
                  Send Direct Inquiry to Clinical Desk
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
