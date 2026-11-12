import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { DENTAL_SERVICES, DentalService } from "../data/services";
import { getServiceIcon } from "./DentalIcons";

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
  onOpenServiceDetails: (service: DentalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onOpenServiceDetails
}) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF9FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>Comprehensive Clinical Dentistry</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-5">
            Complete Dental Care for Your{" "}
            <span className="relative inline-block text-[#29166F]">
              <span className="relative z-10 underline decoration-[#69E9B6] decoration-[5px] underline-offset-4">
                Beautiful Smile
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#77758D] leading-relaxed">
            Explore our dental services, designed around your comfort, oral health, and confidence.
          </p>
        </div>

        {/* 8 Services Grid: 4 per row on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DENTAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#E7E4F4] shadow-sm hover:shadow-xl hover:border-[#69E9B6]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Service Icon with Purple Stroke & Mint Accents */}
                <div className="mb-6 inline-block transition-transform duration-300 group-hover:scale-105">
                  {getServiceIcon(service.id, "w-14 h-14")}
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-[#24185F] group-hover:text-[#38218C] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#77758D] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#F0F0FC] flex items-center justify-between">
                <button
                  onClick={() => onOpenServiceDetails(service)}
                  className="text-xs font-semibold text-[#38218C] group-hover:text-[#29166F] hover:underline flex items-center gap-1 focus:outline-none"
                >
                  <span>Learn Details</span>
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="w-9 h-9 rounded-full bg-[#F0F0FC] group-hover:bg-[#69E9B6] text-[#38218C] group-hover:text-[#29166F] flex items-center justify-center transition-colors duration-200 shadow-xs"
                  title={`Book ${service.title}`}
                  aria-label={`Book ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Strip */}
        <div className="mt-14 bg-[#F0F0FC] border border-[#E7E4F4] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#38218C] text-[#69E9B6] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-sm text-[#24185F] font-medium text-center sm:text-left">
              Not sure which treatment fits your smile best? We offer thorough initial consultations in G-10/4 Islamabad.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking("general-dentistry")}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 bg-[#29166F] hover:bg-[#38218C] text-white font-semibold text-xs px-5 py-3 rounded-full transition-colors shadow-sm"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#69E9B6]" />
          </button>
        </div>

      </div>
    </section>
  );
};
