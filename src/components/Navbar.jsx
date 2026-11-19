import React, { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  UserCheck, 
  Briefcase, 
  PlusCircle, 
  LogIn, 
  Languages, 
  FileText,
  Calculator,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({
  currentRole,
  onSwitchRole,
  activeTab,
  setActiveTab,
  onOpenPostCase,
  onOpenAuth,
  onOpenNoticeGen,
  user,
  lang,
  onToggleLang,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-legal-creamBorder shadow-xs">
      {/* Top micro banner for BCI disclaimer & quick tools */}
      <div className="bg-legal-dark text-[#D8E6E3] py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-white">Bar Council of India Rule 36 Compliant:</span>
            <span className="hidden sm:inline text-[#9FBCB7]">Non-solicitation, transparent legal directory & case management platform</span>
          </div>
          
          <div className="flex items-center gap-3 text-[11px] font-medium text-[#C8DBD8]">
            <button
              onClick={onOpenNoticeGen}
              className="hidden md:inline-flex items-center gap-1 text-amber-300 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> Notice Generator
            </button>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Verified Advocates
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo - exactly matching image */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-legal-crimsonLight border border-legal-crimson/20 flex items-center justify-center text-legal-crimson shadow-xs group-hover:bg-legal-crimson group-hover:text-white transition-all duration-200">
              <Scale className="w-6 h-6 transition-transform group-hover:scale-110" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold font-legal-title tracking-tight text-legal-crimson">
                  NyaySaathi
                </span>
                <span className="text-xs bg-legal-mint text-legal-mintText px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                  LawConnect
                </span>
              </div>
              <p className="text-[11px] text-[#666666] -mt-0.5 font-medium tracking-tight">
                न्याय साथी • Legal Help Made Simple & Accessible
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-[#444444]">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'home' 
                  ? 'text-legal-crimson bg-legal-crimsonLight font-bold' 
                  : 'hover:text-legal-crimson hover:bg-legal-cream'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('directory')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'directory' 
                  ? 'text-legal-crimson bg-legal-crimsonLight font-bold' 
                  : 'hover:text-legal-crimson hover:bg-legal-cream'
              }`}
            >
              Find Lawyers
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('steps-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('home');
              }}
              className="px-3 py-2 rounded-lg hover:text-legal-crimson hover:bg-legal-cream transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('junior-lawyers-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('home');
              }}
              className="px-3 py-2 rounded-lg hover:text-legal-crimson hover:bg-legal-cream transition-colors"
            >
              For Lawyers
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('common-people-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('home');
              }}
              className="px-3 py-2 rounded-lg hover:text-legal-crimson hover:bg-legal-cream transition-colors"
            >
              For Citizens
            </button>

            {/* Portal Tab based on role */}
            <button
              onClick={() => setActiveTab(currentRole === 'lawyer' ? 'lawyer-desk' : 'client-portal')}
              className={`ml-1 px-3 py-2 rounded-lg font-bold border flex items-center gap-1.5 transition-all text-xs sm:text-sm ${
                activeTab === 'lawyer-desk' || activeTab === 'client-portal'
                  ? 'bg-legal-dark text-white border-legal-dark shadow-xs'
                  : 'border-legal-creamBorder text-legal-dark hover:border-legal-dark hover:bg-legal-cream'
              }`}
            >
              {currentRole === 'lawyer' ? (
                <>
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  Lawyer Chamber
                </>
              ) : (
                <>
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  My Cases Desk
                </>
              )}
            </button>
          </nav>

          {/* Action buttons on right */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Bilingual Toggle (English / हिंदी) */}
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 rounded-lg border border-legal-creamBorder text-xs font-bold text-[#444444] hover:border-legal-crimson hover:text-legal-crimson bg-white flex items-center gap-1"
              title="Toggle English / हिंदी"
            >
              <Languages className="w-3.5 h-3.5 text-legal-crimson" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Role switch toggle pill */}
            <div className="hidden sm:flex items-center bg-legal-creamDark/70 p-1 rounded-full border border-legal-creamBorder text-xs">
              <button
                onClick={() => onSwitchRole('client')}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  currentRole === 'client'
                    ? 'bg-white text-legal-crimson shadow-xs'
                    : 'text-[#666666] hover:text-[#222222]'
                }`}
              >
                Citizen
              </button>
              <button
                onClick={() => onSwitchRole('lawyer')}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  currentRole === 'lawyer'
                    ? 'bg-legal-dark text-white shadow-xs'
                    : 'text-[#666666] hover:text-[#222222]'
                }`}
              >
                Junior Lawyer
              </button>
            </div>

            {/* Post Case quick CTA */}
            <button
              onClick={onOpenPostCase}
              className="hidden md:inline-flex items-center gap-1.5 bg-white text-legal-crimson hover:bg-legal-crimsonLight border border-legal-crimson/30 px-3.5 py-2 rounded-lg text-sm font-bold shadow-2xs transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              Post Case
            </button>

            {/* Red button exactly like top right in the image: "Sign Up / Login" */}
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xs transition-all active:scale-95"
            >
              <LogIn className="w-4 h-4" />
              <span>{user ? user.name.split(' ')[0] : 'Sign Up / Login'}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-legal-creamBorder text-[#444444] hover:bg-legal-cream hover:text-legal-crimson transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-legal-crimson" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-legal-creamBorder px-4 pt-3 pb-5 space-y-3 shadow-lg fade-in">
          {/* Mobile Role Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-legal-cream border border-legal-creamBorder">
            <span className="text-xs font-bold text-[#555555]">Active Perspective:</span>
            <div className="flex items-center bg-white p-0.5 rounded-lg border border-legal-creamBorder text-xs">
              <button
                onClick={() => { onSwitchRole('client'); setIsMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  currentRole === 'client' ? 'bg-legal-crimson text-white shadow-xs' : 'text-[#666666]'
                }`}
              >
                Citizen
              </button>
              <button
                onClick={() => { onSwitchRole('lawyer'); setIsMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  currentRole === 'lawyer' ? 'bg-legal-dark text-white shadow-xs' : 'text-[#666666]'
                }`}
              >
                Junior Lawyer
              </button>
            </div>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-1 text-sm font-semibold text-[#444444]">
            <button
              onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'home' ? 'text-legal-crimson bg-legal-crimsonLight font-bold' : 'hover:bg-legal-cream'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => { setActiveTab('directory'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'directory' ? 'text-legal-crimson bg-legal-crimsonLight font-bold' : 'hover:bg-legal-cream'
              }`}
            >
              Find Lawyers
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('steps-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('home');
                setIsMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-legal-cream transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('junior-lawyers-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('home');
                setIsMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-legal-cream transition-colors"
            >
              For Lawyers
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('common-people-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('home');
                setIsMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-legal-cream transition-colors"
            >
              For Citizens
            </button>
            <button
              onClick={() => {
                setActiveTab(currentRole === 'lawyer' ? 'lawyer-desk' : 'client-portal');
                setIsMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg font-bold border flex items-center justify-between transition-all ${
                activeTab === 'lawyer-desk' || activeTab === 'client-portal'
                  ? 'bg-legal-dark text-white border-legal-dark shadow-xs'
                  : 'border-legal-creamBorder text-legal-dark bg-legal-cream'
              }`}
            >
              <span>{currentRole === 'lawyer' ? 'Lawyer Chamber' : 'My Cases Desk'}</span>
              {currentRole === 'lawyer' ? (
                <Briefcase className="w-4 h-4 text-amber-400" />
              ) : (
                <UserCheck className="w-4 h-4 text-emerald-600" />
              )}
            </button>
          </div>

          {/* Quick Action buttons in drawer */}
          <div className="pt-2 border-t border-legal-creamBorder flex flex-col gap-2">
            <button
              onClick={() => { onOpenNoticeGen(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition-colors"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Generate Statutory Legal Notice</span>
            </button>
            <button
              onClick={() => { onOpenPostCase(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-legal-crimson hover:bg-legal-crimsonDark text-white text-xs font-bold shadow-xs transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post New Legal Case</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
