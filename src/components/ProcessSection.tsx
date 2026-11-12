import React from "react";
import { CalendarCheck, MessageSquare, FileText, Sparkles, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onBookClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onBookClick }) => {
  const steps = [
    {
      step: "01",
      title: "Book Your Visit",
      description: "Choose a convenient time and request your appointment.",
      icon: CalendarCheck
    },
    {
      step: "02",
      title: "Initial Consultation",
      description: "Discuss your concerns and dental care needs.",
      icon: MessageSquare
    },
    {
      step: "03",
      title: "Personalized Care Plan",
      description: "Understand the available treatment options and next steps.",
      icon: FileText
    },
    {
      step: "04",
      title: "Continue Your Smile Journey",
      description: "Receive guidance for maintaining your oral health.",
      icon: Sparkles
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F0F0FC]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>Transparent Patient Care</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-4">
            Your Journey to a{" "}
            <span className="text-[#38218C] underline decoration-[#69E9B6] decoration-4 underline-offset-4">
              Healthier Smile
            </span>
          </h2>
          <p className="text-base text-[#77758D] leading-relaxed">
            We guide you through every stage of your dental health with clear answers and compassionate support.
          </p>
        </div>

        {/* 4 Steps in Horizontal Desktop / Vertical Mobile */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#69E9B6] via-[#38218C] to-[#69E9B6] opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-3xl p-7 border border-[#E7E4F4] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-4xl font-extrabold text-[#38218C]/25 group-hover:text-[#38218C] transition-colors">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#F0F0FC] group-hover:bg-[#69E9B6] text-[#38218C] group-hover:text-[#29166F] flex items-center justify-center transition-colors duration-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#24185F] group-hover:text-[#38218C] transition-colors mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#77758D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#F0F0FC] flex items-center justify-between text-xs font-semibold text-[#77758D]">
                    <span>Phase 0{idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#69E9B6] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2.5 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Step 01: Request Your Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
