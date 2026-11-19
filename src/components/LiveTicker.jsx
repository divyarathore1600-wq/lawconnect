import React from 'react';
import { Radio, MapPin, ArrowRight } from 'lucide-react';
import { LIVE_TICKER_EVENTS } from '../data/mockData';

export default function LiveTicker() {
  return (
    <div className="bg-legal-dark text-white border-y border-legal-darkBorder overflow-hidden py-2.5 text-xs">
      <div className="flex items-center">
        {/* Live indicator tag */}
        <div className="px-4 py-0.5 bg-legal-crimson text-white font-bold tracking-wider uppercase text-[10px] flex items-center gap-1.5 shrink-0 z-10 shadow-md">
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          <span>LIVE ACTIVITY</span>
        </div>

        {/* Marquee scroll */}
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee flex items-center gap-8 text-[#A8C7C1]">
            {LIVE_TICKER_EVENTS.concat(LIVE_TICKER_EVENTS).map((evt, idx) => (
              <div key={idx} className="inline-flex items-center gap-2">
                <span className="font-bold text-white bg-legal-darkSecondary px-2 py-0.5 rounded text-[11px] border border-legal-darkBorder">
                  {evt.city}
                </span>
                <span className="text-[#D3E5E2] font-medium">{evt.text}</span>
                <span className="text-[10px] text-emerald-400 font-semibold">• {evt.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

