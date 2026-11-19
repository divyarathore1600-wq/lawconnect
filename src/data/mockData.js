export const TRANSLATIONS = {
  en: {
    heroTitle1: "Struggling for Legal Cases?",
    heroTitle2: "Find Small Cases Here.",
    heroSub: "NyaySaathi connects citizens in need with verified legal professionals. Transparent, accessible, and 100% reliable aid for everyone.",
    findLawyer: "Find a Lawyer Now",
    joinLawyer: "Join as Junior Lawyer",
    trustedBy: "Trusted by 10,000+ Clients and Lawyers",
    stepsTitle: "3 Simple Steps",
    stepsSub: "Legal help is just a few clicks away",
    step1Title: "Post Your Case",
    step1Desc: "Fill a few details of your legal issue secretly & safely without upfront cost.",
    step2Title: "Choose a Lawyer",
    step2Desc: "Receive verified profiles of junior advocates and litigators interested in your matter.",
    step3Title: "Get Resolution",
    step3Desc: "Connect directly, discuss strategy via secure messaging, and move your case forward.",
    problemBadge: "Problem",
    problemStat: "5.0+ Crore Pending Cases",
    problemDesc: "Ordinary people struggle to find affordable advice, while thousands of brilliant junior lawyers wait for clients. The gap in our legal system ends today.",
    forLawyers: "For Junior Lawyers",
    forCitizens: "For Common People",
    freeRegistration: "Join as Junior Lawyer - Free Registration",
    readyTitle: "Ready to Get Started?",
    readySub: "Join thousands of Indians who have found the right legal support through NyaySaathi's secure, simple, and status.",
    postCaseBtn: "Post Your Case",
    lawyerRegBtn: "Lawyer Registration",
  },
  hi: {
    heroTitle1: "कानूनी मामलों की तलाश में हैं?",
    heroTitle2: "यहाँ पाएँ वास्तविक कानूनी मामले।",
    heroSub: "न्याय साथी जरूरतमंद नागरिकों को सत्यापित वकीलों से जोड़ता है। पारदर्शी, सुलभ और सभी के लिए 100% विश्वसनीय कानूनी सहायता।",
    findLawyer: "अभी वकील खोजें",
    joinLawyer: "जूनियर वकील के रूप में जुड़ें",
    trustedBy: "10,000+ नागरिकों और अधिवक्ताओं द्वारा विश्वसनीय",
    stepsTitle: "3 आसान चरण",
    stepsSub: "कानूनी मदद अब बस कुछ ही क्लिक दूर है",
    step1Title: "अपना मामला दर्ज करें",
    step1Desc: "बिना किसी अग्रिम शुल्क के सुरक्षित रूप से अपनी कानूनी समस्या का विवरण भरें।",
    step2Title: "वकील चुनें",
    step2Desc: "अपने मामले के लिए इच्छुक वकीलों की सत्यापित प्रोफाइल प्राप्त करें।",
    step3Title: "समाधान पाएँ",
    step3Desc: "सीधे जुड़ें, रणनीति बनाएं और अपने मामले को कानूनी रूप से आगे बढ़ाएं।",
    problemBadge: "गंभीर समस्या",
    problemStat: "5.0+ करोड़ लंबित अदालती मामले",
    problemDesc: "आम लोग किफायती कानूनी सलाह के लिए संघर्ष करते हैं, जबकि हजारों प्रतिभाशाली युवा वकील मुकदमों की प्रतीक्षा करते हैं। यह खाई आज समाप्त होगी।",
    forLawyers: "युवा अधिवक्ताओं के लिए",
    forCitizens: "आम नागरिकों के लिए",
    freeRegistration: "युवा वकील के रूप में निःशुल्क पंजीकरण करें",
    readyTitle: "क्या आप शुरुआत करने के लिए तैयार हैं?",
    readySub: "हजारों भारतीयों से जुड़ें जिन्होंने न्याय साथी के माध्यम से सही और सुलभ कानूनी सहायता प्राप्त की है।",
    postCaseBtn: "अपना मामला पोस्ट करें",
    lawyerRegBtn: "वकील पंजीकरण",
  }
};

