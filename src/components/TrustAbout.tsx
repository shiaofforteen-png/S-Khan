import React from "react";
import { ArrowUpRight, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import { CLINIC_IMAGES } from "../assets/images";

interface TrustAboutProps {
  onDiscoverClinic: () => void;
  onBookClick: () => void;
}

export const TrustAbout: React.FC<TrustAboutProps> = ({ onDiscoverClinic, onBookClick }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#29166F] text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38218C] rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#69E9B6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column — ~5 of 12 cols */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Doctor Portrait Container with overlay card */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="overflow-hidden rounded-3xl sm:rounded-[32px] border-4 border-white/10 shadow-2xl bg-[#38218C] aspect-square relative group">
                <img
                  src={CLINIC_IMAGES.dentistDrPortrait}
                  alt="Lead Dental Clinician at Dentesthetics"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29166F]/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Purple Card at bottom of the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#38218C]/95 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center justify-between text-white shadow-lg">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      Dentesthetics
                    </h3>
                    <p className="text-xs text-[#69E9B6] font-medium">
                      Professional Dental Care
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#29166F] flex items-center justify-center text-[#69E9B6] border border-[#69E9B6]/30">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph below image */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-6 mb-6">
              We believe every smile deserves thoughtful care. Our approach focuses on patient comfort, clear communication, and helping people make confident decisions about their dental health.
            </p>

            {/* Mint Green Button */}
            <button
              onClick={onDiscoverClinic}
              className="inline-flex items-center gap-2 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover Our Clinic</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Column — ~7 of 12 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#69E9B6] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Clinical Excellence</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-tight tracking-tight mb-6">
              Dedicated to Your{" "}
              <span className="text-[#69E9B6] underline decoration-[#69E9B6]/40 decoration-4 underline-offset-4">
                Dental Health
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-4">
              At Dentesthetics, we bring together a patient-first approach and modern dental care to create a welcoming experience. Whether you&apos;re visiting for a regular checkup or exploring ways to improve your smile, your comfort and oral health remain our priority.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
              We emphasize personalized treatment planning, proactive patient education, and stringent hygiene protocols. Every procedure is performed with precision equipment to ensure your visits are gentle, respectful, and effective.
            </p>

            {/* Asymmetric Visual Composition */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
              
              {/* One Large Mint-Green Card — ~7 of 12 */}
              <div className="sm:col-span-6 bg-[#69E9B6] text-[#29166F] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl pointer-events-none" />
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#29166F] text-[#69E9B6] flex items-center justify-center mb-5 shadow-sm">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">
                    Your Smile Matters
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-[#24185F]/90">
                    Thoughtful care, personalized attention, and a commitment to helping every patient feel comfortable.
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#29166F]/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span>Patient-First Philosophy</span>
                  <button
                    onClick={onBookClick}
                    className="w-8 h-8 rounded-full bg-[#29166F] text-white flex items-center justify-center group-hover:scale-110 transition-transform"
                    aria-label="Request visit"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#69E9B6]" />
                  </button>
                </div>
              </div>

              {/* Two Smaller Stacked Dental Photography Cards — ~6 of 12 */}
              <div className="sm:col-span-6 flex flex-col gap-4">
                
                {/* Photo Card 1: Diagnostic Radiography */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 h-36 bg-[#38218C] shadow-md group">
                  <img
                    src={CLINIC_IMAGES.dentalDiagnosticXray}
                    alt="Digital dental radiography diagnosis at Dentesthetics"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#29166F] via-[#29166F]/40 to-transparent flex items-end p-3.5">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#69E9B6]" />
                        <span className="text-xs font-semibold text-white tracking-wide">
                          Digital Radiography Diagnostics
                        </span>
                      </div>
                      <span className="text-[10px] text-[#69E9B6] font-medium bg-[#29166F]/80 px-2 py-0.5 rounded-full border border-[#69E9B6]/20">
                        Accurate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Photo Card 2: Teeth Examination Close-up */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 h-36 bg-[#38218C] shadow-md group">
                  <img
                    src={CLINIC_IMAGES.teethSmileExamination}
                    alt="Clinical teeth examination and cosmetic care"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#29166F] via-[#29166F]/40 to-transparent flex items-end p-3.5">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#69E9B6]" />
                        <span className="text-xs font-semibold text-white tracking-wide">
                          Gentle Aesthetic Smile Care
                        </span>
                      </div>
                      <span className="text-[10px] text-[#69E9B6] font-medium bg-[#29166F]/80 px-2 py-0.5 rounded-full border border-[#69E9B6]/20">
                        Comfort
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
