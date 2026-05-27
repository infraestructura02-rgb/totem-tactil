/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Compass, ShieldCheck, Mail, Phone, CalendarDays, CheckCircle } from "lucide-react";
import { EVENTS_DATA } from "../data/mockData";

export default function ExperienceEvents() {
  return (
    <div id="experiences-showcase-view" className="flex-1 bg-slate-50 py-10 select-none">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        
        {/* Title area */}
        <div className="mb-10 text-left">
          <span className="font-sans text-xs font-bold tracking-widest text-amber-700 uppercase block mb-1">
            Asistencia Integral de Eventos
          </span>
          <h1 className="font-sans text-3xl font-extrabold text-[#003B5C] tracking-tight">
            Planificación & Experiencias Wyndham
          </h1>
          <p className="font-sans text-sm text-gray-500 mt-1 max-w-2xl">
            Coordinadores calificados dedicados exclusivamente a perfeccionar su congreso gremial, boda de ensueño o taller ejecutivo en Bogotá. Aseguramos logística impecable, internet de vanguardia y traslado inmediato.
          </p>
        </div>

        {/* Categories cards list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {EVENTS_DATA.map((event) => (
            <div
              id={`experience-card-${event.id}`}
              key={event.id}
              className="flex flex-col bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-sans text-2xl font-bold text-[#003B5C] tracking-tight">
                    {event.title}
                  </h2>
                  <p className="font-sans text-xs text-gray-650 mt-3 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Highlights checklist services */}
                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <span className="font-sans text-[10px] font-extrabold text-[#004B75] uppercase tracking-wider block mb-3.5">
                      Servicios Especiales Incluidos:
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {event.services.map((srv, i) => (
                        <div key={i} className="flex items-start gap-2.5 font-sans text-xs text-gray-700">
                          <CheckCircle className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  <span>Soporte 24/7 de Coordinación</span>
                  <span>Wyndham Events</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Touch Assist form prompt placeholder since it's a touch kiosk */}
        <section id="assist-card" className="mt-14 bg-[#003B5C] rounded-3xl p-8 md:p-10 text-white border-b-4 border-amber-500 shadow-md">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/40 border border-blue-700/30 px-3.5 py-1 font-sans text-[10px] font-extrabold tracking-widest text-[#1E88C8] uppercase mb-4">
              <ShieldCheck className="h-4 w-4" />
              SOPORTE DE ALTA HOSPEDABILIDAD
            </div>
            
            <h3 className="font-sans text-2xl font-bold">
              ¿Desea cotizar un evento ejecutivo o social?
            </h3>
            
            <p className="mt-3 font-sans text-sm text-blue-100/90 leading-relaxed">
              Solicite asistencia directa. Toque con la conserjería en el mostrador principal o escanee los códigos QR informativos provistos al costado de esta pantalla táctil para llenar una cotización corporativa en segundos desde su teléfono móvil.
            </p>

            {/* Assistance contacts display */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-blue-900/40 pt-6">
              <div className="flex items-center gap-3 bg-blue-950/40 border border-blue-900/20 px-4 py-3 rounded-xl">
                <CalendarDays className="h-5 w-5 text-amber-400" />
                <div className="text-left font-sans text-xs">
                  <span className="block text-gray-400">Atención Personal</span>
                  <span className="block font-bold mt-1 text-white">Extensión 3012</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-blue-950/40 border border-[#004B75] px-4 py-3 rounded-xl">
                <Mail className="h-5 w-5 text-[#1E88C8]" />
                <div className="text-left font-sans text-xs">
                  <span className="block text-gray-400">Correo Comercial</span>
                  <span className="block font-bold mt-1 text-white">eventos@wyndhambogota.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-blue-950/40 border border-blue-900/20 px-4 py-3 rounded-xl">
                <Phone className="h-5 w-5 text-[#1E88C8]" />
                <div className="text-left font-sans text-xs">
                  <span className="block text-gray-400">WhatsApp Eventos</span>
                  <span className="block font-bold mt-1 text-white">+57 (318) 723-5590</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