export const LIVE_TICKER_EVENTS = [
  { time: '2 mins ago', city: 'Pune', text: 'Adv. Rajesh Verma accepted a RERA flat delay dispute (MahaRERA)', icon: 'Home' },
  { time: '5 mins ago', city: 'Chandigarh', text: 'Statutory 30-day Sec 138 Cheque Bounce notice dispatched via Speed Post', icon: 'Receipt' },
  { time: '11 mins ago', city: 'New Delhi', text: 'UPI cyber fraud freeze representation submitted to Banking Nodal Officer', icon: 'ShieldAlert' },
  { time: '18 mins ago', city: 'Bengaluru', text: 'Mutual consent divorce petition draft reviewed with client over video chamber', icon: 'Users' },
  { time: '24 mins ago', city: 'Kolkata', text: 'Unfair medical insurance claim rejection appeal filed before Ombudsman', icon: 'FileText' },
  { time: '35 mins ago', city: 'Chennai', text: 'Wrongful employee termination severance demand notice drafted by Adv. Karthik', icon: 'Briefcase' },
];

export const CASE_CATEGORIES = [
  { id: 'consumer', name: 'Consumer Rights & Refund', icon: 'ShoppingBag', desc: 'Defective products, airline refunds, e-commerce fraud, unfair trade practices', limitation: '2 Years from cause of action', court: 'District Consumer Disputes Redressal Commission (DCDRC)' },
  { id: 'property', name: 'Property & RERA Disputes', icon: 'Home', desc: 'Builder delay, tenant eviction, rent disputes, property registration & title checks', limitation: 'Within limitation of agreement / Ongoing', court: 'RERA Tribunal & Civil Court' },
  { id: 'cheque', name: 'Cheque Bounce (Sec 138)', icon: 'Receipt', desc: 'Bounced cheques, legal demand notice, recovery of unpaid business debts', limitation: '30 Days from Cheque Return Memo', court: 'Judicial Magistrate 1st Class (JMIC)' },
  { id: 'cyber', name: 'Cyber Crime & Online Fraud', icon: 'ShieldAlert', desc: 'UPI scams, unauthorized debit, phishing, cyber harassment, data leaks', limitation: 'Immediate (Golden 24 Hours)', court: 'Cyber Crime Cell & Adjudicating Officer under IT Act' },
  { id: 'family', name: 'Family & Matrimonial', icon: 'Users', desc: 'Mutual consent divorce, maintenance, child custody, succession certificate', limitation: 'Family Court Act / Civil', court: 'Principal Judge, Family Court' },
  { id: 'employment', name: 'Employment & Labor', icon: 'Briefcase', desc: 'Wrongful termination, unpaid salary, PF/Gratuity release, NDA issues', limitation: '3 Years under Limitation Act', court: 'Labor Commissioner & Industrial Tribunal' },
  { id: 'civil', name: 'Civil Recovery & Notices', icon: 'FileText', desc: 'Legal notices, breach of contract, money recovery suits, summary suits', limitation: '3 Years from breach date', court: 'Civil Judge Senior / Junior Division (Order 37 CPC)' },
  { id: 'motor', name: 'Motor Vehicle & Insurance', icon: 'Car', desc: 'MACT claim, vehicle accident claims, health/car insurance claim repudiation', limitation: '6 Months from accident (amended MVA)', court: 'Motor Accident Claims Tribunal (MACT)' },
];

