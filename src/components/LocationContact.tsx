import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Navigation,
  ArrowUpRight,
  Compass,
  CheckCircle2,
  Building2,
  Car
} from "lucide-react";
import { CLINIC_HOURS, CLINIC_INFO } from "../data/services";

export const LocationContact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"map" | "directions">("map");

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>Clinic Location</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-4">
            Visit Dentesthetics
          </h2>
          <p className="text-base text-[#77758D] leading-relaxed">
            Conveniently situated in Sector G-10/4, Islamabad, with comfortable parking and accessible ground-floor entry.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Day-by-Day Hours, Directions CTA (~5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#E7E4F4] shadow-sm flex flex-col justify-between">
            <div>
              {/* Address Block */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38218C] mb-2 inline-block">
                  Physical Address
                </span>
                <h3 className="font-display text-xl font-bold text-[#24185F] mb-2">
                  House 1206, Street 40, G-10/4
                </h3>
                <p className="text-sm text-[#77758D] leading-relaxed">
                  Sector G-10, Islamabad, Pakistan.
                </p>
              </div>

              {/* Day-by-Day Opening Hours */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38218C] mb-3 inline-block">
                  Weekly Operating Schedule
                </span>
                <div className="divide-y divide-[#F0F0FC] text-sm">
                  {CLINIC_HOURS.map((slot) => (
                    <div key={slot.day} className="py-2.5 flex items-center justify-between">
                      <span className="font-medium text-[#24185F]">{slot.day}</span>
                      <span
                        className={`font-semibold ${
                          slot.isOpen ? "text-[#38218C]" : "text-red-500 font-bold"
                        }`}
                      >
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mint Green Get Directions Button */}
            <div className="pt-4 border-t border-[#F0F0FC]">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-sm py-4 px-6 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4 fill-[#29166F]" />
                <span>Get Directions in Google Maps</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <p className="text-[11px] text-center text-[#77758D] mt-2">
                Opens official navigation pin for House 1206, Street 40, G-10/4
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Styled Map & Route Guidance Card (~7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E4F4] shadow-sm flex flex-col justify-between">
            {/* Top Switcher */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#38218C]" />
                <h3 className="font-display text-lg font-bold text-[#24185F]">
                  Islamabad Capital Territory Map
                </h3>
              </div>

              <div className="flex items-center gap-1 p-1 bg-[#FAF9FF] rounded-xl border border-[#E7E4F4] text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("map")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === "map"
                      ? "bg-[#38218C] text-white shadow-xs"
                      : "text-[#77758D] hover:text-[#24185F]"
                  }`}
                >
                  Location View
                </button>
                <button
                  onClick={() => setActiveTab("directions")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === "directions"
                      ? "bg-[#38218C] text-white shadow-xs"
                      : "text-[#77758D] hover:text-[#24185F]"
                  }`}
                >
                  Nearby Landmarks
                </button>
              </div>
            </div>

            {/* Map Visual Representation */}
            {activeTab === "map" ? (
              <div className="relative rounded-2xl overflow-hidden border border-[#E7E4F4] bg-[#F0F0FC] h-[340px] flex flex-col items-center justify-center p-6 text-center group">
                {/* Styled Vector Map Grid & Graphic */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38218C_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Road lines graphic simulation for G-10 Islamabad */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="50" x2="100%" y2="80" stroke="#38218C" strokeWidth="8" />
                    <line x1="20%" y1="0" x2="30%" y2="100%" stroke="#38218C" strokeWidth="6" />
                    <line x1="60%" y1="0" x2="65%" y2="100%" stroke="#38218C" strokeWidth="6" />
                    <line x1="0" y1="200" x2="100%" y2="220" stroke="#38218C" strokeWidth="12" />
                    <circle cx="50%" cy="48%" r="45" fill="#69E9B6" fillOpacity="0.25" />
                  </svg>
                </div>

                {/* Central Clinic Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 rounded-full bg-[#38218C] text-white flex items-center justify-center shadow-2xl ring-8 ring-[#69E9B6]/40 animate-bounce duration-1000">
                      <MapPin className="w-7 h-7 text-[#69E9B6]" />
                    </div>
                  </div>

                  <span className="font-display font-bold text-lg text-[#24185F] bg-white/95 px-4 py-1.5 rounded-full shadow-md border border-[#E7E4F4] mb-1">
                    Dentesthetics Clinic
                  </span>
                  <span className="text-xs text-[#77758D] font-medium bg-white/80 px-3 py-0.5 rounded-full">
                    House 1206, Street 40, G-10/4, Islamabad
                  </span>
                </div>

                {/* Bottom Overlay Link */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur-md rounded-xl p-3 border border-[#E7E4F4] text-xs">
                  <span className="text-[#24185F] font-semibold flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#38218C]" />
                    <span>Sector G-10/4, Islamabad</span>
                  </span>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#38218C] hover:underline flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              /* Directions & Landmarks View */
              <div className="space-y-4 py-2">
                <div className="bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl p-4.5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F0FC] text-[#38218C] flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#24185F]">From Srinagar Highway (Kashmir Highway)</h4>
                    <p className="text-xs text-[#77758D] mt-1 leading-relaxed">
                      Take the G-10 interchange exit toward Street 40, G-10/4. Follow the residential avenue directly to House 1206. Dedicated visitor parking is available.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl p-4.5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#69E9B6]/30 text-[#29166F] flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#24185F]">From G-10 Markaz</h4>
                    <p className="text-xs text-[#77758D] mt-1 leading-relaxed">
                      Just 3 minutes drive (approx. 900m) from G-10 Markaz commercial center into sub-sector G-10/4.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl p-4.5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F0FC] text-[#38218C] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#69E9B6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#24185F]">Accessibility</h4>
                    <p className="text-xs text-[#77758D] mt-1 leading-relaxed">
                      Step-free entrance and convenient drop-off directly in front of House 1206 on Street 40.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Note */}
            <div className="mt-5 flex items-center justify-between text-xs text-[#77758D] pt-4 border-t border-[#F0F0FC]">
              <span>Operating Hours: 1:00 PM – 7:00 PM (Mon–Sat)</span>
              <span className="font-semibold text-[#38218C]">Islamabad, PK</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
