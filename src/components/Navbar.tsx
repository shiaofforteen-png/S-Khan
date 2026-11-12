import React, { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { BrandLogoMark } from "./DentalIcons";
import { DENTAL_SERVICES } from "../data/services";

interface NavbarProps {
  onBookClick: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E4F4] py-3.5"
            : "bg-[#FAF9FF]/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38218C] rounded-lg"
              aria-label="Dentesthetics Home"
            >
              <BrandLogoMark className="w-9 h-9 text-[#38218C] transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-[#24185F]">
                  Dent<span className="text-[#38218C]">esthetics</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#77758D] -mt-1 hidden sm:block">
                  Dental Clinic · Islamabad
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium text-[#24185F] hover:text-[#38218C] rounded-full hover:bg-[#F0F0FC] transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-[#77758D]" />
                      </a>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#E7E4F4] p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-3 py-2 text-xs font-semibold text-[#77758D] uppercase tracking-wider border-b border-[#F0F0FC]">
                            Our Specialized Treatments
                          </div>
                          <div className="max-h-72 overflow-y-auto py-1">
                            {DENTAL_SERVICES.map((s) => (
                              <button
                                key={s.id}
                                onClick={() => {
                                  onSelectService(s.id);
                                  setServicesDropdownOpen(false);
                                  const target = document.querySelector("#services");
                                  if (target) target.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="w-full text-left px-3 py-2 text-sm text-[#24185F] hover:bg-[#F0F0FC] hover:text-[#38218C] rounded-lg transition-colors flex items-center justify-between group"
                              >
                                <span className="font-medium">{s.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#69E9B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3.5 py-2 text-[15px] font-medium text-[#24185F] hover:text-[#38218C] rounded-full hover:bg-[#F0F0FC] transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              {/* Phone Icon Button */}
              <button
                onClick={() => setPhoneModalOpen(true)}
                className="w-10 h-10 rounded-full bg-[#29166F] text-white flex items-center justify-center hover:bg-[#38218C] transition-all hover:scale-105 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69E9B6]"
                title="Clinic Hours & Contact"
                aria-label="Call Dentesthetics"
              >
                <Phone className="w-4 h-4 text-[#69E9B6]" />
              </button>

              {/* Primary Book Appointment CTA */}
              <button
                onClick={onBookClick}
                className="hidden sm:inline-flex items-center gap-2 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29166F]"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#24185F] hover:text-[#38218C] rounded-lg hover:bg-[#F0F0FC] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E7E4F4] px-6 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-base font-medium text-[#24185F] hover:bg-[#F0F0FC] rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E7E4F4] mt-2 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-semibold text-base py-3 rounded-full transition-all shadow-sm"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPhoneModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#F0F0FC] text-[#29166F] font-medium text-sm py-2.5 rounded-full hover:bg-[#E7E4F4] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#38218C]" />
                  <span>Clinic Contact & Hours</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Phone / Contact Info Modal */}
      {phoneModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#E7E4F4] relative">
            <button
              onClick={() => setPhoneModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F0FC] flex items-center justify-center text-[#38218C]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#24185F]">Dentesthetics Clinic</h3>
                <p className="text-xs text-[#77758D]">G-10/4, Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl p-4 mb-5 space-y-2.5 text-sm">
              <div className="flex justify-between items-center text-[#24185F]">
                <span className="font-medium text-[#77758D]">Clinic Hours:</span>
                <span className="font-semibold text-[#29166F]">1:00 PM – 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-[#24185F]">
                <span className="font-medium text-[#77758D]">Operating Days:</span>
                <span className="font-semibold">Monday – Saturday</span>
              </div>
              <div className="flex justify-between items-center text-[#24185F]">
                <span className="font-medium text-[#77758D]">Sunday:</span>
                <span className="text-red-500 font-medium">Closed</span>
              </div>
              <div className="pt-2 border-t border-[#E7E4F4] text-xs text-[#77758D]">
                House 1206, Street 40, G-10/4, Islamabad
              </div>
            </div>

            <p className="text-xs text-[#77758D] mb-5 leading-relaxed">
              Appointments can be requested directly online using our booking form. For immediate directions, you can also launch Google Maps.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=House+1206+Street+40+G-10%2F4+Islamabad+Pakistan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-4 bg-[#F0F0FC] hover:bg-[#E7E4F4] text-[#29166F] text-sm font-semibold rounded-full transition-colors text-center"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setPhoneModalOpen(false);
                  onBookClick();
                }}
                className="py-3 px-4 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] text-sm font-semibold rounded-full transition-colors text-center shadow-sm"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
