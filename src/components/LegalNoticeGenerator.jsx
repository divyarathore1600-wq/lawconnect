import React, { useState } from 'react';
import { X, FileText, Copy, Download, Check, Sparkles, Scale, ShieldCheck } from 'lucide-react';

export default function LegalNoticeGenerator({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [noticeType, setNoticeType] = useState('cheque');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    senderName: 'Rahul Mehra',
    senderAddress: 'C-42, Hauz Khas, New Delhi - 110016',
    recipientName: 'M/s Apex Enterprises (Prop. Sandeep Gupta)',
    recipientAddress: 'Plot 18, Industrial Area, Sector 58, Mohali, Punjab',
    amount: '₹1,80,000',
    chequeNo: '482910',
    chequeDate: '10th November 2026',
    bankName: 'HDFC Bank, Connaught Place Branch',
    returnReason: 'Funds Insufficient',
  });

  const getNoticeBody = () => {
    if (noticeType === 'cheque') {
      return `LEGAL DEMAND NOTICE
(UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881)

TO,
${formData.recipientName}
${formData.recipientAddress}

REF: DISHONOUR OF CHEQUE BEARING NO. ${formData.chequeNo} DATED ${formData.chequeDate} FOR AN AMOUNT OF ${formData.amount}/-

SIR/MADAM,

UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT, ${formData.senderName}, RESIDING AT ${formData.senderAddress}, I HEREBY SERVE UPON YOU THE FOLLOWING STATUTORY LEGAL DEMAND NOTICE:

1. That my client had supplied goods / rendered services to you in good faith, in discharge of which legally enforceable liability you issued cheque bearing No. ${formData.chequeNo} dated ${formData.chequeDate} drawn on ${formData.bankName} for a sum of ${formData.amount}/-.

2. That upon presentation by my client through their banker, the aforesaid cheque was returned dishonoured and unpaid with the bank remarks "${formData.returnReason}" vide Bank Cheque Return Memo dated 12th November 2026.

3. That you were well aware at the time of issuance that sufficient funds were not available in your account, thereby committing an offence punishable under Section 138 and Section 142 of the Negotiable Instruments Act, 1881, and Section 318(4) of the Bharatiya Nyaya Sanhita, 2023.

4. I, THEREFORE, BY MEANS OF THIS STATUTORY NOTICE, CALL UPON YOU TO MAKE PAYMENT OF THE AFORESAID AMOUNT OF ${formData.amount}/- TO MY CLIENT WITHIN A PERIOD OF FIFTEEN (15) DAYS FROM THE DATE OF RECEIPT OF THIS NOTICE.

5. Take notice that if you fail to liquidate the aforesaid amount within the stipulated 15 days, my client has given me strict instructions to initiate criminal proceedings against you before the Court of the Judicial Magistrate First Class having jurisdiction, at your sole cost and consequence.

ADVOCATE
HIGH COURT & DISTRICT COURTS
BAR REGISTRATION: D/1482/2021`;
    }

    if (noticeType === 'consumer') {
      return `LEGAL NOTICE FOR DEFICIENCY OF SERVICE & UNFAIR TRADE PRACTICE
(UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019)

TO,
${formData.recipientName}
${formData.recipientAddress}

RE: CLAIM FOR REFUND OF ${formData.amount}/- ALONG WITH INTEREST AND COMPENSATION FOR DEFICIENT GOODS/SERVICES

SIR/MADAM,

UNDER INSTRUCTIONS FROM MY CLIENT, ${formData.senderName}, I ADDRESS YOU AS FOLLOWS:

1. That my client purchased products / availed services from you against valid consideration of ${formData.amount}/-.
2. That the said product/service failed to meet statutory merchantable quality standards and was afflicted with gross defects, causing immense financial loss and mental harassment.
3. Multiple representations and complaint tickets logged with your customer grievance cell elicited no remedial action.
4. YOU ARE HEREBY CALLED UPON TO REFUND THE FULL SUM OF ${formData.amount}/- ALONG WITH 18% PER ANNUM INTEREST WITHIN 15 DAYS OF RECEIPT OF THIS NOTICE, FAILING WHICH A FORMAL COMPLAINT SHALL BE FILED BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION FOR HARASSMENT AND LITIGATION EXPENSES.

ADVOCATE
BAR COUNCIL OF INDIA`;
    }

    return `LEGAL DEMAND NOTICE FOR UNPAID DUES / SECURITY DEPOSIT
TO,
${formData.recipientName}
${formData.recipientAddress}

RE: DEMAND FOR IMMEDIATE REFUND OF SECURITY DEPOSIT OF ${formData.amount}/-

UNDER INSTRUCTIONS FROM MY CLIENT ${formData.senderName}, TAKE NOTICE THAT:
1. My client duly vacated the tenanted premises and handed over vacant peaceful possession.
2. In terms of Clause 4 of the Agreement, the security deposit was to be refunded immediately.
3. Failure to remit ${formData.amount}/- within 15 days shall constrain my client to initiate civil and criminal recovery proceedings against you under the Bharatiya Nyaya Sanhita and Specific Relief Act.

ADVOCATE`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getNoticeBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs fade-in">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl border border-legal-creamBorder flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-legal-creamBorder flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-legal-crimson text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1C1C1C]">
                Free Indian Statutory Legal Notice Generator
              </h3>
              <p className="text-xs text-[#666666]">
                Advocate Letterhead Format • 100% Bar Council Compliant
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-legal-cream flex items-center justify-center text-[#666666] hover:bg-legal-crimsonLight hover:text-legal-crimson"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Template Selector */}
          <div>
            <label className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-2">
              Select Legal Notice Template
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-bold">
              <button
                type="button"
                onClick={() => setNoticeType('cheque')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  noticeType === 'cheque'
                    ? 'border-legal-crimson bg-legal-crimsonLight text-legal-crimson'
                    : 'border-legal-creamBorder bg-white text-[#555555]'
                }`}
              >
                <span>Cheque Dishonour (Sec 138)</span>
              </button>

              <button
                type="button"
                onClick={() => setNoticeType('consumer')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  noticeType === 'consumer'
                    ? 'border-legal-crimson bg-legal-crimsonLight text-legal-crimson'
                    : 'border-legal-creamBorder bg-white text-[#555555]'
                }`}
              >
                <span>Consumer Dispute & Refund</span>
              </button>

              <button
                type="button"
                onClick={() => setNoticeType('deposit')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  noticeType === 'deposit'
                    ? 'border-legal-crimson bg-legal-crimsonLight text-legal-crimson'
                    : 'border-legal-creamBorder bg-white text-[#555555]'
                }`}
              >
                <span>Security Deposit Refund</span>
              </button>
            </div>
          </div>

          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold text-[#333333] block mb-1">Your Name (Client / Sender)</label>
              <input
                type="text"
                value={formData.senderName}
                onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-legal-creamBorder"
              />
            </div>

            <div>
              <label className="font-bold text-[#333333] block mb-1">Defaulting Party / Company</label>
              <input
                type="text"
                value={formData.recipientName}
                onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-legal-creamBorder"
              />
            </div>

            <div>
              <label className="font-bold text-[#333333] block mb-1">Disputed Claim Amount</label>
              <input
                type="text"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-legal-creamBorder"
              />
            </div>

            <div>
              <label className="font-bold text-[#333333] block mb-1">Cheque No / Invoice Ref</label>
              <input
                type="text"
                value={formData.chequeNo}
                onChange={(e) => setFormData({ ...formData, chequeNo: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-legal-creamBorder"
              />
            </div>
          </div>

          {/* Live Document Preview Box (Styled as authentic Indian Legal Letterhead Paper) */}
          <div className="relative rounded-2xl border-2 border-legal-creamBorder bg-[#FCFAF6] p-6 shadow-inner font-mono text-[11px] leading-relaxed text-[#2B2B2B] whitespace-pre-wrap max-h-80 overflow-y-auto">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <Scale className="w-64 h-64 text-legal-crimson" />
            </div>
            {getNoticeBody()}
          </div>

        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-legal-creamBorder flex items-center justify-between">
          <div className="text-xs text-[#777777]">
            Want a verified advocate to review & dispatch on official letterhead?
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-legal-creamBorder text-xs font-bold text-[#333333] hover:bg-legal-cream"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Notice' : 'Copy Notice Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-4 py-2 rounded-xl text-xs font-bold shadow-soft"
            >
              <span>Connect with Advocate</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