export const STATUTORY_LIMITATION_DATA = [
  {
    category: 'Cheque Bounce',
    act: 'Negotiable Instruments Act, 1881 (Section 138)',
    statutoryWindow: '30 Days from Return Memo',
    noticeMandatory: 'Yes, mandatory statutory notice of 15 days cure period',
    remedy: 'Criminal complaint punishable by up to 2 years imprisonment or twice cheque amount',
    steps: [
      'Receive Cheque Return Memo from your bank',
      'Send Legal Demand Notice to drawer within 30 days of bank memo',
      'Give drawer 15 days to pay from receipt of notice',
      'If unpaid, file criminal complaint in court within 30 days after the 15-day period ends'
    ]
  },
  {
    category: 'Consumer Forum Complaint',
    act: 'Consumer Protection Act, 2019 (Section 35 & 69)',
    statutoryWindow: '2 Years from cause of action',
    noticeMandatory: 'Advisable (15 days notice gives high pre-litigation settlement probability)',
    remedy: 'Full refund + interest + compensation for mental harassment & litigation costs',
    steps: [
      'Preserve tax invoice, payment receipts, and customer care complaint tickets',
      'Send formal legal notice to company giving 15 days to refund/replace',
      'File online on e-Daakhil portal or physically at District Commission (< ₹50 Lakhs)',
      'Notice issued to opposite party by President of Commission'
    ]
  },
  {
    category: 'RERA Builder Possession Delay',
    act: 'Real Estate (Regulation and Development) Act, 2016 (Section 18)',
    statutoryWindow: 'Ongoing continuous cause of action',
    noticeMandatory: 'Advisable before filing complaint under Form M',
    remedy: 'Interest on every month of delay at SBI Highest MCLR + 2%, or full refund with interest',
    steps: [
      'Verify builder date of completion committed in Registered Builder-Buyer Agreement',
      'Issue formal notice claiming statutory interest for delayed possession',
      'File online complaint before State RERA Adjudicating Officer / Authority',
      'Execution of recovery certificate (RC) through District Collector if builder defaults'
    ]
  },
  {
    category: 'Cyber Financial Fraud / UPI',
    act: 'Information Technology Act, 2000 & Section 318(4) Bharatiya Nyaya Sanhita (BNS)',
    statutoryWindow: 'Golden 24 Hours (Immediate)',
    noticeMandatory: 'Grievance notice to Bank Nodal Officer under RBI Master Circular on Limiting Customer Liability',
    remedy: 'Freezing of beneficiary account and zero customer liability for third-party breaches',
    steps: [
      'Dial 1930 Cyber Crime Helpline or register on cybercrime.gov.in',
      'Send representation to your Home Branch Manager & Principal Nodal Officer',
      'Petition under Section 91 CrPC / Section 94 BNSS to trace beneficiary bank IP logs',
      'Approach Banking Ombudsman if bank delays processing chargeback claim'
    ]
  }
];

