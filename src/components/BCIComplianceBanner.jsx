import React from 'react';
import { Scale, CheckCircle2, ShieldAlert, BookCheck } from 'lucide-react';

export default function BCIComplianceBanner() {
  return (
    <section className="py-8 bg-legal-dark text-white border-y border-legal-darkBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left badge & title */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-legal-darkSecondary border border-legal-darkBorder flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg font-bold text-white tracking-wide">
                  BCI/State Bar Compliant
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold uppercase">
                  Rule 36 Safe
                </span>
              </div>
              <p className="text-xs text-[#95AEA9] font-medium mt-0.5">
                Ethical, Transparent, Non-Commercial Legal Technology
              </p>
            </div>
          </div>

          {/* Right 3 Pillars - exactly matching image bullets */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-[#D6E6E3]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No Solicitation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Identity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Safe Sharing</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

