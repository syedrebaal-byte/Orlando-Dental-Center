import React from 'react';
import { Calendar, Phone, ArrowUpRight, ShieldCheck, Star } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed editorial category kicker (Zero pill discipline) */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-4">
          <span>Orlando, Florida</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>Comprehensive Family & Aesthetic Practice</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>Dr. Firas Marouf, DMD</span>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-stone-900 leading-[1.12] tracking-tight [text-wrap:balance]">
              Exceptional Dentistry, Crafted with Artistry & Calm in Orlando.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              From bespoke porcelain veneers and permanent 3D-guided dental implants to gentle routine cleanings and immediate emergency care. Experience unhurried, compassionate dental medicine at 300 Gatlin Avenue.
            </p>

            {/* Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0C3836] hover:bg-[#072423] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.99] whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Request Your Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-sm sm:text-base font-medium rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#0C3836]" />
                <span>Call (407) 851-7740</span>
              </a>
            </div>

            {/* Trust and accreditation unboxed text */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500">
              <span className="flex items-center gap-1 font-medium text-stone-700">
                <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                <span>4.9 Star Verified Patient Rating</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Accepting Most PPO Insurances</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="font-medium text-[#0C3836]">Emergency Walk-ins Welcome</span>
            </div>
          </div>

          {/* Right Column: Dominant 16:9 Focal Visual Carrier */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-100 aspect-16/10">
              <img
                src={IMAGES.hero}
                alt="Orlando Dental Center luxury operatory suite with Florida daylight"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Discreet architectural caption scrim */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/75 via-stone-950/25 to-transparent p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#E5D7BE]">
                      Private Operatory Suite
                    </p>
                    <p className="text-xs text-stone-200 mt-0.5">
                      300 Gatlin Ave · Ergonomic relaxation suites & panoramic Florida daylight
                    </p>
                  </div>
                  <a
                    href="#technology"
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                    title="Explore modern clinical technology"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Quantitative Rigor Strip */}
        <div className="mt-14 pt-10 border-t border-stone-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0C3836] tabular-nums">
              18+ Years
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Established clinical care serving families across Central Florida.
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0C3836] tabular-nums">
              4.9 / 5.0
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Over 380+ verified Google & patient reviews praising painless visits.
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0C3836] tabular-nums">
              100% Metal-Free
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Biomimetic zirconia crowns & zero-mercury tooth-colored fillings.
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0C3836] tabular-nums">
              Saturday Open
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              2nd & 4th Saturdays from 7:45 AM for busy Orlando schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
