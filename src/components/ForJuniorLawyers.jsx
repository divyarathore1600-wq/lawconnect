import React from 'react';
import { 
  Users2, 
  FolderGit2, 
  BadgeCheck, 
  Laptop2, 
  Percent, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { JUNIOR_LAWYER_PERKS } from '../data/mockData';

export default function ForJuniorLawyers({ onJoinLawyer, onOpenLawyerDesk }) {
  const iconMap = {
    'direct-leads': Users2,
    'digital-practice': FolderGit2,
    'verified-identity': BadgeCheck,
    'flexible-working': Laptop2,
    'zero-fees': Percent,
  };

  return (
    <section id="junior-lawyers-section" className="py-14 sm:py-20 bg-legal-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with vertical accent bar - exactly as in the image */}
        <div className="flex items-center gap-3.5 mb-10">
          <div className="w-1.5 h-10 bg-legal-bronze rounded-full"></div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-[#1E1E1E] tracking-tight">
              For Junior Lawyers
            </h2>
            <p className="text-sm text-[#666666] font-medium mt-0.5">
              Build your independent litigation practice from day one
            </p>
          </div>
        </div>

        {/* Feature Cards Stack */}
        <div className="space-y-4">
          {JUNIOR_LAWYER_PERKS.map((perk, index) => {
            const Icon = iconMap[perk.id] || CheckCircle2;
            return (
              <div
                key={perk.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-legal-creamBorder shadow-soft hover:shadow-card hover:border-legal-bronze/40 transition-all duration-200 flex items-start gap-4 sm:gap-5 group"
              >
                {/* Icon box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-legal-cream flex items-center justify-center text-legal-bronze shrink-0 group-hover:bg-[#443A2C] group-hover:text-white transition-all">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1C1C] group-hover:text-legal-bronze transition-colors">
                      {perk.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-legal-creamDark text-legal-bronze border border-legal-creamBorder shrink-0">
                      {perk.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Dark Bronze Button - exactly matching image */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onJoinLawyer}
            className="w-full bg-legal-bronze hover:bg-legal-bronzeDark text-white py-4 px-6 rounded-2xl text-base sm:text-lg font-bold shadow-card flex items-center justify-center gap-3 transition-all transform active:scale-98 group"
          >
            <span>Join as Junior Lawyer - Free Registration</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[#777777] font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-legal-bronze" /> BCI Enrollment Card Required
            </span>
            <span>•</span>
            <span>Instant Lead Notifications</span>
            <span>•</span>
            <span 
              onClick={onOpenLawyerDesk}
              className="text-legal-crimson underline cursor-pointer hover:font-bold"
            >
              Preview Lawyer Desk
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

