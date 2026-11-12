import React, { useState } from "react";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { CLINIC_IMAGES } from "../assets/images";

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      src: CLINIC_IMAGES.clinicTreatmentRoom,
      title: "Architectural Treatment Suite",
      category: "Clinic Environment",
      span: "lg:col-span-8 lg:row-span-2"
    },
    {
      src: CLINIC_IMAGES.heroDentalTreatment,
      title: "Patient Consultation & Gentle Care",
      category: "Clinical Care",
      span: "lg:col-span-4 lg:row-span-1"
    },
    {
      src: CLINIC_IMAGES.dentistDrPortrait,
      title: "Dedicated Dental Clinicians",
      category: "Our Team",
      span: "lg:col-span-4 lg:row-span-1"
    },
    {
      src: CLINIC_IMAGES.dentalDiagnosticXray,
      title: "Digital Radiography Diagnostics",
      category: "Precision Tech",
      span: "lg:col-span-6 lg:row-span-1"
    },
    {
      src: CLINIC_IMAGES.teethSmileExamination,
      title: "Aesthetic Examination & Smile Polishing",
      category: "Cosmetic Hygiene",
      span: "lg:col-span-6 lg:row-span-1"
    }
  ];

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0FC] border border-[#E7E4F4] text-[#38218C] text-xs font-bold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#69E9B6]" />
            <span>Clinic Tour</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#24185F] leading-tight tracking-tight mb-4">
            A Closer Look at Dentesthetics
          </h2>
          <p className="text-base text-[#77758D] leading-relaxed">
            Explore the environment where your smile receives thoughtful care.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`${item.span} relative rounded-3xl overflow-hidden shadow-md group cursor-pointer bg-[#FAF9FF] border border-[#E7E4F4] h-64 md:h-80 lg:h-auto min-h-[260px]`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24185F]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-[#24185F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#69E9B6] mb-1 inline-block">
                  {item.category}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:block"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:block"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={galleryItems[activeImageIndex].src}
              alt={galleryItems[activeImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-widest text-[#69E9B6] font-bold">
                {galleryItems[activeImageIndex].category}
              </span>
              <h4 className="font-display text-lg font-bold text-white mt-0.5">
                {galleryItems[activeImageIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
