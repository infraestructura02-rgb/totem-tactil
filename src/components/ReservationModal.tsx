/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SALONES_DATA } from "../data/mockData";
import { 
  X, 
  Sparkles, 
  MapPin, 
  Smartphone, 
  QrCode, 
  Check, 
  Copy,
  ExternalLink,
  ChevronRight,
  Info
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useReservation } from "../context/ReservationContext";

export default function ReservationModal() {
  const { language } = useLanguage();
  const { isOpen, preselectedVenueId, closeReservation } = useReservation();
  const venues = SALONES_DATA;

  // Active kiosk configuration states
  const [selectedVenueId, setSelectedVenueId] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync selected venue when kiosk event details requests open trigger
  useEffect(() => {
    if (isOpen) {
      if (preselectedVenueId) {
        setSelectedVenueId(preselectedVenueId);
      } else if (venues.length > 0) {
        setSelectedVenueId(venues[0].id);
      }
      setCopied(false);
    }
  }, [isOpen, preselectedVenueId, venues]);

  if (!isOpen) return null;

  // Find currently chosen venue information for display helper lists
  const activeVenue = venues.find((v) => v.id === selectedVenueId) || venues[0];

  // Dynamically build the mobile redirect URL for the guest phone
  const baseOrigin = window.location.origin + window.location.pathname;
  const targetUrl = `${baseOrigin}#/reservar?venueId=${selectedVenueId}`;
  const qrImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=001C2E&bgcolor=FFFFFF&qzone=2&data=${encodeURIComponent(targetUrl)}`;

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const translatedVenueName = language === "en" ? (activeVenue?.nameEn || activeVenue?.name) : activeVenue?.name;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-b from-[#001D2E] via-slate-900 to-[#000F17] text-white w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl border border-blue-900/30 my-auto text-left flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          id="btn-close-scanner-modal"
          onClick={closeReservation}
          className="absolute top-5 right-5 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-95 transition-all outline-none border border-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* LEFT COMPARTMENT: Instructions / Context & Venue Select */}
        <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-blue-900/20">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-amber-400 shrink-0" />
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-blue-400">
                Wyndham Experiencia Digital
              </span>
            </div>

            <h2 className="font-sans text-xl sm:text-2xl font-black text-white leading-tight">
              {language === "en" ? "Interactive Phone Reservation" : "Reserva Interactiva desde Celular"}
            </h2>

            <p className="font-sans text-xs sm:text-[13px] text-blue-200/80 leading-relaxed">
              {language === "en" 
                ? "For safety, convenience and secure form entry, please configure your room bookings on your custom device rather than a public touch kiosk screen."
                : "Para proteger su privacidad y simplificar el proceso, el Kiosco le permite escanear e iniciar la orden de cotización de forma segura desde su propio teléfono móvil."
              }
            </p>

            {/* Selector Dropdown to dynamic target updates */}
            <div className="space-y-2 pt-4">
              <label className="block text-2xs font-extrabold text-[#1E88C8] uppercase tracking-wider flex items-center gap-1.5 leading-none">
                <MapPin className="h-3.5 w-3.5" />
                {language === "en" ? "Salon of Choice" : "Salón a Solicitar"}
              </label>
              
              <select
                id="modal-qr-venue-select"
                value={selectedVenueId}
                onChange={(e) => setSelectedVenueId(e.target.value)}
                className="w-full text-xs sm:text-xs rounded-xl border border-blue-900/30 p-3 bg-slate-950/70 font-sans font-black text-white/90 focus:outline-none focus:ring-1 focus:ring-amber-500 transition cursor-pointer"
              >
                {venues.map((v) => (
                  <option key={v.id} value={v.id} className="bg-slate-900 text-white font-semibold">
                    {language === "en" ? (v.nameEn || v.name) : v.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Steps Visual Train */}
          <div className="pt-6 md:pt-8 border-t border-blue-900/20 mt-6 md:mt-8 space-y-3">
            <div className="flex gap-3 items-start text-xs text-blue-100/90 leading-relaxed">
              <div className="h-5 w-5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                1
              </div>
              <p>
                <strong>{language === "en" ? "Scan QR Code" : "Escanee el código QR"}</strong>
                <span className="block text-blue-300 text-3xs mt-0.5">
                  {language === "en" 
                    ? "Point your mobile camera at the right panel." 
                    : "Apunte su cámara móvil hacia la pantalla derecha."
                  }
                </span>
              </p>
            </div>

            <div className="flex gap-3 items-start text-xs text-blue-100/90 leading-relaxed">
              <div className="h-5 w-5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                2
              </div>
              <p>
                <strong>{language === "en" ? "Complete Form" : "Complete la Solicitud"}</strong>
                <span className="block text-blue-300 text-3xs mt-0.5">
                  {language === "en"
                    ? "Enter your contact parameters and room specs safely."
                    : "Ingrese sus datos de contacto y especificaciones de montaje."
                  }
                </span>
              </p>
            </div>

            <div className="flex gap-3 items-start text-xs text-blue-100/90 leading-relaxed">
              <div className="h-5 w-5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                3
              </div>
              <p>
                <strong>{language === "en" ? "Deliver & Match" : "Envío Directo"}</strong>
                <span className="block text-blue-300 text-3xs mt-0.5">
                  {language === "en"
                    ? "Dispatches directly to: infraestructura02@hotelesdiplomat.com."
                    : "Su teléfono enviará la copia oficial al correo: infraestructura02@hotelesdiplomat.com."
                  }
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COMPARTMENT: The Scan QR Frame & Technical Mirror */}
        <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center bg-slate-950/30">
          
          <div className="relative p-3 bg-white rounded-3xl shadow-2xl border-4 border-amber-500/20 select-none shrink-0 mb-4">
            
            {/* Visual corner indicators imitating clean scanners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-500 rounded-tl-2xl -translate-x-1.5 -translate-y-1.5" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-500 rounded-tr-2xl translate-x-1.5 -translate-y-1.5" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-500 rounded-bl-2xl -translate-x-1.5 translate-y-1.5" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-500 rounded-br-2xl translate-x-1.5 translate-y-1.5" />

            {/* Scanning Line Animation overlay */}
            <div className="absolute inset-x-2 h-1 overflow-hidden pointer-events-none z-10">
              <motion.div 
                animate={{ y: [0, 240, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-[3px] bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.8)]"
              />
            </div>

            <img
              src={qrImageSrc}
              alt="Scan QR code to request room reservation"
              className="h-[200px] w-[200px] sm:h-[220px] sm:w-[220px] rounded-2xl block object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4 max-w-xs">
            <div className="flex items-center justify-center gap-1.5 text-amber-400">
              <Smartphone className="h-4.5 w-4.5 shrink-0 animate-bounce" />
              <span className="font-sans font-black text-2xs uppercase tracking-widest">
                {language === "en" ? "SCAN CORNER CAMERA" : "ESCANEAR CON LA CÁMARA"}
              </span>
            </div>

            {/* Target Address Info box */}
            <div className="bg-slate-950 p-3 rounded-2xl border border-blue-900/35 text-[10px] text-blue-200/90 leading-relaxed font-sans text-left space-y-1.5">
              <div className="flex gap-1.5 items-center">
                <Info className="h-3.5 w-3.5 text-[#1E88C8] shrink-0" />
                <span className="font-extrabold text-[#1E88C8] uppercase tracking-wider">
                  {language === "en" ? "Corporate Delivery Address" : "Correo Destinatario Oficial"}
                </span>
              </div>
              <p className="font-mono text-[11px] text-amber-400 font-extrabold truncate text-center">
                infraestructura02@hotelesdiplomat.com
              </p>
            </div>

            {/* Alternativ/Companion details: manual clipboard block in case of camera limitations */}
            <div className="flex flex-col gap-1.5 pt-1">
              <button
                id="btn-copy-booking-url"
                onClick={handleCopyLink}
                className={`py-2 px-3 rounded-xl border text-[11px] font-sans font-bold flex items-center justify-center gap-1.5 transition duration-150 ${
                  copied 
                    ? "bg-emerald-600 border-transparent text-white" 
                    : "bg-white/5 hover:bg-white/10 border-white/15 text-blue-200"
                }`}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>
                  {copied 
                    ? (language === "en" ? "Enlace Copiado!" : "¡Enlace Copiado!") 
                    : (language === "en" ? "Copy Manual Link" : "Copiar Enlace Manual")
                  }
                </span>
              </button>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
