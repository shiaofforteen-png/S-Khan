import React from "react";
import { X, Check, Clock, Users, ArrowUpRight, Sparkles } from "lucide-react";
import { DentalService } from "../data/services";
import { getServiceIcon } from "./DentalIcons";

interface ServiceModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#E7E4F4] relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#F0F0FC] flex items-center justify-center shrink-0">
            {getServiceIcon(service.id, "w-10 h-10")}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#38218C] bg-[#F0F0FC] px-2.5 py-0.5 rounded-full inline-block mb-1">
              Clinical Service
            </span>
            <h3 className="font-display text-2xl font-bold text-[#24185F]">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#77758D] leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-[#FAF9FF] p-4 rounded-2xl border border-[#E7E4F4] text-xs">
          <div className="flex items-center gap-2 text-[#24185F]">
            <Clock className="w-4 h-4 text-[#38218C] shrink-0" />
            <div>
              <span className="text-[#77758D] block">Duration:</span>
              <span className="font-semibold">{service.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#24185F]">
            <Users className="w-4 h-4 text-[#38218C] shrink-0" />
            <div>
              <span className="text-[#77758D] block">Recommended for:</span>
              <span className="font-semibold truncate max-w-[170px]">{service.idealFor}</span>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-7">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#24185F] mb-3">
            Treatment Advantages
          </h4>
          <div className="space-y-2">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#24185F]">
                <span className="w-5 h-5 rounded-full bg-[#69E9B6]/30 text-[#29166F] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onBook(service.id)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Book {service.title}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3.5 bg-[#F0F0FC] hover:bg-[#E7E4F4] text-[#38218C] font-semibold text-sm rounded-full transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
