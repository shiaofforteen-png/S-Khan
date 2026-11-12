import React, { useState } from "react";
import { ArrowUpRight, MapPin, Clock, X, Heart } from "lucide-react";
import { BrandLogoMark } from "./DentalIcons";
import { CLINIC_INFO } from "../data/services";

interface FooterProps {
  onBookClick: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onSelectService }) => {
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#29166F] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand (~4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <BrandLogoMark className="w-9 h-9" />
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Dent<span className="text-[#69E9B6]">esthetics</span>
              </span>
            </div>

            <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-sm">
              Thoughtful dental care, personalized attention, and a healthier smile. Providing Islamabad with patient-centered dentistry in Sector G-10/4.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#69E9B6] font-medium bg-white/5 px-3 py-2 rounded-xl border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#69E9B6]" />
              <span>G-10/4, Islamabad · Registered Clinical Practice</span>
            </div>
          </div>

          {/* Col 2: Quick Links (~2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#69E9B6] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, "#hero")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "#about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleScrollTo(e, "#why-us")}
                  className="hover:text-white transition-colors"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dental Services (~3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#69E9B6] mb-4">
              Dental Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <button
                  onClick={() => onSelectService("general-dentistry")}
                  className="hover:text-white transition-colors text-left"
                >
                  General Dentistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService("cosmetic-dentistry")}
                  className="hover:text-white transition-colors text-left"
                >
                  Cosmetic Dentistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService("teeth-whitening")}
                  className="hover:text-white transition-colors text-left"
                >
                  Teeth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService("orthodontics")}
                  className="hover:text-white transition-colors text-left"
                >
                  Orthodontics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService("dental-implants")}
                  className="hover:text-white transition-colors text-left"
                >
                  Dental Implants
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & CTA (~3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#69E9B6] mb-4">
                Clinic Location
              </h4>
              
              <div className="flex items-start gap-2.5 text-xs text-white/80 mb-3">
                <MapPin className="w-4 h-4 text-[#69E9B6] shrink-0 mt-0.5" />
                <span>House 1206, Street 40, G-10/4, Islamabad, Pakistan</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-white/80 mb-5">
                <Clock className="w-4 h-4 text-[#69E9B6] shrink-0 mt-0.5" />
                <span>Mon–Sat: 1 PM – 7 PM · Sunday Closed</span>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-xs py-3 px-4 rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} Dentesthetics. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalContent("privacy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setModalContent("terms")}
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white text-[#24185F] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-xl font-bold mb-3">
              {modalContent === "privacy" ? "Dentesthetics Privacy Policy" : "Terms and Conditions"}
            </h3>

            <div className="text-xs text-[#77758D] leading-relaxed space-y-3">
              {modalContent === "privacy" ? (
                <>
                  <p>
                    Dentesthetics respects patient privacy. Information submitted through this website (such as name, contact number, and dental service requested) is utilized exclusively by our clinical staff for appointment coordination and patient care.
                  </p>
                  <p>
                    We do not sell, rent, or share patient personal data with third-party advertisers. All clinical records remain protected in accordance with professional medical confidentiality standards.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Website appointment requests do not constitute a confirmed medical appointment until verified by our staff. Timings and clinical availability are subject to doctor scheduling.
                  </p>
                  <p>
                    Information presented on this website is for educational and appointment coordination purposes and is not a substitute for formal clinical diagnosis by a registered dental practitioner.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setModalContent(null)}
                className="px-5 py-2 bg-[#38218C] text-white rounded-full text-xs font-semibold hover:bg-[#29166F] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
