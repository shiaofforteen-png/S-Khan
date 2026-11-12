import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const BrandLogoMark: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Dentesthetics Logo Mark"
  >
    <rect width="36" height="36" rx="10" fill="#38218C" />
    {/* Stylized Tooth & Smile curve */}
    <path
      d="M11 13C11 9.5 14 7.5 18 7.5C22 7.5 25 9.5 25 13C25 17 23 20.5 21.5 25.5C21 27.2 19.8 28.5 18 28.5C16.2 28.5 15 27.2 14.5 25.5C13 20.5 11 17 11 13Z"
      stroke="#69E9B6"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 15C16 17 20 17 21.5 15"
      stroke="#69E9B6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="11.5" r="1.5" fill="#74F0BD" />
  </svg>
);

export const GeneralDentistryIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    <path
      d="M17 19C17 14 20 12 24 12C28 12 31 14 31 19C31 24 29 28 27.5 33C27 34.5 25.5 36 24 36C22.5 36 21 34.5 20.5 33C19 28 17 24 17 19Z"
      stroke="#38218C"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="33" cy="16" r="3" fill="#69E9B6" />
    <path d="M21 20C22.5 22 25.5 22 27 20" stroke="#69E9B6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CosmeticDentistryIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    <path
      d="M18 19C18 15 20.5 13 24 13C27.5 13 30 15 30 19C30 23.5 28.5 27 27 31.5C26.5 33 25.5 34 24 34C22.5 34 21.5 33 21 31.5C19.5 27 18 23.5 18 19Z"
      stroke="#38218C"
      strokeWidth="2.2"
    />
    {/* Aesthetic Sparkles */}
    <path d="M34 11L35 14L38 15L35 16L34 19L33 16L30 15L33 14L34 11Z" fill="#69E9B6" />
    <path d="M14 28L14.7 30L17 30.7L14.7 31.4L14 33.5L13.3 31.4L11 30.7L13.3 30L14 28Z" fill="#74F0BD" />
  </svg>
);

export const TeethWhiteningIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    <circle cx="24" cy="24" r="8" stroke="#38218C" strokeWidth="2.4" />
    <path d="M24 10V13M24 35V38M10 24H13M35 24H38" stroke="#69E9B6" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M14.5 14.5L16.8 16.8M31.2 31.2L33.5 33.5M14.5 33.5L16.8 31.2M31.2 16.8L33.5 14.5" stroke="#74F0BD" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="3" fill="#69E9B6" />
  </svg>
);

export const OrthodonticsIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    {/* Curved alignment line representing braces / aligners */}
    <path d="M14 20C18 16 30 16 34 20C34 24 32 31 24 31C16 31 14 24 14 20Z" stroke="#38218C" strokeWidth="2.2" />
    <path d="M14 24C19 22 29 22 34 24" stroke="#69E9B6" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="18" y="22" width="3.5" height="3.5" rx="0.8" fill="#38218C" />
    <rect x="23" y="21.5" width="3.5" height="3.5" rx="0.8" fill="#69E9B6" />
    <rect x="28" y="22" width="3.5" height="3.5" rx="0.8" fill="#38218C" />
  </svg>
);

export const DentalImplantsIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    {/* Crown top */}
    <path d="M18 15C18 13.5 20 12 24 12C28 12 30 13.5 30 15C30 18 28 20 28 22H20C20 20 18 18 18 15Z" stroke="#38218C" strokeWidth="2.2" />
    {/* Implant screw threads */}
    <path d="M21 24H27M21 28H27M22 32H26M23 36H25" stroke="#69E9B6" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M24 22V36" stroke="#38218C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RootCanalIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    <path
      d="M18 16C18 13 21 12 24 12C27 12 30 13 30 16C30 20 28 25 27 34C26.5 35.5 25 36 24 36C23 36 21.5 35.5 21 34C20 25 18 20 18 16Z"
      stroke="#38218C"
      strokeWidth="2.2"
    />
    <path d="M24 17V30" stroke="#69E9B6" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="24" cy="16" r="2" fill="#74F0BD" />
  </svg>
);

export const CrownsBridgesIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    <path
      d="M14 28V19L20 22L24 15L28 22L34 19V28C34 29.5 32.5 31 31 31H17C15.5 31 14 29.5 14 28Z"
      stroke="#38218C"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="2" fill="#69E9B6" />
    <path d="M19 28H29" stroke="#69E9B6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PreventiveCareIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="48" height="48" rx="14" fill="#F0F0FC" />
    {/* Shield outline */}
    <path
      d="M24 13L33 16V24C33 30 29 34 24 36C19 34 15 30 15 24V16L24 13Z"
      stroke="#38218C"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Checkmark in mint */}
    <path d="M20 24L23 27L28 21" stroke="#69E9B6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const getServiceIcon = (id: string, className?: string) => {
  switch (id) {
    case "general-dentistry":
      return <GeneralDentistryIcon className={className} />;
    case "cosmetic-dentistry":
      return <CosmeticDentistryIcon className={className} />;
    case "teeth-whitening":
      return <TeethWhiteningIcon className={className} />;
    case "orthodontics":
      return <OrthodonticsIcon className={className} />;
    case "dental-implants":
      return <DentalImplantsIcon className={className} />;
    case "root-canal":
      return <RootCanalIcon className={className} />;
    case "crowns-bridges":
      return <CrownsBridgesIcon className={className} />;
    case "preventive-care":
      return <PreventiveCareIcon className={className} />;
    default:
      return <GeneralDentistryIcon className={className} />;
  }
};
