import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Clock, 
  Languages, 
  Scale, 
  CheckCircle2, 
  MessageSquare,
  ArrowRight,
  Briefcase,
  User,
  GraduationCap,
  RotateCcw
} from 'lucide-react';
import { CASE_CATEGORIES } from '../data/mockData';

export default function LawyerDirectory({ 
  lawyers, 
  onSelectLawyer, 
  onBookConsultation, 
  onOpenProfile,
  initialSpecialization = 'All',
  initialSearch = ''
}) {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedSpecialization, setSelectedSpecialization] = useState(initialSpecialization);
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [maxFee, setMaxFee] = useState(1000);

  useEffect(() => {
    if (initialSpecialization) {
      setSelectedSpecialization(initialSpecialization);
    }
  }, [initialSpecialization]);

  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedSpecialization('All');
    setSelectedCity('All');
    setSelectedLanguage('All');
    setMaxFee(1000);
  };

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch = 
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.barCouncilId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.courts.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      lawyer.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpec = 
      selectedSpecialization === 'All' || 
      lawyer.specialization.includes(selectedSpecialization);

    const matchesCity = 
      selectedCity === 'All' || 
      lawyer.city === selectedCity;

    const matchesLanguage = 
      selectedLanguage === 'All' || 
      lawyer.languages.includes(selectedLanguage);

    const matchesFee = lawyer.consultationFee <= maxFee;

    return matchesSearch && matchesSpec && matchesCity && matchesLanguage && matchesFee;
  });

  return (
    <div className="py-8 sm:py-12 bg-legal-cream min-h-screen legal-paper-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-legal-crimson uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4" />
            <span>BCI Verified Advocate Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-legal-title text-[#1C1C1C]">
            Find Verified Advocates & Litigators
          </h1>
          <p className="text-sm text-[#666666] mt-1 max-w-2xl">
            Connect with grassroots junior advocates offering accessible, dedicated representation for consumer disputes, cheque bounces, property matters, and cyber claims.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-legal-creamBorder shadow-card mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#888888]" />
              <input
                type="text"
                placeholder="Search by name, court, bar ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-legal-creamBorder text-xs sm:text-sm focus:border-legal-crimson outline-hidden"
              />
            </div>

            {/* Specialization Filter */}
            <div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-legal-creamBorder text-xs sm:text-sm bg-white"
              >
                <option value="All">All Specializations</option>
                {CASE_CATEGORIES.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-legal-creamBorder text-xs sm:text-sm bg-white"
              >
                <option value="All">All Cities</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-legal-creamBorder text-xs sm:text-sm bg-white"
              >
                <option value="All">All Languages</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
                <option value="Tamil">Tamil</option>
                <option value="Bengali">Bengali</option>
                <option value="Kannada">Kannada</option>
                <option value="Punjabi">Punjabi</option>
              </select>
            </div>

          </div>

          {/* Quick filter pills */}
          <div className="mt-4 pt-3.5 border-t border-legal-creamBorder flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#666666]">
              <span>Showing <strong>{filteredLawyers.length}</strong> verified advocates</span>
              {(searchTerm || selectedSpecialization !== 'All' || selectedCity !== 'All' || selectedLanguage !== 'All' || maxFee < 1000) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-legal-crimson hover:underline font-bold ml-2"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Filters
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#666666]">Max Fee: ₹{maxFee}</span>
              <input
                type="range"
                min="400"
                max="1000"
                step="50"
                value={maxFee}
                onChange={(e) => setMaxFee(Number(e.target.value))}
                className="accent-legal-crimson cursor-pointer w-28"
              />
            </div>
          </div>
        </div>

        {/* Empty State when no advocate matches */}
        {filteredLawyers.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-legal-creamBorder shadow-card max-w-lg mx-auto">
            <Scale className="w-12 h-12 text-legal-crimson/50 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#1C1C1C]">No advocates matched your search</h3>
            <p className="text-xs text-[#666666] mt-1 mb-4">
              Try adjusting your specialization, fee slider, or city filters to find verified advocates.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-legal-crimson text-white text-xs font-bold shadow-soft"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Advocates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-legal-creamBorder shadow-soft hover:shadow-card hover:border-legal-crimson/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Avatar, Name, Rating */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={lawyer.avatar}
                    alt={lawyer.name}
                    onClick={() => onOpenProfile(lawyer)}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-legal-creamBorder group-hover:border-legal-crimson/40 transition-colors shadow-2xs cursor-pointer hover:opacity-90"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 
                        onClick={() => onOpenProfile(lawyer)}
                        className="text-lg font-bold text-[#1C1C1C] truncate group-hover:text-legal-crimson transition-colors cursor-pointer"
                      >
                        {lawyer.name}
                      </h3>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 shrink-0">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{lawyer.rating}</span>
                        <span className="text-[#888888] font-normal">({lawyer.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Bar Council ID & State */}
                    <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#0F6355] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lawyer.barCouncilId}</span>
                      <span className="text-[#999999]">•</span>
                      <span className="text-[#666666] font-normal">{lawyer.stateBar}</span>
                    </div>

                    {/* Location & Experience */}
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-[#666666]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#888888]" />
                        {lawyer.city}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-[#888888]" />
                        {lawyer.experience}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {lawyer.responseTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Practicing Courts */}
                <div className="mb-2 text-xs text-[#555555]">
                  <strong className="text-[#333333]">Courts:</strong> {lawyer.courts.join(', ')}
                </div>

                {/* Alma Mater brief */}
                {lawyer.education && (
                  <div className="mb-3 text-[11px] text-[#777777] flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-legal-crimson" />
                    <span className="truncate">{lawyer.education}</span>
                  </div>
                )}

                {/* Specialization Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {lawyer.specialization.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-legal-cream text-[#444444] border border-legal-creamBorder"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Bio brief */}
                <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-4">
                  {lawyer.bio}
                </p>

                {/* Languages */}
                <div className="flex items-center gap-1.5 text-xs text-[#666666] mb-4">
                  <Languages className="w-3.5 h-3.5 text-[#888888]" />
                  <span>Speaks: {lawyer.languages.join(', ')}</span>
                </div>
              </div>

              {/* Footer action row */}
              <div className="pt-3.5 border-t border-legal-creamBorder flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#888888] block uppercase tracking-wider font-semibold">Consultation Fee</span>
                  <span className="text-lg font-extrabold text-[#112321]">₹{lawyer.consultationFee}</span>
                  <span className="text-[11px] text-[#777777] font-normal"> / 30 mins</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenProfile(lawyer)}
                    className="px-3 py-2 rounded-xl border border-legal-creamBorder text-xs font-bold text-[#444444] hover:bg-legal-cream transition-all"
                  >
                    View Chamber
                  </button>
                  <button
                    onClick={() => onBookConsultation(lawyer)}
                    className="inline-flex items-center gap-1.5 bg-legal-crimson hover:bg-legal-crimsonDark text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Consult</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
