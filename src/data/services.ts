export interface DentalService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  idealFor: string;
  iconName: string;
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Routine dental examinations, preventive care, and personalized oral health guidance.",
    fullDescription: "Comprehensive diagnostic checkups, gentle cleanings, digital radiography, and thorough periodontal assessments designed to catch issues early and preserve natural teeth.",
    benefits: ["Complete oral health assessment", "Plaque & tartar removal", "Personalized hygiene consultation"],
    duration: "30 - 45 mins",
    idealFor: "All ages looking for routine maintenance & cleanings",
    iconName: "Stethoscope"
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription: "Smile-enhancing treatments designed to help improve the appearance of your teeth.",
    fullDescription: "Custom aesthetic solutions including composite bonding, aesthetic re-contouring, and porcelain veneers tailored to enhance the symmetry, shape, and balance of your natural smile.",
    benefits: ["Minimally invasive smile design", "Natural shade matching", "Repairs chipped or uneven teeth"],
    duration: "45 - 60 mins",
    idealFor: "Patients desiring enhanced smile aesthetics & symmetry",
    iconName: "Sparkles"
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Professional whitening options for a brighter-looking smile.",
    fullDescription: "Safe, in-office clinical teeth whitening and custom-fitted take-home whitening trays using gentle pH-balanced agents designed to lift stubborn stains while minimizing enamel sensitivity.",
    benefits: ["Safe, enamel-friendly formulation", "Noticeable shade improvement", "Low-sensitivity protocol"],
    duration: "45 - 60 mins",
    idealFor: "Patients with surface discoloration from tea, coffee, or aging",
    iconName: "Sun"
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    shortDescription: "Treatment options designed to help improve tooth alignment and your smile.",
    fullDescription: "Modern clear aligners and corrective orthodontics for correcting crowding, gaps, and bite misalignments with discreet, comfortable, and predictable movements.",
    benefits: ["Discreet alignment options", "Improved bite function & jaw health", "Easier daily flossing and brushing"],
    duration: "Consultation: 30 mins",
    idealFor: "Teens and adults looking to straighten teeth comfortably",
    iconName: "Smile"
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Restorative solutions for replacing missing teeth.",
    fullDescription: "Biocompatible titanium fixtures that replicate natural tooth roots, topped with high-precision ceramic crowns for permanent, stable, and natural-feeling mastication.",
    benefits: ["Looks and feels like natural teeth", "Prevents bone loss in the jaw", "Long-term durable restoration"],
    duration: "Consultation & 3D scan: 45 mins",
    idealFor: "Replacing single or multiple missing teeth permanently",
    iconName: "Anchor"
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDescription: "Treatment focused on addressing infection and preserving natural teeth.",
    fullDescription: "Gentle endodontic therapy utilizing rotary instruments and modern local anesthesia to remove infected pulp tissue, disinfect the root canal, and seal it to relieve pain.",
    benefits: ["Saves your natural tooth structure", "Alleviates toothache and infection", "Virtually painless with modern anesthesia"],
    duration: "45 - 60 mins",
    idealFor: "Deep cavities, persistent toothache, or cracked teeth",
    iconName: "ShieldAlert"
  },
  {
    id: "crowns-bridges",
    title: "Dental Crowns and Bridges",
    shortDescription: "Restorative options designed to protect and replace damaged or missing teeth.",
    fullDescription: "Custom-milled zirconia and ceramic crowns and fixed bridge units that restore structural integrity, full chewing capability, and aesthetic appearance to broken or weakened teeth.",
    benefits: ["High-strength ceramic materials", "Seamless color blend with adjacent teeth", "Protects weakened tooth walls"],
    duration: "2 appointments: 40 mins each",
    idealFor: "Weakened teeth after root canal, fractures, or tooth loss",
    iconName: "Crown"
  },
  {
    id: "preventive-care",
    title: "Preventive Dental Care",
    shortDescription: "Proactive dental care and guidance to help maintain long-term oral health.",
    fullDescription: "Preventive fluoride applications, dental sealants, deep ultrasonic scaling, and gum pocket monitoring to protect enamel against decay and safeguard gum health over decades.",
    benefits: ["Early detection of micro-cavities", "Gum disease prevention", "Cost-effective long-term health plan"],
    duration: "30 - 40 mins",
    idealFor: "Children and adults seeking lifelong cavity prevention",
    iconName: "HeartHandshake"
  }
];

export interface ClinicHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export const CLINIC_HOURS: ClinicHours[] = [
  { day: "Monday", hours: "1:00 PM – 7:00 PM", isOpen: true },
  { day: "Tuesday", hours: "1:00 PM – 7:00 PM", isOpen: true },
  { day: "Wednesday", hours: "1:00 PM – 7:00 PM", isOpen: true },
  { day: "Thursday", hours: "1:00 PM – 7:00 PM", isOpen: true },
  { day: "Friday", hours: "1:00 PM – 7:00 PM", isOpen: true },
  { day: "Saturday", hours: "1:00 PM – 7:00 PM", isOpen: true },
  { day: "Sunday", hours: "Closed", isOpen: false }
];

export const CLINIC_INFO = {
  name: "Dentesthetics",
  tagline: "Your Smile, Our Priority",
  address: "House 1206, Street 40, G-10/4, G-10, Islamabad, Pakistan",
  shortAddress: "House 1206, Street 40, G-10/4, Islamabad",
  city: "Islamabad",
  country: "Pakistan",
  postalCode: "44000",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=House+1206+Street+40+G-10%2F4+G-10+Islamabad+Pakistan",
  scheduleNotice: "Walk-ins and appointments are welcome during clinic hours (1:00 PM – 7:00 PM, Mon–Sat)."
};
