import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import { DOCTORS, IMAGES } from '../data/dentalData';
import { Doctor } from '../types/dental';

interface DoctorsSectionProps {
  onOpenBooking: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);

  return (
    <section id="doctors" className="py-20 bg-[#FAF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Dedicated Doctors. Lifelong Dedication to Gentle Dental Excellence.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Our dentists combine postgraduate fellowship training with an unhurried, listening approach. We treat each patient with the care, respect, and meticulous artistry we would give our own families.
          </p>
        </div>

        {/* Doctor Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {DOCTORS.map((doc) => {
            const isSelected = selectedDoctor.id === doc.id;
            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setSelectedDoctor(doc)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-white border-[#0C3836] shadow-sm ring-1 ring-[#0C3836]/20'
                    : 'bg-stone-50 border-stone-200/80 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836]">
                  {doc.experienceYears}+ Years Clinical Practice
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-900 mt-0.5">
                  {doc.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1 truncate">
                  {doc.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Featured Selected Doctor Profile Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-1/1 bg-stone-100 border border-stone-200">
              <img
                src={IMAGES.team}
                alt={`${selectedDoctor.name} at Orlando Dental Center`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent p-4 text-white">
                <p className="text-sm font-bold font-serif-luxury">{selectedDoctor.name}</p>
                <p className="text-xs text-stone-300">{selectedDoctor.title}</p>
              </div>
            </div>
          </div>

          {/* Biography & Credentials Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836]">
                Orlando Dental Center Practitioner
              </div>
              <h3 className="text-3xl font-serif-luxury font-bold text-stone-900 mt-1">
                {selectedDoctor.name}
              </h3>
              <p className="text-sm font-medium text-stone-600 mt-0.5">
                {selectedDoctor.title}
              </p>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              {selectedDoctor.bio}
            </p>

            {/* Academic background */}
            <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-stone-200/70 space-y-1.5 text-xs text-stone-700">
              <div className="flex items-center gap-2 font-semibold text-[#0C3836]">
                <GraduationCap className="w-4 h-4 text-[#0C3836]" />
                <span>Doctoral Education & Focus</span>
              </div>
              <p className="text-stone-600">{selectedDoctor.education}</p>
            </div>

            {/* Professional Memberships & Certifications */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2">
                Professional Accreditations & Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedDoctor.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0C3836] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-3 bg-[#0C3836] hover:bg-[#072423] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-2 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Request Appointment with {selectedDoctor.name.split(',')[0]}</span>
              </button>
              <a
                href="tel:4078517740"
                className="px-4 py-3 border border-stone-300 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg text-xs font-medium transition-colors"
              >
                Call Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
