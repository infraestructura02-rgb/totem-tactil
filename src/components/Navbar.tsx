/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";
import { Building, Home, Compass, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isHome = location.pathname === "/";

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo Logo */}
          <Link
            id="brand-logo-link"
            to="/"
            className="flex items-center gap-3 transition-opacity active:opacity-80"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md shadow-blue-900/5">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D0BAQG7A5ZPtzsmbg/company-logo_200_200/company-logo_200_200/0/1631351593587?e=2147483647&v=beta&t=bxFXEr0leLtOUuvN13c7q5gjNomTKuGOZ7vTcPhNHz4"
                alt="Wyndham Bogotá"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-sans text-xl font-extrabold tracking-tight text-[#003B5C]">
                  WYNDHAM
                </span>
                <span className="font-sans text-xs font-semibold tracking-widest text-[#1E88C8] self-end mb-0.5">
                  BOGOTÁ
                </span>
              </div>
              <span className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase font-medium mt-0.5">
                Premium Hospitality Touch Portal
              </span>
            </div>
          </Link>

          {/* Navigation Links (designed as large interactive pills) */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              id="nav-home"
              to="/"
              className={`flex items-center gap-2 rounded-xl px-4 py-3 font-sans text-sm font-medium transition-all duration-200 active:scale-95 ${
                isHome
                  ? "bg-blue-50 text-[#004B75] font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Home className="h-4.5 w-4.5" />
              <span className="hidden leading-none sm:inline">{t("home")}</span>
            </Link>

            <Link
              id="nav-salones"
              to="/salones"
              className={`relative flex items-center gap-2 rounded-xl px-4 py-3 font-sans text-sm transition-all duration-200 active:scale-95 ${
                location.pathname.startsWith("/salones")
                  ? "bg-[#004B75] text-white font-semibold shadow-md shadow-blue-900/15"
                  : "text-gray-600 hover:bg-gray-50 font-medium"
              }`}
            >
              <Building className="h-4.5 w-4.5" />
              <span className="hidden md:inline leading-none">{t("venues")}</span>
              <span className="inline md:hidden leading-none">{t("venues").split(" ")[0]}</span>
              
              {location.pathname.startsWith("/salones") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-4 right-4 h-1 rounded-full bg-[#1E88C8]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Language Switcher Pill next to the button "Salones & Eventos" */}
            <div className="flex items-center bg-gray-50 border border-gray-150 p-1 md:p-1.5 rounded-xl ml-1 shadow-xs hover:border-gray-200 transition">
              <Globe className="h-4 w-4 text-[#004B75] mx-1 shrink-0" />
              <div className="flex bg-white p-0.5 rounded-lg border border-gray-100">
                <button
                  id="lang-btn-es"
                  onClick={() => setLanguage("es")}
                  className={`px-2 py-1 text-[11px] font-sans font-bold rounded-md transition-all active:scale-90 ${
                    language === "es"
                      ? "bg-[#004B75] text-white shadow-xs"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  ES
                </button>
                <button
                  id="lang-btn-en"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 text-[11px] font-sans font-bold rounded-md transition-all active:scale-90 ${
                    language === "en"
                      ? "bg-[#004B75] text-white shadow-xs"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
