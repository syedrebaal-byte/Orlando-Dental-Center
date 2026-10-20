import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Shield, AlertTriangle, ArrowLeft, Download } from 'lucide-react';
import { SERVICES, DOCTORS, CLINIC_INFO } from '../data/dentalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('morning');
  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [insuranceChoice, setInsuranceChoice] = useState<string>('ppo');
  const [insuranceName, setInsuranceName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!selectedDate) {
        alert("Please choose a preferred appointment date.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!fullName || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }
      // Generate randomized realistic reference code
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setConfirmationCode(`ODC-${randNum}`);
      setStep(4);
    }
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Orlando Dental Center//Appointment//EN
BEGIN:VEVENT
SUMMARY:Appointment: ${currentServiceObj.title} - Orlando Dental Center
DESCRIPTION:Visit at Orlando Dental Center\\nLocation: 300 Gatlin Ave, Orlando FL 32806\\nPhone: (407) 851-7740\\nRef: ${confirmationCode}
LOCATION:300 Gatlin Ave, Orlando, FL 32806
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `orlando-dental-appointment-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/65 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#0C3836]" />
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                {step === 4 ? 'Appointment Request Confirmed' : 'Request Dental Appointment'}
              </h3>
              <p className="text-xs text-stone-500">
                Orlando Dental Center · 300 Gatlin Ave, Orlando FL
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-200/50"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {step < 4 && (
          <div className="px-6 py-2.5 bg-stone-50 border-b border-stone-200/70 flex items-center justify-between text-xs text-stone-500 font-medium">
            <span className={step >= 1 ? 'text-[#0C3836] font-bold' : ''}>1. Service</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#0C3836] font-bold' : ''}>2. Doctor & Time</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#0C3836] font-bold' : ''}>3. Patient Details</span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Select Treatment or Consultation Need
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => {
                    const isSelected = selectedService === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'border-[#0C3836] bg-[#0C3836]/5 text-[#0C3836] font-semibold ring-1 ring-[#0C3836]/20'
                            : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                        }`}
                      >
                        <span className="block font-medium truncate">{s.title}</span>
                        <span className="text-[11px] text-stone-500 block mt-0.5 truncate">{s.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Walk-In Toggle */}
              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <label className="font-semibold text-amber-900 flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isEmergency}
                      onChange={(e) => setIsEmergency(e.target.checked)}
                      className="rounded accent-amber-700"
                    />
                    <span>Is this an urgent or same-day emergency toothache?</span>
                  </label>
                  <p className="text-amber-800/80 mt-1">
                    Check this if you are experiencing severe pain, swelling, or a fractured tooth so we can expedite your room placement immediately.
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Preferred Doctor
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                >
                  <option value="any">First Available Doctor (Fastest Appointment)</option>
                  {DOCTORS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} — {d.specialties[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Mon–Fri & 2nd/4th Saturdays available
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Time Window
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                  >
                    <option value="morning">Morning (7:45 AM – 11:30 AM)</option>
                    <option value="midday">Midday (11:30 AM – 2:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM – 5:00 PM)</option>
                    <option value="saturday">Saturday Slot (7:45 AM – 1:30 PM)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(407) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Email Address for Confirmation
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-[#0C3836] focus:ring-1 focus:ring-[#0C3836] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Insurance / Payment Preference
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setInsuranceChoice('ppo')}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      insuranceChoice === 'ppo'
                        ? 'border-[#0C3836] bg-[#0C3836]/5 font-semibold text-[#0C3836]'
                        : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    Dental Insurance
                  </button>
                  <button
                    type="button"
                    onClick={() => setInsuranceChoice('self-pay')}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      insuranceChoice === 'self-pay'
                        ? 'border-[#0C3836] bg-[#0C3836]/5 font-semibold text-[#0C3836]'
                        : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    Self-Pay / Cash
                  </button>
                  <button
                    type="button"
                    onClick={() => setInsuranceChoice('carecredit')}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      insuranceChoice === 'carecredit'
                        ? 'border-[#0C3836] bg-[#0C3836]/5 font-semibold text-[#0C3836]'
                        : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    CareCredit Financing
                  </button>
                </div>
                {insuranceChoice === 'ppo' && (
                  <input
                    type="text"
                    placeholder="Insurance Company (e.g. Delta Dental, MetLife, Florida Blue...)"
                    value={insuranceName}
                    onChange={(e) => setInsuranceName(e.target.value)}
                    className="w-full mt-2 px-3.5 py-2 rounded-lg border border-stone-300 text-xs focus:border-[#0C3836] outline-hidden"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Special Notes or Medical Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. dental anxiety, wheel-chair access, tooth sensitivity..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-xs focus:border-[#0C3836] outline-hidden"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-[#0C3836] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0C3836]">
                  Request Reference: {confirmationCode}
                </span>
                <h4 className="text-2xl font-serif-luxury font-bold text-stone-900">
                  We Look Forward to Welcoming You!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  A clinical coordinator from our 300 Gatlin Ave office will call you at <strong>{phone}</strong> to confirm your slot.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/80 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-stone-900">{currentServiceObj.title}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                  <span className="text-stone-500">Date & Window:</span>
                  <span className="font-semibold text-stone-900">{selectedDate || 'Upcoming'} · {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-semibold text-stone-900">300 Gatlin Ave, Orlando FL 32806</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4 text-[#0C3836]" />
                  <span>Download .ICS Calendar File</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0C3836] hover:bg-[#072423] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        {step < 4 && (
          <div className="p-4 sm:p-5 bg-[#FAF9F5] border-t border-stone-200 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-[11px] text-stone-400">
                Direct phone: (407) 851-7740
              </span>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2.5 bg-[#0C3836] hover:bg-[#072423] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors"
            >
              {step === 3 ? 'Confirm Appointment Request' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
