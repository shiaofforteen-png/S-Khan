import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";

interface FaqSectionProps {
  onBookClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onBookClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      question: "How can I book an appointment at Dentesthetics?",
      answer:
        "You can request an appointment easily through our online booking form on this website by choosing your preferred date, time, and service. Once submitted, our reception team will contact you directly to confirm availability. You may also contact us during opening hours."
    },
    {
      question: "Where is Dentesthetics located?",
      answer:
        "Dentesthetics is located at House 1206, Street 40, G-10/4, G-10, Islamabad, Pakistan. We are situated in a quiet, accessible residential sector with convenient visitor parking."
    },
    {
      question: "What are your clinic opening hours?",
      answer:
        "Dentesthetics is open Monday through Saturday from 1:00 PM to 7:00 PM. We are closed on Sundays to allow our team to recharge and maintain clinical sanitation standards."
    },
    {
      question: "What dental services are available?",
      answer:
        "We offer comprehensive dental care including General Dentistry (examinations and cleanings), Cosmetic Dentistry, Professional Teeth Whitening, Orthodontic alignment guidance, Dental Implants, Gentle Root Canal Treatments, Dental Crowns & Bridges, and Preventive Oral Care."
    },
    {
      question: "Should I schedule regular dental checkups?",
      answer:
        "Yes, dental professionals recommend a routine dental examination and preventive scaling every six months. Regular checkups allow us to detect potential concerns early, protect enamel health, and keep your natural smile healthy over a lifetime."
    },
    {
      question: "Do you provide cosmetic dental treatments?",
      answer:
        "Yes, we offer individualized cosmetic treatments such as in-office teeth whitening, composite bonding, and aesthetic restorations designed to enhance tooth shape, shade, and harmony while preserving natural dental anatomy."
    },
    {
      question: "How can I contact the clinic?",
      answer:
        "You can reach out through our online appointment request system or visit us in person at House 1206, Street 40, G-10/4, Islamabad between 1:00 PM and 7:00 PM (Monday to Saturday)."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#77758D] leading-relaxed">
            Find answers to common questions about appointments, clinic timings, and dental care at Dentesthetics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF9FF] border-[#38218C]/30 shadow-sm"
                    : "bg-white border-[#E7E4F4] hover:border-[#38218C]/20"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#24185F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#38218C] text-white"
                        : "bg-[#F0F0FC] text-[#38218C]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#77758D] leading-relaxed border-t border-[#F0F0FC] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#24185F] font-semibold">
            Have a specific clinical or scheduling question?
          </p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-xs px-5 py-2.5 rounded-full transition-colors shadow-xs"
          >
            <span>Request Appointment Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
