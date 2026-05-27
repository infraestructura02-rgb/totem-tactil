/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Venues from "./pages/Venues";
import VenueDetail from "./pages/VenueDetail";
import OngoingEvents from "./pages/OngoingEvents";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IdleTimer from "./components/IdleTimer";
import AnimatedTransitions from "./components/AnimatedTransitions";

function KioskShell() {
  const location = useLocation();
  const navigate = useNavigate();

  // Reset scroll to top smoothly on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Handle force return to home from Kiosk warnings reset
  useEffect(() => {
    const handleForceHome = () => {
      navigate("/");
    };
    window.addEventListener("force-home", handleForceHome);
    return () => window.removeEventListener("force-home", handleForceHome);
  }, [navigate]);

  return (
    <div id="kiosk-frame" className="min-h-screen flex flex-col bg-slate-50 text-[#1F2937] leading-relaxed select-none antialiased">
      {/* Header bar branding */}
      <Navbar />

      {/* Multi-view Router Panel */}
      <main id="kiosk-body-panel" className="flex-1 flex flex-col">
        <AnimatedTransitions key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salones" element={<Venues />} />
            <Route path="/salones/:id" element={<VenueDetail />} />
            <Route path="/eventos-en-curso" element={<OngoingEvents />} />
          </Routes>
        </AnimatedTransitions>
      </main>

      {/* Global Inactivity Overlay and Core Counter */}
      <IdleTimer />

      {/* Informational digital signage footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <KioskShell />
    </Router>
  );
}
