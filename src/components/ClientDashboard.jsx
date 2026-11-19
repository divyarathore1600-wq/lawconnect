import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  PlusCircle, 
  Send, 
  Paperclip, 
  AlertCircle, 
  ShieldCheck, 
  Scale, 
  MapPin, 
  ChevronRight,
  UserCheck,
  Video,
  Download,
  Eye,
  FileCheck2
} from 'lucide-react';

export default function ClientDashboard({ cases, onPostNewCase, onSendMessage, onJoinVideoRoom, lawyers }) {
  const [selectedCaseId, setSelectedCaseId] = useState(cases[0]?.id || null);
  const [replyText, setReplyText] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'documents', 'chat'

  const activeCase = cases.find(c => c.id === selectedCaseId) || cases[0];
  const assignedLawyer = lawyers.find(l => l.id === activeCase?.assignedLawyerId) || lawyers[0];

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim() || !activeCase) return;
    onSendMessage(activeCase.id, {
      sender: 'client',
      text: replyText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    setReplyText('');
  };

  return (
    <div className="py-8 sm:py-12 bg-legal-cream min-h-screen legal-paper-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-legal-crimson uppercase tracking-wider mb-1">
              <UserCheck className="w-4 h-4" />
              <span>Citizen Legal Portal</span>
            </div>
            <h1 className="text-3xl font-bold font-legal-title text-[#1C1C1C]">
              My Legal Inquiries & Active Matters
            </h1>
            <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
              Track your legal notices, case proceedings, and advocate consultations in real time.
            </p>
          </div>

          <button
            onClick={onPostNewCase}
            className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-soft transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post New Legal Matter</span>
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Cases List */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-xs font-bold text-[#444444] uppercase tracking-wider mb-2">
              All Grievances ({cases.length})
            </h2>

            {cases.map((c) => {
              const isSelected = c.id === activeCase?.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCaseId(c.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white border-legal-crimson shadow-card ring-1 ring-legal-crimson/20'
                      : 'bg-white/80 border-legal-creamBorder hover:bg-white hover:border-[#C5BBAA]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-legal-cream text-[#555555]">
                      {c.id}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      c.status.includes('Assigned') || c.status.includes('Drafted')
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {c.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#1E1E1E] line-clamp-1 mb-1">
                    {c.title}
                  </h3>

                  <div className="text-xs text-[#666666] flex items-center justify-between mt-2 pt-2 border-t border-legal-creamBorder/60">
                    <span className="text-legal-crimson font-medium">{c.category}</span>
                    <span>{c.city}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Case Timeline, Details, & Live Advocate Chat */}
          <div className="lg:col-span-7 space-y-6">
            {activeCase ? (
              <div className="bg-white rounded-3xl p-6 border border-legal-creamBorder shadow-card space-y-6">
                
                {/* Case Top Bar */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-legal-crimson tracking-wider uppercase">
                      {activeCase.category}
                    </span>
                    <span className="text-xs text-[#888888]">Filed: {activeCase.datePosted}</span>
                  </div>
                  <h2 className="text-xl font-bold font-legal-title text-[#1C1C1C] mb-2">
                    {activeCase.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed bg-legal-cream/60 p-3.5 rounded-xl border border-legal-creamBorder">
                    {activeCase.description}
                  </p>
                </div>

                {/* Assigned Advocate Card with Virtual Video Chamber Trigger */}
                <div className="p-4 rounded-2xl bg-legal-mint/60 border border-legal-mintBorder">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-legal-mintText block">
                        Assigned Legal Counsel
                      </span>
                      <span className="text-base font-bold text-[#0A4D42] flex items-center gap-1.5">
                        {activeCase.assignedLawyerName || 'Matching with nearby advocates...'}
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </span>
                      <span className="text-xs text-[#20695D]">
                        Bar Reg: {assignedLawyer.barCouncilId} • {assignedLawyer.courts[0]}
                      </span>
                    </div>

                    {activeCase.assignedLawyerName && (
                      <button
                        onClick={() => onJoinVideoRoom(assignedLawyer, activeCase.title)}
                        className="inline-flex items-center gap-2 bg-[#0D6154] hover:bg-[#0A4D42] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-soft transition-all active:scale-95 shrink-0"
                      >
                        <Video className="w-4 h-4 text-amber-300" />
                        <span>Join Video Chamber</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Sub Navigation Tabs for Active Case */}
                <div className="flex items-center gap-2 border-b border-legal-creamBorder pb-2 text-xs font-bold">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'overview'
                        ? 'bg-legal-crimson text-white'
                        : 'text-[#666666] hover:bg-legal-cream'
                    }`}
                  >
                    Case Proceedings
                  </button>
                  <button
                    onClick={() => setActiveTab('documents')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'documents'
                        ? 'bg-legal-crimson text-white'
                        : 'text-[#666666] hover:bg-legal-cream'
                    }`}
                  >
                    Document Vault ({activeCase.documents ? activeCase.documents.length : 1})
                  </button>
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'chat'
                        ? 'bg-legal-crimson text-white'
                        : 'text-[#666666] hover:bg-legal-cream'
                    }`}
                  >
                    Privileged Chat ({activeCase.messages ? activeCase.messages.length : 0})
                  </button>
                </div>

                {/* Tab: Case Timeline Steps */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xs font-bold text-[#444444] uppercase tracking-wider mb-4">
                      Case Lifecycle & Proceedings
                    </h3>
                    <div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-legal-creamBorder">
                      {activeCase.timeline?.map((step, idx) => (
                        <div key={idx} className="relative group">
                          <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] ${
                            step.done ? 'bg-emerald-600' : 'bg-gray-300'
                          }`}>
                            {step.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                          </div>
                          <div className="text-xs">
                            <div className="flex items-center gap-2">
                              <span className={`font-bold ${step.done ? 'text-[#1C1C1C]' : 'text-[#777777]'}`}>
                                {step.step}
                              </span>
                              <span className="text-[11px] text-[#888888]">({step.date})</span>
                            </div>
                            <p className="text-[#666666] mt-0.5">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab: Document Vault */}
                {activeTab === 'documents' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#666666] mb-2">
                      <span>Encrypted client repository (AES-256)</span>
                      <span className="text-emerald-700 font-semibold">Protected Under Indian Evidence Act</span>
                    </div>

                    {(activeCase.documents || [
                      { name: 'Grievance_Filing_Summary.pdf', size: '420 KB', date: 'Today', type: 'Notice Draft' }
                    ]).map((doc, dIdx) => (
                      <div key={dIdx} className="p-3.5 rounded-xl border border-legal-creamBorder bg-legal-cream/40 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-legal-crimsonLight text-legal-crimson flex items-center justify-center font-bold">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#222222] block">{doc.name}</span>
                            <span className="text-[10px] text-[#777777]">{doc.type} • {doc.size} • Uploaded {doc.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg bg-white border border-legal-creamBorder text-xs text-[#444444] hover:text-legal-crimson">
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-2 rounded-lg bg-white border border-legal-creamBorder text-xs text-[#444444] hover:text-legal-crimson">
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab: Secure Advocate Chat Box */}
                {activeTab === 'chat' && (
                  <div>
                    <div className="bg-legal-cream/50 rounded-2xl p-4 border border-legal-creamBorder space-y-3 max-h-60 overflow-y-auto mb-3">
                      {(!activeCase.messages || activeCase.messages.length === 0) ? (
                        <div className="text-center py-6 text-xs text-[#888888]">
                          No messages yet. Send a message to your assigned advocate below.
                        </div>
                      ) : (
                        activeCase.messages.map((msg, i) => {
                          const isMe = msg.sender === 'client';
                          return (
                            <div
                              key={i}
                              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                            >
                              <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs sm:text-sm ${
                                isMe
                                  ? 'bg-legal-crimson text-white rounded-br-none shadow-2xs'
                                  : 'bg-white text-[#222222] border border-legal-creamBorder rounded-bl-none shadow-2xs'
                              }`}>
                                {msg.text}
                              </div>
                              <span className="text-[10px] text-[#888888] mt-1 px-1">
                                {msg.time} • {isMe ? 'You' : (activeCase.assignedLawyerName || 'Advocate')}
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Send Reply Input */}
                    <form onSubmit={handleSendReply} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Type a confidential message or query to advocate..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-legal-creamBorder text-xs sm:text-sm focus:border-legal-crimson outline-hidden bg-white"
                      />
                      <button
                        type="submit"
                        disabled={!replyText.trim()}
                        className="bg-legal-crimson hover:bg-legal-crimsonDark disabled:opacity-40 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Send</span>
                      </button>
                    </form>
                  </div>
                )}

              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center text-[#888888] border border-legal-creamBorder">
                Select a case from the left to view details and advocate communications.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
