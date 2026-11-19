import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Clock, 
  AlertCircle, 
  FileCheck, 
  ChevronRight,
  TrendingUp,
  MapPin,
  Sparkles,
  PhoneCall,
  Video,
  FileText,
  Building2,
  Scale
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LawyerDashboard({ cases, onAcceptCase, onSendMessage, onJoinVideoRoom, currentLawyer }) {
  const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'active', 'diary', 'analytics'
  const [activeChatCaseId, setActiveChatCaseId] = useState(cases[0]?.id || null);
  const [chatInput, setChatInput] = useState('');

  // Unassigned cases seeking advocate
  const openLeads = cases.filter(c => !c.assignedLawyerId || c.status === 'Seeking Advocate');
  
  // Cases handled by this lawyer or sample active cases
  const myCases = cases.filter(c => c.assignedLawyerId === (currentLawyer?.id || 'lawyer-1') || c.status !== 'Seeking Advocate');

  const activeChatCase = cases.find(c => c.id === activeChatCaseId) || myCases[0];

  const handleAcceptLead = (c) => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    onAcceptCase(c.id, currentLawyer || {
      id: 'lawyer-1',
      name: 'Adv. Priya Sharma',
      barCouncilId: 'D/1482/2021'
    });
    setActiveTab('active');
  };

  const handleSendLawyerMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim() || !activeChatCase) return;
    onSendMessage(activeChatCase.id, {
      sender: 'lawyer',
      text: chatInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    setChatInput('');
  };

  return (
    <div className="py-8 sm:py-12 bg-legal-cream min-h-screen legal-paper-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Lawyer Profile Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-legal-creamBorder shadow-card mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-legal-dark text-amber-400 flex items-center justify-center font-bold text-xl shadow-xs">
                <Scale className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold font-legal-title text-[#1C1C1C]">
                    {currentLawyer ? currentLawyer.name : 'Adv. Priya Sharma'}
                  </h1>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> BCI Verified Litigator
                  </span>
                </div>
                <p className="text-xs text-[#666666] mt-0.5">
                  Bar Reg: <strong className="text-[#333333]">{currentLawyer ? currentLawyer.barCouncilId : 'D/1482/2021'}</strong> • Chamber 418, Tis Hazari Courts & Delhi High Court
                </p>
              </div>
            </div>

            {/* Quick stats badge */}
            <div className="flex items-center gap-3 text-xs">
              <div className="bg-legal-cream px-3 py-2 rounded-xl border border-legal-creamBorder text-center">
                <span className="block font-bold text-legal-crimson text-sm">₹0 Fee</span>
                <span className="text-[10px] text-[#777777]">100% Retained</span>
              </div>
              <div className="bg-legal-cream px-3 py-2 rounded-xl border border-legal-creamBorder text-center">
                <span className="block font-bold text-emerald-700 text-sm">98 Cases</span>
                <span className="text-[10px] text-[#777777]">Resolved</span>
              </div>
              <div className="bg-legal-cream px-3 py-2 rounded-xl border border-legal-creamBorder text-center">
                <span className="block font-bold text-[#1C1C1C] text-sm">4.9 ★</span>
                <span className="text-[10px] text-[#777777]">Client Rating</span>
              </div>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-legal-creamBorder text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'leads'
                  ? 'bg-legal-bronze text-white shadow-xs'
                  : 'bg-legal-cream text-[#555555] hover:text-[#111111]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Available Client Leads ({openLeads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'active'
                  ? 'bg-legal-bronze text-white shadow-xs'
                  : 'bg-legal-cream text-[#555555] hover:text-[#111111]'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>Active Matters Desk ({myCases.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('diary')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'diary'
                  ? 'bg-legal-bronze text-white shadow-xs'
                  : 'bg-legal-cream text-[#555555] hover:text-[#111111]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Court Diary & Cause List</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Available Client Leads */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold font-legal-title text-[#1C1C1C]">
                  Live Citizen Inquiries (Direct Leads)
                </h2>
                <p className="text-xs text-[#666666]">
                  Citizens seeking immediate legal notices, advice, or representation without intermediary fees.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {openLeads.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl p-5 border border-legal-creamBorder shadow-soft hover:shadow-card hover:border-legal-bronze/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-legal-crimsonLight text-legal-crimson">
                        {c.category}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                        {c.urgency} Urgency
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#1C1C1C] mb-2 leading-snug">
                      {c.title}
                    </h3>

                    <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                      {c.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#666666] mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#888888]" /> {c.city}, {c.state}
                      </span>
                      <span>•</span>
                      <span>Client: <strong>{c.clientName}</strong></span>
                      <span>•</span>
                      <span>Budget: <strong className="text-emerald-700">{c.budget}</strong></span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-legal-creamBorder flex items-center justify-between">
                    <span className="text-[11px] text-[#888888]">Posted {c.datePosted}</span>
                    <button
                      onClick={() => handleAcceptLead(c)}
                      className="inline-flex items-center gap-1.5 bg-legal-bronze hover:bg-legal-bronzeDark text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs active:scale-95"
                    >
                      <span>Accept Case / Connect</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Active Matters & Communication Desk */}
        {activeTab === 'active' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-xs font-bold text-[#444444] uppercase tracking-wider mb-2">
                Assigned Matters ({myCases.length})
              </h2>
              {myCases.map((c) => {
                const isSelected = c.id === activeChatCase?.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setActiveChatCaseId(c.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-white border-legal-bronze shadow-card ring-1 ring-legal-bronze/20'
                        : 'bg-white/80 border-legal-creamBorder hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[11px] font-bold text-legal-crimson">{c.category}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                        {c.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#1C1C1C] line-clamp-1 mb-1">
                      {c.title}
                    </h3>
                    <div className="text-xs text-[#666666] flex justify-between mt-2">
                      <span>Client: {c.clientName}</span>
                      <span>{c.city}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Advocate Action & Messaging Panel */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-legal-creamBorder shadow-card space-y-5">
              {activeChatCase ? (
                <>
                  <div className="border-b border-legal-creamBorder pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-legal-crimson uppercase tracking-wider">
                        {activeChatCase.category}
                      </span>
                      <h2 className="text-lg font-bold font-legal-title text-[#1C1C1C] mt-1">
                        {activeChatCase.title}
                      </h2>
                      <p className="text-xs text-[#666666] mt-1">
                        Client: <strong>{activeChatCase.clientName}</strong> ({activeChatCase.city}) • Filed: {activeChatCase.datePosted}
                      </p>
                    </div>

                    <button
                      onClick={() => onJoinVideoRoom(currentLawyer, activeChatCase.title)}
                      className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 shadow-2xs"
                    >
                      <Video className="w-3.5 h-3.5 text-amber-300" />
                      <span>Video Chamber</span>
                    </button>
                  </div>

                  {/* Messages Feed */}
                  <div className="bg-legal-cream/50 rounded-2xl p-4 border border-legal-creamBorder space-y-3 max-h-64 overflow-y-auto">
                    {activeChatCase.messages?.map((msg, idx) => {
                      const isLawyer = msg.sender === 'lawyer';
                      return (
                        <div
                          key={idx}
                          className={`flex flex-col ${isLawyer ? 'items-end' : 'items-start'}`}
                        >
                          <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs sm:text-sm ${
                            isLawyer
                              ? 'bg-legal-bronze text-white rounded-br-none'
                              : 'bg-white text-[#222222] border border-legal-creamBorder rounded-bl-none shadow-2xs'
                          }`}>
                            {msg.text}
                          </div>
                          <span className="text-[10px] text-[#888888] mt-1 px-1">
                            {msg.time} • {isLawyer ? 'You (Advocate)' : activeChatCase.clientName}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Send response */}
                  <form onSubmit={handleSendLawyerMessage} className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Send formal update, statutory notice draft, or advisory..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-legal-creamBorder text-xs sm:text-sm focus:border-legal-bronze outline-hidden bg-white"
                    />
                    <button
                      type="submit"
                      disabled={!chatInput.trim()}
                      className="bg-legal-bronze hover:bg-legal-bronzeDark disabled:opacity-40 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 text-xs text-[#888888]">
                  Select a matter on the left.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Court Diary & Hearing Dates */}
        {activeTab === 'diary' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-legal-creamBorder shadow-card">
            <h2 className="text-xl font-bold font-legal-title text-[#1C1C1C] mb-4">
              Litigation Diary & Cause List Schedule
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-legal-cream/80 border border-legal-creamBorder flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-legal-crimson text-white flex items-center justify-center font-bold text-xs shrink-0">
                    24 NOV
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1C1C1C]">
                      Section 91 Representation - Cyber Crime Cell / Police Station
                    </h3>
                    <p className="text-xs text-[#666666]">
                      Case: LC-CASE-101 • Beneficiary account freeze order application
                    </p>
                    <span className="text-[11px] text-legal-crimson font-semibold">
                      🏛️ Patiala House Courts, New Delhi • Court Room 14
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                  Item No. 18 • 11:30 AM
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-legal-cream/80 border border-legal-creamBorder flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-legal-bronze text-white flex items-center justify-center font-bold text-xs shrink-0">
                    30 NOV
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1C1C1C]">
                      Cheque Dishonour Statutory Notice 15-Day Expiry
                    </h3>
                    <p className="text-xs text-[#666666]">
                      Case: LC-CASE-102 • Ready complaint under Sec 138 NI Act if unpaid
                    </p>
                    <span className="text-[11px] text-legal-bronze font-semibold">
                      🏛️ District Courts Complex, Sector 43, Chandigarh • JMIC Court 3
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                  Statutory Limitation
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
