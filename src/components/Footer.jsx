import React from 'react';
import { Scale, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-legal-dark text-[#D0DFDC] pt-14 pb-10 border-t border-legal-darkBorder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-legal-darkBorder">
          
          {/* Brand info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-legal-crimson text-white flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-legal-title text-white tracking-tight">
                NyaySaathi
              </span>
            </div>
            <p className="text-xs text-[#95AEA9] leading-relaxed">
              Making justice accessible and affordable for every citizen of India through technology.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Non-Commercial Tech Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#95AEA9]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('directory')} className="hover:text-white transition-colors">
                  Find Verified Lawyers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('client-portal')} className="hover:text-white transition-colors">
                  Client Case Desk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lawyer-desk')} className="hover:text-white transition-colors">
                  Lawyer Digital Chamber
                </button>
              </li>
              <li>
                <a href="#steps-section" className="hover:text-white transition-colors">
                  How NyaySaathi Works
                </a>
              </li>
            </ul>
          </div>

          {/* Case Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Case Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#95AEA9]">
              <li><span className="hover:text-white cursor-pointer">Consumer Forum Complaints</span></li>
              <li><span className="hover:text-white cursor-pointer">Cheque Bounce (Sec 138 NI Act)</span></li>
              <li><span className="hover:text-white cursor-pointer">Property & MahaRERA Disputes</span></li>
              <li><span className="hover:text-white cursor-pointer">Cyber Fraud & UPI Recovery</span></li>
              <li><span className="hover:text-white cursor-pointer">Mutual Consent Divorce & Family</span></li>
              <li><span className="hover:text-white cursor-pointer">Employment Termination Dues</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs text-[#95AEA9]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-legal-coralEnd shrink-0" />
                <span>support@lawconnect.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bar Council Chambers, Connaught Place, New Delhi - 110001, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bar Council Disclaimer - exact legal requirement */}
        <div className="py-6 border-b border-legal-darkBorder text-[11px] text-[#7A9590] leading-relaxed">
          <p className="font-semibold text-[#A2BDB7] mb-1">
            Mandatory Bar Council of India (BCI) Disclaimer:
          </p>
          <p>
            As per the rules of the Bar Council of India (specifically Rule 36 of BCI Rules), advocates in India are not permitted to solicit work or advertise their services in any manner. By accessing this platform (LawConnect / NyaySaathi), the user acknowledges that they are seeking general legal information and administrative connectivity of their own volition. The contents hereof do not constitute legal advice, solicitation, or an advertisement. All advocates listed on this platform are independent professionals enrolled with their respective State Bar Councils.
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9590]">
          <div>
            © {new Date().getFullYear()} NyaySaathi (LawConnect). Built with <Heart className="w-3.5 h-3.5 text-legal-crimson inline fill-legal-crimson" /> for Indian Citizens & Junior Advocates.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">BCI Compliance Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

