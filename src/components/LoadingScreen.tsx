/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass } from "lucide-react";
import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <div
      id="loading-screen"
      className="flex flex-1 flex-col items-center justify-center p-8 bg-gray-50 min-h-[400px]"
    >
      <div className="relative flex items-center justify-center">
        {/* Spinner rings */}
        <motion.div
          className="absolute h-16 w-16 rounded-full border-4 border-[#004B75]/10 border-t-[#004B75]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div
          className="absolute h-10 w-10 rounded-full border-4 border-[#1E88C8]/10 border-b-[#1E88C8]"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        
        {/* Core compass icon */}
        <Compass className="h-6 w-6 text-[#004B75] animate-pulse" />
      </div>

      <motion.p
        className="mt-8 font-sans text-sm font-semibold text-[#003B5C] uppercase tracking-widest text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Cargando Experiencia Inmersiva
      </motion.p>
      
      <p className="mt-1 font-mono text-[10px] text-gray-400 uppercase tracking-widest text-center">
        WYNDHAM BOGOTÁ PORTAL
      </p>
    </div>
  );
}
