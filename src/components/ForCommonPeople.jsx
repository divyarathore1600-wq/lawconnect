import React from 'react';
import { 
  BadgePercent, 
  ShieldCheck, 
  Lock, 
  Languages, 
  Activity, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CITIZEN_PERKS } from '../data/mockData';

export default function ForCommonPeople({ onFindLawyer, onPostCase }) {
  const iconMap = {
    'affordable': BadgePercent,
    'verified-advocates': ShieldCheck,
    'privacy-first': Lock,
    'languages': Languages,
    'case-tracking': Activity,
  };

  return (
    <section id="common-people-section" className="py-14 sm:py-20 bg-legal-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with vertical crimson accent bar - exactly as in the image */}
        <div className="flex items-center gap-3.5 mb-10">
          <div className="w-1.5 h-10 bg-legal-crimson rounded-full"></div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-[#1E1E1E] tracking-tight">
              For Common People
            </h2>
            <p className="text-sm text-[#666666] font-medium mt-0.5">
              Legal guidance that is affordable, trustworthy, and delivered with empathy
            </p>
          </div>
        </div>

        {/* Feature Cards Stack (Mint/Seafoam background cards - exactly like in image) */}
        <div className="space-y-4">
          {CITIZEN_PERKS.map((perk) => {
            const Icon = iconMap[perk.id] || Sparkles;
            return (
              <div
                key={perk.id}
                className="bg-legal-mint/80 border border-legal-mintBorder rounded-2xl p-5 sm:p-6 shadow-2xs hover:bg-legal-mint hover:border-legal-mintText/30 hover:shadow-soft transition-all duration-200 flex items-start gap-4 sm:gap-5 group"
              >
                {/* Icon box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/90 border border-legal-mintBorder flex items-center justify-center text-legal-mintText shrink-0 group-hover:bg-legal-mintText group-hover:text-white transition-all shadow-2xs">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0E453C] group-hover:text-[#06332C] transition-colors">
                      {perk.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-legal-mintText border border-legal-mintBorder shrink-0">
                      {perk.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#1A5C51] leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Crimson Red Button - exactly matching image */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onFindLawyer}
            className="w-full bg-legal-crimson hover:bg-legal-crimsonDark text-white py-4 px-6 rounded-2xl text-base sm:text-lg font-bold shadow-elevated flex items-center justify-center gap-3 transition-all transform active:scale-98 group"
          >
            <span>Find a Lawyer Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#666666] font-medium">
            <span>No upfront consultation fee to post your case</span>
            <span>•</span>
            <button 
              onClick={onPostCase}
              className="text-legal-crimson font-bold hover:underline"
            >
              Post a Case Directly
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

