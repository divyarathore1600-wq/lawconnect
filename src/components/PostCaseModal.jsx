import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  Upload, 
  Sparkles, 
  ShieldCheck, 
  Scale, 
  FileText,
  Lock,
  Calendar,
  MapPin,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CASE_CATEGORIES } from '../data/mockData';

export default function PostCaseModal({ 
  isOpen, 
  onClose, 
  onCaseCreated, 
  user, 
  selectedLawyer = null,
  initialCategory = null,
  initialDescription = ''
}) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: initialCategory || (selectedLawyer?.specialization?.[0]) || 'Consumer Rights & Refund',
    description: initialDescription || '',
    city: selectedLawyer ? selectedLawyer.city : 'New Delhi',
    state: 'Delhi',
    disputeAmount: '₹50,000',
    urgency: 'Medium',
    isConfidential: true,
    preferredLanguage: 'Hindi / English',
    clientName: user ? user.name : 'Citizen User',
    clientPhone: '+91 98765 00000',
  });

  const [analyzingAI, setAnalyzingAI] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState(null);

  const handleCategorySelect = (catName) => {
    setFormData(prev => ({ ...prev, category: catName }));
  };

  const handleNext = () => {
    if (step === 2 && formData.description.length > 20) {
      // Simulate quick AI Legal Classification
      setAnalyzingAI(true);
      setTimeout(() => {
        setAnalyzingAI(false);
        let statutes = ['Consumer Protection Act, 2019', 'Indian Contract Act'];
        let advice = 'Legal demand notice with 15 days cure period recommended';

        if (formData.category.includes('Cheque')) {
          statutes = ['Section 138 & 142 Negotiable Instruments Act', 'Section 316 BNS'];
          advice = 'Ensure 30-day statutory notice is sent within 30 days of bank return memo';
        } else if (formData.category.includes('Cyber')) {
          statutes = ['Section 66D Information Technology Act', 'Section 318(4) Bharatiya Nyaya Sanhita (BNS)'];
          advice = 'Urgent representation to bank nodal officer & cyber crime reporting recommended';
        } else if (formData.category.includes('Property')) {
          statutes = ['Section 18 & 19 RERA Act, 2016', 'Specific Relief Act'];
          advice = 'Claim for delayed interest at SBI MCLR + 2% before Real Estate Regulatory Authority';
        }

        setAiSuggestions({ statutes, advice });
        setStep(3);
      }, 600);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDirectAdvocate = Boolean(selectedLawyer);
    const newCase = {
      id: `LC-CASE-${Math.floor(100 + Math.random() * 900)}`,
      title: formData.title || `${formData.category} Grievance`,
      category: formData.category,
      clientName: formData.clientName,
      city: formData.city,
      state: formData.state,
      budget: selectedLawyer ? `₹${selectedLawyer.consultationFee}` : '₹500 - ₹1,500',
      status: isDirectAdvocate ? 'Advocate Assigned' : 'Seeking Advocate',
      assignedLawyerId: selectedLawyer ? selectedLawyer.id : null,
      assignedLawyerName: selectedLawyer ? selectedLawyer.name : null,
      datePosted: new Date().toISOString().split('T')[0],
      urgency: formData.urgency,
      description: formData.description,
      timeline: [
        { step: 'Case Posted', date: 'Today', done: true, desc: 'Case details submitted securely' },
        { 
          step: isDirectAdvocate ? 'Advocate Connected' : 'Advocate Assigned', 
          date: isDirectAdvocate ? 'Just now' : 'In progress', 
          done: isDirectAdvocate, 
          desc: isDirectAdvocate ? `Assigned to ${selectedLawyer.name}` : 'Matching with verified advocates' 
        },
        { step: 'Consultation & Strategy', date: 'Pending', done: false, desc: '1-on-1 legal review' },
        { step: 'Legal Action / Notice', date: 'Pending', done: false, desc: 'Drafting statutory notice or petition' },
      ],
      messages: isDirectAdvocate ? [
        {
          sender: 'lawyer',
          text: `Namaste ${formData.clientName}! I have accepted your matter regarding "${formData.title || formData.category}". I am reviewing your facts and will assist you with legal strategy and proceedings.`,
          time: 'Just now'
        }
      ] : []
    };

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    onCaseCreated(newCase);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-legal-creamBorder flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-legal-creamBorder flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-legal-crimsonLight text-legal-crimson flex items-center justify-center font-bold">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E1E1E]">
                {selectedLawyer ? 'Book Consultation with Advocate' : 'Post Your Legal Matter'}
              </h3>
              <p className="text-xs text-[#666666]">Confidential & BCI Rule 36 Compliant</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-legal-cream flex items-center justify-center text-[#666666] hover:bg-legal-crimsonLight hover:text-legal-crimson transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Selected Advocate Banner */}
        {selectedLawyer && (
          <div className="bg-emerald-50 px-6 py-2.5 border-b border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Consulting with <strong>{selectedLawyer.name}</strong> • {selectedLawyer.barCouncilId} ({selectedLawyer.city})
              </span>
            </div>
            <span className="font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-300">
              ₹{selectedLawyer.consultationFee} / 30m
            </span>
          </div>
        )}

        {/* Wizard Progress Bar */}
        <div className="bg-legal-cream px-6 py-3 border-b border-legal-creamBorder flex items-center justify-between text-xs font-semibold text-[#666666]">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-legal-crimson font-bold' : ''}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-legal-crimson text-white' : 'bg-gray-200'}`}>1</span>
            <span>Category</span>
          </div>
          <div className="w-10 h-0.5 bg-gray-200"></div>
          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-legal-crimson font-bold' : ''}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-legal-crimson text-white' : 'bg-gray-200'}`}>2</span>
            <span>Case Brief</span>
          </div>
          <div className="w-10 h-0.5 bg-gray-200"></div>
          <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-legal-crimson font-bold' : ''}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-legal-crimson text-white' : 'bg-gray-200'}`}>3</span>
            <span>Review & Submit</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#1C1C1C]">
                Select the category of your legal issue:
              </h4>
              <p className="text-xs text-[#666666] -mt-2">
                This helps us connect you with verified advocates who specialize in this branch of law.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CASE_CATEGORIES.map((cat) => {
                  const isSelected = formData.category === cat.name;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.name)}
                      className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-legal-crimson bg-legal-crimsonLight/70 shadow-xs'
                          : 'border-legal-creamBorder hover:border-[#C8BCAB] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold ${isSelected ? 'text-legal-crimson' : 'text-[#1E1E1E]'}`}>
                          {cat.name}
                        </span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-legal-crimson" />}
                      </div>
                      <p className="text-[11px] text-[#666666] leading-snug">
                        {cat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                  Case Headline / Summary
                </label>
                <input
                  type="text"
                  placeholder="e.g. Unfair deduction of security deposit by landlord in Pune"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-legal-creamBorder text-sm focus:border-legal-crimson focus:ring-1 focus:ring-legal-crimson outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                  Describe the dispute in detail *
                </label>
                <textarea
                  rows={4}
                  placeholder="Mention facts: What happened, dates, amounts involved, any notices already received or sent..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-legal-creamBorder text-sm focus:border-legal-crimson focus:ring-1 focus:ring-legal-crimson outline-hidden"
                  required
                />
                <p className="text-[11px] text-[#777777] mt-1">
                  Do not share confidential passwords or bank OTPs. Your matter is protected under confidentiality privilege.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-legal-creamBorder text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-legal-creamBorder text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Dispute or Claim Value (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹50,000 or 'Not applicable'"
                  value={formData.disputeAmount}
                  onChange={(e) => setFormData({ ...formData, disputeAmount: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-legal-creamBorder text-sm"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              {/* AI Preliminary Insights Card */}
              {aiSuggestions && (
                <div className="p-4 rounded-2xl bg-legal-mint/80 border border-legal-mintBorder">
                  <div className="flex items-center gap-2 text-xs font-bold text-legal-mintText uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Preliminary Legal Intelligence
                  </div>
                  <div className="space-y-1.5 text-xs text-[#0D4E43]">
                    <p>
                      <strong>Suggested Governing Laws:</strong> {aiSuggestions.statutes.join(', ')}
                    </p>
                    <p>
                      <strong>Recommended Course:</strong> {aiSuggestions.advice}
                    </p>
                  </div>
                </div>
              )}

              {/* Case Summary Preview */}
              <div className="bg-legal-cream/80 rounded-2xl p-4 border border-legal-creamBorder space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#555555]">Category:</span>
                  <span className="font-bold text-legal-crimson">{formData.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#555555]">Location:</span>
                  <span className="text-[#222222]">{formData.city}, {formData.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#555555]">Dispute Amount:</span>
                  <span className="text-[#222222]">{formData.disputeAmount}</span>
                </div>
              </div>

              {/* Urgency & Preferences */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-legal-creamBorder text-xs bg-white"
                  >
                    <option value="Normal">Normal (within 3 days)</option>
                    <option value="Medium">Medium (within 24-48 hrs)</option>
                    <option value="High">Urgent (Immediate notice/action)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Language Preference
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-legal-creamBorder text-xs bg-white"
                  >
                    <option value="Hindi / English">Hindi / English</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Punjabi">Punjabi</option>
                  </select>
                </div>
              </div>

              {/* Confidentiality toggle */}
              <div className="p-3.5 rounded-xl border border-legal-creamBorder bg-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="text-xs font-bold text-[#222222] block">Confidential / Anonymous Mode</span>
                    <span className="text-[11px] text-[#666666]">Hide full contact number until you approve a specific lawyer</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.isConfidential}
                  onChange={(e) => setFormData({ ...formData, isConfidential: e.target.checked })}
                  className="w-4 h-4 accent-legal-crimson rounded"
                />
              </div>

              {/* Mock Document Upload box */}
              <div className="border-2 border-dashed border-legal-creamBorder rounded-2xl p-4 text-center hover:bg-legal-cream/50 transition-colors">
                <Upload className="w-6 h-6 mx-auto text-[#777777] mb-1.5" />
                <span className="text-xs font-bold text-[#222222] block">Attach Legal Proof or Notice (Optional)</span>
                <span className="text-[11px] text-[#888888]">PDF, JPG, PNG up to 15MB (e.g., bounced cheque copy, police complaint, agreement)</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-legal-creamBorder flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(prev => prev - 1)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666666] hover:text-[#222222] px-3 py-2 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : <div></div>}

          {step < 3 ? (
            <button
              onClick={handleNext}
              disabled={step === 2 && !formData.description.trim()}
              className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs disabled:opacity-50"
            >
              <span>{analyzingAI ? 'Analyzing Legal Context...' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-elevated transition-all active:scale-95"
            >
              <span>{selectedLawyer ? 'Confirm & Book Consultation' : 'Submit & Match Lawyers'}</span>
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

