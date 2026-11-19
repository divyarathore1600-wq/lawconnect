import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import LiveTicker from './components/LiveTicker';
import StepsSection from './components/StepsSection';
import ProblemCard from './components/ProblemCard';
import LimitationCalculator from './components/LimitationCalculator';
import ForJuniorLawyers from './components/ForJuniorLawyers';
import ForCommonPeople from './components/ForCommonPeople';
import BCIComplianceBanner from './components/BCIComplianceBanner';
import FAQSection from './components/FAQSection';
import ReadyCTA from './components/ReadyCTA';
import Footer from './components/Footer';

import LawyerDirectory from './components/LawyerDirectory';
import ClientDashboard from './components/ClientDashboard';
import LawyerDashboard from './components/LawyerDashboard';

import PostCaseModal from './components/PostCaseModal';
import AuthModal from './components/AuthModal';
import LegalNoticeGenerator from './components/LegalNoticeGenerator';
import VirtualConsultationModal from './components/VirtualConsultationModal';
import AdvocateProfileModal from './components/AdvocateProfileModal';

import { INITIAL_CASES, INITIAL_LAWYERS, TRANSLATIONS } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'directory', 'client-portal', 'lawyer-desk'
  const [currentRole, setCurrentRole] = useState('client'); // 'client', 'lawyer'
  const [lang, setLang] = useState('en'); // 'en', 'hi'

  const [user, setUser] = useState({
    id: 'client-1',
    name: 'Rahul Mehra',
    role: 'client',
    city: 'New Delhi',
  });

  const [cases, setCases] = useState(INITIAL_CASES);
  const [lawyers, setLawyers] = useState(INITIAL_LAWYERS);
  
  // Modals state
  const [isPostCaseOpen, setIsPostCaseOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isNoticeGenOpen, setIsNoticeGenOpen] = useState(false);
  const [isVideoRoomOpen, setIsVideoRoomOpen] = useState(false);
  const [activeVideoSession, setActiveVideoSession] = useState({ lawyer: null, caseTitle: '' });
  const [selectedProfileLawyer, setSelectedProfileLawyer] = useState(null);

  // Switch between citizen and lawyer perspective
  const handleSwitchRole = (role) => {
    setCurrentRole(role);
    if (role === 'lawyer') {
      setUser({
        id: 'lawyer-1',
        name: 'Adv. Priya Sharma',
        role: 'lawyer',
        barCouncilId: 'D/1482/2021',
        stateBar: 'Bar Council of Delhi'
      });
      if (activeTab === 'client-portal') {
        setActiveTab('lawyer-desk');
      }
    } else {
      setUser({
        id: 'client-1',
        name: 'Rahul Mehra',
        role: 'client',
        city: 'New Delhi'
      });
      if (activeTab === 'lawyer-desk') {
        setActiveTab('client-portal');
      }
    }
  };

  const handleCaseCreated = (newCase) => {
    setCases(prev => [newCase, ...prev]);
    setActiveTab('client-portal');
  };

  const handleAcceptCase = (caseId, lawyerInfo) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          status: 'Advocate Assigned',
          assignedLawyerId: lawyerInfo.id,
          assignedLawyerName: lawyerInfo.name,
          timeline: [
            ...c.timeline,
            { step: 'Advocate Accepted', date: 'Just now', done: true, desc: `${lawyerInfo.name} accepted brief` }
          ],
          messages: [
            ...(c.messages || []),
            {
              sender: 'lawyer',
              text: `Hello ${c.clientName}, I have accepted your matter. I am reviewing your case details and will prepare the preliminary notice / advisory.`,
              time: 'Just now'
            }
          ]
        };
      }
      return c;
    }));
  };

  const handleSendMessage = (caseId, messageObj) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          messages: [...(c.messages || []), messageObj]
        };
      }
      return c;
    }));
  };

  const handleBookConsultation = (lawyer) => {
    setIsPostCaseOpen(true);
  };

  const handleJoinVideoRoom = (lawyer, caseTitle) => {
    setActiveVideoSession({ lawyer, caseTitle });
    setIsVideoRoomOpen(true);
  };

  const handleLogin = (newUser) => {
    setUser(newUser);
    setCurrentRole(newUser.role);
    if (newUser.role === 'lawyer') {
      setActiveTab('lawyer-desk');
    } else {
      setActiveTab('client-portal');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-legal-cream text-[#222222] font-sans selection:bg-legal-crimson selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar
        currentRole={currentRole}
        onSwitchRole={handleSwitchRole}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPostCase={() => setIsPostCaseOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenNoticeGen={() => setIsNoticeGenOpen(true)}
        user={user}
        lang={lang}
        onToggleLang={() => setLang(prev => prev === 'en' ? 'hi' : 'en')}
      />

      {/* Real-time Activity Ticker */}
      <LiveTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="fade-in">
            {/* 1. Hero Section matching image */}
            <LandingHero
              onFindLawyer={() => setActiveTab('directory')}
              onJoinLawyer={() => {
                handleSwitchRole('lawyer');
                setActiveTab('lawyer-desk');
              }}
              onPostCase={() => setIsPostCaseOpen(true)}
              onOpenNoticeGen={() => setIsNoticeGenOpen(true)}
              lang={lang}
              translations={TRANSLATIONS}
            />

            {/* 2. 3 Simple Steps */}
            <StepsSection
              onPostCase={() => setIsPostCaseOpen(true)}
              onExploreLawyers={() => setActiveTab('directory')}
              onOpenPortal={() => setActiveTab('client-portal')}
            />

            {/* 3. Problem Card: 5.0+ Crore Pending Cases */}
            <ProblemCard
              onExploreSolution={() => {
                const el = document.getElementById('junior-lawyers-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4. Interactive Limitation & Court Finder Tool */}
            <LimitationCalculator
              onPostCase={() => setIsPostCaseOpen(true)}
            />

            {/* 5. For Junior Lawyers */}
            <ForJuniorLawyers
              onJoinLawyer={() => {
                handleSwitchRole('lawyer');
                setIsAuthOpen(true);
              }}
              onOpenLawyerDesk={() => {
                handleSwitchRole('lawyer');
                setActiveTab('lawyer-desk');
              }}
            />

            {/* 6. For Common People */}
            <ForCommonPeople
              onFindLawyer={() => setActiveTab('directory')}
              onPostCase={() => setIsPostCaseOpen(true)}
            />

            {/* 7. BCI & Bar Council Compliance Strip */}
            <BCIComplianceBanner />

            {/* 8. Common Questions (FAQ Accordions) */}
            <FAQSection />

            {/* 9. Ready to Get Started? (Coral Gradient CTA) */}
            <ReadyCTA
              onPostCase={() => setIsPostCaseOpen(true)}
              onLawyerRegister={() => {
                handleSwitchRole('lawyer');
                setIsAuthOpen(true);
              }}
            />
          </div>
        )}

        {/* Lawyer Directory View */}
        {activeTab === 'directory' && (
          <div className="fade-in">
            <LawyerDirectory
              lawyers={lawyers}
              onSelectLawyer={(lawyer) => handleBookConsultation(lawyer)}
              onBookConsultation={(lawyer) => handleBookConsultation(lawyer)}
              onOpenProfile={(lawyer) => setSelectedProfileLawyer(lawyer)}
            />
          </div>
        )}

        {/* Citizen / Client Case Desk */}
        {activeTab === 'client-portal' && (
          <div className="fade-in">
            <ClientDashboard
              cases={cases}
              onPostNewCase={() => setIsPostCaseOpen(true)}
              onSendMessage={handleSendMessage}
              onJoinVideoRoom={handleJoinVideoRoom}
              lawyers={lawyers}
            />
          </div>
        )}

        {/* Junior Lawyer Chamber & Leads Desk */}
        {activeTab === 'lawyer-desk' && (
          <div className="fade-in">
            <LawyerDashboard
              cases={cases}
              onAcceptCase={handleAcceptCase}
              onSendMessage={handleSendMessage}
              onJoinVideoRoom={handleJoinVideoRoom}
              currentLawyer={lawyers[0]}
            />
          </div>
        )}
      </main>

      {/* Global Footer matching image */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

      {/* Interactive Post Case Wizard Modal */}
      <PostCaseModal
        isOpen={isPostCaseOpen}
        onClose={() => setIsPostCaseOpen(false)}
        onCaseCreated={handleCaseCreated}
        user={user}
      />

      {/* Auth / Role Switcher Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        currentRole={currentRole}
      />

      {/* Free Indian Legal Notice Generator Modal */}
      <LegalNoticeGenerator
        isOpen={isNoticeGenOpen}
        onClose={() => setIsNoticeGenOpen(false)}
      />

      {/* Live Virtual Video Consultation Chamber Modal */}
      <VirtualConsultationModal
        isOpen={isVideoRoomOpen}
        onClose={() => setIsVideoRoomOpen(false)}
        lawyer={activeVideoSession.lawyer}
        caseTitle={activeVideoSession.caseTitle}
      />

      {/* BCI Verified Advocate Full Profile Modal */}
      <AdvocateProfileModal
        isOpen={!!selectedProfileLawyer}
        onClose={() => setSelectedProfileLawyer(null)}
        lawyer={selectedProfileLawyer}
        onBookConsultation={(lawyer) => {
          setSelectedProfileLawyer(null);
          handleBookConsultation(lawyer);
        }}
      />
    </div>
  );
}