export const INITIAL_LAWYERS = [
  {
    id: 'lawyer-1',
    name: 'Adv. Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    barCouncilId: 'D/1482/2021',
    stateBar: 'Bar Council of Delhi',
    education: 'B.A. LL.B (Hons.), National Law University Delhi (2020)',
    chamberAddress: 'Chamber 418, Lawyers Block, Tis Hazari Courts, New Delhi',
    courts: ['Delhi High Court', 'Tis Hazari District Court', 'Patiala House Courts'],
    specialization: ['Consumer Rights & Refund', 'Cyber Crime & Online Fraud'],
    experience: '4+ Years',
    rating: 4.9,
    reviewsCount: 142,
    consultationFee: 499,
    city: 'New Delhi',
    languages: ['Hindi', 'English'],
    bio: 'Dedicated young litigator focused on speedy justice for digital fraud victims and consumer dispute resolutions. Proven track record in District Forums and High Court.',
    casesWon: 98,
    activeCases: 14,
    responseTime: '< 30 mins',
    verified: true,
    recentWin: 'Recovered ₹1,85,000 in unfair airline cancellation charge dispute for family of four',
  },
  {
    id: 'lawyer-2',
    name: 'Adv. Rajesh Verma',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    barCouncilId: 'MAH/3421/2019',
    stateBar: 'Bar Council of Maharashtra & Goa',
    education: 'LL.B, Government Law College (GLC) Mumbai (2018)',
    chamberAddress: 'Office 203, Vardhaman Chambers, Fort, Mumbai',
    courts: ['Bombay High Court', 'MahaRERA Tribunal', 'City Civil Court Mumbai'],
    specialization: ['Property & RERA Disputes', 'Civil Recovery & Notices'],
    experience: '5+ Years',
    rating: 4.8,
    reviewsCount: 215,
    consultationFee: 650,
    city: 'Mumbai',
    languages: ['Marathi', 'Hindi', 'English'],
    bio: 'Specialist in Maharashtra RERA disputes, society bylaws, and property title diligence. Committed to helping middle-class home buyers get their rightful possession.',
    casesWon: 165,
    activeCases: 22,
    responseTime: '< 1 hour',
    verified: true,
    recentWin: 'Obtained MahaRERA order awarding ₹4.2 Lakhs interest for 14-month possession delay',
  },
  {
    id: 'lawyer-3',
    name: 'Adv. Vikram Malhotra',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    barCouncilId: 'P&H/1129/2020',
    stateBar: 'Bar Council of Punjab & Haryana',
    education: 'LL.B, Panjab University, Chandigarh (2019)',
    chamberAddress: 'Cabin 18, District Courts Complex, Sector 43, Chandigarh',
    courts: ['Punjab & Haryana High Court', 'District Courts Chandigarh'],
    specialization: ['Cheque Bounce (Sec 138)', 'Civil Recovery & Notices'],
    experience: '4+ Years',
    rating: 4.7,
    reviewsCount: 180,
    consultationFee: 450,
    city: 'Chandigarh',
    languages: ['Punjabi', 'Hindi', 'English'],
    bio: 'Aggressive and diligent advocate handling commercial cheque dishonor notices, summary suits, and debt recovery for small traders and individuals.',
    casesWon: 130,
    activeCases: 19,
    responseTime: '< 45 mins',
    verified: true,
    recentWin: 'Pre-litigation settlement of ₹3.5 Lakhs business debt within 10 days of notice',
  },
  {
    id: 'lawyer-4',
    name: 'Adv. Ananya Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    barCouncilId: 'KAR/5920/2022',
    stateBar: 'Karnataka State Bar Council',
    education: 'B.A. LL.B, National Law School of India University (NLSIU), Bengaluru (2021)',
    chamberAddress: '4th Floor, Prestige Trade Tower, Palace Road, Bengaluru',
    courts: ['Karnataka High Court', 'Bengaluru City Civil Courts'],
    specialization: ['Employment & Labor', 'Cyber Crime & Online Fraud'],
    experience: '3+ Years',
    rating: 4.9,
    reviewsCount: 96,
    consultationFee: 500,
    city: 'Bengaluru',
    languages: ['Kannada', 'Hindi', 'English'],
    bio: 'Tech-savvy legal professional representing tech employees and startup professionals in employment contracts, unlawful termination, and non-compete clauses.',
    casesWon: 72,
    activeCases: 11,
    responseTime: '< 20 mins',
    verified: true,
    recentWin: 'Secured full 3-month severance and PF settlement for unlawfully laid-off software lead',
  },
  {
    id: 'lawyer-5',
    name: 'Adv. Sneha Mukherjee',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    barCouncilId: 'WB/2204/2021',
    stateBar: 'Bar Council of West Bengal',
    education: 'LL.B, University of Calcutta (2020)',
    chamberAddress: '2nd Floor, Temple Chambers, High Court, Kolkata',
    courts: ['Calcutta High Court', 'Alipore District Court'],
    specialization: ['Family & Matrimonial', 'Consumer Rights & Refund'],
    experience: '4+ Years',
    rating: 4.8,
    reviewsCount: 138,
    consultationFee: 550,
    city: 'Kolkata',
    languages: ['Bengali', 'Hindi', 'English'],
    bio: 'Empathetic counsel specializing in amicable marital settlements, mutual consent petitions, maintenance applications, and succession heirship certificates.',
    casesWon: 91,
    activeCases: 15,
    responseTime: '< 1 hour',
    verified: true,
    recentWin: 'Expedited mutual consent divorce decree within statutory 6 months cooling-off waiver',
  },
  {
    id: 'lawyer-6',
    name: 'Adv. Karthik Sundaram',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    barCouncilId: 'TN/4819/2020',
    stateBar: 'Bar Council of Tamil Nadu & Puducherry',
    education: 'B.Com B.L., Dr. Ambedkar Government Law College, Chennai (2019)',
    chamberAddress: 'No. 12, Linghi Chetty Street, George Town, Chennai',
    courts: ['Madras High Court', 'George Town District Court'],
    specialization: ['Motor Vehicle & Insurance', 'Consumer Rights & Refund'],
    experience: '5+ Years',
    rating: 4.9,
    reviewsCount: 164,
    consultationFee: 600,
    city: 'Chennai',
    languages: ['Tamil', 'English'],
    bio: 'Experienced in handling wrongful rejection of medical and motor insurance claims, MACT tribunal petitions, and speedy settlements.',
    casesWon: 122,
    activeCases: 18,
    responseTime: '< 30 mins',
    verified: true,
    recentWin: 'Insurance Ombudsman order directing insurer to settle ₹4,80,000 heart stent surgery claim',
  }
];

