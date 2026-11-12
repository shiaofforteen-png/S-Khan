import React from "react";
import { Quote, Sparkles, Heart } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const sampleTestimonials = [
    {
      initials: "FA",
      category: "Routine & Preventive Care",
      quote: "The gentleness and clear explanations during my dental cleaning set a new standard for me. I felt completely informed throughout the entire checkup.",
      location: "G-10 Islamabad Patient Experience",
      focus: "Comfort-Centered Dentistry"
    },
    {
      initials: "MR",
      category: "Cosmetic & Whitening Care",
      quote: "From the consultation to the final whitening polish, every step was explained with calm professionalism. The clinic space in G-10 is spotless and modern.",
      location: "Islamabad Resident Patient Feedback",
      focus: "Aesthetic Treatment"
    },
    {
      initials: "SK",
      category: "Orthodontic & Restorative Care",
      quote: "Finding a dental team that listens without rushing makes all the difference. My treatment plan was transparent, and the results exceeded my expectations.",
      location: "F-10 / G-10 Islamabad Patient Experience",
      focus: "Personalized Treatment Plan"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-4">
            Care That Makes You Smile
          </h2>
          <p className="text-base text-[#77758D] leading-relaxed">
            Every visit should leave you feeling informed, comfortable, and confident.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E7E4F4] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Header with Quote Icon and Mint Star Graphic */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F0FC] group-hover:bg-[#69E9B6]/30 text-[#38218C] flex items-center justify-center transition-colors">
                    <Quote className="w-6 h-6 rotate-180" />
                  </div>
                  <div className="flex items-center gap-1 text-[#38218C]">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-3.5 h-3.5 text-[#69E9B6]" />
                    ))}
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#38218C] bg-[#F0F0FC] px-3 py-1 rounded-full mb-4 inline-block">
                  {item.category}
                </span>

                <p className="text-sm sm:text-base text-[#24185F] leading-relaxed mb-6 font-medium italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-[#F0F0FC] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#38218C] text-white flex items-center justify-center font-display font-bold text-xs shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#24185F]">
                    {item.focus}
                  </h4>
                  <p className="text-xs text-[#77758D]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Transparency Note as required by brief */}
        <p className="text-center text-xs text-[#77758D] mt-8 max-w-xl mx-auto">
          Sample patient experience feedback formatted for clinic presentation. Real verified reviews are collected following in-clinic consultations.
        </p>

      </div>
    </section>
  );
};
