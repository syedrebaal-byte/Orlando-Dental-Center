import React from 'react';
import { Cpu, Eye, Radio, Sparkles, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data/dentalData';

export const TechnologySuite: React.FC = () => {
  const techItems = [
    {
      icon: Radio,
      title: "Ultra Low-Dose 3D CBCT Imaging",
      desc: "Captures high-resolution 3D volumetric views of your jawbone, nerve pathways, and dental roots with up to 70% less radiation than conventional hospital scans, enabling micro-accurate implant placement."
    },
    {
      icon: Eye,
      title: "Impression-Free 3D Optical Scanners",
      desc: "Say goodbye to gagging on cold, messy impression putty. Our wand scanner captures thousands of photorealistic digital frames per second to construct millimeter-precise 3D virtual dental models."
    },
    {
      icon: Cpu,
      title: "Piezo Ultrasonic Enamel Scaling",
      desc: "High-frequency ultrasonic acoustic micro-vibrations gently shatter stubborn calculus and bacterial biofilm without scraping sensitive root surfaces, making your cleaning painless and rapid."
    },
    {
      icon: HeartHandshake,
      title: "Calm Hospitality & Zero-Anxiety Comfort",
      desc: "Relax in heated ergonomic dental chairs with noise-canceling headphones, ceiling entertainment monitors, and warm organic lavender towels following every restorative appointment."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-[#F5F2E9] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
            Clinical Technology & Patient Comfort
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            State-of-the-Art Precision. Designed Around Your Peace of Mind.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            We invest heavily in the latest dental engineering so that your appointments are faster, your restorations fit with micron precision, and you feel utterly comfortable from the moment you step through our doors.
          </p>
        </div>

        {/* 2-Column Visual & Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Visual 1: Tech Suite */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
            <div className="relative aspect-16/10 bg-stone-100 overflow-hidden">
              <img
                src={IMAGES.implant}
                alt="3D digital surgical implant planning and high-tech operatory at Orlando Dental Center"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0C3836]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">
                Digital Imaging Suite
              </div>
            </div>
            <div className="p-6 sm:p-7 space-y-2">
              <h3 className="text-xl font-serif-luxury font-bold text-stone-900">
                Computer-Guided Surgical Precision
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                By fusing 3D CBCT bone radiography with optical surface scans, our surgical guides map implant trajectories to the exact degree and millimeter prior to your procedure.
              </p>
            </div>
          </div>

          {/* Visual 2: Reception Lounge */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
            <div className="relative aspect-16/10 bg-stone-100 overflow-hidden">
              <img
                src={IMAGES.lounge}
                alt="Serene reception lounge with warm travertine and Florida natural light"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0C3836]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">
                Boutique Reception
              </div>
            </div>
            <div className="p-6 sm:p-7 space-y-2">
              <h3 className="text-xl font-serif-luxury font-bold text-stone-900">
                A Calm, Spa-Inspired Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Natural travertine stone, gentle Florida sunlight, and ambient acoustics replace the sterile hospital feeling. Here, dental visits are an opportunity to unwind.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs hover:border-[#0C3836]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] border border-[#E4DEC9] flex items-center justify-center text-[#0C3836] mb-4">
                  <Icon className="w-5 h-5 text-[#0C3836]" />
                </div>
                <h4 className="text-base font-serif-luxury font-bold text-stone-900">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
