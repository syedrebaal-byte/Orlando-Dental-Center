import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS, FAQS, CLINIC_INFO } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="reviews" className="py-20 bg-[#FAF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-2">
              Patient Experiences & Trust
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-stone-900 tracking-tight [text-wrap:balance]">
              Words from Central Florida Smiles We’ve Touched.
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs shrink-0">
            <div className="flex text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs text-stone-700">
              <strong className="text-stone-900 font-bold tabular-nums">4.9</strong> out of 5 · Over <strong className="tabular-nums">380+</strong> patient reviews
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C5A880]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    {t.date}
                  </span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-stone-900">{t.author}</h4>
                  <span className="text-stone-500">{t.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#0C3836] block">
                    {t.treatment}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    Treated by {t.doctorSeen}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0C3836] mb-1">
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-stone-900">
              Clear Answers Before You Visit Our Orlando Clinic
            </h3>
          </div>

          <div className="divide-y divide-stone-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left font-serif-luxury font-bold text-lg text-stone-900 hover:text-[#0C3836] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0C3836]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-stone-600 leading-relaxed pr-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
