/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SALONES_DATA } from "../data/mockData";
import { 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Users, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Settings, 
  CreditCard, 
  Clipboard, 
  ChevronRight,
  Send,
  Building,
  Check
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function MobileBooking() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialVenueId = searchParams.get("venueId") || "";

  // Form states matching initial Reservation Kiosk values
  const [selectedVenueId, setSelectedVenueId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [setupType, setSetupType] = useState("");
  const [attendees, setAttendees] = useState(10);
  const [remarks, setRemarks] = useState("");
  
  // Optional services addons
  const [addons, setAddons] = useState({
    catering: false,
    internet: false,
    audiovisuals: false,
    parking: false
  });

  // Success flow
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  // Sync initial query parameter
  useEffect(() => {
    if (initialVenueId && SALONES_DATA.some(s => s.id === initialVenueId)) {
      setSelectedVenueId(initialVenueId);
    } else if (SALONES_DATA.length > 0) {
      setSelectedVenueId(SALONES_DATA[0].id);
    }
    setDate(new Date().toISOString().split("T")[0]);
  }, [initialVenueId]);

  // Read current selected venue
  const activeVenue = SALONES_DATA.find((v) => v.id === selectedVenueId) || SALONES_DATA[0];

  useEffect(() => {
    if (activeVenue) {
      const defaultSetup = activeVenue.setups[0]?.type || "";
      setSetupType(defaultSetup);
      
      if (attendees > activeVenue.capacity) {
        setAttendees(activeVenue.capacity);
      }
    }
  }, [selectedVenueId, activeVenue]);

  const handleToggleAddon = (key: keyof typeof addons) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getEmailPlainBody = (code: string) => {
    const venueNameStr = language === "en" ? (activeVenue?.nameEn || activeVenue?.name) : activeVenue?.name;
    const activeAddonsList: string[] = [];
    if (addons.catering) activeAddonsList.push(language === "en" ? "Gourmet Catering & Coffee" : "Estación de café gourmet y bocados");
    if (addons.internet) activeAddonsList.push(language === "en" ? "High-Speed Internet" : "Internet de Banda Ancha Dedicado");
    if (addons.audiovisuals) activeAddonsList.push(language === "en" ? "Pro Audio & Proj" : "Proyector / Sonido Line Array Pro");
    if (addons.parking) activeAddonsList.push(language === "en" ? "VIP Valet Parking" : "Parqueaderos Privados VIP");

    return `=====================================================
SOLICITUD DE RESERVA - HOTEL WYNDHAM BOGOTÁ (MÓVIL)
=====================================================
Código de Pre-Reserva: ${code}
Fecha de Emisión: ${new Date().toLocaleDateString()}

DETALLES DEL SECTOR O SALÓN SOLICITADO:
-----------------------------------------------------
• Salón: ${venueNameStr}
• Montaje Requerido: ${setupType}
• Asistentes Previstos: ${attendees} Pax
• Fecha Solicitada: ${date}

DATOS DEL HUÉSPED (Contacto Oficial):
-----------------------------------------------------
• Nombre Completo: ${name}
• Correo Electrónico: ${email}
• Teléfono / Extensión: ${phone}

SERVICIOS ADICIONALES INTEGRADOS:
-----------------------------------------------------
${activeAddonsList.length > 0 ? activeAddonsList.map(a => `• [SÍ] ${a}`).join("\n") : "• Ninguno seleccionado"}

REQUERIMIENTOS ESPECIALES / COMENTARIOS:
-----------------------------------------------------
${remarks.trim() ? remarks : "Ninguno especificado."}

=====================================================
INSTRUCCIONES DE ATENCIÓN DE EVENTOS:
Por favor, responder a esta solicitud comunicándose con el 
huésped directamente a su correo institucional proporcionado: 

📧 Correo de contacto: ${email}
📞 Teléfono de contacto: ${phone}

Agradecemos procesar la cotización oficial basándose 
en la capacidad y addons especificados.
=====================================================
Enviado desde el Kiosco Digital Interactivo - Wyndham Bogotá Salitre
=====================================================`;
  };

  const triggerReservationEmail = (code: string) => {
    const emailRecipient = "infraestructura02@hotelesdiplomat.com";
    const venueNameStr = language === "en" ? (activeVenue?.nameEn || activeVenue?.name) : activeVenue?.name;
    const emailSubject = `Solicitud de Reserva: ${venueNameStr} - Código ${code}`;
    const emailBody = getEmailPlainBody(code);

    const mailtoUrl = `mailto:${encodeURIComponent(emailRecipient)}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !date) {
      alert(language === "en" ? "Please fill in all contact details." : "Por favor, complete todos los campos de contacto.");
      return;
    }

    const randomCode = `WYND-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(randomCode);

    // Save locally on user's browser device
    const newBooking = {
      code: randomCode,
      venueId: selectedVenueId,
      venueName: language === "en" ? (activeVenue.nameEn || activeVenue.name) : activeVenue.name,
      guestName: name,
      guestEmail: email,
      guestPhone: phone,
      bookingDate: date,
      setup: setupType,
      capacity: attendees,
      addons,
      remarks,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem("hotel_wyndham_bookings") || "[]");
      localStorage.setItem("hotel_wyndham_bookings", JSON.stringify([newBooking, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setIsSuccess(true);
    triggerReservationEmail(randomCode);
  };

  const translatedVenueName = language === "en" ? (activeVenue?.nameEn || activeVenue?.name) : activeVenue?.name;

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 bg-[#001424] text-white flex flex-col items-center justify-start select-none font-sans">
      
      {/* Brand Header */}
      <div className="text-center mb-6 max-w-md w-full">
        <div className="flex justify-center items-center gap-1.5 mb-2">
          <Building className="h-5 w-5 text-amber-400 shrink-0" />
          <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#1E88C8]">
            Wyndham Hotels & Resorts
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white leading-tight">
          {language === "en" ? "Direct Mobile Booking" : "Reserva Directa desde Móvil"}
        </h1>
        <p className="text-xs text-blue-200/70 mt-1.5 leading-relaxed">
          {language === "en" 
            ? "Complete this short form to send your requested layout details straight to our event advisors."
            : "Complete este breve formulario para enviar las configuraciones del salón seleccionado directamente a reservas."
          }
        </p>
      </div>

      <div className="w-full max-w-md">
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-150 p-6 space-y-5">
            
            {/* Salón Selector */}
            <div className="space-y-1.5">
              <label className="block text-2xs font-extrabold text-[#004B75] uppercase tracking-wider flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[#1E88C8]" />
                {language === "en" ? "Select Salon / Space" : "Seleccione el Salón / Espacio"}
              </label>
              <select
                id="mobile-venue-select"
                value={selectedVenueId}
                onChange={(e) => setSelectedVenueId(e.target.value)}
                className="w-full text-xs rounded-xl border border-gray-200 p-3 bg-slate-50 font-sans font-bold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#1E88C8]"
              >
                {SALONES_DATA.map((v) => (
                  <option key={v.id} value={v.id}>
                    {language === "en" ? (v.nameEn || v.name) : v.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Layout setup & capacity */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="block text-2xs font-extrabold text-[#004B75] uppercase tracking-wider flex items-center gap-1">
                  <Settings className="h-3 w-3 text-[#1E88C8]" />
                  {language === "en" ? "Setup Layout" : "Montaje"}
                </label>
                <select
                  id="mobile-setup-select"
                  value={setupType}
                  onChange={(e) => setSetupType(e.target.value)}
                  className="w-full text-[11px] rounded-xl border border-gray-200 p-2.5 bg-slate-50 font-sans font-semibold text-gray-800 focus:outline-none"
                >
                  {activeVenue?.setups.map((s, idx) => (
                    <option key={idx} value={s.type}>
                      {language === "en" ? (s.typeEn || s.type) : s.type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-2xs font-extrabold text-[#004B75] uppercase tracking-wider flex items-center gap-1">
                  <Users className="h-3 w-3 text-[#1E88C8]" />
                  {language === "en" ? "Attendees" : "Asistentes"}
                </label>
                <input
                  id="mobile-attendees-input"
                  type="number"
                  min={1}
                  max={activeVenue?.capacity || 400}
                  value={attendees}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val)) {
                      setAttendees(val > activeVenue.capacity ? activeVenue.capacity : val);
                    }
                  }}
                  className="w-full text-xs rounded-xl border border-gray-200 p-2.5 bg-slate-50 font-sans font-black text-gray-800 text-center focus:outline-none"
                />
              </div>
            </div>

            {/* Contact details frame */}
            <div className="space-y-2.5 bg-slate-50/70 p-3.5 rounded-2xl border border-gray-150">
              <span className="block text-2xs font-extrabold text-[#004B75] tracking-tight uppercase">
                {language === "en" ? "Guest Information" : "Información de Contacto del Huésped"}
              </span>

              {/* Guest Name */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <User className="h-3.5 w-3.5" />
                </span>
                <input
                  id="mobile-name-input"
                  type="text"
                  placeholder={language === "en" ? "Full Name" : "Nombre de Huésped"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full text-xs rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 bg-white text-gray-800 focus:outline-none"
                />
              </div>

              {/* Guest Phone */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <input
                  id="mobile-phone-input"
                  type="tel"
                  placeholder={language === "en" ? "Phone / Room Ext." : "Teléfono o Extensión"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full text-xs rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 bg-white text-gray-800 focus:outline-none"
                />
              </div>

              {/* Guest Email */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <input
                  id="mobile-email-input"
                  type="email"
                  placeholder={language === "en" ? "Contact Email" : "Correo Electrónico de Contacto"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-xs rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 bg-white text-gray-800 focus:outline-none"
                />
              </div>

              {/* Scheduled Date */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                </span>
                <input
                  id="mobile-date-input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full text-xs rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 bg-white font-bold text-gray-800 focus:outline-none"
                />
              </div>
            </div>

            {/* Services Checklist */}
            <div className="space-y-2">
              <label className="block text-2xs font-extrabold text-[#004B75] uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="h-3 w-3 text-[#1E88C8]" />
                {language === "en" ? "Paid Services (Addons)" : "Servicios Adicionales Opcionales"}
              </label>

              <div className="grid grid-cols-1 gap-2 text-[11px]">
                <div
                  onClick={() => handleToggleAddon("catering")}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    addons.catering ? "bg-[#1E88C8]/5 border-[#1E88C8]" : "bg-white border-gray-200 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-bold text-gray-800">
                    {language === "en" ? "Gourmet Catering / Food" : "Estación de café gourmet y bocados"}
                  </span>
                  <span className={`h-4 w-4 rounded-md flex items-center justify-center border text-[9px] ${
                    addons.catering ? "bg-[#1E88C8] text-white border-transparent" : "border-gray-300"
                  }`}>{addons.catering && "✓"}</span>
                </div>

                <div
                  onClick={() => handleToggleAddon("internet")}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    addons.internet ? "bg-[#1E88C8]/5 border-[#1E88C8]" : "bg-white border-gray-200 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-bold text-gray-800">
                    {language === "en" ? "High-Speed Internet" : "Internet Dedicado Banda Ancha"}
                  </span>
                  <span className={`h-4 w-4 rounded-md flex items-center justify-center border text-[9px] ${
                    addons.internet ? "bg-[#1E88C8] text-white border-transparent" : "border-gray-300"
                  }`}>{addons.internet && "✓"}</span>
                </div>

                <div
                  onClick={() => handleToggleAddon("audiovisuals")}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    addons.audiovisuals ? "bg-[#1E88C8]/5 border-[#1E88C8]" : "bg-white border-gray-200 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-bold text-gray-800">
                    {language === "en" ? "Pro Audio & Projection" : "Sonido & Proyección Pro"}
                  </span>
                  <span className={`h-4 w-4 rounded-md flex items-center justify-center border text-[9px] ${
                    addons.audiovisuals ? "bg-[#1E88C8] text-white border-transparent" : "border-gray-300"
                  }`}>{addons.audiovisuals && "✓"}</span>
                </div>

                <div
                  onClick={() => handleToggleAddon("parking")}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    addons.parking ? "bg-[#1E88C8]/5 border-[#1E88C8]" : "bg-white border-gray-200 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-bold text-gray-800">
                    {language === "en" ? "VIP Valet Parking Lots" : "Parqueaderos VIP Reservados"}
                  </span>
                  <span className={`h-4 w-4 rounded-md flex items-center justify-center border text-[9px] ${
                    addons.parking ? "bg-[#1E88C8] text-white border-transparent" : "border-gray-300"
                  }`}>{addons.parking && "✓"}</span>
                </div>
              </div>
            </div>

            {/* Optional notes */}
            <div className="space-y-1.5">
              <label className="block text-2xs font-extrabold text-[#004B75] uppercase tracking-wider flex items-center gap-1">
                <Clipboard className="h-3 w-3 text-[#1E88C8]" />
                {language === "en" ? "Special Requests" : "Requerimientos Especiales"}
              </label>
              <textarea
                id="mobile-remarks"
                rows={2}
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder={language === "en" ? "Dietary locks, specific hours..." : "Dietas específicas, horarios espaciales..."}
                className="w-full text-xs rounded-xl border border-gray-250 p-2.5 bg-slate-50 font-sans text-gray-800 focus:outline-none resize-none"
              />
            </div>

            {/* SEND CTA Button */}
            <button
              id="btn-mobile-submit-booking"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-97 text-white font-sans text-xs font-black uppercase tracking-wider py-4 rounded-xl shadow-lg transition"
            >
              <Send className="h-4 w-4 text-amber-50 shrink-0" />
              <span>{language === "en" ? "Submit Confirmation to Hotel" : "Enviar Solicitud al Hotel"}</span>
            </button>

          </form>
        ) : (
          /* SUCCESS DISPLAY TICKETS FOR MOBILE */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center space-y-6 shadow-2xl">
            <div className="mx-auto h-16 w-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-md">
              <CheckCircle2 className="h-10 w-10 shrink-0" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black tracking-tight text-white leading-none">
                {language === "en" ? "Reservation Draft sent!" : "¡Borrador Enviado!"}
              </h3>
              <p className="text-xs text-blue-200/80 leading-relaxed max-w-sm mx-auto">
                {language === "en"
                  ? `Your reservation request has been compiled and dispatched to: infraestructura02@hotelesdiplomat.com.`
                  : `Su solicitud ha sido compilada con éxito y dirigida directamente al correo de recepción de eventos corporativos.`
                }
              </p>
            </div>

            {/* Compact ticket representation on phone */}
            <div className="bg-white text-gray-900 rounded-2xl p-4.5 text-left text-xs space-y-3 shadow-inner border border-gray-200">
              <div className="flex justify-between items-center pb-2.5 border-b border-dashed border-gray-200">
                <div>
                  <span className="block text-[8px] text-gray-400 font-mono tracking-widest uppercase">WYNDHAM EVENT SERVICE</span>
                  <span className="block font-black text-[#004B75] mt-0.5 uppercase">CONFIRMED TICKET</span>
                </div>
                <div className="text-right">
                  <span className="block text-[8px] text-gray-100 bg-[#004B75] px-1.5 py-0.5 rounded font-mono font-bold">
                    {bookingCode}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] py-1">
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-black tracking-wider">SALÓN</span>
                  <span className="block font-bold text-gray-800 mt-0.5 leading-tight">{translatedVenueName}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-black tracking-wider">FECHA PROGRAMADA</span>
                  <span className="block font-bold text-gray-800 mt-0.5 leading-tight">{date}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-black tracking-wider">MONTAJE</span>
                  <span className="block font-bold text-gray-800 mt-0.5 leading-tight">{setupType}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-black tracking-wider">ASISTENTES</span>
                  <span className="block font-bold text-gray-800 mt-0.5 leading-tight">{attendees} Pax</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex flex-col gap-1 text-[10px] text-gray-500">
                <p>
                  <strong className="text-[#004B75]">{language === "en" ? "Name:" : "Huésped:"}</strong> {name}
                </p>
                <p>
                  <strong className="text-[#004B75]">{language === "en" ? "Contact Email:" : "Correo:"}</strong> {email}
                </p>
              </div>
            </div>

            {/* Send again/Alternative client action in case email client blocked redirect on phone */}
            <div className="space-y-3 pt-2">
              <button
                id="btn-mobile-retrigger-email"
                onClick={() => triggerReservationEmail(bookingCode)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1E88C8] hover:bg-[#156EAF] text-white font-sans text-xs font-black uppercase tracking-widest py-3.5 rounded-xl shadow-md transition"
              >
                <Mail className="h-4 w-4 text-blue-100" />
                <span>{language === "en" ? "Re-send Email" : "Reabrir Correo de Reservas"}</span>
              </button>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl text-[10px] leading-relaxed text-left">
                {language === "en"
                  ? "Note: A customer service executive will respond and coordinate with you using the information input above."
                  : "Nota: El personal de soporte de eventos del hotel confirmará las tarifas y formalizará la cotización utilizando los datos de contacto suministrados."
                }
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
