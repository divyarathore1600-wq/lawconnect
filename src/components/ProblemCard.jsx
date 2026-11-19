import React from 'react';
import { AlertCircle, Scale, Users2, TrendingUp, BookOpen, Clock } from 'lucide-react';

export default function ProblemCard({ onExploreSolution }) {
  return (
    <section className="py-12 sm:py-16 bg-legal-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container exactly styled as in the image */}
        <div className="bg-legal-dark rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-legal-darkBorder">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-legal-crimson/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          {/* Red "PROBLEM" Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-legal-crimson text-white text-xs font-black tracking-widest uppercase">
              <AlertCircle className="w-3.5 h-3.5" />
              Problem
            </span>
          </div>

          {/* Massive Statistic Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-legal-title text-white tracking-tight leading-tight mb-4">
            5.0+ Crore Pending Cases
          </h2>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-[#D0DFDC] leading-relaxed max-w-2xl font-light mb-8">
            Ordinary people struggle to find affordable advice, while thousands of brilliant junior lawyers wait for clients. The gap in our legal system ends today.
          </p>

          {/* Secondary stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-legal-darkBorder/80">
            <div>
              <div className="flex items-center gap-1.5 text-legal-coralEnd text-xs font-semibold uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5" /> Avg Resolution Time
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">4.8 Yrs</div>
              <p className="text-xs text-[#95AEA9]">in traditional lower courts</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Users2 className="w-3.5 h-3.5" /> Young Litigators
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">70,000+</div>
              <p className="text-xs text-[#95AEA9]">fresh law graduates yearly</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <TrendingUp className="w-3.5 h-3.5" /> NyaySaathi Mission
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">&lt; 24 Hrs</div>
              <p className="text-xs text-[#95AEA9]">first legal consultation speed</p>
            </div>
          </div>

          {/* Imagery: Lawyers researching in chamber - matching image layout */}
          <div className="relative rounded-2xl overflow-hidden border border-legal-darkBorder/80 shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200"
              alt="Advocates analyzing case files in law library"
              className="w-full h-56 sm:h-72 object-cover object-center filter brightness-90 contrast-105 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-legal-dark via-legal-dark/40 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-300 uppercase block">Empowering Independent Practitioners</span>
                <span className="text-sm font-medium text-white">Connecting grassroots advocates with direct client representation</span>
              </div>

              <button
                onClick={onExploreSolution}
                className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                <span>How We Solve This</span>
                <Scale className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

