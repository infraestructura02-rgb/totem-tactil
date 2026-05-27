/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useIdleTimer } from "../hooks/useIdleTimer";
import { Timer, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function IdleTimer() {
  const { isWarningActive, secondsRemaining, keepExploring } = useIdleTimer(60000, 15000);

  return (
    <AnimatePresence>
      {isWarningActive && (
        <motion.div
          id="idle-timer-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            id="idle-timer-box"
            className="w-full max-w-md mx-6 overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl border border-gray-100"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-6">
              <Timer className="h-8 w-8 animate-pulse" />
            </div>

            <h3 className="font-sans text-2xl font-bold text-gray-900 mb-3">
              ¿Sigues ahí?
            </h3>
            
            <p className="font-sans text-gray-600 mb-6">
              Esta pantalla regresará al menú principal automáticamente en{" "}
              <span className="font-extrabold text-blue-600 text-xl">{secondsRemaining}</span>{" "}
              segundos debido a inactividad.
            </p>

            <div className="flex flex-col gap-3">
              <button
                id="btn-keep-exploring"
                onClick={keepExploring}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#004B75] py-4 text-center font-sans font-semibold text-white transition-all duration-300 hover:bg-[#003B5C] active:scale-98 shadow-md shadow-blue-900/10"
              >
                <RefreshCw className="h-5 w-5" />
                Continuar Explorando
              </button>
              
              <button
                id="btn-go-home-now"
                onClick={() => {
                  window.location.hash = ""; // Reset route if using hash or let router navigate. Actually, the hook handles navigating. We can just force location or let them tap navigate.
                  window.dispatchEvent(new CustomEvent("force-home"));
                }}
                className="w-full rounded-xl border border-gray-200 py-3 text-center font-sans font-medium text-gray-500 transition-all duration-200 hover:bg-gray-50 active:scale-98"
              >
                Regresar al Inicio Ahora
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
