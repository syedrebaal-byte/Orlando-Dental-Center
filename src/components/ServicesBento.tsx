import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles, Shield, AlertCircle, X, Calendar } from 'lucide-react';
import { SERVICES } from '../data/dentalData';
import { ServiceItem } from '../types/dental';

interface ServicesBentoProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Cosmetic', 'Restorative', 'Preventative', 'Emergency'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-[#FAF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
              Comprehensive Clinical Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
              Modern Dental Disciplines, Delivered with Gentle Care.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Permitted Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const isFeatured = idx === 0 || service.category === 'Cosmetic' || service.category === 'Emergency';
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#0C3836]/40 hover:shadow-md transition-all duration-300 group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#F6F4EB]/70' : ''
                }`}
              >
                <div>
                  {/* Unboxed category metadata (Zero pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="font-semibold uppercase tracking-wider text-[#0C3836]">
                      {service.category} Dentistry
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-stone-900 group-hover:text-[#0C3836] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key clinical highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0C3836] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-[#0C3836] hover:text-[#072423] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Treatment Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3 py-1.5 bg-[#FAF8F2] hover:bg-[#0C3836] text-stone-800 hover:text-white border border-stone-200 text-xs font-medium rounded-lg transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Callout Card */}
        <div className="mt-10 bg-[#0C3836] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              <AlertCircle className="w-4 h-4 text-[#C5A880]" />
              <span>Same-Day Emergency Dental Protocol</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold">
              Experiencing Severe Tooth Pain or a Broken Tooth?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We welcome walk-in dental emergencies during business hours. Call ahead at (407) 851-7740 or come directly to 300 Gatlin Ave, Orlando.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:4078517740"
              className="w-full sm:w-auto px-5 py-3 text-center rounded-lg bg-[#C5A880] hover:bg-[#b5966c] text-[#0C3836] text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              Call for Immediate Triage: (407) 851-7740
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Drawer / Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-start justify-between bg-[#FAF9F5]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836]">
                  {activeModalService.category} Dentistry · Clinical Guide
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-stone-900 mt-1">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200/50 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2">
                  Clinical Overview
                </h4>
                <p className="leading-relaxed text-stone-600">
                  {activeModalService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2">
                  Core Patient Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#FAF9F5] p-2.5 rounded-lg border border-stone-200/70">
                      <CheckCircle2 className="w-4 h-4 text-[#0C3836] shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-700 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/70">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                    What To Expect
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {activeModalService.whatToExpect}
                  </p>
                </div>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/70">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                    Ideal Candidate
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {activeModalService.idealFor}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#FAF9F5] border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">
                Average Duration: <strong className="text-stone-800">{activeModalService.duration}</strong>
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const sid = activeModalService.id;
                    setActiveModalService(null);
                    onOpenBooking(sid);
                  }}
                  className="px-5 py-2.5 bg-[#0C3836] hover:bg-[#072423] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Book {activeModalService.title.split('&')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
