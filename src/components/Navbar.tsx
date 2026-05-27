/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";
import { Building, Home, Compass, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  const navigationItems = [
    {
      path: "/salones",
      label: "Salones & Eventos",
      shortLabel: "Salones",
      icon: Building,
      color: "border-[#004B75] text-[#004B75]"
    },
    {
      path: "/eventos-en-curso",
      label: "Eventos en curso",
      shortLabel: "En Curso",
      icon: Clock,
      color: "border-[#1E88C8] text-[#1E88C8]"
    }
  ];

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
              <span className="hidden leading-none sm:inline">Inicio</span>
            </Link>

            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.path);

              return (
                <Link
                  id={`nav-${item.path.slice(1)}`}
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 rounded-xl px-4 py-3 font-sans text-sm transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-[#004B75] text-white font-semibold shadow-md shadow-blue-900/15"
                      : "text-gray-600 hover:bg-gray-50 font-medium"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span className="hidden md:inline leading-none">{item.label}</span>
                  <span className="inline md:hidden leading-none">{item.shortLabel}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-4 right-4 h-1 rounded-full bg-[#1E88C8]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
