/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Layers, 
  Compass, 
  Tv, 
  Users, 
  Sparkles, 
  Signal, 
  Coffee, 
  CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SALONES_DATA } from "../data/mockData";
import MatterportViewer from "../components/MatterportViewer";

interface OngoingEventItem {
  id: string;
  title: string;
  organizer: string;
  salonId: string;
  salonName: string;
  timeRange: string;
  status: "active" | "soon" | "ended";
  statusText: string;
  attendees: number;
  wifiKey?: string;
}

export default function OngoingEvents() {
  const [active3dUrl, setActive3dUrl] = useState<string | null>(null);
  const [active3dName, setActive3dName] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const todayEvents: OngoingEventItem[] = [
    {
      id: "ev-1",
      title: "I Congreso Binacional de Energías Renovables",
      organizer: "Ecopetrol & Asociación de Energías Colombia",
      salonId: "gran-ballroom",
      salonName: "Gran Ballroom San Lorenzo",
      timeRange: "08:00 AM - 01:00 PM",
      status: "active",
      statusText: "En Curso",
      attendees: 280,
      wifiKey: "RENOVABLES2026"
    },
    {
      id: "ev-2",
      title: "Junta de Planificación Financiera Regional",
      organizer: "Avianca Cargo S.A.",
      salonId: "salon-guadalupe",
      salonName: "Salón Guadalupe",
      timeRange: "09:30 AM - 12:30 PM",
      status: "active",
      statusText: "En Curso",
      attendees: 25,
      wifiKey: "AVIANCA_VIP"
    },
    {
      id: "ev-3",
      title: "Seminario de Derecho Corporativo Latinoamericano",
      organizer: "Universidad de los Andes - Facultad de Derecho",
      salonId: "salon-monserrate",
      salonName: "Salón Monserrate",
      timeRange: "02:00 PM - 06:00 PM",
      status: "soon",
      statusText: "Próximo (A Regularse)",
      attendees: 90,
      wifiKey: "DERECHO_CORP"
    },
    {
      id: "ev-4",
      title: "Taller Práctico de Agile & Transformación Digital",
      organizer: "Globant Colombia",
      salonId: "salon-usaquen",
      salonName: "Salón Usaquén",
      timeRange: "08:00 AM - 12:00 PM",
      status: "active",
      statusText: "En Curso",
      attendees: 110,
      wifiKey: "GLOBANT_TOUCH"
    },
    {
      id: "ev-5",
      title: "Almuerzo Ejecutivo de Gala & Reconocimientos",
      organizer: "Cámara de Comercio de Bogotá",
      salonId: "gran-ballroom",
      salonName: "Gran Ballroom San Lorenzo",
      timeRange: "01:30 PM - 04:30 PM",
      status: "soon",
      statusText: "Próximo",
      attendees: 180,
      wifiKey: "CAMARA_VIP"
    },
    {
      id: "ev-6",
      title: "Simposio Médico de Cardiología Preventiva",
      organizer: "Clínica del Country",
      salonId: "salon-usaquen",
      salonName: "Salón Usaquén",
      timeRange: "02:00 PM - 07:00 PM",
      status: "soon",
      statusText: "Próximo",
      attendees: 130
    }
  ];

  // Filter list
  const filteredEvents = selectedFilter === "all"
    ? todayEvents
    : todayEvents.filter(ev => ev.status === selectedFilter);

  const triggerMatterport = (salonId: string) => {
    const matchedSalon = SALONES_DATA.find(s => s.id === salonId);
    if (matchedSalon) {
      setActive3dUrl(matchedSalon.matterportUrl);
      setActive3dName(matchedSalon.name);
    }
  };

  return (
    <div id="ongoing-events-view" className="flex-1 bg-slate-50 py-10 select-none">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
        
        {/* Signage Banner */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-gray-200 pb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-550/15 border border-emerald-555/20 text-emerald-700 px-3 py-1 font-sans text-xs font-bold tracking-wider uppercase mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              CONSOLA DE EVENTOS EN TIEMPO REAL
            </div>
            <h1 className="font-sans text-3xl font-extrabold text-[#003B5C] tracking-tight">
              Eventos en Curso Hoy
            </h1>
            <p className="font-sans text-sm text-gray-500 mt-1 max-w-2xl">
              Consulte la programación oficial y los horarios de los eventos corporativos activos en nuestro complejo el día de hoy.
            </p>
          </div>

          {/* Interactive touch status filter tabs */}
          <div className="flex bg-white border border-gray-200 p-1 rounded-xl self-start md:self-auto shadow-xs">
            <button
              id="filter-ev-all"
              onClick={() => setSelectedFilter("all")}
              className={`font-sans text-xs font-bold px-4 py-2.5 rounded-lg transition-all active:scale-95 ${
                selectedFilter === "all"
                  ? "bg-[#004B75] text-white shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Todos ({todayEvents.length})
            </button>
            <button
              id="filter-ev-active"
              onClick={() => setSelectedFilter("active")}
              className={`font-sans text-xs font-bold px-4 py-2.5 rounded-lg transition-all active:scale-95 ${
                selectedFilter === "active"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              En Curso ({todayEvents.filter(e => e.status === "active").length})
            </button>
            <button
              id="filter-ev-soon"
              onClick={() => setSelectedFilter("soon")}
              className={`font-sans text-xs font-bold px-4 py-2.5 rounded-lg transition-all active:scale-95 ${
                selectedFilter === "soon"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-amber-600 hover:bg-amber-50"
              }`}
            >
              Próximos ({todayEvents.filter(e => e.status === "soon").length})
            </button>
          </div>
        </div>

        {/* Dynamic Schedule List */}
        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-150 shadow-xs block">
              <CalendarDays className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="font-sans text-gray-500">No hay eventos registrados bajo esta categoría para hoy.</p>
            </div>
          ) : (
            filteredEvents.map((ev) => (
              <div
                id={`event-item-${ev.id}`}
                key={ev.id}
                className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-sm transition-all duration-300 text-left"
              >
                <div className="text-left flex-1 space-y-2">
                  {/* Status marker */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-block h-2 w-2 rounded-full ${
                      ev.status === "active" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                    }`} />
                    
                    <span className={`font-sans text-[10px] font-black uppercase tracking-widest ${
                      ev.status === "active" ? "text-emerald-700" : "text-amber-700"
                    }`}>
                      {ev.statusText}
                    </span>

                    <span className="text-gray-300">•</span>
                    
                    <span className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {ev.salonName}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-sans text-lg font-extrabold text-[#003B5C] tracking-tight leading-snug">
                    {ev.title}
                  </h2>

                  {/* Organizer & details */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sans text-xs text-gray-550 pt-1">
                    <div className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-gray-400" />
                      <span>Organiza: <strong>{ev.organizer}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Display time as a badge */}
                <div className="shrink-0 bg-gray-50 border border-gray-150 px-4 py-2.5 rounded-xl flex items-center gap-2 font-sans text-xs font-bold text-gray-700 self-stretch sm:self-auto justify-center">
                  <Clock className="h-4 w-4 text-[#1E88C8]" />
                  <span>{ev.timeRange}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
