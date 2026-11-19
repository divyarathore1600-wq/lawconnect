import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Lock, 
  Award, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Search, 
  Sparkles,
  Star,
  Clock,
  PhoneCall,
  Check
} from 'lucide-react';
import { CASE_CATEGORIES } from '../data/mockData';

export default function LandingHero({ onFindLawyer, onJoinLawyer, onPostCase, onOpenNoticeGen, lang = 'en', translations }) {
  const [quickSearch, setQuickSearch] = useState('');
  const t = translations[lang] || translations.en;

  const popularTags = [
    { label: 'Cheque Bounce (Sec 138)', cat: 'Cheque Bounce (Sec 138)' },
    { label: 'RERA Builder Delay', cat: 'Property & RERA Disputes' },
    { label: 'UPI Cyber Scam', cat: 'Cyber Crime & Online Fraud' },
    { label: 'Consumer Goods Refund', cat: 'Consumer Rights & Refund' },
    { label: 'Wrongful Job Termination', cat: 'Employment & Labor' },
  ];

  return (
    <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 bg-legal-cream relative overflow-hidden legal-paper-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-legal-creamBorder shadow-2xs text-xs font-semibold text-legal-crimson">
            <Scale className="w-3.5 h-3.5 text-legal-crimson" />
            <span className="text-[#333333]">Advocates Act, 1961 & BCI Rule 36 Compliant Legal Tech Platform</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </span>
        </div>

        {/* Hero Banner Showcase (Matching the Image layout with enterprise-level depth) */}
        <div className="relative mx-auto max-w-4xl mb-10 rounded-3xl overflow-hidden border-2 border-legal-creamBorder shadow-card bg-white p-3 sm:p-5">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#EAF5F3] via-[#FAF6F0] to-[#FCEEEB] p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Interactive Consultation Scene & Trust Badges */}
            <div className="w-full md:w-7/12 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/60 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=900"
                  alt="Lawyer and client consultation across desk"
                  className="w-full h-56 sm:h-64 object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

                {/* Handshake Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold">Privileged Consultation</span>
                  </div>
                  <span className="text-[11px] text-[#D8E6E3] font-medium hidden sm:inline">
                    Confidential & Non-solicitation
                  </span>
                </div>
              </div>

              {/* Floating Live Lead Activity Card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-legal-creamBorder shadow-lg text-xs max-w-xs hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1C] flex items-center gap-1">
                    <span>Advocate Assigned</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  </div>
                  <p className="text-[11px] text-[#666666] line-clamp-1">
                    Sec 138 Notice drafted for client in Delhi
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Quick Highlights and Fast Access */}
            <div className="w-full md:w-5/12 space-y-3.5">
              <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-legal-creamBorder shadow-2xs">
                <div className="flex items-center justify-between text-xs font-bold text-legal-crimson mb-1">
                  <span>Fast Resolution</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">98% Success</span>
                </div>
                <h4 className="text-sm font-bold text-[#1C1C1C]">Pre-Litigation Settlement</h4>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                  Most civil, cheque bounce, and consumer disputes settle within 15 days of statutory legal demand notice.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-legal-creamBorder shadow-2xs">
                <div className="flex items-center justify-between text-xs font-bold text-legal-bronze mb-1">
                  <span>Junior Litigators Chamber</span>
                  <span className="text-[#333333] bg-legal-cream px-2 py-0.5 rounded-full text-[10px]">Zero Fee</span>
                </div>
                <h4 className="text-sm font-bold text-[#1C1C1C]">Direct Citizen Representation</h4>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                  Young advocates handle your case with complete focus, thorough legal research, and nominal fees.
                </p>
              </div>

              {/* Free Legal Notice Generator Trigger */}
              <button
                onClick={onOpenNoticeGen}
                className="w-full bg-legal-cream hover:bg-legal-creamDark text-legal-crimson border border-legal-crimson/30 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Free Legal Notice Generator & Preview</span>
              </button>
            </div>

          </div>
        </div>

        {/* Main Headline - exactly matching the image */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-legal-title text-legal-crimson leading-[1.2] tracking-tight">
            {t.heroTitle1}<br />
            {t.heroTitle2}
          </h1>

          {/* Subtitle paragraph - matching image text */}
          <p className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto font-normal">
            <strong className="text-[#1A1A1A] font-semibold">NyaySaathi</strong> {t.heroSub}
          </p>

          {/* Quick Filter Search Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative flex items-center bg-white rounded-2xl border-2 border-legal-creamBorder shadow-soft focus-within:border-legal-crimson focus-within:shadow-card p-1.5 transition-all">
              <Search className="w-5 h-5 ml-3 text-[#888888] shrink-0" />
              <input
                type="text"
                placeholder="What legal matter do you need help with?"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onFindLawyer(quickSearch);
                }}
                className="w-full px-3 py-2 text-xs sm:text-sm text-[#222222] placeholder-[#888888] outline-hidden bg-transparent"
              />
              <button
                onClick={() => onFindLawyer(quickSearch)}
                className="bg-legal-crimson hover:bg-legal-crimsonDark text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all shadow-2xs"
              >
                Search
              </button>
            </div>

            {/* Popular Dispute Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5">
              <span className="text-[11px] text-[#777777] font-semibold mr-1">Popular:</span>
              {popularTags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => onFindLawyer(tag.cat)}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-legal-crimsonLight text-[#555555] hover:text-legal-crimson border border-legal-creamBorder text-[11px] font-semibold transition-all cursor-pointer"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Primary & Secondary CTA Buttons - matching image buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onFindLawyer}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-elevated transition-all transform active:scale-95 group"
            >
              <span>{t.findLawyer}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onJoinLawyer}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-legal-creamLight text-[#333333] hover:text-legal-crimson border-2 border-legal-creamBorder px-7 py-3.5 rounded-xl text-base font-bold shadow-soft transition-all active:scale-95 group"
            >
              <span>{t.joinLawyer}</span>
              <ArrowRight className="w-4 h-4 text-legal-crimson transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Trust Badges Bar (Mint/Seafoam color background) - exactly like in image */}
        <div className="mt-12 sm:mt-16 bg-legal-mint border border-legal-mintBorder rounded-2xl p-4 sm:p-6 text-legal-mintText shadow-soft">
          <div className="text-center font-bold tracking-wider text-xs sm:text-sm uppercase text-legal-mintText/90 mb-4">
            {t.trustedBy}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-legal-mintText shadow-2xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-base sm:text-lg font-extrabold text-[#0D4A40]">500+</span>
                <span className="text-xs text-[#1E695D] font-medium">Advocates</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-legal-mintText shadow-2xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-base sm:text-lg font-extrabold text-[#0D4A40]">10,000+</span>
                <span className="text-xs text-[#1E695D] font-medium">Cases Resolved</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-legal-mintText shadow-2xs">
                <Lock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-base sm:text-lg font-extrabold text-[#0D4A40]">100% Secure</span>
                <span className="text-xs text-[#1E695D] font-medium">Confidential & BCI Legal</span>
              </div>
            </div>
          </div>

          {/* Legal / Bar Council Recognition Badges */}
          <div className="mt-5 pt-4 border-t border-legal-mintBorder/70 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-legal-mintText/80">
            <div className="flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-legal-mintText" />
              <span>Bar Council of India Rule 36 Safe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-legal-mintText" />
              <span>DLSA / State Legal Services Compatible</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-legal-mintText" />
              <span>AES-256 Encrypted Client Briefs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
