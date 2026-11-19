import React, { useState } from 'react';
import { X, Scale, ShieldCheck, UserCheck, ArrowRight, Check } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin, currentRole }) {
  if (!isOpen) return null;

  const [role, setRole] = useState(currentRole || 'client');
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    barCouncilId: '',
    stateBar: 'Bar Council of Delhi',
    city: 'New Delhi',
  });

  const handleQuickDemo = (demoType) => {
    if (demoType === 'lawyer') {
      onLogin({
        id: 'lawyer-1',
        name: 'Adv. Priya Sharma',
        role: 'lawyer',
        barCouncilId: 'D/1482/2021',
        stateBar: 'Bar Council of Delhi',
      });
    } else {
      onLogin({
        id: 'client-1',
        name: 'Rahul Mehra',
        role: 'client',
        city: 'New Delhi',
      });
    }
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      id: `user-${Date.now()}`,
      name: formData.name || (role === 'lawyer' ? 'Advocate User' : 'Citizen User'),
      role: role,
      barCouncilId: formData.barCouncilId || 'BCI/TEMP/2026',
      city: formData.city,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-legal-creamBorder overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-legal-cream border-b border-legal-creamBorder flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-legal-crimson text-white flex items-center justify-center font-bold">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1C1C1C]">
                {isSignUp ? 'Create an Account' : 'Sign In to LawConnect'}
              </h3>
              <p className="text-[11px] text-[#666666]">
                NyaySaathi • Secure Legal Gateway
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#666666] hover:bg-legal-crimsonLight hover:text-legal-crimson transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Role Switcher */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-2 p-1 bg-legal-cream rounded-xl border border-legal-creamBorder mb-5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setRole('client')}
              className={`py-2 rounded-lg transition-all ${
                role === 'client'
                  ? 'bg-white text-legal-crimson shadow-xs'
                  : 'text-[#666666] hover:text-[#222222]'
              }`}
            >
              Citizen / Client
            </button>
            <button
              type="button"
              onClick={() => setRole('lawyer')}
              className={`py-2 rounded-lg transition-all ${
                role === 'lawyer'
                  ? 'bg-legal-dark text-white shadow-xs'
                  : 'text-[#666666] hover:text-[#222222]'
              }`}
            >
              Junior Lawyer
            </button>
          </div>

          {/* Quick 1-Click Demo Login Buttons */}
          <div className="mb-5 p-3.5 rounded-2xl bg-legal-cream/80 border border-legal-creamBorder">
            <span className="text-[11px] font-bold text-[#666666] uppercase tracking-wider block mb-2">
              Instant 1-Click Demo
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => handleQuickDemo('client')}
                className="p-2 rounded-xl bg-white border border-legal-creamBorder hover:border-legal-crimson text-legal-crimson text-left transition-all"
              >
                <span className="block font-bold">Rahul Mehra</span>
                <span className="text-[10px] text-[#777777]">Citizen with active case</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemo('lawyer')}
                className="p-2 rounded-xl bg-legal-dark text-white text-left hover:bg-legal-darkSecondary transition-all"
              >
                <span className="block font-bold text-amber-400">Adv. Priya Sharma</span>
                <span className="text-[10px] text-[#A5C1BC]">BCI Verified Litigator</span>
              </button>
            </div>
          </div>

          <div className="relative my-4 text-center">
            <span className="bg-white px-2 text-xs text-[#888888] relative z-10 font-medium">Or enter your details</span>
            <div className="absolute inset-x-0 top-2.5 h-px bg-legal-creamBorder"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#333333] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder={role === 'lawyer' ? 'Adv. Your Name' : 'Your Full Name'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-legal-creamBorder text-sm focus:border-legal-crimson outline-hidden"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#333333] mb-1">
                Mobile Number or Email
              </label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                value={formData.emailOrPhone}
                onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-legal-creamBorder text-sm focus:border-legal-crimson outline-hidden"
                required
              />
            </div>

            {role === 'lawyer' && (
              <div>
                <label className="block text-xs font-bold text-[#333333] mb-1">
                  Bar Council Enrollment Number (BCI ID)
                </label>
                <input
                  type="text"
                  placeholder="e.g. D/1482/2021"
                  value={formData.barCouncilId}
                  onChange={(e) => setFormData({ ...formData, barCouncilId: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-legal-creamBorder text-sm focus:border-legal-crimson outline-hidden"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-xl text-sm font-bold text-white shadow-soft transition-all active:scale-95 flex items-center justify-center gap-2 ${
                role === 'lawyer'
                  ? 'bg-legal-bronze hover:bg-legal-bronzeDark'
                  : 'bg-legal-crimson hover:bg-legal-crimsonDark'
              }`}
            >
              <span>{isSignUp ? 'Register Account' : 'Continue to Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-4 text-center text-xs text-[#666666]">
            {isSignUp ? 'Already registered? ' : "Don't have an account yet? "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-legal-crimson font-bold hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Sign Up Free'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

