import React, { useState } from 'react';
import { Scale, Clock, ShieldCheck, AlertCircle, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';
import { STATUTORY_LIMITATION_DATA } from '../data/mockData';

export default function LimitationCalculator({ onPostCase }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = STATUTORY_LIMITATION_DATA[selectedIdx];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-legal-creamBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-legal-crimsonLight text-legal-crimson text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Statutory Limitation & Court Finder
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-[#1C1C1C]">
            Is Your Legal Matter Still Within Limitation?
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-2">
            Under Indian law (Limitation Act, 1963 & special acts), legal remedies must be filed within statutory timelines. Check your dispute window and proper court forum below.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {STATUTORY_LIMITATION_DATA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedIdx === idx
                  ? 'bg-legal-crimson text-white shadow-soft scale-102'
                  : 'bg-legal-cream text-[#555555] hover:bg-legal-creamDark border border-legal-creamBorder'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Details Card */}
        <div className="bg-legal-cream/60 rounded-3xl p-6 sm:p-8 border border-legal-creamBorder shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Governing Law & Deadlines */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-legal-creamBorder">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block">Governing Indian Statute</span>
                <span className="text-sm font-bold text-legal-crimson">{current.act}</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-legal-creamBorder">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block">Statutory Limitation Window</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-base font-extrabold text-[#112321]">{current.statutoryWindow}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-legal-creamBorder">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block">Pre-Litigation Legal Notice</span>
                <p className="text-xs text-[#444444] mt-0.5">{current.noticeMandatory}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <strong className="block mb-1">Expected Legal Remedy:</strong>
                {current.remedy}
              </div>
            </div>

            {/* Right Column: Step-by-Step Legal Procedure */}
            <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-legal-creamBorder">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-4 flex items-center gap-2">
                <Scale className="w-4 h-4 text-legal-crimson" />
                Mandatory Legal Action Timeline
              </h3>

              <div className="space-y-3.5">
                {current.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-legal-crimsonLight text-legal-crimson text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-legal-creamBorder flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#777777]">
                  Need an advocate to draft this notice today?
                </span>
                <button
                  onClick={() => onPostCase(current.category)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-soft transition-all active:scale-95"
                >
                  <span>Post {current.category} Dispute</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

