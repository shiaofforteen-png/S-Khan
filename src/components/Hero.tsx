import React from "react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { CLINIC_IMAGES } from "../assets/images";

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF9FF]">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F0F0FC] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#69E9B6]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — ~45% width (5 of 12 cols or 6 of 12) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left">
            
            {/* Introductory Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#69E9B6]" />
              <span>Your Smile Deserves The Best</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-[#24185F] leading-[1.1] tracking-tight mb-6">
              Your Smile, Our Priority — Dental Care in{" "}
              <span className="relative inline-block text-[#29166F]">
                <span className="relative z-10 underline decoration-[#69E9B6] decoration-[6px] underline-offset-4">Islamabad</span>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#77758D] leading-relaxed mb-8 max-w-xl">
              Experience modern, patient-focused dental care at Dentesthetics. From preventive checkups to smile-enhancing treatments, we&apos;re here to help you feel confident about your oral health.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Book Your Appointment</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#38218C] hover:bg-[#F0F0FC] text-[#38218C] font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 text-center"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Trust-Focused Bullet Points */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 border-t border-[#E7E4F4]/70 w-full">
              {[
                "Personalized Dental Care",
                "Modern Treatment Approach",
                "Comfortable Patient Experience"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#24185F]">
                  <span className="w-5 h-5 rounded-full bg-[#69E9B6]/30 flex items-center justify-center text-[#29166F] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column — ~55% width (7 of 12 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Circular floating badge overlapping upper-left */}
              <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center justify-center">
                <div className="relative w-28 h-28 rounded-full bg-[#69E9B6] text-[#29166F] shadow-lg flex items-center justify-center p-2.5">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-[#29166F]">
                      <textPath href="#circlePath" startOffset="0%">
                        Care That Makes You Smile • Dentesthetics •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-inner">
                      <Sparkles className="w-4 h-4 text-[#38218C]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Rounded Image Container */}
              <div className="overflow-hidden rounded-3xl sm:rounded-[36px] shadow-2xl border-4 border-white bg-white aspect-[4/3] relative group">
                <img
                  src={CLINIC_IMAGES.heroDentalTreatment}
                  alt="Professional dentist providing gentle care to patient at Dentesthetics clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating White Information Card overlapping bottom */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-7 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl border border-[#E7E4F4] flex items-center justify-between gap-4 z-20">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Decorative Patient Avatars */}
                  <div className="flex -space-x-2 overflow-hidden shrink-0">
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#38218C] text-white flex items-center justify-center font-bold text-xs">
                      PK
                    </div>
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#69E9B6] text-[#29166F] flex items-center justify-center font-bold text-xs">
                      ISB
                    </div>
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#4A3099] text-white flex items-center justify-center font-bold text-xs">
                      DE
                    </div>
                  </div>
                  
                  <div>
                    {/* Star decorative graphic without claiming fake rating */}
                    <div className="flex items-center gap-1 text-[#38218C] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-[#38218C]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#24185F]">
                      Your Smile Journey Starts Here
                    </p>
                    <p className="text-xs text-[#77758D]">
                      G-10/4 Islamabad · Consultations Mon–Sat
                    </p>
                  </div>
                </div>

                <button
                  onClick={onBookClick}
                  className="w-11 h-11 rounded-full bg-[#F0F0FC] hover:bg-[#69E9B6] text-[#38218C] hover:text-[#29166F] flex items-center justify-center transition-all duration-200 shrink-0 group shadow-sm"
                  aria-label="Request appointment directly"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
