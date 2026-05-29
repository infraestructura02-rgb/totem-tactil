/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState } from "react";

interface ReservationContextType {
  isOpen: boolean;
  preselectedVenueId: string | null;
  openReservation: (venueId?: string) => void;
  closeReservation: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedVenueId, setPreselectedVenueId] = useState<string | null>(null);

  const openReservation = (venueId?: string) => {
    setPreselectedVenueId(venueId || null);
    setIsOpen(true);
  };

  const closeReservation = () => {
    setIsOpen(false);
    setPreselectedVenueId(null);
  };

  return (
    <ReservationContext.Provider value={{ isOpen, preselectedVenueId, openReservation, closeReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};
