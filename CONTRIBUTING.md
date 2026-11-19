# Contributing to LawConnect (NyaySaathi - न्याय साथी)

Thank you for your interest in contributing to **LawConnect (NyaySaathi)**! This open-source enterprise LegalTech platform bridges the gap between Indian citizens seeking accessible justice and thousands of verified junior litigators and grassroots advocates.

---

## 🏛️ Core Principles & BCI Rule 36 Compliance

Every contribution to this repository must respect Indian legal ethics and standards:

1. **Non-Solicitation & Transparency**: In accordance with **Rule 36 of the Bar Council of India (BCI)**, this platform does not solicit clients or advertise advocate services. It acts as an administrative directory, statutory timeline calculator, and case workflow manager.
2. **Citizen Privacy & Legal Privilege**: All communications, notices, and documents must reflect legal professional privilege under the Indian Evidence Act / Bharatiya Sakshya Adhiniyam.
3. **Accessibility & Empathy**: The user experience should be simple, accessible, mobile-responsive, and available in both English and Hindi.

---

## 📁 Repository Structure

```
lawconnect/
├── public/                 # Static assets (favicons, scales.svg)
├── src/
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx               # Global sticky navbar & mobile drawer
│   │   ├── LandingHero.jsx          # Hero section with search & quick dispute tags
│   │   ├── StepsSection.jsx         # 3-step citizen workflow
│   │   ├── ProblemCard.jsx          # 5.0+ Crore pending cases statistic card
│   │   ├── LimitationCalculator.jsx # Statutory limitation & court finder
│   │   ├── ForJuniorLawyers.jsx     # Junior litigator feature showcase
│   │   ├── ForCommonPeople.jsx      # Citizen empowerment features
│   │   ├── BCIComplianceBanner.jsx  # Rule 36 compliance trust banner
│   │   ├── FAQSection.jsx           # Legal FAQs & expandable accordions
│   │   ├── ReadyCTA.jsx             # Action-oriented gradient CTA
│   │   ├── Footer.jsx               # Footer with category navigation & disclaimers
│   │   ├── LawyerDirectory.jsx      # Filterable BCI verified advocate directory
│   │   ├── ClientDashboard.jsx      # Citizen grievance desk & document vault
│   │   ├── LawyerDashboard.jsx      # Junior advocate digital chamber & cause list
│   │   ├── PostCaseModal.jsx        # 3-step confidential legal case wizard
│   │   ├── LegalNoticeGenerator.jsx # Free Indian statutory notice generator & downloader
│   │   ├── VirtualConsultationModal.jsx # Video room simulator with live strategy notes
│   │   ├── AdvocateProfileModal.jsx # Chamber details & alma mater view
│   │   └── AuthModal.jsx            # One-click role login / signup modal
│   ├── data/
│   │   └── mockData.js              # Initial cases, lawyers, categories & translations
│   ├── App.jsx                      # Main app controller & routing state
│   ├── index.css                    # Tailwind directives & legal paper styles
│   └── main.jsx                     # Vite entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** / **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/divyarathore1600-wq/lawconnect.git
cd lawconnect

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or your Vite port) in your browser.

---

## 🛠️ Contribution Workflow

1. **Fork the Repository**:
   Click the "Fork" button on GitHub to create your own copy of the repo.

2. **Create a Topic Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b fix/issue-description
   ```

3. **Make Your Changes**:
   - Write clean, modern, and readable React code.
   - Use standard Tailwind utility classes.
   - Use `lucide-react` for consistent iconography.
   - Ensure components are responsive across mobile, tablet, and desktop viewports.

4. **Verify Your Changes**:
   ```bash
   npm run build
   ```
   Ensure there are no build errors or broken imports.

5. **Commit & Push**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:
   - Go to the original repository on GitHub.
   - Click **"New Pull Request"** and select your branch.
   - Describe what changed and provide screenshots or demo steps if UI changes were made.

---

## 🎨 Design System & Colors

- **Legal Crimson**: `#A6261B` (Headings, primary CTA buttons)
- **Legal Dark Forest / Teal**: `#112321` (Header bar, consultation chamber)
- **Warm Sand / Legal Paper**: `#FAF6F0` (Backgrounds, cards)
- **Seafoam / Mint**: `#E6F5F2` (Trust badges, citizen feature cards)
- **Dark Bronze**: `#443A2C` (Junior lawyer chamber accents)
- **Warm Coral Gradient**: `#CF3B2B` → `#E26D54` (Ready CTA card)

---

## ⚖️ License & Community Code of Conduct

All contributions are welcomed with respect, constructive feedback, and collaboration. Please ensure all legal references (Limitation Act 1963, Negotiable Instruments Act 1881, Consumer Protection Act 2019, RERA 2016, BNS 2023) are accurate to maintain platform authenticity.
