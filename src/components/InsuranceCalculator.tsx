import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Calculator, Check, ArrowRight, HelpCircle } from 'lucide-react';

interface InsuranceCalculatorProps {
  onOpenBooking: () => void;
}

export const InsuranceCalculator: React.FC<InsuranceCalculatorProps> = ({ onOpenBooking }) => {
  const [estimatedCost, setEstimatedCost] = useState<number>(1800);
  const [selectedPlan, setSelectedPlan] = useState<'carecredit' | 'membership'>('carecredit');

  const ppoList = [
    "Delta Dental Premier & PPO",
    "MetLife PDP Plus",
    "Cigna Dental DPPO",
    "Aetna Dental",
    "Florida Blue (BCBS)",
    "Guardian DentalGuard",
    "Humana Dental",
    "UnitedHealthcare Dental",
    "Lincoln Financial",
    "Principal Financial Group"
  ];

  // Calculate monthly installments based on typical zero-interest CareCredit promotions
  const monthly6 = Math.round(estimatedCost / 6);
  const monthly12 = Math.round(estimatedCost / 12);
  const monthly24 = Math.round(estimatedCost / 24);

  return (
    <section id="financing" className="py-20 bg-[#FAF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
            Affordable Patient Options
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Transparent Investment. Zero Surprises.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            We believe premium healthcare should be straightforward and accessible. Whether utilizing your corporate PPO insurance or financing with zero interest, our patient coordinators verify every detail before treatment begins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Payment Calculator */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#0C3836]" />
                <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                  CareCredit Zero-Interest Payment Estimator
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-medium">0% APR Available*</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-stone-600 font-medium">Estimated Treatment Investment:</span>
                  <span className="text-2xl font-serif-luxury font-bold text-[#0C3836] tabular-nums">
                    ${estimatedCost.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="7500"
                  step="100"
                  value={estimatedCost}
                  onChange={(e) => setEstimatedCost(Number(e.target.value))}
                  className="w-full accent-[#0C3836] cursor-pointer"
                  aria-label="Estimated treatment cost slider"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>$300 (Hygiene/Fillings)</span>
                  <span>$3,500 (Veneers/Implants)</span>
                  <span>$7,500 (Reconstruction)</span>
                </div>
              </div>

              {/* Monthly breakdown cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-[#FAF9F5] text-center">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                    6 Months (0% APR)
                  </span>
                  <span className="text-xl font-bold text-stone-900 font-serif-luxury mt-1 block tabular-nums">
                    ${monthly6}
                    <span className="text-xs font-sans text-stone-500 font-normal">/mo</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-[#0C3836] bg-[#0C3836]/5 text-center ring-1 ring-[#0C3836]/20">
                  <span className="text-[11px] font-semibold text-[#0C3836] uppercase tracking-wider block">
                    12 Months (0% APR)
                  </span>
                  <span className="text-xl font-bold text-[#0C3836] font-serif-luxury mt-1 block tabular-nums">
                    ${monthly12}
                    <span className="text-xs font-sans text-stone-500 font-normal">/mo</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-[#FAF9F5] text-center">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                    24 Months
                  </span>
                  <span className="text-xl font-bold text-stone-900 font-serif-luxury mt-1 block tabular-nums">
                    ${monthly24}
                    <span className="text-xs font-sans text-stone-500 font-normal">/mo</span>
                  </span>
                </div>
              </div>

              <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#E4DEC9] flex items-start gap-3 text-xs text-stone-600">
                <ShieldCheck className="w-4 h-4 text-[#0C3836] shrink-0 mt-0.5" />
                <p>
                  We are an authorized <strong>CareCredit</strong> and <strong>Sunbit</strong> provider. Apply in minutes online or in our office with immediate approval and zero impact on your initial credit inquiry.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 px-4 bg-[#0C3836] hover:bg-[#072423] text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Treatment Consultation with Financing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Accepted PPO Plans & In-House Membership */}
          <div className="lg:col-span-5 space-y-6">
            {/* PPO Insurances */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs">
              <h4 className="font-serif-luxury text-lg font-bold text-stone-900 mb-1">
                Major PPO Dental Insurances Accepted
              </h4>
              <p className="text-xs text-stone-500 mb-4">
                We file all claims directly on your behalf to maximize your annual benefits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {ppoList.map((ins, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-700">
                    <Check className="w-3.5 h-3.5 text-[#0C3836] shrink-0" />
                    <span className="truncate">{ins}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-stone-500 mt-4 border-t border-stone-100 pt-3">
                Don't see your specific plan listed? Call our Orlando office at <strong>(407) 851-7740</strong>. We verify coverage for almost all PPO networks.
              </p>
            </div>

            {/* In-House Wellness Plan for Uninsured */}
            <div className="bg-[#0C3836] text-white rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                  No Insurance? No Problem.
                </span>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-stone-200 font-mono">
                  $299 / Year
                </span>
              </div>
              <h4 className="text-xl font-serif-luxury font-bold">
                Orlando Dental Center Wellness Plan
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-200">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>2 Comprehensive preventative hygiene cleanings per year</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>All periodic examinations & low-radiation digital X-rays</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>1 Emergency exam & pain diagnostic included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>20% off all cosmetic, restorative, and periodontal procedures</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 bg-[#C5A880] hover:bg-[#b5966c] text-[#0C3836] rounded-lg text-xs font-bold transition-colors"
                >
                  Inquire About the Wellness Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
