import React from 'react';
import { FileEdit, UserCheck2, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StepsSection({ onPostCase, onExploreLawyers, onOpenPortal }) {
  const steps = [
    {
      num: '01',
      title: 'Post Your Case',
      desc: 'Fill a few details of your legal issue secretly & safely without upfront cost.',
      icon: FileEdit,
      tag: 'Takes 2 minutes',
      actionText: 'Post a Case Now',
      action: onPostCase,
      highlightColor: 'text-legal-crimson',
      bgGlow: 'hover:border-legal-crimson/40',
    },
    {
      num: '02',
      title: 'Choose a Lawyer',
      desc: 'Receive verified profiles of junior advocates and litigators interested in your matter.',
      icon: UserCheck2,
      tag: 'Select matching',
      actionText: 'Browse Directory',
      action: onExploreLawyers,
      highlightColor: 'text-legal-crimson',
      bgGlow: 'hover:border-legal-crimson/40',
    },
    {
      num: '03',
      title: 'Get Resolution',
      desc: 'Connect directly, discuss strategy via secure messaging, and move your case forward.',
      icon: Sparkles,
      tag: 'Solution starts',
      actionText: 'Track Active Case',
      action: onOpenPortal,
      highlightColor: 'text-legal-crimson',
      bgGlow: 'hover:border-legal-crimson/40',
    },
  ];

  return (
    <section id="steps-section" className="py-14 sm:py-20 bg-legal-cream relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-legal-crimson tracking-tight">
            3 Simple Steps
          </h2>
          <p className="mt-2 text-base text-[#666666] font-medium">
            Legal help is just a few clicks away
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onClick={step.action}
                className={`relative bg-white rounded-2xl p-6 sm:p-7 border border-legal-creamBorder shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer group ${step.bgGlow}`}
              >
                {/* Number in top right - exactly like the image */}
                <div className="absolute top-5 right-6 text-sm font-bold text-[#888888]/60 group-hover:text-legal-crimson transition-colors">
                  {step.num}
                </div>

                {/* Step Icon */}
                <div className="w-12 h-12 rounded-xl bg-legal-cream border border-legal-creamBorder flex items-center justify-center text-legal-crimson mb-5 group-hover:bg-legal-crimsonLight group-hover:border-legal-crimson/20 transition-all">
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F1F1F] group-hover:text-legal-crimson transition-colors mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#555555] leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-legal-creamBorder/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#777777] group-hover:text-legal-crimson">
                    <Clock className="w-3.5 h-3.5" />
                    {step.tag}
                  </span>

                  <span className="text-xs font-bold text-legal-crimson inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                    {step.actionText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

