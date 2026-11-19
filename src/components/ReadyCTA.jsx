import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Check } from 'lucide-react';

export default function ReadyCTA({ onPostCase, onLawyerRegister }) {
  return (
    <section className="py-12 sm:py-16 bg-legal-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Coral/Crimson Gradient Card - exactly matching image */}
        <div className="relative rounded-3xl p-8 sm:p-12 text-center text-white shadow-elevated overflow-hidden bg-gradient-to-br from-legal-coralStart to-legal-coralEnd">
          
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-legal-title tracking-tight mb-4 text-white">
            Ready to Get Started?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Join thousands of Indians who have found the right legal support through NyaySaathi's secure, simple, and status.
          </p>

          {/* Action Buttons - matching image */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            {/* White Button: Post Your Case */}
            <button
              onClick={onPostCase}
              className="w-full sm:w-1/2 bg-white hover:bg-stone-50 text-legal-crimson py-3.5 px-6 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Post Your Case</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Coral/Transparent Button: Lawyer Registration */}
            <button
              onClick={onLawyerRegister}
              className="w-full sm:w-1/2 bg-white/15 hover:bg-white/25 text-white border-2 border-white/60 hover:border-white py-3.5 px-6 rounded-xl text-base font-bold backdrop-blur-xs transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Lawyer Registration</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Bottom compliance guarantee */}
          <div className="mt-8 pt-6 border-t border-white/20 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white/90">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>100% compliant with Indian laws & Advocates Act, 1961</span>
          </div>

        </div>

      </div>
    </section>
  );
}

