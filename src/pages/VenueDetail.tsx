/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SALONES_DATA } from "../data/mockData";
import { 
  Building, 
  Users, 
  Maximize, 
  MapPin, 
  Compass, 
  CheckCircle, 
  ChevronLeft, 
  Briefcase, 
  Wine, 
  GraduationCap, 
  Utensils, 
  Tv, 
  Volume2, 
  Layers 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import VenueGallery from "../components/VenueGallery";
import MatterportViewer from "../components/MatterportViewer";
import { useLanguage } from "../context/LanguageContext";

export default function VenueDetail() {
  const { id } = useParams<{ id: string }>();
  const [active3dUrl, setActive3dUrl] = useState<string | null>(null);
  const [active3dName, setActive3dName] = useState<string>("");
  const { t, language } = useLanguage();

  const venue = SALONES_DATA.find((item) => item.id === id);

  if (!venue) {
    return (
      <div id="venue-not-found" className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 text-center">
        <h2 className="font-sans text-2xl font-bold text-gray-900 mb-2">{t("room_not_found")}</h2>
        <p className="font-sans text-gray-600 mb-6">{t("room_not_found_desc")}</p>
        <Link
          id="btn-back-to-catalog"
          to="/salones"
          className="rounded-xl bg-[#004B75] px-6 py-2.5 font-sans text-sm font-semibold text-white hover:bg-[#003B5C]"
        >
          {t("regresar_catalogo")}
        </Link>
      </div>
    );
  }

  // Map setup icon string to real Lucide components for high visual clarity
  const getSetupIcon = (iconName: string) => {
    switch (iconName) {
      case "Presentation":
        return <Tv className="h-6 w-6 text-[#1E88C8]" />;
      case "Utensils":
        return <Utensils className="h-6 w-6 text-[#1E88C8]" />;
      case "Wine":
        return <Wine className="h-6 w-6 text-[#1E88C8]" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-[#1E88C8]" />;
      case "Users":
        return <Users className="h-6 w-6 text-[#1E88C8]" />;
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-[#1E88C8]" />;
      default:
        return <Users className="h-6 w-6 text-[#1E88C8]" />;
    }
  };

  const translatedName = language === "en" ? (venue.nameEn || venue.name) : venue.name;
  const translatedFloor = language === "en" ? (venue.floorEn || venue.floor) : venue.floor;
  const translatedDescription = language === "en" ? (venue.descriptionEn || venue.description) : venue.description;
  const translatedAmenities = language === "en" ? (venue.amenitiesEn || venue.amenities) : venue.amenities;
  const translatedLocationDesc = language === "en" ? (venue.locationDescEn || venue.locationDesc) : venue.locationDesc;

  return (
    <div id={`venue-detail-view-${venue.id}`} className="flex-1 flex flex-col bg-slate-50 py-8 select-none">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        
        {/* Navigation Breadcrumb back button */}
        <div className="mb-6">
          <Link
            id="back-breadcrumb-link"
            to="/salones"
            className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-100 px-4 py-2 font-sans text-xs font-bold text-[#004B75] shadow-xs active:scale-95 transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
            {t("regresar_salones")}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* L: GALLERY & GENERAL DESC (7 Cols) */}
          <section className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-xs">
              <VenueGallery images={venue.gallery} title={translatedName} />
              
              <div className="mt-6">
                <h2 className="font-sans text-2xl font-extrabold text-[#003B5C] tracking-tight">
                  {translatedName}
                </h2>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 uppercase">
                    <Building className="h-3.5 w-3.5" />
                    {translatedFloor}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#1E88C8]/10 px-2.5 py-1 text-xs font-bold text-[#004B75] uppercase">
                    <Layers className="h-3.5 w-3.5" />
                    {venue.dimensions}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm text-gray-650 leading-relaxed text-justify">
                  {translatedDescription}
                </p>
              </div>
            </div>

            {/* Matterport promo interactive trigger block */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#004B75] to-[#003B5C] p-8 text-white border-b-4 border-[#1E88C8] shadow-md">
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none">
                <svg className="h-full w-full object-cover" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 0 100 L 100 0 L 100 100 Z" />
                </svg>
              </div>

              <div className="relative z-10 max-w-md">
                <span className="inline-block bg-[#1E88C8] text-[#001D2E] font-sans text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                  {t("immersiva_3d_tag")}
                </span>
                
                <h3 className="font-sans text-xl font-bold">
                  {t("desea_explorar")}
                </h3>
                
                <p className="mt-2 font-sans text-xs text-blue-100/90 leading-relaxed">
                  {t("desea_explorar_desc")}
                </p>

                <button
                  id="btn-active-matterport-details"
                  onClick={() => {
                    setActive3dUrl(venue.matterportUrl);
                    setActive3dName(translatedName);
                  }}
                  className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 px-6 py-3.5 font-sans text-xs font-black text-white shadow-lg active:scale-95 transition animate-pulse"
                >
                  <Compass className="h-4.5 w-4.5 animate-spin-slow" />
                  {t("iniciar_virtual_button")}
                </button>
              </div>
            </div>
          </section>

          {/* R: MONTAGE SETUPS & SPECIFICATIONS (5 Cols) */}
          <aside className="lg:col-span-5 space-y-6">
            
            {/* Montajes Section */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-xs">
              <h3 className="font-sans text-sm font-extrabold text-[#003B5C] uppercase tracking-wider border-b border-gray-100 pb-3 mb-4">
                {t("capacidad_montaje_title")}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {venue.setups.map((setup, index) => {
                  const translatedSetupType = language === "en" ? (setup.typeEn || setup.type) : setup.type;

                  return (
                    <div
                      id={`setup-mod-${setup.type.toLowerCase().replace(/\s+/g, "-")}`}
                      key={index}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-xs border border-gray-200/50">
                          {getSetupIcon(setup.iconName)}
                        </div>
                        <div className="text-left font-sans text-xs">
                          <span className="block font-bold text-gray-900">{translatedSetupType}</span>
                          <span className="block text-[10px] text-gray-400 mt-1 uppercase font-medium">{t("recomendado")}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-base font-extrabold text-[#004B75]">
                          {setup.capacity}
                        </span>
                        <span className="block font-sans text-[9px] text-gray-400 uppercase tracking-wide mt-0.5 leading-none">
                          {t("max_people")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Equipamiento y Amenities */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-xs text-left">
              <h3 className="font-sans text-sm font-extrabold text-[#003B5C] uppercase tracking-wider border-b border-gray-100 pb-3 mb-4">
                {t("amenidades_infra")}
              </h3>

              <ul className="space-y-3 font-sans text-xs text-gray-650">
                {translatedAmenities.map((amenity, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ubicación y Accesibilidad de salón */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-150 shadow-xs text-left">
              <h3 className="font-sans text-xs font-extrabold text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#1E88C8]" />
                {t("ubicacion_espacio")}
              </h3>
              <p className="font-sans text-xs text-gray-600 leading-relaxed">
                {translatedLocationDesc}
              </p>
              <div className="mt-3 pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                {t("coffee_break_available")}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Embedded Virtual Tour Iframe Viewer */}
      <AnimatePresence>
        {active3dUrl && (
          <MatterportViewer
            url={active3dUrl}
            venueName={active3dName}
            onClose={() => setActive3dUrl(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
