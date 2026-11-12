import React from "react";
import { UserCheck, Sparkles, HelpCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CLINIC_IMAGES } from "../assets/images";

interface WhyChooseUsProps {
  onBookClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookClick }) => {
  const benefits = [
    {
      title: "Patient-Focused Approach",
      description: "Care and communication centered around your individual needs.",
      icon: UserCheck,
      iconBg: "bg-[#F0F0FC] text-[#38218C]",
      badge: "Gentle Care"
    },
    {
      title: "Modern Dental Environment",
      description: "A welcoming setting designed to support a comfortable dental experience.",
      icon: Sparkles,
      iconBg: "bg-[#69E9B6]/30 text-[#29166F]",
      badge: "Contemporary"
    },
    {
      title: "Personalized Treatment Guidance",
      description: "Clear explanations to help you understand your dental care options.",
      icon: HelpCircle,
      iconBg: "bg-[#F0F0FC] text-[#38218C]",
      badge: "Transparent"
    },
    {
      title: "Commitment to Hygiene",
      description: "Attention to cleanliness and professional clinical practices.",
      icon: ShieldCheck,
      iconBg: "bg-[#69E9B6]/30 text-[#29166F]",
      badge: "Sterile Standard"
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>The Dentesthetics Difference</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-4">
            Why Choose Dentesthetics?
          </h2>
          <p className="text-base sm:text-lg text-[#77758D] leading-relaxed">
            Your dental experience should feel comfortable, clear, and personalized.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Large clinic room photograph (~6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame */}
              <div className="overflow-hidden rounded-3xl sm:rounded-[32px] border-4 border-[#F0F0FC] shadow-2xl aspect-[4/3] bg-[#FAF9FF] relative group">
                <img
                  src={CLINIC_IMAGES.clinicTreatmentRoom}
                  alt="Modern hygiene-focused treatment suite at Dentesthetics Islamabad"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Mint Information Badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#69E9B6] text-[#29166F] rounded-2xl px-5 py-3.5 shadow-xl border-2 border-white flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#29166F] text-[#69E9B6] flex items-center justify-center font-bold text-xs shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-tight uppercase">
                    Hygienic Clinical Environment
                  </p>
                  <p className="text-[11px] font-medium text-[#24185F]">
                    G-10/4 Islamabad Location
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Benefits with alternating icon styles (~6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {benefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-[#38218C]/20 hover:bg-white flex items-start gap-4 sm:gap-5 group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${benefit.iconBg} flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-lg font-bold text-[#24185F] group-hover:text-[#38218C] transition-colors">
                        {benefit.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#77758D] bg-white px-2.5 py-0.5 rounded-full border border-[#E7E4F4]">
                        {benefit.badge}
                      </span>
                    </div>
                    <p className="text-sm text-[#77758D] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#29166F] hover:bg-[#38218C] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-sm"
              >
                <span>Experience Our Care</span>
                <CheckCircle2 className="w-4 h-4 text-[#69E9B6]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
