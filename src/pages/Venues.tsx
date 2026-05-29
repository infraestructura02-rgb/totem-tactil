/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Building, Users, Maximize, Eye, Compass, LayoutGrid, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SALONES_DATA } from "../data/mockData";
import { SalonVenue } from "../types";
import MatterportViewer from "../components/MatterportViewer";
import { useLanguage } from "../context/LanguageContext";

export default function Venues() {
  const [active3dUrl, setActive3dUrl] = useState<string | null>(null);
  const [active3dName, setActive3dName] = useState<string>("");
  const [selectedFloor, setSelectedFloor] = useState<string>("All");
  const { t, language } = useLanguage();

  const floors = ["All", "Sótano 1", "Piso 1", "Piso 2"];

  const filteredVenues = selectedFloor === "All"
    ? SALONES_DATA
    : SALONES_DATA.filter(venue => venue.floor.toLowerCase() === selectedFloor.toLowerCase());

  const trigger3dTour = (url: string, name: string, e: React.MouseEvent) => {
    e.preventDefault(); // Stop navigation to page when tapping the interactive tour button
    if (!url) return;
    setActive3dUrl(url);
    setActive3dName(name);
  };

  return (
    <div id="venues-catalog-view" className="flex-1 flex flex-col bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Page Banner Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs font-bold tracking-widest text-[#004B75] uppercase block mb-1">
              {t("venues_header_tag")}
            </span>
            <h1 className="font-sans text-3xl font-extrabold text-[#003B5C] tracking-tight">
              {t("venues_header_title")}
            </h1>
            <p className="font-sans text-sm text-gray-500 mt-1 max-w-2xl">
              {t("venues_header_subtitle")}
            </p>
          </div>

          {/* Interactive filter toggle for touch screens */}
          <div className="flex bg-white border border-gray-200 p-1 rounded-xl self-start md:self-auto shadow-xs">
            {floors.map((fl) => {
              const displayLabel = fl === "All" 
                ? t("all") 
                : (language === "en" 
                    ? fl.replace("Sótano", "Basement").replace("Piso", "Floor") 
                    : fl);

              return (
                <button
                  id={`filter-floor-${fl.toLowerCase().replace(/\s+/g, "-")}`}
                  key={fl}
                  onClick={() => setSelectedFloor(fl)}
                  className={`font-sans text-xs font-bold px-4 py-2.5 rounded-lg transition-all active:scale-95 ${
                    selectedFloor === fl
                      ? "bg-[#004B75] text-white shadow-xs"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Venues bento catalog list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVenues.map((venue: SalonVenue, idx: number) => {
              const translatedName = language === "en" ? (venue.nameEn || venue.name) : venue.name;
              const translatedFloor = language === "en" ? (venue.floorEn || venue.floor) : venue.floor;
              const translatedDescription = language === "en" ? (venue.descriptionEn || venue.description) : venue.description;
              const translatedAmenities = language === "en" ? (venue.amenitiesEn || venue.amenities) : venue.amenities;

              return (
                <motion.div
                  id={`venue-card-${venue.id}`}
                  key={venue.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-150 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={venue.image}
                      alt={translatedName}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />

                    {/* Floor stamp overlay */}
                    <div className="absolute top-4 left-4 bg-[#004B75]/95 backdrop-blur-md text-white font-sans text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                      {translatedFloor}
                    </div>

                    {/* Immediate Matterport interactive overlay */}
                    {venue.matterportUrl && (
                      <button
                        id={`btn-immediate-matterport-${venue.id}`}
                        onClick={(e) => trigger3dTour(venue.matterportUrl, translatedName, e)}
                        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 px-4 py-3 font-sans text-xs font-bold text-white shadow-lg active:scale-90 transition animate-pulse"
                      >
                        <Compass className="h-4 w-4 animate-spin-slow" />
                        {t("abras_3d")}
                      </button>
                    )}
                  </div>

                  {/* Info Deck */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-sans text-2xl font-bold text-gray-950 group-hover:text-[#004B75] transition">
                        {translatedName}
                      </h2>
                      
                      <p className="mt-2 font-sans text-xs text-gray-500 line-clamp-2 md:leading-relaxed">
                        {translatedDescription}
                      </p>

                      {/* Quick Specs badges */}
                      <div className="mt-5 grid grid-cols-2 gap-3.5 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Users className="h-4 w-4 text-[#1E88C8]" />
                          <div className="text-left">
                            <span className="block font-mono text-xs font-bold leading-none text-gray-900">
                              {venue.capacity} {t("invitados")}
                            </span>
                            <span className="block text-[9px] text-gray-400 font-medium tracking-wide uppercase mt-0.5 leading-none">
                              {t("cap_maxima")}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                          <Maximize className="h-4 w-4 text-[#1E88C8]" />
                          <div className="text-left">
                            <span className="block font-mono text-xs font-bold leading-none text-gray-900">
                              {venue.dimensions}
                            </span>
                            <span className="block text-[9px] text-gray-400 font-medium tracking-wide uppercase mt-0.5 leading-none">
                              {t("area_total")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick amenities bullet tags preview */}
                      <div className="mt-5">
                        <span className="font-sans text-[10px] font-extrabold text-blue-900/60 uppercase tracking-widest block mb-2">
                          {t("equipamiento_destacado")}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {translatedAmenities.slice(0, 3).map((amenity, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 font-sans text-[10px] font-semibold text-gray-650 bg-gray-100 px-2 py-1 rounded"
                            >
                              <CheckCircle className="h-3 w-3 text-emerald-600 shadow-2xs shrink-0" />
                              <span className="truncate max-w-[140px]">{amenity}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Link action Footer */}
                    <div className="mt-7 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
                        {t("wyndham_spaces")}
                      </span>

                      <Link
                        id={`explore-salon-link-${venue.id}`}
                        to={`/salones/${venue.id}`}
                        className="flex items-center gap-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#004B75] px-4.5 py-3 font-sans text-xs font-bold transition active:scale-95 shadow-xs"
                      >
                        <span>{t("view_details_setups")}</span>
                        <LayoutGrid className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
