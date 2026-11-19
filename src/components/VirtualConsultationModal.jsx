import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  Share2, 
  FileText, 
  ShieldCheck, 
  Clock, 
  CheckCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function VirtualConsultationModal({ isOpen, onClose, lawyer, caseTitle }) {
  if (!isOpen) return null;

  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [seconds, setSeconds] = useState(740); // 12 mins 20s
  const [notes, setNotes] = useState(
    "1. Client to email original cheque return memo by tomorrow morning.\n2. Drafting Section 138 statutory demand notice granting 15 days cure period.\n3. Limitation window is valid till 10 Dec 2026.\n4. Speed post tracking ED9482910IN to be retained for Section 142 complaint."
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md fade-in">
      <div className="bg-[#112321] rounded-3xl w-full max-w-5xl h-[88vh] border border-[#284643] shadow-2xl flex flex-col overflow-hidden text-white">
        
        {/* Top Consultation Room Bar */}
        <div className="px-6 py-3.5 bg-[#0D1B19] border-b border-[#284643] flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <span className="font-bold text-white text-sm">Privileged Legal Consultation</span>
              <span className="hidden sm:inline text-[#95AEA9] ml-2">• Case: {caseTitle || 'Cyber UPI Fraud Investigation'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-legal-darkSecondary text-emerald-400 border border-emerald-900 font-mono font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(seconds)}</span>
            </div>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video & Notes Workspace */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 p-4 gap-4 overflow-hidden">
          
          {/* Main Video Stream (Advocate) */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-black/60 border border-[#284643] flex flex-col justify-between p-4">
            {/* Fake Video Screen using High-Res Advocate Chamber */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="Advocate in virtual chamber"
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

            {/* Top Bar inside Video */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur text-xs font-semibold text-emerald-300 border border-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                BCI Privileged Video Link
              </span>
            </div>

            {/* Self Video Inset Preview (bottom right) */}
            <div className="absolute bottom-5 right-5 w-32 sm:w-40 h-24 sm:h-28 rounded-xl bg-gray-900 border-2 border-white/20 shadow-xl overflow-hidden z-20">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300"
                alt="Client webcam preview"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 left-2 text-[10px] text-white/90 font-bold bg-black/50 px-1 rounded">
                You (Client)
              </span>
            </div>

            {/* Advocate Name Plate on video bottom */}
            <div className="relative z-10">
              <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                {lawyer?.name || 'Adv. Priya Sharma'}
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </h4>
              <p className="text-xs text-[#95AEA9]">
                Bar Reg: {lawyer?.barCouncilId || 'D/1482/2021'} • Delhi High Court
              </p>
            </div>
          </div>

          {/* Right Column: Shared Legal Strategy Notes */}
          <div className="lg:col-span-4 bg-[#0D1C1A] rounded-2xl p-4 border border-[#284643] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Live Strategy Scratchpad
                </span>
                <span className="text-[10px] text-[#7A9590]">Auto-saves to Case File</span>
              </div>

              <textarea
                rows={12}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-72 rounded-xl bg-[#162D2A] p-3 text-xs text-[#D8E8E5] font-mono leading-relaxed border border-[#2B4B47] focus:border-emerald-500 outline-hidden resize-none"
              />
            </div>

            <div className="pt-3 border-t border-[#284643] text-xs text-[#8BA49F]">
              <span>Strategy notes are encrypted under Indian Evidence Act legal professional privilege.</span>
            </div>
          </div>

        </div>

        {/* Video Chamber Bottom Controls */}
        <div className="px-6 py-4 bg-[#0D1B19] border-t border-[#284643] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                micOn ? 'bg-[#1C3633] text-white hover:bg-[#254A46]' : 'bg-red-900/60 text-red-200'
              }`}
            >
              {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setVideoOn(!videoOn)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                videoOn ? 'bg-[#1C3633] text-white hover:bg-[#254A46]' : 'bg-red-900/60 text-red-200'
              }`}
            >
              {videoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <PhoneOff className="w-4 h-4" />
            <span>End Consultation & Save Strategy</span>
          </button>
        </div>

      </div>
    </div>
  );
}

