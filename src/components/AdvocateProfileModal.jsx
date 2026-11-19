import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Languages, 
  Clock, 
  PhoneCall, 
  MessageSquare,
  CheckCircle2,
  Building2
} from 'lucide-react';

export default function AdvocateProfileModal({ isOpen, onClose, lawyer, onBookConsultation }) {
  if (!isOpen || !lawyer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-legal-creamBorder flex flex-col">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-legal-dark to-legal-darkSecondary p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src={lawyer.avatar}
              alt={lawyer.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400/40 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold font-legal-title text-white">
                  {lawyer.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> BCI Verified
                </span>
              </div>

              <p className="text-xs text-[#A2C7C1] mt-1 font-mono">
                {lawyer.barCouncilId} • {lawyer.stateBar}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#CBDED8] mt-2">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <strong>{lawyer.rating}</strong> ({lawyer.reviewsCount} reviews)
                </span>
                <span>•</span>
                <span>{lawyer.experience} Experience</span>
                <span>•</span>
                <span>{lawyer.casesWon}+ Resolved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details Body */}
        <div className="p-6 space-y-5 text-xs text-[#444444]">
          
          {/* Alma Mater & Chamber */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-legal-cream border border-legal-creamBorder flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-legal-crimson shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1C1C1C]">Law School & Degree</strong>
                <span>{lawyer.education || 'B.A. LL.B (Hons.), National Law University'}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-legal-cream border border-legal-creamBorder flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-legal-crimson shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1C1C1C]">Court Chambers</strong>
                <span>{lawyer.chamberAddress || 'Lawyers Chambers, District Courts Complex'}</span>
              </div>
            </div>
          </div>

          {/* Courts of Regular Practice */}
          <div>
            <strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1.5 font-bold">
              Courts of Regular Practice & Appearance
            </strong>
            <div className="flex flex-wrap gap-2">
              {lawyer.courts.map((court, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-legal-creamDark text-[#222222] font-semibold border border-legal-creamBorder">
                  🏛️ {court}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Notable Judgment or Settlement */}
          {lawyer.recentWin && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Recent Milestone Resolution:</span>
              </div>
              <p className="leading-relaxed">{lawyer.recentWin}</p>
            </div>
          )}

          {/* Bio */}
          <div>
            <strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1 font-bold">
              Professional Biography
            </strong>
            <p className="text-[#555555] leading-relaxed text-xs sm:text-sm">
              {lawyer.bio}
            </p>
          </div>

          {/* Languages & Response Speed */}
          <div className="flex items-center justify-between text-xs text-[#666666] pt-2 border-t border-legal-creamBorder">
            <span className="flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-[#888888]" />
              Speaks: <strong>{lawyer.languages.join(', ')}</strong>
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Average response within {lawyer.responseTime}
            </span>
          </div>

        </div>

        {/* Footer Action */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-legal-creamBorder flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#888888] uppercase tracking-wider block font-bold">Preliminary Consultation</span>
            <span className="text-xl font-extrabold text-[#112321]">₹{lawyer.consultationFee}</span>
            <span className="text-xs text-[#777777]"> / 30 mins session</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onBookConsultation(lawyer);
              }}
              className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-soft transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Legal Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