export const INITIAL_CASES = [
  {
    id: 'LC-CASE-101',
    title: 'Unauthorized UPI debit of ₹42,000 via deceptive QR code',
    category: 'Cyber Crime & Online Fraud',
    clientName: 'Rahul Mehra',
    city: 'New Delhi',
    state: 'Delhi',
    budget: '₹500 - ₹1,500',
    status: 'Lawyer Assigned',
    assignedLawyerId: 'lawyer-1',
    assignedLawyerName: 'Adv. Priya Sharma',
    datePosted: '2026-11-15',
    urgency: 'High',
    description: 'Received a call claiming to be electricity department stating disconnection. Sent a payment link that debited 42k. Cyber crime portal complaint filed, need legal representation to freeze bank account and issue Section 91 notice to intermediary payment gateway.',
    timeline: [
      { step: 'Case Posted', date: '15 Nov 2026', done: true, desc: 'Client submitted case with transaction proof' },
      { step: 'Advocate Assigned', date: '16 Nov 2026', done: true, desc: 'Adv. Priya Sharma accepted representation' },
      { step: 'Notice / Grievance Drafted', date: '17 Nov 2026', done: true, desc: 'Formal legal notice drafted to Nodal Banking Officer' },
      { step: 'Hearing / Investigation', date: 'Expected 24 Nov', done: false, desc: 'Follow-up with Cyber Crime Cell Inspector' },
      { step: 'Disposal & Recovery', date: 'Pending', done: false, desc: 'Refund credit initiation' },
    ],
    documents: [
      { name: 'Bank_Statement_Nov2026.pdf', size: '1.2 MB', date: '15 Nov', type: 'Proof' },
      { name: 'CyberCrime_NCRB_Ack_59281.pdf', size: '480 KB', date: '15 Nov', type: 'Police Complaint' },
      { name: 'Draft_Sec91_Notice_NodalOfficer.pdf', size: '210 KB', date: '17 Nov', type: 'Legal Notice' }
    ],
    messages: [
      { sender: 'client', text: 'Hello Adv. Priya, I have uploaded the bank statement showing the unauthorized debit.', time: '10:15 AM' },
      { sender: 'lawyer', text: 'Thank you Rahul. I reviewed the statement. I have drafted the urgent representation under Section 91 CrPC / Section 94 BNSS to the cyber cell and bank nodal officer to immediately freeze the beneficiary account.', time: '10:45 AM' },
      { sender: 'client', text: 'Thank you so much! What should be my next step if the bank denies liability?', time: '11:02 AM' },
      { sender: 'lawyer', text: 'Under RBI Master Circular on Limiting Liability of Customers, since you reported within 3 days, zero liability applies. If they delay beyond 10 days, we file before the Banking Ombudsman.', time: '11:15 AM' }
    ]
  },
  {
    id: 'LC-CASE-102',
    title: 'Dishonour of ₹1,80,000 cheque with remarks "Funds Insufficient"',
    category: 'Cheque Bounce (Sec 138)',
    clientName: 'Sunita Aggarwal',
    city: 'Chandigarh',
    state: 'Punjab',
    budget: '₹1,000 - ₹3,000',
    status: 'Legal Notice Drafted',
    assignedLawyerId: 'lawyer-3',
    assignedLawyerName: 'Adv. Vikram Malhotra',
    datePosted: '2026-11-12',
    urgency: 'Urgent',
    description: 'Cheque issued by contractor against delivered building supplies was returned unpaid by bank on 10 Nov. Need to send statutory 30-day legal notice under Section 138 of Negotiable Instruments Act without missing statutory limitation.',
    timeline: [
      { step: 'Case Posted', date: '12 Nov 2026', done: true, desc: 'Bank return memo attached' },
      { step: 'Advocate Assigned', date: '13 Nov 2026', done: true, desc: 'Adv. Vikram Malhotra assigned' },
      { step: 'Statutory Notice Sent', date: '15 Nov 2026', done: true, desc: 'Notice dispatched via registered speed post' },
      { step: '15-Day Cure Period', date: 'In Progress (ends 30 Nov)', done: false, desc: 'Awaiting drawer payment response' },
      { step: 'Court Complaint (Sec 138)', date: 'If unpaid', done: false, desc: 'Filing before Judicial Magistrate' },
    ],
    documents: [
      { name: 'Cheque_No_849201_Scan.pdf', size: '890 KB', date: '12 Nov', type: 'Cheque' },
      { name: 'Bank_Return_Memo_InsufficientFunds.pdf', size: '340 KB', date: '12 Nov', type: 'Memo' },
      { name: 'SpeedPost_Receipt_ED9482910IN.pdf', size: '180 KB', date: '15 Nov', type: 'Postal Proof' }
    ],
    messages: [
      { sender: 'lawyer', text: 'The 30-day statutory notice has been dispatched via speed post with tracking number ED9482910IN. Keep the postal receipt safely.', time: 'Yesterday' }
    ]
  },
  {
    id: 'LC-CASE-103',
    title: 'Builder delaying flat handover by 18 months beyond RERA date',
    category: 'Property & RERA Disputes',
    clientName: 'Amitabh Joshi',
    city: 'Pune',
    state: 'Maharashtra',
    budget: '₹2,000 - ₹5,000',
    status: 'Seeking Advocate',
    assignedLawyerId: null,
    assignedLawyerName: null,
    datePosted: '2026-11-17',
    urgency: 'Medium',
    description: 'Booked a 2BHK in Baner, Pune. RERA possession promised in June 2025. Builder demanding additional escalation charges while site work is halted. Seeking advice on filing complaint under Section 18 of RERA Act for interest on delay.',
    timeline: [
      { step: 'Case Posted', date: '17 Nov 2026', done: true, desc: 'Case submitted with Builder-Buyer agreement copy' },
      { step: 'Advocate Assigned', date: 'Matching', done: false, desc: 'Advocate matching in progress' },
      { step: 'Notice to Promoter', date: 'Pending', done: false, desc: 'Formal claim for interest & compensation' },
      { step: 'MahaRERA Complaint', date: 'Pending', done: false, desc: 'Online filing before Adjudicating Officer' },
    ],
    documents: [
      { name: 'Allotment_Letter_BanerHeights.pdf', size: '3.4 MB', date: '17 Nov', type: 'Agreement' }
    ],
    messages: []
  },
  {
    id: 'LC-CASE-104',
    title: 'Wrongful termination during medical leave without severance',
    category: 'Employment & Labor',
    clientName: 'Kavita Nair',
    city: 'Bengaluru',
    state: 'Karnataka',
    budget: '₹1,000 - ₹2,500',
    status: 'Seeking Advocate',
    assignedLawyerId: null,
    assignedLawyerName: null,
    datePosted: '2026-11-18',
    urgency: 'High',
    description: 'Terminated abruptly after taking 3 weeks sanctioned medical leave. Company refused 2 months notice pay and withholding PF release. Need legal notice for breach of employment terms and recovery of statutory dues.',
    timeline: [
      { step: 'Case Posted', date: '18 Nov 2026', done: true, desc: 'Employment contract and termination email attached' },
      { step: 'Advocate Assigned', date: 'Matching', done: false, desc: 'Reviewing interested junior advocates' },
      { step: 'Legal Demand Notice', date: 'Pending', done: false, desc: 'Drafting 15-day statutory claim' },
    ],
    documents: [
      { name: 'Offer_Letter_SanctionedLeave_Proof.pdf', size: '2.1 MB', date: '18 Nov', type: 'Contract' }
    ],
    messages: []
  }
];

