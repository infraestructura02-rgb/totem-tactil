/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, CloudSun, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time (e.g., 05:00 PM)
  const formattedTime = currentTime.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  // Format Date (e.g., Martes, 26 de Mayo, 2026)
  const formattedDate = currentTime.toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <footer
      id="kiosk-footer"
      className="w-full bg-[#003B5C] border-t border-blue-950 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center text-center md:text-left">
          {/* Metadata info: Time & Weather */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2.5 bg-blue-950/40 border border-blue-900/30 px-3.5 py-2 rounded-xl">
              <Clock className="h-5 w-5 text-[#1E88C8]" />
              <div className="text-left font-mono">
                <span className="block text-sm font-bold tracking-tight text-white leading-none">
                  {formattedTime}
                </span>
                <span className="block text-[10px] text-gray-300 capitalize mt-1 leading-none">
                  {formattedDate}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-blue-950/40 border border-blue-900/30 px-3.5 py-2 rounded-xl">
              <CloudSun className="h-5 w-5 text-amber-400" />
              <div className="text-left">
                <span className="block text-sm font-bold text-white leading-none">
                  14°C
                </span>
                <span className="block text-[10px] text-gray-300 mt-1 leading-none">
                  Bogotá, Colombia • Parcialmente Nublado
                </span>
              </div>
            </div>
          </div>

          {/* Core instruction label (No tech-larp, highly human) */}
          <div className="text-center">
            <p className="font-sans text-xs text-blue-200 tracking-wide">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-ping mr-2 align-middle"></span>
              Pantalla Táctil Activa • Toque para explorar espacios • Retorno automático tras 60s
            </p>
            <p className="font-mono text-[10px] text-blue-300/60 uppercase tracking-widest mt-1">
              Wyndham Bogotá Ciudad Salitre • Av. El Dorado
            </p>
          </div>

          {/* Hotel shortcuts / assistance */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 font-sans text-xs">
            <div className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="h-3.5 w-3.5 text-[#1E88C8]" />
              <span>Av. La Esperanza # 51-40</span>
            </div>
            
            <span className="hidden sm:inline text-blue-800">|</span>

            <div className="flex items-center gap-1.5 text-gray-300">
              <PhoneCall className="h-3.5 w-3.5 text-[#1E88C8]" />
              <span>Ext. 601 6083000 (Recepción)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
