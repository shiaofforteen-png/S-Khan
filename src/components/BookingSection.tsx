import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Send,
  MessageCircle,
  Copy,
  Check
} from "lucide-react";
import { DENTAL_SERVICES, CLINIC_INFO, CLINIC_HOURS } from "../data/services";

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceId: preselectedServiceId || "general-dentistry",
    date: "",
    time: "02:00 PM",
    notes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Sync preselected service if passed
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  // Set default min date to today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  const timeSlots = [
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM"
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number";
    } else if (formData.phone.replace(/[^0-9+]/g, "").length < 9) {
      newErrors.phone = "Please enter a valid phone number (e.g. 0300 1234567)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred date";
    } else {
      const selectedDay = new Date(formData.date).getUTCDay();
      // If Sunday (0), alert user
      if (selectedDay === 0) {
        newErrors.date = "Dentesthetics is closed on Sundays. Please select Mon–Sat.";
      }
    }

    if (!formData.serviceId) {
      newErrors.serviceId = "Please choose a dental service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission to booking service
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const selectedService = DENTAL_SERVICES.find((s) => s.id === formData.serviceId);

  // Formatted WhatsApp message for patient convenience
  const whatsappMessage = encodeURIComponent(
    `Hello Dentesthetics Clinic! I would like to request an appointment:\n\n• Name: ${formData.fullName}\n• Service: ${selectedService?.title || "Dental Checkup"}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Phone: ${formData.phone}\n• Notes: ${formData.notes || "None"}\n\nPlease confirm availability.`
  );

  return (
    <section id="book" className="py-20 md:py-28 bg-gradient-to-br from-[#29166F] via-[#38218C] to-[#29166F] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#69E9B6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#38218C] rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Address, Clinic Schedule (~5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs font-bold uppercase tracking-widest text-[#69E9B6] mb-3 inline-block">
              Appointment Scheduling
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-tight tracking-tight mb-6">
              Let&apos;s Take Care of Your{" "}
              <span className="text-[#69E9B6] underline decoration-[#69E9B6]/40 decoration-4 underline-offset-4">
                Smile
              </span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">
              Ready for your next dental visit? Get in touch with Dentesthetics and request an appointment at a time that works for you.
            </p>

            {/* Clinic Details Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-7 space-y-6 mb-8">
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#69E9B6]/20 text-[#69E9B6] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#69E9B6] hover:text-[#74F0BD] mt-2 font-medium transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Clinic Opening Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-[#69E9B6]/20 text-[#69E9B6] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                    Available Opening Hours
                  </h3>
                  <div className="flex justify-between items-center text-sm font-semibold text-white mb-1">
                    <span>Monday – Saturday:</span>
                    <span className="text-[#69E9B6]">1:00 PM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-white/70">
                    <span>Sunday:</span>
                    <span className="text-red-300 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Info */}
            <div className="flex items-center gap-3 text-xs text-white/75 bg-white/5 border border-white/10 rounded-2xl p-4">
              <Calendar className="w-4 h-4 text-[#69E9B6] shrink-0" />
              <span>
                Our administrative staff checks requests throughout operating hours and contacts patients to finalize appointments.
              </span>
            </div>

          </div>

          {/* Right Column: Appointment Form Card (~7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 text-[#24185F] shadow-2xl border border-white/20 relative">
              
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <span className="text-xs font-bold tracking-wider text-[#38218C] uppercase bg-[#F0F0FC] px-3 py-1 rounded-full mb-3 inline-block">
                      Online Reservation
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#24185F]">
                      Book Your Appointment
                    </h3>
                    <p className="text-sm text-[#77758D] mt-1.5">
                      Fill out the form below and our clinical team will get in touch with you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        placeholder="e.g. Dr. / Mr. / Ms. Ahmad Khan"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#24185F] placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-red-500 bg-red-50/30 focus:border-red-500"
                            : "border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          placeholder="e.g. 0300 1234567"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#24185F] placeholder-slate-400 focus:outline-none transition-colors ${
                            errors.phone
                              ? "border-red-500 bg-red-50/30 focus:border-red-500"
                              : "border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#24185F] placeholder-slate-400 focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-500 bg-red-50/30 focus:border-red-500"
                              : "border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Dental Service Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                        Select Dental Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => {
                          setFormData({ ...formData, serviceId: e.target.value });
                          if (errors.serviceId) setErrors({ ...errors, serviceId: "" });
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white text-sm text-[#24185F] focus:outline-none transition-colors"
                      >
                        {DENTAL_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceId && (
                        <p className="text-xs text-red-600 mt-1">{errors.serviceId}</p>
                      )}
                    </div>

                    {/* Preferred Date & Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Date */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          min={todayStr}
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({ ...formData, date: e.target.value });
                            if (errors.date) setErrors({ ...errors, date: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#24185F] focus:outline-none transition-colors ${
                            errors.date
                              ? "border-red-500 bg-red-50/30"
                              : "border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white"
                          }`}
                        />
                        {errors.date && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.date}</span>
                          </p>
                        )}
                      </div>

                      {/* Preferred Time */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                          Preferred Time (1 PM – 7 PM)
                        </label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white text-sm text-[#24185F] focus:outline-none transition-colors"
                        >
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#24185F] mb-1.5">
                        Additional Message / Symptoms (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your dental concerns or any questions..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E7E4F4] bg-[#FAF9FF] focus:border-[#38218C] focus:bg-white text-sm text-[#24185F] placeholder-slate-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-[#69E9B6] hover:bg-[#74F0BD] text-[#29166F] font-bold text-base py-4 px-6 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Appointment</span>
                          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-[#77758D]">
                      Your information is kept private. We will contact you to confirm available slots before scheduling.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#69E9B6]/30 text-[#29166F] flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-[#29166F]" />
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-[#24185F] mb-3">
                    Appointment Request Received!
                  </h3>

                  <div className="bg-[#FAF9FF] border border-[#E7E4F4] rounded-2xl p-5 mb-6 text-left text-sm max-w-md mx-auto space-y-2">
                    <p className="text-[#38218C] font-semibold">
                      Your appointment request has been received. Our team will contact you to confirm availability.
                    </p>
                    <div className="pt-2 border-t border-[#E7E4F4] text-xs text-[#77758D] space-y-1">
                      <p><span className="font-medium text-[#24185F]">Patient:</span> {formData.fullName}</p>
                      <p><span className="font-medium text-[#24185F]">Service:</span> {selectedService?.title}</p>
                      <p><span className="font-medium text-[#24185F]">Requested:</span> {formData.date} at {formData.time}</p>
                      <p><span className="font-medium text-[#24185F]">Contact:</span> {formData.phone} / {formData.email}</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#77758D] mb-6 max-w-md mx-auto leading-relaxed">
                    Would you like to send this request directly via WhatsApp as well for expedited coordination?
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                      href={`https://wa.me/?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          serviceId: "general-dentistry",
                          date: "",
                          time: "02:00 PM",
                          notes: ""
                        });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F0F0FC] hover:bg-[#E7E4F4] text-[#38218C] font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                    >
                      <span>New Request</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
