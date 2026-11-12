import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustAbout } from "./components/TrustAbout";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ProcessSection } from "./components/ProcessSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookingSection } from "./components/BookingSection";
import { LocationContact } from "./components/LocationContact";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { ServiceModal } from "./components/ServiceModal";
import { DentalService } from "./data/services";

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("general-dentistry");
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setActiveModalService(null);
    const bookingEl = document.querySelector("#book");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.querySelector("#services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWhyUs = () => {
    const whyUsEl = document.querySelector("#why-us");
    if (whyUsEl) {
      whyUsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-[#24185F] font-sans selection:bg-[#69E9B6] selection:text-[#29166F]">
      {/* Sticky Header Navigation */}
      <Navbar
        onBookClick={() => scrollToBooking()}
        onSelectService={(serviceId) => scrollToBooking(serviceId)}
      />

      <main>
        {/* Section 6: Hero Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreServices={scrollToServices}
        />

        {/* Section 7: Trust and About Section */}
        <TrustAbout
          onDiscoverClinic={scrollToWhyUs}
          onBookClick={() => scrollToBooking()}
        />

        {/* Section 8: Dental Services Section */}
        <ServicesSection
          onSelectServiceForBooking={(serviceId) => scrollToBooking(serviceId)}
          onOpenServiceDetails={(service) => setActiveModalService(service)}
        />

        {/* Section 9: Why Choose Dentesthetics */}
        <WhyChooseUs
          onBookClick={() => scrollToBooking()}
        />

        {/* Section 10: Our Dental Care Process */}
        <ProcessSection
          onBookClick={() => scrollToBooking()}
        />

        {/* Section 11: Dental Clinic Gallery */}
        <GallerySection />

        {/* Section 12: Patient Experience & Testimonials */}
        <TestimonialsSection />

        {/* Section 13: Appointment Booking Section */}
        <BookingSection preselectedServiceId={selectedServiceId} />

        {/* Section 14: Location and Contact Section */}
        <LocationContact />

        {/* Section 15: FAQ Section */}
        <FaqSection onBookClick={() => scrollToBooking()} />
      </main>

      {/* Section 16: Footer */}
      <Footer
        onBookClick={() => scrollToBooking()}
        onSelectService={(serviceId) => scrollToBooking(serviceId)}
      />

      {/* Interactive Service Details Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBook={(serviceId) => scrollToBooking(serviceId)}
      />
    </div>
  );
}

export default App;
