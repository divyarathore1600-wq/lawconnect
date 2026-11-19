import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default like in image

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-legal-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-legal-crimson tracking-tight">
            Common Questions
          </h2>
          <p className="mt-2 text-sm text-[#666666] font-medium">
            Everything you need to know about NyaySaathi / LawConnect
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-legal-crimson/30 shadow-card'
                    : 'bg-white/80 border-legal-creamBorder hover:bg-white hover:border-[#D0C4B4]'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-[#1E1E1E] text-base sm:text-lg focus:outline-hidden"
                >
                  <span className={`${isOpen ? 'text-legal-crimson' : 'text-[#222222]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-legal-crimsonLight text-legal-crimson' : 'bg-legal-cream text-[#666666]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#4F4F4F] leading-relaxed border-t border-legal-creamBorder/40">
                    <p>{faq.a}</p>
                    {idx === 0 && (
                      <div className="mt-3.5 p-3 rounded-xl bg-legal-mint/50 border border-legal-mintBorder text-xs text-legal-mintText flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>Bar Council of India Rule 36 prohibits solicitation of clients. This directory solely enables digital administration.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-8 text-center text-xs text-[#777777]">
          Have a specific legal query? <span className="text-legal-crimson font-bold cursor-pointer hover:underline">Chat with our legal support assistant 24/7</span>
        </div>

      </div>
    </section>
  );
}