export const JUNIOR_LAWYER_PERKS = [
  {
    id: 'direct-leads',
    title: 'Direct Client Leads',
    desc: 'Get genuine citizen cases directly with zero middleman commission or brokerage hassle.',
    badge: '100% Direct'
  },
  {
    id: 'digital-practice',
    title: 'Digital Practice',
    desc: 'Manage all your case files, client briefs, and hearing dates seamlessly in one digital chamber.',
    badge: 'Cloud Desk'
  },
  {
    id: 'verified-identity',
    title: 'Verified Identity',
    desc: 'Build your verified online reputation and practice portfolio with genuine client testimonials.',
    badge: 'Bar Verified'
  },
  {
    id: 'flexible-working',
    title: 'Flexible Working',
    desc: 'Work from anywhere across India. No expensive brick-and-mortar office or heavy overheads needed.',
    badge: 'Anywhere'
  },
  {
    id: 'zero-fees',
    title: 'Zero Platform Fees',
    desc: 'Registration is free forever for junior advocates. Keep 100% of your legal consultation fee.',
    badge: 'Free Forever'
  }
];

export const CITIZEN_PERKS = [
  {
    id: 'affordable',
    title: 'Affordable Consultation',
    desc: 'Transparent pricing starting at nominal rates with no hidden court or platform costs.',
    badge: 'From ₹499'
  },
  {
    id: 'verified-advocates',
    title: 'Verified Advocates',
    desc: 'Every advocate is strictly verified through State Bar Council enrollment registers.',
    badge: 'BCI Compliant'
  },
  {
    id: 'privacy-first',
    title: 'Privacy First',
    desc: 'Your legal issue remains confidential with attorney-client communication privilege standards.',
    badge: 'Confidential'
  },
  {
    id: 'languages',
    title: 'Languages We Speak',
    desc: 'Connect with legal professionals fluent in your mother tongue (Hindi, Tamil, Marathi, Bengali & more).',
    badge: '12+ Languages'
  },
  {
    id: 'case-tracking',
    title: 'Case Tracking',
    desc: 'Get real-time digital timeline updates on your notice, filing, and case milestones.',
    badge: 'Live Status'
  }
];

