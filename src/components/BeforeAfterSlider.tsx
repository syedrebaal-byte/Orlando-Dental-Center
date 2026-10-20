import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, Check, ShieldAlert } from 'lucide-react';
import { IMAGES } from '../data/dentalData';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  doctor: string;
  shadeImprovement: string;
  description: string;
  beforeAspect: string;
  afterAspect: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "veneers",
    title: "Full Upper Arch Porcelain Veneers",
    category: "Cosmetic Makeover",
    doctor: "Dr. Firas Marouf, DMD",
    shadeImprovement: "8 Shades Brighter (A3.5 to BL2)",
    description: "Correction of extensive enamel wear, chipped incisal edges, and severe tetracycline discoloration using 8 custom hand-layered e.max ceramic veneers.",
    beforeAspect: "Deep intrinsic yellow-grey staining, uneven tooth lengths, and midline asymmetry.",
    afterAspect: "Balanced golden-proportion smile curve, luminous natural translucency, and healthy soft-tissue margin contour."
  },
  {
    id: "implant",
    title: "Single Molar 3D-Guided Dental Implant",
    category: "Implant Restorative",
    doctor: "Dr. Ibrahim Jadun, DMD",
    shadeImprovement: "Exact Custom Shade Match (A2)",
    description: "Restoration of a non-restorable lower molar using a biocompatible titanium fixture and custom monolithic screw-retained zirconia crown.",
    beforeAspect: "Missing tooth #19 with adjacent teeth drifting and loss of chewing stability.",
    afterAspect: "100% restored bite force, permanent osseointegration, and zero alteration of neighboring healthy enamel."
  },
  {
    id: "whitening",
    title: "Prescription In-Office Laser Whitening",
    category: "Aesthetic Brightening",
    doctor: "Dr. Beatriz C. Berrios Ouslan, DMD",
    shadeImprovement: "6 Shades Lightened in 60 Minutes",
    description: "Targeted removal of coffee and aged dietary stains using hydrogen peroxide photo-activation and dual-action desensitizing agent.",
    beforeAspect: "Heavy yellow enamel staining from tea/coffee with dull optical reflection.",
    afterAspect: "High-radiance natural pearlescent sheen with zero post-operative tooth sensitivity."
  }
];

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASE_STUDIES[0]);
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-20 bg-[#F5F2E9] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
            Clinical Restorative Evidence
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Precision Restorations. Naturally Radiant Outcomes.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Every smile created at Orlando Dental Center is engineered to complement your individual lip contour, facial symmetry, and personality. Explore real restorative case outcomes.
          </p>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCase(c);
                setSliderPos(50);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCase.id === c.id
                  ? 'bg-[#0C3836] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Visual Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
          {/* Left Column: Interactive Before/After Split Slider Visual */}
          <div className="lg:col-span-7">
            <div className="relative h-[320px] sm:h-[380px] w-full rounded-xl overflow-hidden select-none border border-stone-200 bg-stone-100">
              {/* After Image Layer (Underneath) */}
              <div className="absolute inset-0">
                <img
                  src={IMAGES.cosmetic}
                  alt="After dental cosmetic restoration outcome"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-[#0C3836]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">
                  After Treatment
                </div>
              </div>

              {/* Before Image Layer (Clipped via slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="w-full h-full relative" style={{ width: '100%', minWidth: '320px' }}>
                  <img
                    src={IMAGES.cosmetic}
                    alt="Before dental condition"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-xs text-stone-200 text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">
                    Initial State
                  </div>
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-md border-2 border-[#0C3836] flex items-center justify-center text-[#0C3836]">
                  <SlidersHorizontal className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* Range input for touch & keyboard accessibility */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Interactive before and after comparison slider"
              />

              <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                <span className="inline-block bg-black/60 backdrop-blur-xs text-white text-[10px] px-3 py-1 rounded-full">
                  Drag slider horizontally to compare
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Details & Clinical Explanation */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836]">
                {activeCase.category}
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-stone-900 mt-1">
                {activeCase.title}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Treating Doctor: <strong className="text-stone-700">{activeCase.doctor}</strong>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {activeCase.description}
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/70">
                <span className="font-semibold text-stone-500 uppercase tracking-wide block text-[10px] mb-1">
                  Initial Presentation
                </span>
                <span className="text-stone-700">{activeCase.beforeAspect}</span>
              </div>

              <div className="p-3 bg-[#FAF8F2] rounded-lg border border-[#E4DEC9]">
                <span className="font-semibold text-[#0C3836] uppercase tracking-wide block text-[10px] mb-1">
                  Final Clinical Outcome
                </span>
                <span className="text-stone-800 font-medium">{activeCase.afterAspect}</span>
              </div>

              <div className="flex items-center gap-2 text-stone-600 font-medium pt-1">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Result: {activeCase.shadeImprovement}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-[#0C3836] hover:bg-[#072423] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                Schedule Consultation for Similar Results
              </button>
            </div>
          </div>
        </div>

        {/* Responsible Medical Disclaimer */}
        <p className="text-[11px] text-stone-500 mt-4 text-center max-w-2xl mx-auto">
          *Individual clinical results vary based on oral bone density, bite mechanics, and oral hygiene. A comprehensive digital scan and examination is conducted prior to formulating your customized restorative treatment plan.
        </p>
      </div>
    </section>
  );
};
