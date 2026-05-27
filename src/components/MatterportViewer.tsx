/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Hand, RefreshCw, X, HelpCircle, Compass, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MatterportViewerProps {
  url: string;
  venueName: string;
  onClose: () => void;
}

export default function MatterportViewer({ url, venueName, onClose }: MatterportViewerProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);

  // Auto hide tutorial instructions after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTutorial(false);
    }, 8500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="matterport-immersive-overlay"
      className="fixed inset-0 z-50 flex flex-col bg-[#001D2E]"
    >
      {/* Top action header */}
      <div className="flex h-16 items-center justify-between bg-[#003B5C] px-6 text-white border-b border-blue-950">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20 text-[#1E88C8]">
            <Compass className="h-5 w-5 animate-spin-slow" />
          </div>
          <div>
            <span className="block font-sans text-xs font-bold leading-none text-[#1E88C8] uppercase tracking-wider">
              Recorrido Interactivo 3D
            </span>
            <h1 className="font-sans text-sm font-semibold text-white mt-1 antialiased">
              {venueName}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="matterport-help-trigger"
            onClick={() => setShowTutorial((p) => !p)}
            className="flex items-center gap-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 px-3.5 py-2 font-sans text-xs font-semibold text-blue-200 transition active:scale-95 hover:bg-blue-900/40"
          >
            <HelpCircle className="h-4 w-4" />
            Guía de Uso
          </button>

          <button
            id="matterport-close-btn"
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 font-sans text-xs font-bold text-white transition active:scale-95 hover:bg-red-700 shadow-md shadow-red-950/20"
          >
            <X className="h-4 w-4" />
            Salir del Recorrido (Volver)
          </button>
        </div>
      </div>

      {/* Main viewport */}
      <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
        {/* Actual Matterport iframe */}
        <iframe
          id="matterport-iframe"
          title={`Recorrido Virtual 3D de ${venueName}`}
          src={url}
          className="absolute inset-0 h-full w-full border-none"
          allowFullScreen
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          onLoad={() => setIframeLoaded(true)}
        />

        {/* Loading placeholder */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#001D2E] z-10">
            <div className="relative flex items-center justify-center mb-6">
              <motion.div
                className="absolute h-20 w-20 rounded-full border-4 border-blue-600/10 border-t-blue-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <Compass className="h-8 w-8 text-[#1E88C8] animate-pulse" />
            </div>
            <p className="font-sans text-sm font-semibold text-blue-100 tracking-wider uppercase">
              Inicializando Conexión 3D Matterport...
            </p>
            <p className="font-mono text-[10px] text-blue-400 mt-1 uppercase tracking-widest">
              Wyndham Bogotá Espacios Inmersivos
            </p>
          </div>
        )}

        {/* Floating gesture tutorial banner */}
        <AnimatePresence>
          {showTutorial && (
            <motion.div
              id="gesture-tutorial-badge"
              className="absolute bottom-6 left-6 right-6 md:left-auto md:w-96 rounded-2xl bg-[#003B5C]/95 backdrop-blur-md border border-blue-900/60 p-5 text-white shadow-2xl z-20"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E88C8]/20 text-[#1E88C8]">
                  <Hand className="h-6 w-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#1E88C8]">
                    Control Táctil del Espacio 3D
                  </h4>
                  
                  <ul className="mt-2 space-y-1.5 font-sans text-xs text-gray-200">
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1E88C8]" />
                      <strong>Girar:</strong> Arrastre un dedo para rotar la cámara.
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1E88C8]" />
                      <strong>Moverse:</strong> Toca doble vez en el piso para avanzar.
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1E88C8]" />
                      <strong>Zoom:</strong> Pincha con dos dedos para acercar/alejar.
                    </li>
                  </ul>

                  <button
                    id="tutorial-dismiss-btn"
                    onClick={() => setShowTutorial(false)}
                    className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#1E88C8] py-2 font-sans text-xs font-bold text-white transition active:scale-95 hover:bg-[#004B75]"
                  >
                    <CheckCircle className="h-3.5 w-3.5" />
                    Entendido, Comenzar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient watermark signature */}
        <div className="absolute top-4 left-4 pointer-events-none bg-black/40 px-2.5 py-1 rounded-md text-white/50 text-[10px] font-mono tracking-widest uppercase">
          Matterport Pro3 • Escáner Láser Infrarrojo
        </div>
      </div>
    </div>
  );
}