export const FAQS = [
  {
    q: 'Is NyaySaathi / LawConnect legally compliant with Bar Council rules?',
    a: 'Yes, absolutely. LawConnect strictly complies with Bar Council of India (BCI) Rule 36 of the Bar Council of India Rules. We do NOT advertise, solicit clients, or rank advocates commercially. We operate as an administrative directory and technology platform facilitating citizen access to legal consultation and digital case tracking.'
  },
  {
    q: 'How much does it cost to consult an advocate?',
    a: 'Case posting is 100% free for all citizens. Advocate consultation fees are set transparently by individual advocates (typically ranging from ₹400 to ₹800 for preliminary advisory) with zero hidden platform markups.'
  },
  {
    q: 'Do I need to pay upfront before talking to a lawyer?',
    a: 'No. You can post your case details anonymously and receive initial legal assessments. You only pay when you schedule a dedicated 1-on-1 legal consultation or request formal legal drafting.'
  },
  {
    q: 'How do junior lawyers and fresh advocates benefit?',
    a: 'Fresh litigators often struggle to get independent clients despite having great acumen. LawConnect connects them with citizens having small disputes (consumer notices, cheque bounce, cyber fraud, tenancy disputes) helping young lawyers build an independent practice.'
  },
  {
    q: 'How is my personal information and document safety protected?',
    a: 'All documents are encrypted with enterprise-grade AES-256 encryption. Only the assigned advocate you authorize has access to review your case documents and confidential notes.'
  }
];
